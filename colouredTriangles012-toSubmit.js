let row = "RGBG"; 
let debug = 0; 

triangle(row);

function triangle(row) {
    let colorsToProcess = ""; 
    let rowLength = row.length; 
    let calculatedColors = ""; 
    let triangleRow = []; 

    if (debug == 1) {
        console.log('  ');
        console.log('Start of the Function Triangle');
        console.log('Row Input:', row);
        console.log('Row Length', rowLength);
        console.log('  ');
    }

    
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
            console.log('lettersToCheck', colorsToProcess);
            console.log('newRowLength', newRowLength);
            console.log('Triangle 0 is ', triangleRow[0]);
            console.log('  ');
        }

        for (let i = 0; i < rowLength - 1; i++) { 
            colorsToProcess = triangleRow[i]; 
            calculatedColors = ''; 
            if (debug == 1) {
                console.log('  ');
                console.log('   OUTER FOR | Itteration #', i + 1);
                console.log('   lettersToCheck', colorsToProcess);
                console.log('   newRowLength', newRowLength);
                console.log('   Triangle ', i, 'is ', triangleRow[i]);
                console.log('  ');
            }

            for (let j = 0; j < newRowLength; j++) { 
                let lettersToProcessForFunction = colorsToProcess.slice(j, j + 2); 
                if (debug == 1) {
                    console.log('  ');
                    console.log('       ==INNER FOR | Before Itteration #', j + 1, '==');
                    console.log('       lettersToCheck', colorsToProcess);
                    console.log('       TriangleRow', i, 'is', triangleRow[i]);
                    console.log('       newRowLength', newRowLength);
                    console.log('       Result', calculatedColors);
                    console.log('       --');
                }
                calculatedColors = calculatedColors + calculateLastColor(lettersToProcessForFunction); 
                triangleRow[i + 1] = calculatedColors; 
                if (debug == 1) {
                    console.log('       Inner For | After Itteration #', j + 1);
                    console.log('       lettersToCheck', colorsToProcess);
                    console.log('       Result', calculatedColors);
                    console.log('       triangleRow ', i + 1, 'is', triangleRow[i + 1]);
                    console.log('  ');
                }
            }

            newRowLength -= 1; 

            if (debug == 1) {
                console.log('  ');
                console.log('End of OUTER FOR');
                console.log('lettersToCheck', colorsToProcess);
                console.log('newRowLength', newRowLength);
                console.log('Result', calculatedColors);
                console.log('  ');
            }
        } 

        if (debug == 1) {
            console.log('  ');
            console.log('End of Inner For');
            console.log('lettersToCheck', colorsToProcess);
            console.log('newRowLength', newRowLength);
            console.log('Result', calculatedColors);
            console.log('  ');
        }


        let finalArrayPossition = triangleRow.length; 


        if (debug == 1) {
            console.log('  ');
            console.log('Final Result');
            console.log('lettersToCheck', colorsToProcess);
            console.log('Final Triangle Row Length', finalArrayPossition);
            console.log('TriangleRow', triangleRow)
            console.log('  ');
        }

        return triangleRow[finalArrayPossition - 1];

    } 
} 

function calculateLastColor(lettersToCheckInFunction) {

    let digits = lettersToCheckInFunction; 

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