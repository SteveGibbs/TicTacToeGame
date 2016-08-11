// create array of nine positions
// input will be buttons
// input will be consecutive so once an X is input then next return will be a O.
// input will be pushed into array position
// run loops that will compare conditions:
// so pos 1, 2 and 3 ( or 4, 5 and 6;  or 7, 8, 9) same character then
// log you have won - you have made a row!
// so pos 1, 4 and 7 ( or 2, 5, 8; or 3, 6, 9) same character then
// log you have won - you have made a column!
// so 1, 5, 9 or 4, 5, 7 - log you have won - you have 3 in a diagonal
// loop runs from start of game and finishes at 9 turns - logs "draw" if there are
// not 3 in a row after 9 turns and then game ends
// remove redundancy in code after it is working

// introduce error handling - button disabled once choice made;
// introduce selector if X then next must be 0.
// draw condition is 9 clicks if win not hit beforehand

//Create board object of 9 keys (ie buttons)
var board = {
  p1: null,
  p2: null,
  p3: null,
  p4: null,
  p5: null,
  p6: null,
  p7: null,
  p8: null,
  p9: null

};

//Variables for scorecard
var startPlayer = 0;
var secondPlayer = 0;

// Set tokens (in pairs)
var tokenOne = "X";
var tokenTwo = "O";
var tokenThree = '<img src="clinton1.png" style="height:175px;width:175px;marginTop:10px;">';
var tokenFour = '<img src="trump3.png" style="height:175px;width:175px;marginTop:10px">';
var tokenFive = '<img src ="femalemexican.jpg" style="height:175px;width:175px">';
var tokenSix = '<img src ="malemexican1.png" style="height:175px;width:175px">';
var tokenSeven = '<img src ="sun.gif" style="height:175px;width:175px">';
var tokenEight = '<img src ="moon.gif" style="height:175px;width:175px">';


//Changing tokens and background image from dropdown box.  May add change of music choice as well in future.

var count = 0;
var whoseTurn;
var startToken = tokenOne;
var endToken = tokenTwo;
var choice = 1;

document.querySelector("#tokens").addEventListener("change",function() {
  choice = parseInt( this.value );

  console.log("token change choice is number " + choice + " from dropdown menu");

    document.querySelector("#tokens");
  if (choice === 1) {
    startToken = tokenOne;
    endToken = tokenTwo;
    document.body.style.background = "#BDB48E";
  }
  else if (choice === 2){
    startToken = tokenThree;
    endToken = tokenFour;
    document.body.style.backgroundImage = "url('americanflag.gif')";
  }
  else if (choice ===3) {
    startToken = tokenFive;
    endToken = tokenSix;
    document.body.style.backgroundImage = "url('Day of the Dead.jpg')";
    // <audio src="Popcorn Original Song.mp3" autoplay="true"></audio>   - format
    // "Dayofthedead.mp3"  - song to choose
  }
  else if (choice ===4) {
    startToken = tokenSeven;
    endToken = tokenEight;
    document.body.style.backgroundImage = "url('niceimage.gif')";
}
});


// Turn checker - if one token is selected, the other token must be played next

var turnCheck = function () {
count++;
console.log("times pressed equals " + count);
if (count%2===0) {
 whoseTurn = endToken;
} else whoseTurn = startToken;
};


// Reset functionality - put all properties back to original state at board commencement
document.getElementById("reset").onclick = function() {
board.p1 = null;
topRow1.innerText = "";
board.p2 = null;
topRow2.innerText = "";
board.p3 = null;
topRow3.innerText = "";
board.p4 = null;
secondRow4.innerText = "";
board.p5 = null;
secondRow5.innerText = "";
board.p6 = null;
secondRow6.innerText = "";
board.p7 = null;
thirdRow7.innerText = "";
board.p8 = null;
thirdRow8.innerText = "";
board.p9 = null;
thirdRow9.innerText = "";
count = 0;
whoseTurn = null;
$("p1").remove();   // removes all messages on reset
document.getElementById("topRow1").disabled = false;
document.getElementById("topRow2").disabled = false;
document.getElementById("topRow3").disabled = false;
document.getElementById("secondRow4").disabled = false;
document.getElementById("secondRow5").disabled = false;
document.getElementById("secondRow6").disabled = false;
document.getElementById("thirdRow7").disabled = false;
document.getElementById("thirdRow8").disabled = false;
document.getElementById("thirdRow9").disabled = false;
};

// Reset Score functionality

document.getElementById("resetScore").onclick = function() {
startPlayer = null;
var b = document.querySelector(".score2");
b.innerHTML=startPlayer;
secondPlayer = null;
var c = document.querySelector(".score4");
c.innerHTML=secondPlayer;
};

// Put token into board on button click.  Select element by id, token is equal to
// whoseTurn once the turncheck has run to determine which order.  Check is game is won or not
// or a draw or else continue.  Disable button once token has been parsed through into object

document.getElementById("topRow1").onclick = function() {
turnCheck();
board.p1 = whoseTurn;
topRow1.innerHTML=whoseTurn;
// console.log("square one is " + board.p1);
gameCheck();
if (board.p1!==null){
document.getElementById("topRow1").disabled = true;
}
};

document.getElementById("topRow2").onclick = function() {
turnCheck();
board.p2 = whoseTurn;
topRow2.innerHTML=whoseTurn;
gameCheck();
if (board.p2!==null){
document.getElementById("topRow2").disabled = true;
}
};

document.getElementById("topRow3").onclick = function() {
turnCheck();
board.p3 = whoseTurn;
topRow3.innerHTML=whoseTurn;
gameCheck();
if (board.p3!==null){
document.getElementById("topRow3").disabled = true;
}
};

document.getElementById("secondRow4").onclick = function() {
turnCheck();
board.p4 = whoseTurn;
secondRow4.innerHTML=whoseTurn;
gameCheck();
if (board.p4!==null){
document.getElementById("secondRow4").disabled = true;
}
};

document.getElementById("secondRow5").onclick = function() {
turnCheck();
board.p5 = whoseTurn;
secondRow5.innerHTML=whoseTurn;
gameCheck();
if (board.p5!==null){
document.getElementById("secondRow5").disabled = true;
}
};

document.getElementById("secondRow6").onclick = function() {
turnCheck();
board.p6 = whoseTurn;
secondRow6.innerHTML=whoseTurn;
gameCheck();
if (board.p6!==null){
document.getElementById("secondRow6").disabled = true;
}
};

document.getElementById("thirdRow7").onclick = function() {
turnCheck();
board.p7 = whoseTurn;
thirdRow7.innerHTML=whoseTurn;
gameCheck();
if (board.p7!==null){
document.getElementById("thirdRow7").disabled = true;
}
};

document.getElementById("thirdRow8").onclick = function() {
turnCheck();
board.p8 = whoseTurn;
thirdRow8.innerHTML=whoseTurn;
gameCheck();
if (board.p8!==null){
document.getElementById("thirdRow8").disabled = true;
}
};


document.getElementById("thirdRow9").onclick = function() {
turnCheck();
board.p9 = whoseTurn;
thirdRow9.innerHTML=whoseTurn;
gameCheck();
if (board.p9!==null){
document.getElementById("thirdRow9").disabled = true;
}

};


// Game checker functionality -
// check rows then columns then diagonals - use threequals and && for or
// need first condition does not equal null as each p starts as a null otherwise
// they all equal each other

var gameCheck = function(){

//check ROWS
if (board.p1!==null&&board.p1===board.p2&&board.p2===board.p3) {
  // console.log("You have three in a row.  You won!");
  rowMessage();
  if (board.p1===startToken) {
    startPlayer++;
    // console.log("startplayerscore is " +startPlayer);
    startPlayerScore();

  } else {
    secondPlayer++;
    secondPlayerScore();
  }

} else if (board.p4!==null&&board.p4===board.p5&&board.p5===board.p6) {
  rowMessage();
  if (board.p4===startToken) {
    startPlayer++;
    startPlayerScore();
  } else {
    secondPlayer++;
    secondPlayerScore();
  }
} else if (board.p7!==null&&board.p7===board.p8&&board.p8===board.p9) {
  rowMessage();
  if (board.p7===startToken) {
    startPlayer++;
    startPlayerScore();
  } else {
    secondPlayer++;
    secondPlayerScore();
  }
}
// check COLUMNS
else if (board.p1!==null&&board.p1===board.p4&&board.p4===board.p7) {
  columnMessage();
  if (board.p1===startToken) {
    startPlayer++;
    startPlayerScore();
  } else {
    secondPlayer++;
    secondPlayerScore();
  }


} else if (board.p2!==null&&board.p2===board.p5&&board.p5===board.p8) {
  columnMessage();
  if (board.p2===startToken) {
    startPlayer++;
    startPlayerScore();
  } else {
    secondPlayer++;
    secondPlayerScore();
  }
}
else if (board.p3!==null&&board.p3===board.p6&&board.p6===board.p9) {
  columnMessage();
  if (board.p3===startToken) {
    startPlayer++;
    startPlayerScore();
  } else {
    secondPlayer++;
    secondPlayerScore();
  }
}

// CHECK DIAGONALS
else if (board.p1!==null&board.p1===board.p5&&board.p5===board.p9) {
  diagonalMessage();
  if (board.p1===startToken) {
    startPlayer++;
    startPlayerScore();
  } else {
    secondPlayer++;
    secondPlayerScore();
  }
}
else if (board.p3!==null&board.p3===board.p5&&board.p5===board.p7) {
  diagonalMessage();
  if (board.p3===startToken) {
    startPlayer++;
    startPlayerScore();
  } else {
    secondPlayer++;
    secondPlayerScore();
  }
}
//CHECK DRAW OR CONTINUE
else if (count===9) {
    drawMessage();
}
 else {
  console.log("game is still on");
}};

// MESSAGES FOR ROW WIN, COLUMN WIN, DIAGONAL WIN OR DRAW
rowMessage = function(){
var createRowMessage = document.createElement("p1");                        // Create a <p> node
var textRowMessage = document.createTextNode("Winner - three in a row!");   // Create a text node
createRowMessage.appendChild(textRowMessage);                               // Append the text to <p>
document.body.appendChild(createRowMessage);
};

columnMessage = function(){
var createColumnMessage = document.createElement("p1");                        // Create a <p> node
var textColumnMessage = document.createTextNode("Winner - three in a column!"); // Create a text node
createColumnMessage.appendChild(textColumnMessage);                           // Append the text to <p>
document.body.appendChild(createColumnMessage);
};

diagonalMessage = function(){
var createDiagonalMessage = document.createElement("p1");                        // Create a <p> node
var textDiagonalMessage = document.createTextNode("Winner - three diagonally!"); // Create a text node
createDiagonalMessage.appendChild(textDiagonalMessage);                         // Append the text to <p>
document.body.appendChild(createDiagonalMessage);
};

drawMessage = function(){
var createDrawMessage = document.createElement("p1");                        // Create a <p> node
var textDrawMessage = document.createTextNode("No glory but a hard earned draw!"); // Create a text node
createDrawMessage.appendChild(textDrawMessage);                             // Append the text to <p>
document.body.appendChild(createDrawMessage);
};

startPlayerScore = function(){
var b = document.querySelector(".score2");
b.innerHTML=startPlayer;
};

secondPlayerScore = function(){
var c = document.querySelector(".score4");
c.innerHTML=secondPlayer;
};

// ARTIFICIAL INTELLIGENCE LOGIC - COMPUTER SELECTS ON BUTTON CLICK - ONLY WORKS FOR SECOND PLAYER
// MAY INTRODUCE PLAYER SELECTOR ONCE I HAVE MORE TIME (IE GO FIRST OR SECOND)

var playerChoice;
// document.querySelector("#singlePlayer").addEventListener("change",function() {
document.getElementById("singlePlayer").onclick = function() {
  playerChoice = parseInt( this.value );
  if (count%2!==0) {
      computer();
        }
      };

var computer = function() {
var boardKeys = Object.keys(board);
// console.log(boardKeys.length);
var newArray = [];

for (var i=0; i<boardKeys.length; i++) {
  if (board[boardKeys[i]]===null) {
    newArray.push(boardKeys[i]);
  }
}
var randomChoice = newArray[Math.floor(newArray.length * Math.random())];
board[randomChoice] = endToken;
  if (randomChoice==="p1") {
    topRow1.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  if (randomChoice==="p2") {
    topRow2.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  if (randomChoice==="p3") {
    topRow3.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  if (randomChoice==="p4") {
    secondRow4.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  if (randomChoice==="p5") {
    secondRow5.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  if (randomChoice==="p6") {
    secondRow6.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  if (randomChoice==="p7") {
    thirdRow7.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  if (randomChoice==="p8") {
    thirdRow8.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  if (randomChoice==="p9") {
    thirdRow9.innerHTML = endToken;
    turnCheck();
    gameCheck();
  }
  };




// Good to have but unnecessary as buttons disabled so can only have nine clicks
// and logic displays win message before getting to a draw message if there is a win


// var drawCheck = function (){
//   for (var i in board) {
//     if (board[i]===null) {
//       drawMessage();
//     }
//   }
// };


//secondRow4.innerHTML =endToken;



// for (var i in board) {console.log(board[i]);}


// // return keys into an array as cannot count length of object
// //then count length of array
// // then iterate over the array to return the property
// // count x or 0 then to determine which is greater and whose turn
//
// var countX=0;
// var countO=0;
// console.log(Object.keys(board));
// var test = Object.keys(board);
// console.log(test.length);
//
// //iterate for loop to return properties in Object
//
// for (var i in board) {
// console.log(board[i]);
// if (board[i]==="X") {
//   countX++;
//   console.log(countX);
// } else if (board[i]==="O") {
//   countO++;
//   console.log(countO);
// }}
// if (countX>countO) {
//   whoseTurn = "donkey";
// }
//

// CODE OUT FOR NOW
//create function to run within button
// if button clicked commence function
// for first button click, whoseTurn is "X"


// var counter =1;
// var whoseTurn;
// var turnCheck = function() {
//   if (counter%2===0) {whoseTurn = "doggie";
// }
//  else {whoseTurn="cattie";}
//  };




// needs to run as continuous loop

//

// start with counter = zero, on click of button then it populates p1 to p9 depending on which
// problem with counter - base it on p1 to p9
// var counter;
// for (i=0; i<=9; i++) {
//   if (i%2===0) {
//     counter = "X";
//   } else {
//     counter = "nought";
//   console.log(counter);}
// }

//
// if (moves.includes($(this.attr("id")) {
// // don't let them move there
// } else if ($(this).attr("id") === lastMove) {
//   //counter -= 1;
//   // remove the tile from the board;
// } else {
//  counter += 1
//  moves.push(lastMove)
//  lastMove = $(this).attr("id");
//  // place the tile on the board
// }
