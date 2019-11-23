{"changed":true,"filter":false,"title":"script.js","tooltip":"/scripts/script.js","value":"","undoManager":{"mark":29,"position":30,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":20},"action":"insert","lines":["//global variables","var apiUrl = \"https://pokeapi.co/api/v2/pokemon/\";","var input = Math.ceil(Math.random() * 151 + 1);","var enterNo = document.querySelector(\"#details\")","var pname = document.querySelector(\".pname\");","var image = document.querySelector(\".image\");","var backImage = document.querySelector(\".image-2\");","var type = document.querySelector(\".type\");","var pokemonName = document.querySelector(\".pokemon-name\");","var pokemonImage = document.querySelector(\".pokemon-image\");","var getHint = document.getElementById(\"hint\");","var answer = document.getElementById(\"answer\");","var pokeName = (apiUrl + input).name;","var submit = document.getElementById(\"#submit\");","var next = document.getElementById(\"#next\");","var counter = 0;","var learnMore = document.getElementById(\"#showPokemon\")","var difficultyLevel;"],"id":1}],[{"start":{"row":17,"column":20},"end":{"row":36,"column":3},"action":"insert","lines":["//get api data for image and hint","function getPokemonData() {","  //var input = Math.ceil(Math.random() * 151 + 1);","  axios.get(apiUrl + Math.ceil(Math.random() * 151 + 1))","  .then(function (response) {","    pokemonName.innerHTML = response.data.forms[0].name;","    pokemonImage.src = response.data.sprites.front_default;","    pokemonType = response.data.types[0].type.name;","    wordLength = response.data.forms[0].name.length;","    getHint.innerHTML = \"Hint: This pokemon is \" + pokemonType + \" type and has \" + wordLength + \" letters.\";","    $(\".pokemon-image\").show();","    $(\".pokemon-name\").show();","    $(\".pokemon-name\").css(\"display\", \"none\");","    $(\"#hint\").show();           ","  })","  .catch(function (error) {","    pokemonName.innerHTML = \"(An error has occurred.)\";","    pokemonImage.src = \"\";","  });","}  "],"id":4}],[{"start":{"row":17,"column":20},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":38,"column":3},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":40,"column":0},"end":{"row":55,"column":0},"action":"insert","lines":["function learn() {","  //learn about pokemon","    axios.get(apiUrl + enterNo.value)","    .then(function (response) {","      pname.innerHTML = response.data.forms[0].name;","      image.src = response.data.sprites.front_default;","      backImage.src = response.data.sprites.back_default;","      type.innerHTML = \"Type: \" + response.data.types[0].type.name;","});","};"," $(\"#learnMore\").click(function(n) {","    n.preventDefault();","    $(\"#showPokemon\").show();","    learn()"," });",""],"id":7}],[{"start":{"row":41,"column":23},"end":{"row":41,"column":24},"action":"insert","lines":[" "],"id":8},{"start":{"row":41,"column":24},"end":{"row":41,"column":25},"action":"insert","lines":["b"]},{"start":{"row":41,"column":25},"end":{"row":41,"column":26},"action":"insert","lines":["y"]}],[{"start":{"row":41,"column":26},"end":{"row":41,"column":27},"action":"insert","lines":[" "],"id":9},{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"insert","lines":["e"]},{"start":{"row":41,"column":28},"end":{"row":41,"column":29},"action":"insert","lines":["n"]},{"start":{"row":41,"column":29},"end":{"row":41,"column":30},"action":"insert","lines":["t"]},{"start":{"row":41,"column":30},"end":{"row":41,"column":31},"action":"insert","lines":["e"]},{"start":{"row":41,"column":31},"end":{"row":41,"column":32},"action":"insert","lines":["r"]},{"start":{"row":41,"column":32},"end":{"row":41,"column":33},"action":"insert","lines":["i"]},{"start":{"row":41,"column":33},"end":{"row":41,"column":34},"action":"insert","lines":["n"]},{"start":{"row":41,"column":34},"end":{"row":41,"column":35},"action":"insert","lines":["g"]}],[{"start":{"row":41,"column":35},"end":{"row":41,"column":36},"action":"insert","lines":[" "],"id":10},{"start":{"row":41,"column":36},"end":{"row":41,"column":37},"action":"insert","lines":["I"]},{"start":{"row":41,"column":37},"end":{"row":41,"column":38},"action":"insert","lines":["D"]}],[{"start":{"row":41,"column":38},"end":{"row":41,"column":39},"action":"insert","lines":[" "],"id":11},{"start":{"row":41,"column":39},"end":{"row":41,"column":40},"action":"insert","lines":["f"]},{"start":{"row":41,"column":40},"end":{"row":41,"column":41},"action":"insert","lines":["r"]},{"start":{"row":41,"column":41},"end":{"row":41,"column":42},"action":"insert","lines":["o"]},{"start":{"row":41,"column":42},"end":{"row":41,"column":43},"action":"insert","lines":["m"]}],[{"start":{"row":41,"column":43},"end":{"row":41,"column":44},"action":"insert","lines":[" "],"id":12},{"start":{"row":41,"column":44},"end":{"row":41,"column":45},"action":"insert","lines":["1"]}],[{"start":{"row":41,"column":45},"end":{"row":41,"column":46},"action":"insert","lines":[" "],"id":13},{"start":{"row":41,"column":46},"end":{"row":41,"column":47},"action":"insert","lines":["t"]},{"start":{"row":41,"column":47},"end":{"row":41,"column":48},"action":"insert","lines":["o"]}],[{"start":{"row":41,"column":48},"end":{"row":41,"column":49},"action":"insert","lines":[" "],"id":14},{"start":{"row":41,"column":49},"end":{"row":41,"column":50},"action":"insert","lines":["1"]},{"start":{"row":41,"column":50},"end":{"row":41,"column":51},"action":"insert","lines":["5"]},{"start":{"row":41,"column":51},"end":{"row":41,"column":52},"action":"insert","lines":["0"]}],[{"start":{"row":55,"column":0},"end":{"row":56,"column":0},"action":"insert","lines":["",""],"id":15}],[{"start":{"row":56,"column":0},"end":{"row":60,"column":3},"action":"insert","lines":["//when user skips question","$(\"#next\").on('click', function(next) {","  getPokemonData();","  $(\"#result\").empty();","});"],"id":16}],[{"start":{"row":60,"column":3},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":61,"column":0},"end":{"row":62,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":62,"column":0},"end":{"row":67,"column":3},"action":"insert","lines":["function reset(){","  $(\"#showPokemon\").hide();","  counter = 0;","  $(\"#details\").val('')","        $(\"#score\").html(\"score: \" + counter);","  }"],"id":18}],[{"start":{"row":61,"column":0},"end":{"row":71,"column":3},"action":"insert","lines":["$(\"#reset\").on('click', function(e) {","  e.preventDefault();","  $(\"#main\").hide();","  $('#pokedex').show();","  $(\".levels\").show();","  $(\".pokemon-image\").hide();","  $(\"#hint\").hide();","  reset();","  $(\".pokemon-name\").hide();","  console.log(\"resetting:\" + counter);","});"],"id":19}],[{"start":{"row":60,"column":3},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":61,"column":0},"end":{"row":62,"column":0},"action":"insert","lines":["",""]},{"start":{"row":62,"column":0},"end":{"row":62,"column":1},"action":"insert","lines":["/"]},{"start":{"row":62,"column":1},"end":{"row":62,"column":2},"action":"insert","lines":["/"]},{"start":{"row":62,"column":2},"end":{"row":62,"column":3},"action":"insert","lines":["w"]},{"start":{"row":62,"column":3},"end":{"row":62,"column":4},"action":"insert","lines":["h"]},{"start":{"row":62,"column":4},"end":{"row":62,"column":5},"action":"insert","lines":["e"]},{"start":{"row":62,"column":5},"end":{"row":62,"column":6},"action":"insert","lines":["n"]}],[{"start":{"row":62,"column":6},"end":{"row":62,"column":7},"action":"insert","lines":[" "],"id":21},{"start":{"row":62,"column":7},"end":{"row":62,"column":8},"action":"insert","lines":["u"]},{"start":{"row":62,"column":8},"end":{"row":62,"column":9},"action":"insert","lines":["s"]},{"start":{"row":62,"column":9},"end":{"row":62,"column":10},"action":"insert","lines":["e"]},{"start":{"row":62,"column":10},"end":{"row":62,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":62,"column":11},"end":{"row":62,"column":12},"action":"insert","lines":[" "],"id":22},{"start":{"row":62,"column":12},"end":{"row":62,"column":13},"action":"insert","lines":["c"]},{"start":{"row":62,"column":13},"end":{"row":62,"column":14},"action":"insert","lines":["h"]},{"start":{"row":62,"column":14},"end":{"row":62,"column":15},"action":"insert","lines":["o"]},{"start":{"row":62,"column":15},"end":{"row":62,"column":16},"action":"insert","lines":["o"]},{"start":{"row":62,"column":16},"end":{"row":62,"column":17},"action":"insert","lines":["e"]},{"start":{"row":62,"column":17},"end":{"row":62,"column":18},"action":"insert","lines":["s"]}],[{"start":{"row":62,"column":17},"end":{"row":62,"column":18},"action":"remove","lines":["s"],"id":23},{"start":{"row":62,"column":16},"end":{"row":62,"column":17},"action":"remove","lines":["e"]}],[{"start":{"row":62,"column":16},"end":{"row":62,"column":17},"action":"insert","lines":["s"],"id":24},{"start":{"row":62,"column":17},"end":{"row":62,"column":18},"action":"insert","lines":["e"]},{"start":{"row":62,"column":18},"end":{"row":62,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":62,"column":19},"end":{"row":62,"column":20},"action":"insert","lines":[" "],"id":25},{"start":{"row":62,"column":20},"end":{"row":62,"column":21},"action":"insert","lines":["t"]},{"start":{"row":62,"column":21},"end":{"row":62,"column":22},"action":"insert","lines":["o"]}],[{"start":{"row":62,"column":22},"end":{"row":62,"column":23},"action":"insert","lines":[" "],"id":26},{"start":{"row":62,"column":23},"end":{"row":62,"column":24},"action":"insert","lines":["r"]},{"start":{"row":62,"column":24},"end":{"row":62,"column":25},"action":"insert","lines":["e"]},{"start":{"row":62,"column":25},"end":{"row":62,"column":26},"action":"insert","lines":["s"]},{"start":{"row":62,"column":26},"end":{"row":62,"column":27},"action":"insert","lines":["e"]},{"start":{"row":62,"column":27},"end":{"row":62,"column":28},"action":"insert","lines":["t"]}],[{"start":{"row":62,"column":28},"end":{"row":62,"column":29},"action":"insert","lines":[" "],"id":27},{"start":{"row":62,"column":29},"end":{"row":62,"column":30},"action":"insert","lines":["a"]}],[{"start":{"row":62,"column":29},"end":{"row":62,"column":30},"action":"remove","lines":["a"],"id":28}],[{"start":{"row":62,"column":29},"end":{"row":62,"column":30},"action":"insert","lines":["g"],"id":29},{"start":{"row":62,"column":30},"end":{"row":62,"column":31},"action":"insert","lines":["a"]},{"start":{"row":62,"column":31},"end":{"row":62,"column":32},"action":"insert","lines":["m"]},{"start":{"row":62,"column":32},"end":{"row":62,"column":33},"action":"insert","lines":["e"]}],[{"start":{"row":72,"column":0},"end":{"row":72,"column":38},"action":"remove","lines":["  console.log(\"resetting:\" + counter);"],"id":30},{"start":{"row":71,"column":28},"end":{"row":72,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":78,"column":3},"end":{"row":79,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":79,"column":0},"end":{"row":79,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":79,"column":2},"end":{"row":90,"column":3},"action":"insert","lines":["","//when user clicks on easy button","document.getElementById(\"easy\").addEventListener(\"click\", function() {","  difficultyLevel = \"easy\";","  $(\"#main\").show();","  getPokemonData();//pull api data","  $('#pokedex').hide();","  $(\".pokemon-image\").css(\"filter\", \"\");","  $(\".levels\").hide();//hide levels buttons","  $(\".bounce\").hide();//remove pokemon animation","  $('#main').css(\"height\",\"450px\");//increase box size to accomodate pokemon image","});"],"id":32}],[{"start":{"row":90,"column":3},"end":{"row":91,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"insert","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":986.4375,"scrollleft":0,"selection":{"start":{"row":92,"column":0},"end":{"row":92,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":63,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1574503936594}