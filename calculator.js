//Output Variables 
//Big Output
var bigOutput = document.getElementById("big-output");
bigOutput.textContent = "0";
//Previous Answer
var previousOutput = document.getElementById("previous-answer");
var previousOutputCode = "previousOutput = " + bigOutput.textContent + ";";
console.log(previousOutputCode);
previousOutput.textContent = eval(previousOutputCode);
console.log(previousOutput);

//AC
var ac = document.getElementById("ac");
ac.addEventListener("click", function(){
  bigOutput.textContent = "0";
  previousOutput = eval(previousOutputCode);
});
//DEL
var del = document.getElementById("del");
del.addEventListener("click", function(){
  bigOutput.slice(0, -1);
  previousOutput = eval(previousOutputCode);
});
//÷
var division = document.getElementById("÷");
division.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  bigOutput.textContent += " / ";
})
//1
var one = document.getElementById("one");
one.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "1";
  } else{
    bigOutput.textContent += "1";
  }
})
//2
var two = document.getElementById("two")
two.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "2";
  } else{
    bigOutput.textContent += "2";
  }
})
//3
var three = document.getElementById("three");
three.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "3";
  } else{
    bigOutput.textContent += "3";
  }
})
//X
var x = document.getElementById("x");
x.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  bigOutput.textContent += " * "
})
//4
var four = document.getElementById("four");
four.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "4";
  } else{
    bigOutput.textContent += "4";
  }
})
//5
var five = document.getElementById("five");
five.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "5";
  } else{
    bigOutput.textContent += "5";
  }
})
//6
var six = document.getElementById("six");
six.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "6";
  } else{
    bigOutput.textContent += "6";
  }
})
//+
var plus = document.getElementById("plus");
plus.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  bigOutput.textContent += " + ";
})
//7
var seven = document.getElementById("seven");
seven.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "7";
  } else{
    bigOutput.textContent += "7";
  }
})
//8
var eight = document.getElementById("eight");
eight.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "8";
  } else{
    bigOutput.textContent += "8";
  }
})
//9
var nine = document.getElementById("nine");
nine.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent = "0"){
    bigOutput.textContent = "9";
  } else{
    bigOutput.textContent += "9";
  }
})
//minus
var minus = document.getElementById("minus");
minus.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  bigOutput.textContent += " - ";
})
//0
var zero = document.getElementById("zero");
zero.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  if(bigOutput.textContent != "0"){
    bigOutput.textContent += "0";
  }
})
//.
var dot = document.getElementById("dot");
dot.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
  bigOutput.textContent += ".";
})
//=
var equal = document.getElementById("equal");
equal.addEventListener("click", function(){
  previousOutput = eval(previousOutputCode)
})