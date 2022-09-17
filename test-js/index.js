/**
 *  ANTES DE CONTINUAR CON EL CURSO JS-PRACICO
 * EVALUAREMOS UNOS CONCEPTOS 
 *  * 
 */

/**
 * 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
 Es un espacio en memoria que nos permite
 almacenar datos. 

¿Cuál es la diferencia entre declarar e 
inicializar una variable?
R = Inicializar es cuando la variable ya
contiene datos y declarar es cuando aun no 
tenemos datos.

¿Cuál es la diferencia entre sumar 
números y concatenar strings?
R = Sumar entre numeros implica no tener
una cadena de texto '10'.

¿Cuál operador me permite sumar o 
concatenar?
R  = +
*/

/**
 * 2️⃣ Determina el nombre y tipo de 
 * dato para almacenar en variables la 
 * siguiente información:
Nombre ( String )
Apellido (String)
Nombre de usuario en Platzi (String)
Edad (int o number)
Correo electrónico (String)
Mayor de edad (int )
Dinero ahorrado (int o float)
Deudas (int o float)
 */


/*
3️⃣ Traduce a código JavaScript las 
variables del ejemplo anterior y deja tu 
código en los comentarios.

*/
const name = 'Rafael';
const lastName = 'Huerta';
const namePlatzi = 'huertaRafael';
const age = 20;
const email  = 'rafael@gmail.com';

// un if para saber si es mayor de edad 
if (age >= 18 ){
    console.log("Eres mayor de edad");
}
else{
    console.log('Es menor de edad');
}

let dineroAhorrado = 1200;
let deuda = 300;

if(dineroAhorrado < 0){
    console.log('No tengo dinero ahorrado');
}
else{
    console.log('Tengo ' +dineroAhorrado+' dinero ahorrado');
}

/**
 * 4️⃣ Calcula e imprime las 
 * siguientes variables a partir de 
 * las variables del ejemplo 
 * anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

*/

const r = name + " "+lastName;
console.log(r);

const saldoFinal = ( dineroAhorrado > deuda ?
    dineroAhorrado - deuda: "tengo "+deuda+" de deudas" );

console.log(saldoFinal);

