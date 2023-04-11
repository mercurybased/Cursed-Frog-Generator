// async function loadJokes() {
//     const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
//     const names = await response.json();
//     console.log(names); 
//     const data = await names
//     console.log(data)
//     return data
//   }


// async function loadZen() {
//     const response = await fetch('https://type.fit/api/quotes');
//     const names = await response.json();
//     console.log(names); 
//     const data = await names
//     console.log(data)
//     return data
//   }

// async function loadFunFact() {
//     const response = await fetch('https://type.fit/api/quotes');
//     const names = await response.json();
//     console.log(names); 
//     const data = await names
//     console.log(data)
//     return data
//   }

//random jokes api
function getJokes(){
    var jokesUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode'
    fetch(jokesUrl)
    .then(response => response.json())
    .then (data => console.log(data))
    .catch(function (err) {
        console.error(err);
      });
}

//zen quotes api
//will need math.random
// var zenUrl = 'https://type.fit/api/quotes'
// fetch(zenUrl)
//     .then(response => response.json())

//     .then (data => console.log(data))


// var funFact = document.getElementById("fact")


function loadFunFact(){

var funFactsUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
fetch(funFactsUrl)
    .then(response => response.json())

    .then (function(data){
        console.log(data)
    })
}

var winstonGif = document.getElementById("winston-gif")

var frogGifs = 'https://api.giphy.com/v1/gifs/random?api_key=DnsD8DFnTDfvOKFUyaNiJpmBRJ0k8dGm&tag=frog&rating=g'
fetch(frogGifs)
    .then(response => response.json())

    .then (function(data){
        console.log(data)
        winstonGif.src = data.data.images.downsized_medium.url;
    })

document.getElementById("fact").addEventListener("click", loadFunFact)

//1. which button triggers apis
// 
//2. get user value from click
//3. run the function that correlates with users choice
//4. display results in another container

// var choice 
// var choices = document.getElementById("user-choice")
// var displayResponse = document.getElementById("response")
// choices.addEventListener('click', getValue)
// function getValue(event){
//     console.log("events value =",event.target.value)
//     console.log("events =",event)
    
//     choice = event.target.value
//     getResponse(choice)
// }

// async function getResponse(userChoice) {
//     switch(userChoice) {
//         case "joke":
//             console.log("user picked joke")
//             var apiResponse = await loadJokes()
//             console.log(apiResponse.setup)
//             response.textContent=apiResponse.setup

//           break;
//         case "zen":
//           break;
//         case "fact":
//           break;
//         default:
         
//       }
// }

  












// var x = 5
// var z = 10

// function countSum(a,b) {
//     return a + b 
// }

// var result = countSum(x,z)













