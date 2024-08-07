// Funkce

function greetings() {
  console.log("Hello world!");

}
;
// greetings();

function secti(cislo1, cislo2) {
  let soucet = cislo1 + cislo2;
  return soucet;
}

// console.log(secti (5, 8));

function obarviNaCerveno() {
 // ziskat element obdelniku  (to get the element)
let obdelnik = document.querySelector(".obdelnik");
 // obarvit na cerveno (to color the element)
obdelnik.style.backgroundColor = "darkred";
}

// obarviNaCerveno();

function obarviNaModro() {
  // ziskat element obdelniku  (to get the element)
 let obdelnik = document.querySelector(".obdelnik");
  // obarvit na cerveno (to color the element)
 obdelnik.style.backgroundColor = "blue";
 }

// obarviNaModro();

// Task 1: Write a function that colors a rectangle with a color chosen by the user.

function colorRectangle(color) {
  let rectangle = document.querySelector(".obdelnik");
  rectangle.style.backgroundColor = color;

}


// colorRectangle("pink");



// Task 2: Write a function calculator that takes 2 arguments (2 numbers). 
// The function will also take from the user which type of mathematical operation 
// to perform on these two numbers. (The user will enter the operation symbol +, -, *.) 
// Using an if-else block, determine which operation needs to be performed, 
// and provide the result of the operation to the user using an "alert".



function myCalculator(num1, num2, operation) {
  // Variable to store the result
  let result;

  //what operation to perform
  if (operation === "+"){
    result = num1 + num2;
  } else if (operation === "-"){
    result = num1 - num2;
  } else if (operation === "*"){
      result = num1*num2;
    } else if (operation === "/"){
      result = num1/num2;
    } else {
      alert("Invalid operation!");
      return;
    }
    alert("The result is: " + result)
  
}

//e.g.

// myCalculator(5, 10, "+");






// Události
