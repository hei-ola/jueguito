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
        let juego = parseInt(prompt("JUGUEMOS!! piedra digita 1, papel digita 2, tijeras digita 3 no da el cancelar jajajja se jodio pa que dijo q si queria jugar"));
        let maquina = parseInt(Math.random() * 3 + 1);
        if (isNaN(juego) || juego > 3) {
            juego = prompt("Ingreso un dato incorrecto... piedra digita 1, papel digita 2, tijeras digita 3 no da el cancelar jajajja se jodio pa que dijo q si queria jugar");
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
                    alert("ganaste!!.... papel - piedra");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else {
                    alert("perdiste :( !!.... tijeras - piedra");
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
                    alert("perdiste :( .... piedra - papel");
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
                    alert("ganaste!!.... tijeras - papel");
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
                    alert("ganaste!!! :( .... piedra - tijeras");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else if (maquina == 2) {
                    alert("perdiste!! :(  papel - tijeras");
                    let otraVez = confirm("¿Desea seguir jugando?");
                    if (otraVez) {
                        cont = 0;
                        maquina = parseInt(Math.random() * 3 + 1);
                    } else {
                        cont = 1;
                    };
                } else {
                    alert("empate .... tijeras - tijeras");
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