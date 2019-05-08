
let row = "RGBG";
let debug = 0;

triangle(row);

function triangle(row) {
    let lettersToCheck = "";
    let rowLength = row.length; // so we can calculate how many times we must execute the algorithm
    let result = "";
    let triangleRow = [];

    if (debug == 1) {
        console.log('  ');
        console.log('Start of the Function Triangle');
        console.log('Row Input:', row);
        console.log('Row Length', rowLength);
        console.log('  ');
    }

    //Ean to row einai mono 1 gramma
    if (rowLength === 1) {
        triangleRow[0] = row.slice(0);
return triangleRow[0];
    }


    else {

        let newRowLength = rowLength - 1;
        triangleRow[0] = row;
        if (debug == 1) {
            console.log('  ');
            console.log('Else');
            console.log('lettersToCheck', lettersToCheck);
            console.log('newRowLength', newRowLength);
            console.log('Triangle 0 is ', triangleRow[0]);
            console.log('  ');
        }

        for (let i = 0; i < rowLength - 1; i++) {
            lettersToCheck = triangleRow[i];
            result = '';
            if (debug == 1) {
                console.log('  ');
                console.log('   OUTER FOR | Itteration #', i + 1);
                console.log('   lettersToCheck', lettersToCheck);
                console.log('   newRowLength', newRowLength);
                console.log('   Triangle ', i, 'is ', triangleRow[i]);
                console.log('  ');
            }

            for (let j = 0; j < newRowLength; j++) { //Inner For
              let  lettersToCheckP = lettersToCheck.slice(j, j + 2);
                if (debug == 1) {
                    console.log('  ');
                    console.log('       ==INNER FOR | Before Itteration #', j + 1, '==');
                    console.log('       lettersToCheck', lettersToCheck);
                    console.log('       TriangleRow', i, 'is', triangleRow[i]);
                    console.log('       newRowLength', newRowLength);
                    console.log('       Result', result);
                    console.log('       --');
                }
                result = result + calculateLastColor(lettersToCheckP);
                triangleRow[i + 1] = result;
                //result = result.slice(-1); //Slice only the last character of result
                if (debug == 1) {
                    console.log('       Inner For | After Itteration #', j + 1);
                    console.log('       lettersToCheck', lettersToCheck);
                    console.log('       Result', result);
                    console.log('       triangleRow ', i + 1, 'is', triangleRow[i + 1]);
                    console.log('  ');
                }
            }//Inner For

            newRowLength -= 1;

            if (debug == 1) {
                console.log('  ');
                console.log('End of OUTER FOR');
                console.log('lettersToCheck', lettersToCheck);
                console.log('newRowLength', newRowLength);
                console.log('Result', result);
                console.log('  ');
            }
        } //OUTER FOR

        if (debug == 1) {
            console.log('  ');
            console.log('End of Inner For');
            console.log('lettersToCheck', lettersToCheck);
            console.log('newRowLength', newRowLength);
            console.log('Result', result);
            console.log('  ');
        }


        let finalArrayPossition = triangleRow.length;
   
   
        if (debug == 1) {
            console.log('  ');
            console.log('Final Result');
            console.log('lettersToCheck', lettersToCheck);
            console.log('Final Triangle Row Length', finalArrayPossition);
            console.log('TriangleRow', triangleRow)
            console.log('  ');
        }
    
        return triangleRow[finalArrayPossition-1];
    


    } //ELSE
  

} // FUNCTION TRIANGLE





function calculateLastColor(lettersToCheckInFunction) {

    let digits = lettersToCheckInFunction; // The slice in this case, will select the last two digits in a string. If we put -1 will only select the last one etc  https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string

    if (digits.charAt(0) == digits.charAt(1)) return digits.charAt(0);
    else {

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
