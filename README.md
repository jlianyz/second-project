# Guess the Pokemon game
## Stream Two project: Interact Front-End Development
### Introduction
This is a game for users to learn more about Pokemon and then play a game to guess the Pokemon from its image. There is an easy option, with the colored Pokemon image showing, and a hard option, with the blacked-out Pokemon image showing. The one-page game application can be found [here](https://jlianyz.github.io/second-project/).

### User stories
##### As a child or newbie to Pokemon, I want to:
* Learn more about Pokemon before starting to play the game
* See colorful images when I'm playing the game
* Have simple instructions to guide me when playing the game

##### As an adult who used to play Pokemon games in the past, I want to:
* Have the option to refresh my memory of Generation 1 Pokemon
* Guess the Pokemon that I am familiar with
* Play a relatively stress-free game with no time limit or limited lives
* Have the option to challenge myself to a harder game level
***

### UX
The game is created as a single page application and the layout is kept clean so that users can just focus on playing the game and not have too many distractions. 
* **Content**: When users come to the game page, there is a Pokemon logo and Pokemon related background (pokeballs) to immediately let them know that they are playing a game related to Pokemon. 
* **Text hierachy**: The "Guess the Pokemon" title is in a strong yet fun font, and the other font used is also a fun and playful font, which makes the webpage more interesting and is suitable for a game.
* **Game buttons**: The game buttons are in distinct red and green colors to draw users' attention to them. When users hover over the easy and hard option, a modal box pops up with a simple description to let them know what each game option is. 
* **Game image presentation**: The Pokemon info that users see when they click to learn more is shown against an eye-catching card with a colourful pastel gradient to hold their attention. 
***

### UI and features
The game has been designed to be easy to play on all forms of media (laptop, mobile and tablet).
##### Overall
* Ultraball Favicon, Pokemon logo and Pokeball background to emphasize that this is a Pokemon game, even before the user reads any of the text
* Use of game-related fonts to create a playful feel
* Only the relevant portions of the game show up as user plays. Eg, when user wants to learn more about pokemon, the Guessing portion is hidden. When users are playing the guessing game, the Learn More section is hidden.
* Text has a white background overlay so that it is easy to read. 
* The title is on a yellow background with dark blue border, similar to the Pokemon logo colors to create a consistent color scheme.
* The sprites that are pulled from the pokeAPI are presented in a slightly larger than orginal size, so that it looks better against a large screen yet still has a good resolution
#### Desktop and tablet version
* 4 of the more popular pokemon are bouncing near the logo to add some animations to the screen to generate user interest
* The back and front Pokemon sprites are placed side by side so it looks more visually balanced
#### Mobile version
* The animation is removed, as the pokemon images look too big on a mobile screen and is distracting when users are playing the game
* The font size of the Learn More box is not in bold to fit better in the card
* The back and front Pokemon sprites and shown in individual columns to fit the smaller screen 

### Technologies used
* HTML
* CSS
* Bootstrap (4.3.1)
* Javascript
* Axios
* JQuery
* Poke API
***

### Features left to implement
In future, I would like to:
* Set up a players' scoreboard so users can see their scores against other players
* Include an expert level with a timer countdown for users who want a more exciting game
***

### Testing

This site is tested to be responsive on the following devices:
* Iphone 5/6/7/8
* Ipad
* Ipad Pro (best viewed in landscape mode)
* Safari
* Chrome
* Firefox
* Edge
* IE

Basic checks include:
* Ensuring that images and texts fit into the Learn More card
* Inputting numbers less than 1 or more than 150 and ensuring that the error message pops up in the Learn More card
* Trying to enter a text/ non number in the box to Learn More
* Testing different permutations of entering the right answer, wrong answer and blank input field when submitting my guess, making sure that the right message is showing
* Making sure that the blacked-out image is showing when user selects the Hard option
* Checking that the right sections get hidden/show when users reset the game
* Checking that the score gets reset when users reset the game
* Doing a spell check to make sure there are no errors. 
* Doing a console.log when pulling the Poke API to ensure that the connection is working

It was found that for Edge, when the input value for submit was not defined, the text that showed up was "Submit query" and not "Submit". As such, the value was defined.
***

### Deployment


***
### Credits
**Images**

The images were taken from [Pinterest](https://www.pinterest.com)

**Pokemon information and sprites**

The above info was pulled from the [PokeAPI](https://pokeapi.co/)

**Typography**

The fonts were taken from [Google fonts](https://fonts.google.com/)

**Bouncing Pokemon animation**

I adapted the animation code from [here]((https://phppot.com/demo/bouncing-ball-animation-using-jquery/))

**Ultraball Favicon**

I generated the favicon using [this site](https://www.favicon-generator.org/)