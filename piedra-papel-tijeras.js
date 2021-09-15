// let edad = parseInt(prompt("Ingrese su edad"));

// let bandera = 0;

// while (bandera == 0) {   
//     if (isNaN(edad)) {       
//         edad = prompt("Ingreso un dato incorrecto... ingrese su edad");
//     } else {
//         if (edad > 18) {
//             console.log("Es mayor de edad");
//         } else {
//             console.log("Es menor de edad");
//         };
//         bandera = 1;        
//     };
// };


//JUEGO DE PIEDRA, PAPEL Y TIJERA
let jueguemos = confirm("¿Quiere jugar piedra-papel-tijeras?");
let cont = 0;

if (jueguemos) {
    while (cont == 0) {
        let juego = parseInt(prompt("JUGUEMOS!! piedra digita 1, papel digita 2, tijeras digita 3"));
        let maquina = parseInt(Math.random() * 3 + 1);
        if (isNaN(juego) || juego > 3) {
            juego = prompt("Ingreso un dato incorrecto... piedra digita 1, papel digita 2, tijeras digita 3");
        } else {
            
            if (juego == 1) {
                if (maquina == 1) {
                    alert("empatee piedra - piedra");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else if (maquina == 2) {
                    alert("gane!!.... papel - piedra");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else {
                    alert("perdi :( !!.... tijeras - piedra");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                };

            } else if (juego == 2) {
                if (maquina == 1) {
                    alert("perdi :( .... piedra - papel");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else if (maquina == 2) {
                    alert("empate!!.... papel - papel");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else {
                    alert("gane!!.... tijeras - papel");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                };

            } else {
                if (maquina == 1) {
                    alert("gane!!! :( .... piedra - tijeras");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else if (maquina == 2) {
                    alert("perdi!! :(  papel - tijeras");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else {
                    alert("empate .... papel - papel");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                };
            };

        };
    };
};