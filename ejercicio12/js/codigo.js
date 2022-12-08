var date1 = "12/11/22"
var date2 = "fa-11/22"
var dateValidator = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g;

console.log(dateValidator.test(date1));
console.log(dateValidator.test(date2))