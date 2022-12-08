
/*
console.log(date);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
*/


setInterval(tiempo, 1000);

function tiempo() {
  var date = new Date();
  document.getElementById("hour").innerHTML = date.getHours();
  document.getElementById("minute").innerHTML = date.getMinutes();
  document.getElementById("second").innerHTML = date.getSeconds();

  //document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}