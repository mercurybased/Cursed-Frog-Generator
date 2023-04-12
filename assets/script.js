
var selection = document.getElementById("selection");
var btnSelect = document.createElement("h4");
var answerModal = document.querySelector("#modal1")
var instance;
var type;


var funFactsUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
function loadFunFact() {
    type = "fact"
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
    type = "zen"
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
    type = "joke"
instance.close()
  fetch(jokesUrl)
    .then((response) => response.json())

    .then(function (data) {
      console.log(data);
      //if error statement
    //   if (jaskdhf) {
    //     loadJokes()
    //     return
    //   }
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


//create bookmark star for user to select if they want to save that quote
var bookmark = document.getElementById("bookmark-btn")
bookmark.addEventListener("click", addToLocalStorage)
//when that star is highlighted, the quote is then added to local storage-- when star is clicked a function is run
// star click? run addToLocalStorage function
var wisdomArray = JSON.parse(localStorage.getItem("wisdom")) || []
function addToLocalStorage(){
    // where this button is clicked, grab the information from the parent/siblings/children of the button, set it to variables, and take that iformation, turn it into an object, push the object into the wisdomArray, and THEN use setItem
    var userSaved = btnSelect.textContent
    // figure out which one they got
    
    var completeObject = { [type]: userSaved}
    wisdomArray.push(completeObject)
    localStorage.setItem("wisdom", JSON.stringify(wisdomArray))
}


//when the quote is added to local storage, then the quote is displayed in a text box on the side labeled "Saved Wisdom"

//"saved Wisdom" appears only once the star is selected
//