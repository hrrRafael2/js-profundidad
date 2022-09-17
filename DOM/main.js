// console.log('Hi..');


/**
 * La funcion document. Trae con ella distintas metodos que podemos 
 * utilizar. 
 * document.querySelector -- NOS PERMITE SELECIONAR EL ELEMENTO QUE LE PASEMOS COMO ARGUMENTO('h1')  
 * 
 */

const h1 = document.querySelector('h1');
// console.log(h1); // h1 --> etiqueta

/* con querySelector , no solo le podemos pasar etiquetas si no que tambien
  le podemos pasar la clase x o un id como se muestra a continuacion
*/

// selecionamos la etiqueta p con la clase .parrafo
const p = document.querySelector(".parrafo");
console.log(p);

// selecionamos la etiqueta p con el id .. idP
const idP = document.querySelector("#idP");
console.log(idP);

// cada etiqueta contiene propiedades. 


console.log(
    {
        h1,
        p,
        idP,
    }
)