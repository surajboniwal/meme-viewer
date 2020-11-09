const Http = new XMLHttpRequest()
const url = "https://meme-api.herokuapp.com/gimme"
const memeImage = document.querySelector('#meme')
var image

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        Http.open("GET", url)
        Http.send()        
    }
    if(e.keyCode == 67){
        var tempInput = document.createElement("input")
        tempInput.value = JSON.parse(Http.responseText).url
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand("copy")
        document.body.removeChild(tempInput)   
    }
}

Http.onreadystatechange = function(e){
    image = JSON.parse(Http.responseText).url
    memeImage.src = image
}