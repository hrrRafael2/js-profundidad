/*
1️⃣ Responde las siguientes preguntas en la
 sección de comentarios:

¿Qué es una función?
R = Bloque de codigo, que nos permite almacenar
instruciones o valores para ser reutilizadas

¿Cuándo me sirve usar una función en mi código?
R = Cuando queremos separar codigo , y tener un
codigo mas legible. 

¿Cuál es la diferencia entre parámetros y argumentos de una función?
Parametros se le dice cuando le pasamos los valores
y argumentos cuando la llamamos funcion(1,2)

*/

/*
2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes 
por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ",
 pero prefiero que me digas " + nickname + ".");

*/

function getInfo(name,lastName,nickName){
    console.log("Mi nombre es: "+name + " "+lastName+
    "pero prefiero que me digan "+nickName);
}
getInfo("Rafael",'Huerta','Rafa');

