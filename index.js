const axios = require("axios");
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
    date.setHours( date.getHours() - 3);

    const hour = date.getHours();
    const minute = date.getMinutes();

    if(hour === 23 && yaSeEjecuto == false){

        let url = `https://api.callmebot.com/whatsapp.php?phone=5491133521081&text=Clarita+son+las+${date.toLocaleTimeString()}+${elegirFrase()}&apikey=9497027`

        yaSeEjecuto = true;

        axios.get(url)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    } 
    
    if(hour !== 23){
        yaSeEjecuto = false;
        console.log('No es la hora');
    }

};


//FUNCION DE PRUEBA
/*
const correrCodigoAlas23 = () => {

    let date = new Date();
    date.setHours( date.getHours() - 3);

    const hour = date.getHours();
    const minute = date.getMinutes();

    //if(hour === 18 && yaSeEjecuto == false){

        let url = `https://api.callmebot.com/whatsapp.php?phone=5491133521081&text=Clarita+son+las+${date.toLocaleTimeString()}+${elegirFrase()}&apikey=9497027`

        yaSeEjecuto = true;

        axios.get(url)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    //} 
    
    if(hour !== 18){
        yaSeEjecuto = false;
        console.log('No es la hora');
    }

};
*/

//INTERVALO DE PRUEBA CADA 20 SEGUNDOS
//let intervalo = setInterval(correrCodigoAlas23, 20000);

//INTERVALO REAL CADA 30 MINUTOS
let intervalo = setInterval(correrCodigoAlas23, 1800000);

