var number1 = "";
var number2 = "";
var secondNumber = false;
var simbolToCalculate = '';
var stringToShow = ""

function addNumber(numberToAdd){


if(!secondNumber){
  number1 += numberToAdd;
  stringToShow += numberToAdd;
  document.getElementById("screen").innerHTML = stringToShow;
}else if(secondNumber){

  number2 += numberToAdd;
  stringToShow += numberToAdd;
  document.getElementById("screen").innerHTML = stringToShow;
}


}

function simbol(simbol){

  if (simbolToCalculate == ''){
    simbolToCalculate = simbol
    secondNumber = true;
    stringToShow = stringToShow + " " + simbolToCalculate + " ";
  }else if(simbolToCalculate != ''){
    calcular()
  }
  
}

function fullClear(){

number1 = "";
number2 = "";
simbolToCalculate = '';
stringToShow = " ";
document.getElementById("screen").innerHTML = stringToShow;
secondNumber = false;
console.log("bbbb")
}

function calcular(){

  number1 = parseInt(number1);
  number2 = parseInt(number2);

switch (simbolToCalculate) {

  
  case '+':
    stringToShow = (number1 + number2)
    break;

    case '-':
      stringToShow = (number1 - number2)
      break;  

    case '/':
      stringToShow = (number1 / number2)
      break;   

    case '*':
      stringToShow = (number1 * number2)
      break;

      case '%':
        stringToShow = (number1 % number2)
        break;

      
  default:
    break;

}

number1 = stringToShow.toString();
document.getElementById("screen").innerHTML = stringToShow;
number2 = "";
simbolToCalculate = '';
}


function limpiar(){

  console.log("aa")

  if(secondNumber){
    stringToShow = number1 + " " + simbolToCalculate + " ";
    document.getElementById("screen").innerHTML = stringToShow;
    number2 = "";

  }
  else{
    fullClear();
  }
}
