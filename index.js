const axios = require("axios");
let yaSeEjecuto = false;

const correrCodigoAlas23 = () => {

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();

    //if(hour === 18 && yaSeEjecuto == false){

        let url = `https://api.callmebot.com/whatsapp.php?phone=5491133521081&text=Clarita+son+las+${hour + ':' + minute}+tenes+que+tomar+la+pastilla+%F0%9F%92%8A&apikey=9497027`

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

//INTERVALO DE PRUEBA CADA 2 SEGUNDOS
let intervalo = setInterval(correrCodigoAlas23, 2000);

//INTERVALO REAL CADA 30 MINUTOS
// let intervalo = setInterval(correrCodigoAlas23, 1800000);
