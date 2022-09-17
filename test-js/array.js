/**
 * 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
R = Estructura en donde almacenamos 
distintos tipos de datos. 

¿Qué es un objeto?
R = Es una colección de datos relacionados 
con múltiples variables con sus valores.

¿Cuándo es mejor usar objetos o arrays?
R = Cuando un elemento contiene mas informacion
relacionada se utiliza los objs , cuando los 
arrays contiene  informacion. 

¿Puedo mezclar arrays con objetos o incluso 
objetos con arrays?
R = 
Si, podemos guardar ambos datos en las dos
estructuras.


*/


function getArray(arr){
    console.log(arr[0]);
}

getArray(['Juan','Jose','Luis']);

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
// ahora lo haremos con un solo if y for 

/* analizando el problema
    existen cuatro suscribciones a platzi 
        free , basic , expert, expertDuo 
    dependiendo de la que elija el usuario le mostrara un msj en consola.     
*/

function getSus( msj ){
    const susc = ['Free', 'Basic', 'expert', 'expertDuo'];
   const result = ['Solo puedes tomar los cursos gratis',  "Puedes tomar casi todos los cursos de Platzi durante un mes", 
   "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" ];

    for(let i = 0; i < susc.length; i++){
         if(  msj === susc[i]){
            return result[i];
         }
    }
    return 'No existe';

}

console.log(  getSus("expert")  );


