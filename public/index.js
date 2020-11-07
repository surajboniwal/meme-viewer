const Http = new XMLHttpRequest()
const url = "https://meme-api.herokuapp.com/gimme"
const memeImage = document.querySelector('#meme')

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        Http.open("GET", url)
        Http.send()        
    }
}

Http.onreadystatechange = function(e){
    memeImage.src = JSON.parse(Http.responseText).url
    console.log(JSON.parse(Http.responseText).url)
}