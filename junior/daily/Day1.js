//
//Day 1
//
/*
  slice(1) -  Returns an array of every element past the 0th/first, 
  						leaving the original array untouched

  classList() - Array of classes on an element;
  						Has 'contains' method;

  className() - String of classes on an element

  concat - Does not change original array. Need to use assignment to save changes. 

  Assignment - RHS executes before LHS

  Variables - Point to values; do *not* contain them

  Lexical scope  - Determined by code, as written. 

  Runtime scope - Determined by when function is called

  Returning Variables - Can only return their values, not the variables themselves

  Garbage collection - when a runtime scope/execution context end, variables & values w/in function are garbage collected

  Closure - Created when a function contains a variable defined outside it's own scope

  Each time a function is declared, a fresh closure/sheet of paper is created. 

  Objects do not contain values, they contain variables that point to values. 

  Object 

*/

//
//Parameter 'this'
//

function inc(x) { 
	return x + 1;
}


function greetFn(){
	return this.name + "says hi"; //'this' is here a hidden parameter, of unknown value until greet is called
}

var alice = {
	name: "Alice",
	greet: greetFn
};

alice.greet() //==> "Alex says hi"

window.name = "Suzy";
function greetWeird(){
	this.name = "Bob";
	return function(){
		return this.name;
	}
}

//
// Randon Notes
//

Recursion

Success at Recursion
- Find a minimal set of steps that take input
- Do something with one part of the input
- Repeat steps for smaller part

1. Must wait on 'first' step before finishing <= Base Case
2. Pretend that your function already works 
3. Think JS is going to copy code and start running that.

*/

function sum(numbers){
  if ( numbers.length === 0 ) { return 0; }

  var numbersBehindMe = numbers.slice(1);
  //slice(1) returns an array of every element passed the 0th/first, 
  //leaving the original array untouched
  var sumBehindMe = sum(numbersBehindMe);
  var finalSum = number[0] + sum(numbersBehindMe);

  return finalSum;
}

var get ElementsByClassName = function(className){
  return findElements(className, document.body)
};

//(String, DomElement) => Array(DomElement)
function findElements(className, currentElem) {
  var results = [];

  if (currentElem.classList.contains(className)){
    results.push(currentElem);
  }

  for (var i=0; i < currentElem.children.length; i++){
    var child = currentElem.children[i];
    var childResult = findElements(className, child);
    childResult //=> Array(DomElement)
    results = results.concat(childResult);
  }

  return results;

}

var result = 0;

for (var i=0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
    console.log(result);
    result += i;
    console.log(result)
  }, 1000);
}



