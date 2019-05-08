
let row = "RGBG";


triangle(row);

function triangle(row) {
    let prevLetters = "";
    let rowLength = row.length; // so we can calculate how many times we must execute the algorithm
    let triangle = [];
    let result = "";

    //Ean to row einai mono 1 gramma
    if (rowLength === 1) {
        result = row.slice(0);
        console.log(" IF ", result);
    }

    //alliws
    else {
        //metra posa rows exoume
        let newRowLength = rowLength;

        //Outer For
        for (let j = 0; j < rowLength - 1; j++) {
           
            // Inner For
            for (let i = 0; i < newRowLength - 1; i++) {

                prevLetters = row.slice(i, i + 2); // Slice Start at i | end slice at possition i+2
                result = result + calculateLastColor(prevLetters);
                result = result.slice(-1); //Slice only the last character of result

            }
            newRowLength -= 1;
          
        }

    }
    //console.log(triangle);
    //console.log("Result: ", result);

    return result;


}


function calculateLastColor(prevRow) {

    let lastTwoDigits = prevRow.slice(-2); // The slice in this case, will select the last two digits in a string. If we put -1 will only select the last one etc  https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string

    if (lastTwoDigits.charAt(0) == lastTwoDigits.charAt(1)) return lastTwoDigits.charAt(0);
    else {

        switch (lastTwoDigits) {
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