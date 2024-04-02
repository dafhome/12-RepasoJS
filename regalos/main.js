// 6 - Stock de Papa Noel
// Desde Finlandia, te encargan que te hagas cargo del stock de Papa Noel! Tienes una cantidad inicial de regalos para repartir (que sea más de 100). Puedes inventártela, o pedirla al usuario. Tu eres un duende repartidor. Papa Noel te va preguntando: ¿cuántos regalos has repartido hoy? Y le vas respondiendo, y se van mostrando la cantidad de regalos que quedan en pantalla. Cuando queden menos de 100 del stock, avisar ('ojo, quedan menos de 100 regalos'). Cuando se acaben los regalos, mostrar mensaje : “misión cumplida. Hasta el año que viene!”

//Ejercicio 6
let regalosCantidad;

function regalos() {
    regalosCantidad = parseInt(prompt("Indicame cuantos regalos tiene PapaNoel, recuerda que siempre tiene más de 100 regalos"));
    let validar = false;
    while (validar == false) {
        if (regalosCantidad < 100 || (isNaN(regalosCantidad)) == true) {
            regalosCantidad = parseInt(prompt("Recuerda que siempre tiene más de 100 regalos. ¿Cuantos regalos hay?"));
        }
        else {
            validar = true;
            mostrarRegalos(regalosCantidad);
        }
    }
}

function mostrarRegalos(a) {
    document.getElementById("regalos").innerHTML = a;
}

regalos();

function contarRegalos() {
    let regalosEntregados;
    //  = parseInt(prompt("Hola duende, soy PapaNoel. ¿Cuantos regalos has entregado hoy?"));
    alert("Hola duende, soy PapaNoel. Te iré preguntando cuantos regalos entregas cada día.");
    let validar = false;
    let avisoCantidad = false;
    while (validar == false) {
        if (regalosCantidad<100&&!avisoCantidad){
            alert("¡Ojo! Te quedan menos de 100 regalos.");
            avisoCantidad=true;
        }
        else if (regalosCantidad > 0 && (isNaN(regalosCantidad)) == false) {
            regalosEntregados = parseInt(prompt("¿Cuantos regalos has entregado hoy?"));
            if ((regalosEntregados <= regalosCantidad)) {
                regalosCantidad = regalosCantidad - regalosEntregados;
                mostrarRegalos(regalosCantidad);
                alert(`Enhorabuena! Has entregado ${regalosEntregados} y quedan ${regalosCantidad}`);
            }

            else if (regalosEntregados > regalosCantidad) {
                alert("¿Estas seguro?. No puedes haber entregado más regalos de los que tenemos.");
            }
            else {
                alert("¿Estas seguro?. El valor introducido no es un número.");
            }
        }

        else {
            validar = true;
            mostrarRegalos(regalosCantidad);
            alert(`Enhorabuena! Ya has entregado todos los regalos`);
        }
    }
}

contarRegalos();