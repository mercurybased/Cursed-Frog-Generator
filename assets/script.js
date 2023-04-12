//fun fact
var selection = document.getElementById("selection");
var btnSelect = document.createElement("h4");
var answerModal = document.querySelector("#modal1")
var instance;

var funFactsUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
function loadFunFact() {
instance.close()
  fetch(funFactsUrl)
    .then((response) => response.json())

    .then(function (data) {
      console.log(data);
      btnSelect.textContent = data.text;
      selection.append(btnSelect);
    });
}

//mediative
var zenUrl = "https://type.fit/api/quotes";

function loadZen() {
instance.close()
  fetch(zenUrl)
    .then((response) => response.json())

    .then(function (data) {
      var zenItem = Math.floor(Math.random() * data.length);
      var zenQuote = data[zenItem].text;
      var zenAuthor = data[zenItem].author;
      btnSelect.textContent = zenQuote + "  " + zenAuthor;
      selection.append(btnSelect);
    });
}

//jokes
var jokesUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode";

function loadJokes() {
instance.close()
  fetch(jokesUrl)
    .then((response) => response.json())

    .then(function (data) {
      console.log(data);
      var jokeSetup = data.setup;
      var jokeDelivery = data.delivery;
      btnSelect.textContent = jokeSetup + "......." + jokeDelivery;
      selection.append(btnSelect);
    });
}


//event listeners for modal
document.getElementById("fact").addEventListener("click", loadFunFact);
document.getElementById("zen").addEventListener("click", loadZen);
document.getElementById("joke").addEventListener("click", loadJokes);


//frog gif
var winstonGif = document.getElementById("winston-gif");

var frogGifs =
  "https://api.giphy.com/v1/gifs/random?api_key=DnsD8DFnTDfvOKFUyaNiJpmBRJ0k8dGm&tag=frog&rating=g";
fetch(frogGifs)
  .then((response) => response.json())

  .then(function (data) {
    console.log(data);
    winstonGif.src = data.data.images.downsized_medium.url;
  });



//modal
document.addEventListener("DOMContentLoaded", function () {
  var elem = document.querySelector("#modal1");
  instance = M.Modal.init(elem, { dismissible: true });
  
});

