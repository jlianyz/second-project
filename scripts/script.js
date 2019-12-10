//global variables
var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var input = Math.ceil(Math.random() * 151 + 1);
var enterNo = document.querySelector("#details")
var pname = document.querySelector(".pname");
var image = document.querySelector(".image");
var backImage = document.querySelector(".image-2");
var type = document.querySelector(".type");
var pokemonName = document.querySelector(".pokemon-name");
var pokemonImage = document.querySelector(".pokemon-image");
var getHint = document.getElementById("hint");
var answer = document.getElementById("answer");
var pokeName = (apiUrl + input).name;
var submit = document.getElementById("#submit");
var next = document.getElementById("#next");
var counter = 0;
var learnMore = document.getElementById("#showPokemon")
var difficultyLevel;

//pokemon animation
function bounce(bouncingCount, speed) {
  var bottom = 20;
	var speedRatio = speed / bottom;
	var heightRatio = bottom / bouncingCount;

	for (var i = 1; i <= bouncingCount; i++) {
		$('.bounce').animate({
			'top' : bottom
		}, speed);
		$('.bounce').animate({
			'top' : 60
    });
		bottom = bottom - (heightRatio);
	}
}

$(".bounce").mouseover(function() {
	bounce(10, 300);
});

//get api data for image and hint
function getPokemonData() {
  //var input = Math.ceil(Math.random() * 151 + 1);
  axios.get(apiUrl + Math.ceil(Math.random() * 151 + 1))
  .then(function (response) {
    pokemonName.innerHTML = response.data.forms[0].name;
    pokemonImage.src = response.data.sprites.front_default;
    pokemonType = response.data.types[0].type.name;
    wordLength = response.data.forms[0].name.length;
    getHint.innerHTML = "Hint: This pokemon is " + pokemonType + " type and has " + wordLength + " letters.";
    $(".pokemon-image").show();
    $(".pokemon-name").show();
    $(".pokemon-name").css("display", "none");
    $("#hint").show();           
  });
}  

function learn() {
  //learn about pokemon by entering ID from 1 to 150
    axios.get(apiUrl + enterNo.value)
    .then(function (response) {
      pname.innerHTML = response.data.forms[0].name;
      image.src = response.data.sprites.front_default;
      backImage.src = response.data.sprites.back_default;
      type.innerHTML = "Type: " + response.data.types[0].type.name;
  });
}

 $("#learnMore").click(function(n) {
    n.preventDefault();
    var pokeNo = $("#details").val();
    if(pokeNo < 1 || pokeNo > 150) { //user entered number outside range
      $("#showPokemon").show();
      $(".pokedex").hide();
      $(".errorMsg").show();
    }
    else {
      $("#showPokemon").show();
      $(".pokedex").show();
      $(".errorMsg").hide();
      learn();
    }
 });
   
//when user skips question
$("#next").on('click', function(next) {
  getPokemonData();
  $("#result").empty();
});

//when user chooses to reset game
$("#reset").on('click', function(e) {
  e.preventDefault();
  $("#main").hide();
  $('#starting').show();
  $(".levels").show();
  $(".pokemon-image").hide();
  $("#hint").hide();
  reset();
  $(".pokemon-name").hide();
});
function reset(){
  $("#showPokemon").hide();
  counter = 0;
  $("#details").val('')
        $("#score").html("score: " + counter);
}
  
//when user clicks on easy button
document.getElementById("easy").addEventListener("click", function() {
  difficultyLevel = "easy";
  $("#main").show();
  getPokemonData();//pull api data
  $('#starting').hide();//hide learn more section
  $(".pokemon-image").css("filter", "");
  $(".levels").hide();//hide levels buttons
  $('#main').css("height","450px");//increase box size to accomodate pokemon image
});

//when user clicks on hard button
document.getElementById("hard").addEventListener("click", function() {
  difficultyLevel = "hard";
  $("#main").show();
  $(".pokemon-image").css("filter", "brightness(0)"); //make image black
  getPokemonData();
    $('#starting').hide();
  $(".levels").hide();
  $('#main').css("height","450px"); 
});

//when user clicks submit
$("#answer").submit(function(e) {
  e.preventDefault();
    var userAns = $("#userAns").val();
    $(".pokemon-image").css("filter", "");
    if(userAns.length === 0) { //user left inpupt box blank
      $("#result").html("Please enter an answer").show();
      $("#result").css({"color": "red", "animation": "none", "text-transform": "none"});
      if (difficultyLevel == "hard") {
        $(".pokemon-image").css("filter", "brightness(0)");
      } else if (difficultyLevel == "easy") {
        $(".pokemon-image").css("filter", "");
      };
    } else if(userAns.toLowerCase() === pokemonName.innerText) { //user inputs correct answer
      $("#result").html("congrats").show();
      $("#result").css({"animation": "blink 1s infinite", "text-transform": "uppercase"})
      counter += 1
      $("#score").html("score: " + counter);
      $("#result").css("color","green");
      setTimeout(fade_out, 2000); //correct answer shows for 2 seconds
      function fade_out() {
        $("#result").fadeOut().empty();
        $("#userAns").val('');
        getPokemonData();
        if (difficultyLevel == "hard") {
          $(".pokemon-image").css("filter", "brightness(0)");
        } else if (difficultyLevel == "easy") {
          $(".pokemon-image").css("filter", "");
        };
      }; 
    } else if(userAns.toLowerCase() != pokemonName.innerText && userAns.length > 0) { //user inputs wrong answer
      $(".pokemon-name").css("display","block");
      $("#result").html("The pokemon name is " + pokemonName.innerHTML).show();
      $("#result").css({"color": "blue", "animation": "none", "text-transform": "none"})
      setTimeout(fade_out, 2000);
      function fade_out() {
        $("#result").fadeOut().empty();
        $("#userAns").val('');
        getPokemonData();
        if (difficultyLevel == "hard") {
        $(".pokemon-image").css("filter", "brightness(0)");
      } else if (difficultyLevel == "easy") {
        $(".pokemon-image").css("filter", "");
      };
    }
  };
});