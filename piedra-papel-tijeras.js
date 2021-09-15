let empezarPartida =parseInt(prompt("JUGUEMOS!! piedra digita 1, papel digita 2, tijeras digita 3"));

Partida(empezarPartida);

function Partida(ingresoUsuario) {

    if (!isNaN(ingresoUsuario)) {
        console.log("ingreso " + ingresoUsuario);
        let maquina = parseInt(Math.random() * 3 + 1);

        if (maquina === ingresoUsuario) {
            alert("Empataste.....😎");
        };
        //si ingresa piedra
        if (ingresoUsuario == 1) {
            if (maquina == 2) {
                alert("GANASTE!!!.....🤩");
            } else if(maquina == 3) {
                alert("PERDISTE!!!.....😪");
            };

            //si ingresa papel
        } else if (ingresoUsuario == 2) {
            if (maquina == 1) {
                alert("GANASTE!!!.....🤩");
            } else if(maquina == 3) {
                alert("PERDISTE!!!.....😪");
            };
        } else {
            //si ingresa tijeras
            if (maquina == 1) {
                alert("PERDISTE!!!.....😪");
            } else if(maquina == 2){
                alert("GANASTE!!!.....🤩");
            };
        }; 
        otroIntento();       
    };    
};

function otroIntento() {
    let otraVez = confirm("¿Desea seguir jugando?");
    if (otraVez) {
        empezarPartida = parseInt(prompt("piedra digita 1, papel digita 2, tijeras digita 3"));
        Partida(empezarPartida);
    };
};





