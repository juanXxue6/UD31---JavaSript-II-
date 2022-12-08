let array = [[2,0], [3,0], [4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]];
let cadena = ["cadena2","cadena3","cadena4","cadena5","cadena6","cadena7","cadena8","cadena9","cadena10","cadena11","cadena12"]


for (let index = 0; index < 36000; index++) {
  let numero1 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
  let numero2 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

  let resultado = numero1 + numero2;

  for (let index = 0; index < array.length; index++) {
    if(resultado == (index + 2)){
      array[index][1]++;
    }
    
  }
}

for (let index = 0; index < cadena.length; index++) {
  console.log(cadena[index]);
  console.log(array[index][1])
  document.getElementById(cadena[index]).innerHTML = "Numero de veces salido el numero " + (index+2) + " " + array[index][1];
  
}

