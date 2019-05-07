let triangleRow = "RRGBRGBB";

triangle(triangleRow);

function triangle(triangleRow) {

   
    let newStringLength = triangleRow.length;


    createRow(newStringLength, triangleRow);

}



function createRow(newStringLength, triangleRow) {
    let finalTriangle;
    let prevRow = triangleRow;
    let curRow = "";

for (let i = 0; i<newStringLength-1; i++) {
curRow = curRow + createRandomColor(); //Create Random Color Line

let lastDigit = lastColor(prevRow);
console.log(lastDigit);
prevRow = curRow + lastDigit;
}
    //console.log(prevRow);

}


function lastColor(prevRow){
  let curRowLength = prevRow.length;
  
  if ( prevRow.charAt(curRowLength) === prevRow.charAt(curRowLength - 1)) return prevRow + prevRow.charAt(curRowLength);
  else if (prevRow.charAt(curRowLength) === "R" && prevRow.charAt(curRowLength-1) === "B") return "G";
  else if (prevRow.charAt(curRowLength) === "R" && prevRow.charAt(curRowLength-1) === "G") return "B";
  else if (prevRow.charAt(curRowLength) === "G" && prevRow.charAt(curRowLength-1) === "R") return "B";
  else if (prevRow.charAt(curRowLength) === "G" && prevRow.charAt(curRowLength-1) === "B") return "R";
  else if (prevRow.charAt(curRowLength) === "B" && prevRow.charAt(curRowLength-1) === "G") return "R";
  else if (prevRow.charAt(curRowLength) === "B" && prevRow.charAt(curRowLength-1) === "R") return "G";


}

// function detectLastTwoLetters(curRow, curRowLength) {

//     if (curRow[curRowLength - 1] === curRow[curRowLength - 2]) return true;
//     else return false;

// }


function createRandomColor() {
    let nextColorGenerator = Math.floor((Math.random() * 100) + 1);
    let nextColor;

    if (nextColorGenerator <= 33) nextColor = "R";
    else if (nextColorGenerator > 33 && nextColorGenerator <= 66) nextColor = "G";
    else nextColor = "B";
    return nextColor;
}