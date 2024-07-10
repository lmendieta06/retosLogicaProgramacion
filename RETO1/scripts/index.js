// SIEMPRE PONER DEFER RN EL HTMLNO OLVIDAR
// Leer el evento del formulario
document.querySelector(".formularioNombres").addEventListener('submit', (e) =>{
    // Evita que aparezca el codigo de envio en pantalla al enviar
    e.preventDefault();

    // Obtener el valor de los inputs en un arreglo
    const nombresExtraidos = document.getElementsByClassName("nombre");
    // Definir el arreglo donde se guardaran
    // El Set asegura que no hayan duplicados
    const nombres = new Set();
    

    for(let i=0; i<nombresExtraidos.length;i++){
        // Extrae el valor que se encuentre en esa posicion del arreglo
        // El .trim() Elimina espacios en blanco
        const nombre = nombresExtraidos[i].value.trim().toLowerCase();
        // Validar que no este en blanco
        if(nombre){
            nombres.add(nombre);
        }
    }

    // Obtener el lugar donde se mostraran resultados
    const nombresFinales = document.querySelector(".nombresResultado");
    // Limpiar el contenido que este
    nombresFinales.innerHTML = "";

    // Añade el elemento al HTML
    nombres.forEach(nombre =>{
        // Hacer que se vean con mayuscula inicial
        const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        nombresFinales.innerHTML += `<p>${nombreFormateado}</p>`;
    })
})