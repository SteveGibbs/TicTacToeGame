# TicTacToe Game

Project Zero of General Assembly's Web Development Immersive course (3mths duration). Code was intentionally written long hand in javascript to better built my fundamentals and syntax of that language and I purposefully avoided jQuery. My intention is to recode this project at a later time to reduce most of the redundancy in the code and use jQuery to built up my knowledge of its syntax.

## Features

- Two player mode.

- Ability to select tokens and associated background, with the main themes listed below.  The game can be easily scaled with as many themes as you choose.  

  - Classic Tic Tac Toe - X vs O;
  - Presidential - Hillary vs Trump;
  - Day of the Dead - Homage to the Mexican Day of Dead Female Skull vs Male Skull;
  - Space - Roiling Sun vs Moon gifs;


- Separate messages for win by row, column or diagonal, or draw;
- Each square is a button that can be clicked to select your token position, then the button is disabled.  
- Player scoreboard for wins;
- Reset Game and Reset Scoreboard functionality;
- Single player vs Computer AI (simple random choice); operates when the "computer" button is clicked.  Will add in harder AI functionality so you can choose which AI to play each turn. Set up for computer to go second at the moment.

```javascript
```

## Technology

- HTML5
- CSS3
- JavaScript

### Libraries / Plugins

- [jQuery](https://code.jquery.com/jquery-3.1.0.min.js)

## Issues / Bugs

- Can select different tokens midway through game but this functionality is intentional.  I intend to build in logic so that you can remember the different tokens and match them (all first player vs second player) as a variant.
- Game allows you to continue after win if you do not select reset.  This will be fixed at a later point.  Buttons will be disabled after win message occurs.  

## Backlog / Futures Releases

- Will reduce redundancy in code and use jQuery as another version.
- Will implement harder AI and have functionality to selected intermediate or easy AI per turn (rather than for whole game) in playing single player.  
- Add soundtracks per selection - only one soundtrack at the moment and it does not loop.  Ability to mute on the screen.  

## Acknowledgments

- I would like to acknowledge the creators of the images and gifs used and of the music audio.  The project is not for commercial use and is solely an educational coding exercise.  
