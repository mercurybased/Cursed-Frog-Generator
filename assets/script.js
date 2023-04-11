async function loadJokes() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    const names = await response.json();
    console.log(names); 
    const data = await names
    console.log(data)
    return data
  }


async function loadZen() {
    const response = await fetch('https://type.fit/api/quotes');
    const names = await response.json();
    console.log(names); 
    const data = await names
    console.log(data)
    return data
  }


async function loadFunFact() {
    const response = await fetch('https://type.fit/api/quotes');
    const names = await response.json();
    console.log(names); 
    const data = await names
    console.log(data)
    return data
  }

//random jokes api
// function getJokes(){
//     var jokesUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode'
//     fetch(jokesUrl)
//     .then(response => response.json())
//     .then (data => console.log(data))
//     .catch(function (err) {
//         console.error(err);
//       });
  

// }


//zen quotes api
//will need math.random
var zenUrl = 'https://type.fit/api/quotes'
fetch(zenUrl)
    .then(response => response.json())

    // .then (data => console.log(data))

//random fun facts api
var funFactsUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
fetch(funFactsUrl)
    .then(response => response.json())

    // .then (data => console.log(data))


//random frog gifs api
//append to page permanently

var frogGifs = 'https://api.giphy.com/v1/gifs/random?api_key=DnsD8DFnTDfvOKFUyaNiJpmBRJ0k8dGm&tag=frog&rating=g'
fetch(frogGifs)
    .then(response => response.json())

    // .then (data => console.log(data))



// document.getElementById("genButton").addEventListener("click", )


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
//             response.textContent=apiResponse.delivery

//           break;
//         case "zen":
//           break;
//         case "fact":
//           break;
//         default:
         
//       }
// }



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, {dismissible:true});
    
//   });
  



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {dismissible:true});
    console.log(instances)
  });








// var x = 5
// var z = 10

// function countSum(a,b) {
//     return a + b 
// }

// var result = countSum(x,z)













