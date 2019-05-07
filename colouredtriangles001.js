let triangleRow = "RRGBRGBB";

triangle(triangleRow);

function triangle(triangleRow) {

   let rowRemoveSpaces = removeSpaces(triangleRow);
    let newStringLength = rowRemoveSpaces.length;


    createNewRow(newStringLength, triangleRow);

}



function createNewRow(newStringLength, triangleRow) {
    let finalTriangle = [];


    for (let i = 0; i < newStringLength; i++) {
        let curRow = triangleRow;
        let curRowLength = (newStringLength - i) - 1;

        for (let j = 0; j < curRowLength; j++) {

            curRow = (createRandomColor(curRow));
        }


        console.log(curRow);
        console.log(detectLastTwoLetters(curRow, curRowLength));



    }

}

function removeSpaces(row) { return row.replace(/\s+/g, ''); }

function detectLastTwoLetters(curRow, curRowLength) {

    if (curRow[curRowLength - 1] === curRow[curRowLength - 2]) return true;
    else return false;

}


function createRandomColor() {
    let nextColorGenerator = Math.floor((Math.random() * 100) + 1);
    let nextColor;

    if (nextColorGenerator <= 33) nextColor = "R";
    else if (nextColorGenerator > 33 && nextColorGenerator <= 66) nextColor = "G";
    else nextColor = "B";
    return nextColor;
}