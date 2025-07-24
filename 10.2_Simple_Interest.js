/*

// Run in on browser, prompt doesn't work in node environment


// Example 1: 
let p = parseFloat(prompt("Enter value of (p): "));
let r = parseFloat(prompt("Enter value of (r): "));
let t = parseFloat(prompt("Enter value of (t): "));



function simpleInterest(p,r,t){
    let SI = (p*r*t)/100;
    return SI;
}

console.log("The simple interest is: " + simpleInterest(p,r,t));
*/





// Example 2:
let array = ["principle (p)", "rate (r)", "time (t)"];
let values = []; 

for(i=0; i<array.length; i++){
    let userInput = parseFloat(prompt(`Enter ${array[i]}: `));
    values.push(userInput);
}

let p = values[0];
let r = values[1];
let t = values[2];

function simpleInterest1(p,r,t){
    let si = (p*r*t)/100;
    return si;
}

console.log(simpleInterest1(p,r,t));


