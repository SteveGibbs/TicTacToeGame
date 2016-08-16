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
var tokenThree = '<img src="clinton1.png" style="height:175px;width:175px;margin-top:10px;">';
var tokenFour = '<img src="trump3.png" style="height:175px;width:175px;margin-top:10px">';
var tokenFive = '<img src ="femalemexican.jpg" style="height:175px;width;margin-top:10px">';
var tokenSix = '<img src ="MaleMexican1.png" style="height:175px;width:175px;margin-top:10px">';
var tokenSeven = '<img src ="sun.gif" style="height:175px;width:175px;margin-top:10px">';
var tokenEight = '<img src ="moon.gif" style="height:175px;width:175px;margin-top:10px">';


//Changing tokens and background image from dropdown box.  May add change of music choice as well in future.

var count = 0;
var whoseTurn;
var startToken = tokenOne;
var endToken = tokenTwo;
var choice = 1;

document.querySelector("#tokens").addEventListener("change", function() {
  choice = parseInt(this.value);

  console.log("token change choice is number " + choice + " from dropdown menu");

  document.querySelector("#tokens");
  if (choice === 1) {
    startToken = tokenOne;
    endToken = tokenTwo;
    document.body.style.background = "#BDB48E";
  } else if (choice === 2) {
    startToken = tokenThree;
    endToken = tokenFour;
    document.body.style.backgroundImage = "url('americanflag.gif')";
  } else if (choice === 3) {
    startToken = tokenFive;
    endToken = tokenSix;
    document.body.style.backgroundImage = "url('Day of the Dead.jpg')";
  } else if (choice === 4) {
    startToken = tokenSeven;
    endToken = tokenEight;
    document.body.style.backgroundImage = "url('niceimage.gif')";
  }
});


// Turn checker - if one token is selected, the other token must be played next

var turnCheck = function() {
  count++;
  console.log("times pressed equals " + count);
  if (count % 2 === 0) {
    whoseTurn = endToken;
  } else whoseTurn = startToken;
};


// Reset functionality - put all properties back to original state at board commencement
document.getElementById("reset").onclick = function() {
  for (i = 1; i <= 9; i++) {
    board["p" + i] = null; //sets keys back to null via for loop
    var elementPrefix = ("cell" + i); //iterates over id name but is a just a string not an element
    document.getElementById(elementPrefix).innerText = ""; //set innerText of element back to ""
    document.getElementById(elementPrefix).disabled = false; // disable button after token selected
  }
  count = 0;
  whoseTurn = null;
  $("p1").remove(); // removes all messages on reset
};

// Reset Score functionality

document.getElementById("resetScore").onclick = function() {
  startPlayer = null;
  var b = document.querySelector(".score2");
  b.innerHTML = startPlayer;
  secondPlayer = null;
  var c = document.querySelector(".score4");
  c.innerHTML = secondPlayer;
};


// Put token into board on button click.  Select element by id, token is equal to
// whoseTurn once the turncheck has run to determine which order.  Check is game is won or not
// or a draw or else continue.  Disable button once token has been parsed through into object

for (var j = 1; j <= 9; j++) {
  var keyPrefix0 = ("p" + j);
  var elementPrefix0 = ("cell" + j);


  var attachEventHandler = function(keyPrefix, elementPrefix) { //needed to trap variable value otherwise it just iterates to value at end of for loop
    document.getElementById(elementPrefix).onclick = function() {
      turnCheck();
      board[keyPrefix] = whoseTurn;
      this.innerHTML = whoseTurn;
      gameCheck();
      if (board[keyPrefix] !== null) {
        this.disabled = true;
      }
    };
  };

  attachEventHandler(keyPrefix0, elementPrefix0);
}



// Game checker functionality -
// check rows then columns then diagonals - use threequals and && for or
// need first condition does not equal null as each p starts as a null otherwise
// they all equal each other

var gameCheck = function() {

  //check ROWS
  if (board.p1 !== null && board.p1 === board.p2 && board.p2 === board.p3) {
    rowMessage();
    if (board.p1 === startToken) {
      startPlayer++;
      startPlayerScore();

    } else {
      secondPlayer++;
      secondPlayerScore();
    }

  } else if (board.p4 !== null && board.p4 === board.p5 && board.p5 === board.p6) {
    rowMessage();
    if (board.p4 === startToken) {
      startPlayer++;
      startPlayerScore();
    } else {
      secondPlayer++;
      secondPlayerScore();
    }
  } else if (board.p7 !== null && board.p7 === board.p8 && board.p8 === board.p9) {
    rowMessage();
    if (board.p7 === startToken) {
      startPlayer++;
      startPlayerScore();
    } else {
      secondPlayer++;
      secondPlayerScore();
    }
  }
  // check COLUMNS
  else if (board.p1 !== null && board.p1 === board.p4 && board.p4 === board.p7) {
    columnMessage();
    if (board.p1 === startToken) {
      startPlayer++;
      startPlayerScore();
    } else {
      secondPlayer++;
      secondPlayerScore();
    }


  } else if (board.p2 !== null && board.p2 === board.p5 && board.p5 === board.p8) {
    columnMessage();
    if (board.p2 === startToken) {
      startPlayer++;
      startPlayerScore();
    } else {
      secondPlayer++;
      secondPlayerScore();
    }
  } else if (board.p3 !== null && board.p3 === board.p6 && board.p6 === board.p9) {
    columnMessage();
    if (board.p3 === startToken) {
      startPlayer++;
      startPlayerScore();
    } else {
      secondPlayer++;
      secondPlayerScore();
    }
  }

  // CHECK DIAGONALS
  else if (board.p1 !== null & board.p1 === board.p5 && board.p5 === board.p9) {
    diagonalMessage();
    if (board.p1 === startToken) {
      startPlayer++;
      startPlayerScore();
    } else {
      secondPlayer++;
      secondPlayerScore();
    }
  } else if (board.p3 !== null & board.p3 === board.p5 && board.p5 === board.p7) {
    diagonalMessage();
    if (board.p3 === startToken) {
      startPlayer++;
      startPlayerScore();
    } else {
      secondPlayer++;
      secondPlayerScore();
    }
  }
  //CHECK DRAW OR CONTINUE
  else if (count === 9) {
    drawMessage();
  } else {
    console.log("game is still on");
  }
};

// MESSAGES FOR ROW WIN, COLUMN WIN, DIAGONAL WIN OR DRAW
rowMessage = function() {
  var createRowMessage = document.createElement("p1"); // Create a <p> node
  var textRowMessage = document.createTextNode("Winner - three in a row!"); // Create a text node
  createRowMessage.appendChild(textRowMessage); // Append the text to <p>
  document.body.appendChild(createRowMessage);
};

columnMessage = function() {
  var createColumnMessage = document.createElement("p1"); // Create a <p> node
  var textColumnMessage = document.createTextNode("Winner - three in a column!"); // Create a text node
  createColumnMessage.appendChild(textColumnMessage); // Append the text to <p>
  document.body.appendChild(createColumnMessage);
};

diagonalMessage = function() {
  var createDiagonalMessage = document.createElement("p1"); // Create a <p> node
  var textDiagonalMessage = document.createTextNode("Winner - three diagonally!"); // Create a text node
  createDiagonalMessage.appendChild(textDiagonalMessage); // Append the text to <p>
  document.body.appendChild(createDiagonalMessage);
};

drawMessage = function() {
  var createDrawMessage = document.createElement("p1"); // Create a <p> node
  var textDrawMessage = document.createTextNode("No glory but a hard earned draw!"); // Create a text node
  createDrawMessage.appendChild(textDrawMessage); // Append the text to <p>
  document.body.appendChild(createDrawMessage);
};

startPlayerScore = function() {
  var b = document.querySelector(".score2");
  b.innerHTML = startPlayer;
};

secondPlayerScore = function() {
  var c = document.querySelector(".score4");
  c.innerHTML = secondPlayer;
};

// ARTIFICIAL INTELLIGENCE LOGIC - COMPUTER SELECTS ON BUTTON CLICK - ONLY WORKS FOR SECOND PLAYER
// MAY INTRODUCE PLAYER SELECTOR ONCE I HAVE MORE TIME (IE GO FIRST OR SECOND)

var playerChoice;
document.getElementById("singlePlayer").onclick = function() {
  playerChoice = parseInt(this.value);
  if (count % 2 !== 0) {
    computer();
  }
};

var computer = function() {
  var boardKeys = Object.keys(board); // get the keys from object
  var newArray = [];

  for (var i = 0; i < boardKeys.length; i++) {
    if (board[boardKeys[i]] === null) { // if the keys are null (ie token not set) push into a new array to be sorted
      newArray.push(boardKeys[i]);
    }
  }
  var randomChoice = newArray[Math.floor(newArray.length * Math.random())]; // simple random choice for AI on new array of null keys which are turns not taken.
  board[randomChoice] = endToken;

  for (i = 1; i <= 9; i++) { // iterate from cells 1 to 9
    var keyPrefix = ("p" + i);
    var elementPrefix2 = ("cell" + i);

    if (randomChoice === keyPrefix) {
      document.getElementById(elementPrefix2).innerHTML = endToken; //computer is second so gets endToken
      turnCheck(); //check whose turn
      gameCheck(); // check is game is over to display message
      if (board["p" + i] !== null) {
        document.getElementById(elementPrefix2).disabled = true; // disable button
      }
    }
  }
};
