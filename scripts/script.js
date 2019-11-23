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
  })
  .catch(function (error) {
    pokemonName.innerHTML = "(An error has occurred.)";
    pokemonImage.src = "";
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
};
 $("#learnMore").click(function(n) {
    n.preventDefault();
    $("#showPokemon").show();
    learn()
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
  $('#pokedex').show();
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
  $('#pokedex').hide();
  $(".pokemon-image").css("filter", "");
  $(".levels").hide();//hide levels buttons
  $(".bounce").hide();//remove pokemon animation
  $('#main').css("height","450px");//increase box size to accomodate pokemon image
});

//when user clicks on hard button
document.getElementById("hard").addEventListener("click", function() {
  difficultyLevel = "hard";
  $("#main").show();
  $(".pokemon-image").css("filter", "brightness(0)");
  getPokemonData();//pull api data
    $('#pokedex').hide();
  $(".levels").hide();//hide levels buttons
  $(".bounce").hide();//remove pokemon animation
  $('#main').css("height","450px");//increase box size to 
});

//when user clicks submit
$("#answer").submit(function(e) {
  e.preventDefault();
    var userAns = $("#userAns").val();
    $(".pokemon-image").css("filter", "");
    if(userAns.length === 0) { //user left inpupt box blank
      $("#result").html("Please enter an answer").show();
      $("#result").css("color","red");
       if (difficultyLevel == "hard") {
         $(".pokemon-image").css("filter", "brightness(0)");
      } else if (difficultyLevel == "easy") {
        $(".pokemon-image").css("filter", "");
      };