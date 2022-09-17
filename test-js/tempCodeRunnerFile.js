function getSus( msj ){
    const susc = ['Free', 'Basic', 'expert', 'expertDuo'];
const result = ['Solo puedes tomar los cursos gratis',  "Puedes tomar casi todos los cursos de Platzi durante un mes","Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" ];

    for(let i = 0; i < susc.length; i++){
         if(  msj === susc[i]){
            return result[i];
         }
    }
    return 'No existe';

}

console.log(  getSus("xxxss")  );