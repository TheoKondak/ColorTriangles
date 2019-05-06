   
let row = "RGBG";


triangle(row);

function triangle(row){
let prevRow = "";
 let rowLength = row.length; // so we can calculate how many times we must execute the algorithm
 let triangle = []
   
    
  //Calculate how many times we have to execute the algorithm
   for (let i=0; i<rowLength; i++){

    if (i == 0){
    
    triangle[i] = row.slice(-2);
    prevRow= triangle[i]
    }
    else {
    prevRow = triangle[i-1];
    triangle[i] = calculateLastColor(prevRow);

}


}

   console.log(triangle);
  

  
}



//CALCULATE LAST TWO COLORS
function calculateIntermediateColor (){
let randomNumber = Math.floor((Math.random() * 100) + 1);

if (randomNumber <= 33) return "R";
else if (randomNumber > 33 && randomNumber <=66) return "B";
else return "G";
}

function calculateLastColor(prevRow){

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