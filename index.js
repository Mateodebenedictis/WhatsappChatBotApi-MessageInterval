const express = require('express');
let fetch = require('node-fetch')

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let yaSeEjecuto = false;

const arregloDeFrases = [
    'tenes+que+tomar+la+pastilla+%F0%9F%92%8A',
    'no+te+olvides+de+tomar+la+pastilla+%F0%9F%AB%B6%F0%9F%8F%BC',
    'es+hora+de+tomar+la+pastilla+%F0%9F%92%8A',
];

//elegir una frase random de arregloDeFrases
const elegirFrase = () => {
    const indice = Math.floor(Math.random() * arregloDeFrases.length);
    return arregloDeFrases[indice];
};

//FUNCION REAL

const correrCodigoAlas23 = () => {

    let date = new Date();
    //date.setHours( date.getHours() - 3);

    const hour = date.getHours();

    if(hour === 21 && yaSeEjecuto == false){

        let url = `https://api.callmebot.com/whatsapp.php?phone=5491133521081&text=Mateo+son+las+${date.toLocaleTimeString()}+${elegirFrase()}&apikey=9497027`
        //let url_clari = `https://api.callmebot.com/whatsapp.php?phone=5491136328326&text=Clarita+son+las+${date.toLocaleTimeString()}+${elegirFrase()}&apikey=1418364`
        yaSeEjecuto = true;

        //MENSAJE PARA CLARI
        // fetch(url_clari)
        // .then(res => res.json())
        // .then(json => console.log(json));

        //MENSAJE PARA MATEO
        fetch(url)
        .then(res => res.text())
        .then(text => console.log(text));
        
        
    } 

    
    if(hour !== 21){
        yaSeEjecuto = false;
        console.log('No es la hora');
    }

};



const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));

//INTERVALO REAL CADA 30 MINUTOS
let intervalo = setInterval(correrCodigoAlas23, 18000);