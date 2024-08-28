function arreglo(num){
    const numPar=[];
    for(const i of num ){
        if(i%2===0){
            numPar.push(i);
        
        }
    }
    return numPar;
}
const pares=[1,2,3,4,5];
const resultado=arreglo(pares);
console.log(resultado); 