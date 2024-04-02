//Ejercicio 1

function bucleReversivo() {
    document.getElementById("bucle").innerHTML = "Aqui mostraremos el bucle desde 20 a 5: <br>";
    for (let i = 20; i >= 5; i--) {
        document.getElementById("bucle").innerHTML += `${i} <br>`;
    }
}

// bucleReversivo();

//Ejercicio 2
function bucleCuadrados() {
    document.getElementById("cuadrados").innerHTML = "Aqui mostraremos los cuadrados entre 3 y 33 <br>";
    for (let i = 3; i <= 33; i++) {
        document.getElementById("cuadrados").innerHTML += `${Math.pow(i, 2)} <br>`;
    }

}

// bucleCuadrados();

//Ejercicio 3
function tiempo(a, b) {
    document.getElementById("tiempo").innerHTML = `<br>El próximo ${a} hará ${b}<br>`;
    console.log(a);
    console.log(b);
}

function pedirTiempo() {
    let dia = prompt('Indicame un día de la semana');
    let temp = prompt('¿Que día hará? (Indica si hará Sol, Lluvia, Viento o Nieve.');
    tiempo(dia, temp);
}
// pedirTiempo();


//Ejercicio 4
const recetas = ["Pollo al horno con verduras",
    "Spaghetti a la carbonara",
    "Ensalada César",
    "Sopa de tomate",
    "Tacos de carne asada",
    "Risotto de champiñones",
    "Lasaña de carne",
    "Salmón a la parrilla",
    "Paella valenciana",
    "Hamburguesas caseras"];

function mostrarRecetas() {
    document.getElementById("recetas").innerHTML = "<br>Las recetas del array son:<br><br>";
    for (let i = 0; i < recetas.length; i++) {
        document.getElementById("recetas").innerHTML += `${i + 1}: ${recetas[i]} <br>`;
    }

}

// mostrarRecetas();


//Ejercicio 5
const lenguajes = [
    "JavaScript",
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "TypeScript",
    "PHP",
    "Swift",
    "Ruby"];

function mostrarLenguaje() {
    let seguir = false;
    while (seguir == false) {
        let listado = prompt("Tengo 10 lenguajes de programación. Indicame el número del que quieres visualiza entre 1 y 10:");
        console.log(listado);
        console.log(listado.toLowerCase());
        if (listado > 0 && listado <= lenguajes.length) {
            alert(`El lenguaje elegido es: ${lenguajes[listado - 1]}`);
        }
        else if (listado.toLowerCase() == "cero" || listado == 0) {
                seguir = true;
            }
            else {
                alert("Por favor, introduce un número entre 1 y 10.");
            }
        }
    }


mostrarLenguaje();