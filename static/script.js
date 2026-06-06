let display = document.getElementById("display");
let history = document.getElementById("history");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function calculate(){

try{

let expression = display.value;

let result = eval(expression);

let item = document.createElement("li");

item.textContent =
expression + " = " + result;

history.prepend(item);

display.value = result;
}

catch{

display.value = "Error";
}
}

function updateTime(){

let now = new Date();

document.getElementById("datetime")
.innerHTML =
now.toLocaleDateString() +
"<br>" +
now.toLocaleTimeString();
}

setInterval(updateTime,1000);

updateTime();
