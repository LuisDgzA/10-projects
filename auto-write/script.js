const message = ["Made By LuisDgzA", "Web development", "Front end Jr."]
const text = document.getElementById('text')

var cont = 1
var contMessage = 0
function writeText(){
    if (cont == 0){
        cont = 1
        contMessage = (contMessage+1)%message.length
    }
    text.innerText = message[contMessage].slice(0, cont)
    cont = (cont + 1) % (message[contMessage].length + 1)
    
    
}
setInterval(writeText, 150)