alert("Hola! Vamos a encontrar los numeros primos menores o iguales a el numero que me des");

let contador = 0;

while(contador === 0){
    let numero = parseInt(prompt("Ingresa hasta que numero quieres que calculemos los numeros primos"));

    if(numero<0){
        alert("El numero debe ser un entero positivo, es decir, mayor a 0");
    }else{
        contador++;
        numeroPrimo(numero);
    }
}

function numeroPrimo(x) {
    let numerosPrimos = [];
    for (let i = 2; i <= x; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }

    if (numerosPrimos.length > 0) {
        // Se usa join que es un metodo de arrays para unir todos los elementos de un array, en parentesis es el separador
        alert("Los números primos son: " + numerosPrimos.join(", "));
    } else {
        alert("No hay números primos en el rango dado.");
    }
}

function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}