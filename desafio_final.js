function numerosIniciales() {
    let numerosIniciales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let arregloFinal = [];
    for (let i = 0; i < numerosIniciales.length; i++) {
        if (numerosIniciales[i] % 2 == 0) {
            arregloFinal.push(numerosIniciales[i]);
        }
    }
    console.log(arregloFinal);
}
numerosIniciales();

//= asignación
//==comparación
//=== comparación estricta
// prueba();
// function prueba(){
//     // let num1="5";
//     // let num2="5";
//     // if(num1===num2){
//     //     alert("Son iguales");
//     // }else{
//     //     alert("No son iguales");
//     // }
//     console.log("división"+ 4/4);
//     console.log("módulo"+ 24.5%4);
// }