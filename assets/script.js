//random jokes api
var jokesUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode'
fetch(jokesUrl)
    .then(response => response.json())

    .then(data => console.log(data))

//zen quotes api
//will need
var zenUrl = 'https://type.fit/api/quotes'
fetch(zenUrl)
    .then(response => response.json())

    .then (data => console.log(data))

//random fun facts api
var funFactsUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
fetch(funFactsUrl)
    .then(response => response.json())

    .then (data => console.log(data))


//random frog gifs api
var frogGifs = 'https://api.giphy.com/v1/gifs/random?api_key=DnsD8DFnTDfvOKFUyaNiJpmBRJ0k8dGm&tag=frog&rating=g'
fetch(frogGifs)
    .then(response => response.json())

    .then (data => console.log(data))