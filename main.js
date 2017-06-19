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
var imageOne = "X";
var imageTwo = "O";
var imageThree = '<img src="./images/clinton1.png">';
var imageFour = '<img src="./images/trump3.png">';
var imageFive = '<img src ="./images/femalemexican.jpg">';
var imageSix = '<img src ="./images/MaleMexican1.png">';
var imageSeven = '<img src ="./images/sun.gif">';
var imageEight = '<img src ="./images/moon.gif">';

//Changing tokens and background image from dropdown box.  May add change of music choice as well in future.
var count = 0;
var whoseTurn;
var startToken = imageOne;
var endToken = imageTwo;
var choice = 1;

document.querySelector("#tokens").addEventListener("change", function() {
  choice = parseInt(this.value);
  console.log("token change choice is number " + choice + " from dropdown menu");
  document.querySelector("#tokens");
  if (choice === 1) {
    startToken = imageOne;
    endToken = imageTwo;
    document.body.style.background = "#BDB48E";
  } else if (choice === 2) {
    startToken = imageThree;
    endToken = imageFour;
    document.body.style.backgroundImage = "url('./images/americanflag.gif')";
  } else if (choice === 3) {
    startToken = imageFive;
    endToken = imageSix;
    document.body.style.backgroundImage = "url('./images/Day of the Dead.jpg')";
  } else if (choice === 4) {
    startToken = imageSeven;
    endToken = imageEight;
    document.body.style.backgroundImage = "url('./images/niceimage.gif')";
  }
});

// pre load images to improve responsiveness
var images =[
  './images/clinton1.png',
'./images/trump3.png',
'./images/femalemexican.jpg',
'./images/MaleMexican1.png',
'./images/sun.gif',
'./images/moon.gif'
];
for (var i = 0; i < images.length; ++i) {
    console.log("images preloaded");
    var img = new Image();  //creates a new HTMLImageElement equivalent to document.createElement('img');
     img.src = images[i];
     console.log(images[i]);
 }

// Turn checker - if one token is selected, the other token must be played next
var turnCheck = function() {
  count++;
  console.log("times pressed equals " + count);
  if (count % 2 === 0) {
    whoseTurn = endToken;
  } else whoseTurn = startToken;
};

// Reset functionality - put all properties back to original state at board commencement
$("#reset").click(function() {
  for (i = 1; i <= 9; i++) {
    board["p" + i] = null; //sets keys back to null via for loop
    var elementPrefix = ("cell" + i); //iterates over id name but is a just a string not an element
    document.getElementById(elementPrefix).innerText = ""; //set innerText of element back to ""
    document.getElementById(elementPrefix).disabled = false; // disable button after token selected
  }
  count = 0;
  whoseTurn = null;
  $("#message").text(null);
  $("p1").remove(); // removes all messages on reset
});


// Disable all buttons on win
var winDisable = function() {
  for (i = 1; i <= 9; i++) {
    var elementPrefixTwo = ("cell" + i);
    document.getElementById(elementPrefixTwo).disabled = true;
  }
};

//Mute music
// document.getElementById("soundButton").onclick = function(){
//   var audioA = document.getElementById("music");
//   audioA.muted = !audioA.muted;
// };
$("#soundButton").click(function() {
  var audioNoise = document.getElementById("music");
  audioNoise.muted = !audioNoise.muted;
  $(this).find('i').toggleClass('fa fa-volume-up fa fa-volume-off');
});

// Reset Score functionality
$("#resetScore").click(function() {
  $("#score-one").html(null);
  $("#score-two").html(null);
  $("#message").text(null);
  startPlayer = null;
  secondPlayer = null;
});

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
      document.getElementById('ping').play();
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
  //check ROWS for a win
  if ((board.p1 !== null && board.p1 === board.p2 && board.p2 === board.p3) || (board.p4 !== null && board.p4 === board.p5 && board.p5 === board.p6) || (board.p7 !== null && board.p7 === board.p8 && board.p8 === board.p9)) {
    $("#message").text("Winner - three in a row!");
    $("#winningCheer").get(0).play(); //same as document.getElementById('winningCheer').play();
    winDisable();
    if (count % 2 !== 0) {
      startPlayer++;
      $("#score-one").html(startPlayer);
    } else {
      secondPlayer++;
      $("#score-two").html(secondPlayer);
    }
  }
  // check COLUMNS for a win
  else if ((board.p1 !== null && board.p1 === board.p4 && board.p4 === board.p7) || (board.p2 !== null && board.p2 === board.p5 && board.p5 === board.p8) || (board.p3 !== null && board.p3 === board.p6 && board.p6 === board.p9)) {
    $("#message").text("Winner - three in a column!");
    $("#winningCheer").get(0).play();
    winDisable();
    if (count % 2 !== 0) {
      startPlayer++;
      $("#score-one").html(startPlayer);
    } else {
      secondPlayer++;
      $("#score-two").html(secondPlayer);
    }
  }
  // CHECK DIAGONALS for a win
  else if ((board.p1 !== null & board.p1 === board.p5 && board.p5 === board.p9) || (board.p3 !== null & board.p3 === board.p5 && board.p5 === board.p7)) {
    $("#message").text("Winner - three diagonally!");
    $("#winningCheer").get(0).play();
    winDisable();
    if (count % 2 !== 0) {
      startPlayer++;
      $("#score-one").html(startPlayer);
    } else {
      secondPlayer++;
      $("#score-two").html(secondPlayer);
    }
  }
  //CHECK DRAW OR CONTINUE
  else if (count === 9) {
    $("#message").text("No glory but a hard earned draw!");

  } else {
    console.log("game is still on");
  }
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
