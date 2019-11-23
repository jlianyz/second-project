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