   
let triangleRow = "GB";

triangle(triangleRow);

function triangle(triangleRow) {

   
    let newStringLength = triangleRow.length;

for (let i=0; i<newStringLength; i++){
    
    let lala = newStringLength - i;
    createRow(lala, triangleRow);


}
}



function createRow(newStringLength, triangleRow) {
    let finalTriangle;
    let curRow = "";
 let prevRow = triangleRow;
 
for (let i = 0; i<newStringLength-2; i++) {
curRow = curRow + createRandomColor(); //Create Random Color Line


}
let lastDigit = lastColor(prevRow);
curRow = curRow + lastDigit;
console.log(curRow);
    //console.log(prevRow);

}


function lastColor(prevRow){
  let curRowLength = prevRow.length;
  
  if ( prevRow.charAt(curRowLength-1) === prevRow.charAt(curRowLength - 2)) return prevRow.charAt(curRowLength-1);
  else if (prevRow.charAt(curRowLength-1) === "R" && prevRow.charAt(curRowLength-2) === "B") return "G";
  else if (prevRow.charAt(curRowLength-1) === "R" && prevRow.charAt(curRowLength-2) === "G") return "B";
  else if (prevRow.charAt(curRowLength-1) === "G" && prevRow.charAt(curRowLength-2) === "R") return "B";
  else if (prevRow.charAt(curRowLength-1) === "G" && prevRow.charAt(curRowLength-2) === "B") return "R";
  else if (prevRow.charAt(curRowLength-1) === "B" && prevRow.charAt(curRowLength-2) === "G") return "R";
  else if (prevRow.charAt(curRowLength-1) === "B" && prevRow.charAt(curRowLength-2) === "R") return "G";
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