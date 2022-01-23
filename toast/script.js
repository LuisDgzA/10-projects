var objeto = [
    {
        "emoji":"&#128512",
        "color":"#47d664",
        "title":"Success",
        "content":"Lorem, ipsum dolor."
    },
    {
        "emoji": "&#128552",
        "color": "#fe335a",
        "title": "Error",
        "content": "Lorem ipsum dolor sit."
    },
    {
        "emoji": "&#128527",
        "color": "#2d86e7",
        "title": "Info",
        "content": "Lorem ipsum dolor sit amet consectetur."
    },
    {
        "emoji": "&#128561",
        "color": "#fec01d",
        "title": "Warning",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quia?."
    },
]

var random = Math.floor(Math.random() * (4 - 0));

const icon = document.querySelector('#iconoEmoji');
const titulo = document.getElementById('tituloContenido');
const mensaje = document.querySelector('.message');


icon.innerHTML = objeto[random].emoji;
titulo.textContent = objeto[random].title;
mensaje.textContent = objeto[random].content;
icon.parentElement.style.borderLeft = `15px solid ${objeto[random].color}`;
icon.style.background = objeto[random].color;



