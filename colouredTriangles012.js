// Source: https://www.codewars.com/kata/coloured-triangles/train/javascript
// ==================
// Instructions

// If you finish this kata, you can try Insane Coloured Triangles by Bubbler, which is a much harder version of this one.

// A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.

// The different possibilities are:

// Colour here:        G G        B G        R G        B R
// Becomes colour:      G          R          B          G
// With a bigger example:

// R R G B R G B B
//  R B R G B R B
//   G G B R G G
//    G R G B G
//     B B R R
//      B G R
//       R B
//        G
// You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would the given RRGBRGBB you should return G.

// The input string will only contain the uppercase letters R, G, B and there will be at least one letter so you do not have to test for invalid input.
// If you are only given one colour as the input, return that colour.
// Adapted from the 2017 British Informatics Olympiad




let row = "RGBG"; //Our Input
let debug = 0; //If debug is enabled, we will get various useful info for each step of the execution of the program.

triangle(row);

function triangle(row) {
    let colorsToProcess = ""; // The pair of colors we are about to process.
    let rowLength = row.length; // What is the length of the row. We initiate it for the first row (our input)
    let calculatedColors = ""; //Result is the output of our calculateLastColor function
    let triangleRow = []; // In this array, we are saving all the processed data, aka all the rows we create

    if (debug == 1) {
        console.log('  ');
        console.log('Start of the Function Triangle');
        console.log('Row Input:', row);
        console.log('Row Length', rowLength);
        console.log('  ');
    }

    //If Row is just one color.
    if (rowLength === 1) {
        triangleRow[0] = row.slice(0);  // Simply return the first (and only) letter of the input row
        return triangleRow[0];
    }

    //if Row is anything else (we can't have 0 colors as input)
    else {

        let newRowLength = rowLength - 1; //newRowLength is the length of the next row
        triangleRow[0] = row; // Initiating the Array by passing the row to the first cell of the array
        if (debug == 1) {
            console.log('  ');
            console.log('Else');
            console.log('lettersToCheck', colorsToProcess);
            console.log('newRowLength', newRowLength);
            console.log('Triangle 0 is ', triangleRow[0]);
            console.log('  ');
        }

        for (let i = 0; i < rowLength - 1; i++) { // How many more rows we will have to calculate before we end up with just one color
            colorsToProcess = triangleRow[i]; // We pass to colorsToProcess the data we stored on the triangleRow array so we can process them
            calculatedColors = ''; // We reset the content of result so we can refill
            if (debug == 1) {
                console.log('  ');
                console.log('   OUTER FOR | Itteration #', i + 1);
                console.log('   lettersToCheck', colorsToProcess);
                console.log('   newRowLength', newRowLength);
                console.log('   Triangle ', i, 'is ', triangleRow[i]);
                console.log('  ');
            }

            for (let j = 0; j < newRowLength; j++) { //This for is responsible for checking pairs of colors, first will process the first and second color, then the second and third etc
                let lettersToProcessForFunction = colorsToProcess.slice(j, j + 2); // This variable is the function input | We slice the colors we are about to use for each iteration.
                if (debug == 1) {
                    console.log('  ');
                    console.log('       ==INNER FOR | Before Itteration #', j + 1, '==');
                    console.log('       lettersToCheck', colorsToProcess);
                    console.log('       TriangleRow', i, 'is', triangleRow[i]);
                    console.log('       newRowLength', newRowLength);
                    console.log('       Result', calculatedColors);
                    console.log('       --');
                }
                calculatedColors = calculatedColors + calculateLastColor(lettersToProcessForFunction); // Add to result variable the new color we've calculated through the function
                triangleRow[i + 1] = calculatedColors; // Pass to the next triangleRow cell the result of the function
                if (debug == 1) {
                    console.log('       Inner For | After Itteration #', j + 1);
                    console.log('       lettersToCheck', colorsToProcess);
                    console.log('       Result', calculatedColors);
                    console.log('       triangleRow ', i + 1, 'is', triangleRow[i + 1]);
                    console.log('  ');
                }
            }//Inner For

            newRowLength -= 1; //For the next iteration of the for that processes the pairs of colors. Since each row has one less color, we need to decrement the newRowLength

            if (debug == 1) {
                console.log('  ');
                console.log('End of OUTER FOR');
                console.log('lettersToCheck', colorsToProcess);
                console.log('newRowLength', newRowLength);
                console.log('Result', calculatedColors);
                console.log('  ');
            }
        } //OUTER FOR

        if (debug == 1) {
            console.log('  ');
            console.log('End of Inner For');
            console.log('lettersToCheck', colorsToProcess);
            console.log('newRowLength', newRowLength);
            console.log('Result', calculatedColors);
            console.log('  ');
        }


        let finalArrayPossition = triangleRow.length; //Find the last cell of the array in order to return it as the final result


        if (debug == 1) {
            console.log('  ');
            console.log('Final Result');
            console.log('lettersToCheck', colorsToProcess);
            console.log('Final Triangle Row Length', finalArrayPossition);
            console.log('TriangleRow', triangleRow)
            console.log('  ');
        }

        return triangleRow[finalArrayPossition - 1];

    } //ELSE
} // FUNCTION TRIANGLE

function calculateLastColor(lettersToCheckInFunction) {

    let digits = lettersToCheckInFunction; // The slice in this case, will select the last two digits in a string. If we put -1 will only select the last one etc  https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string

    if (digits.charAt(0) == digits.charAt(1)) return digits.charAt(0); //Compares the pair of colors. If the first Color is the same as the second one, we just return it
    else {
        //Since we have just a few possible cases, I use switch/case. This switch will return the right color for any pair combination
        switch (digits) {
            case 'RG': return "B";
                break;

            case 'RB': return "G";
                break;

            case 'BR': return "G";
                break;

            case 'BG': return "R";
                break;

            case 'GR': return 'B';
                break;

            case 'GB': return 'R';
                break;
        }

    }
}
