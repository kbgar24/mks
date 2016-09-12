/*
Critical Coding Skills
- Debugging
- Problem Solving
- Domain Knowledge 

Sidepoints
----------
1. Always question your assumptions
2. Edit breakpoints!!! --> Uses conditional expression to set breakpoints

/*------------------------------------------------------/
											Data Structures
/*------------------------------------------------------/

### APIs
'Application Programming Interface'

1. What is an interface? 
		- A set of methods you use to interact with an element
		-


/*------------------------------/

### Stacks (LIFO - FILO) 
'Last In, First Out' --or-- 'First In, Last Out' <== Same-Same

Interface: 
	- Push
	- Pop
	- (somtimes) Peek

Great for: Building back button functionality


/*------------------------------/

### Queues (FIFO - LILO) 
'First in, First Out' --or-- 'Last In, Last Out' <== Same-Same

Interface:
	- Enqueue
	- Dequeue 

Great for: Issuing Instructions


/*------------------------------/
### Restricted Data Structures
	- Stacks & Queues are "restricted data structures"
	- Arrays are not. They can behave as either

*/


/*------------------------------------------------------------------/
												Coding Best Practices
/*------------------------------------------------------------------/
"Best Practices"

	-"What is the best practice for doing X?"
		==> 'How do you do X?'

	-'This is the best practice'
		==> 'Why?'

	Conjurer 					vs. 				Scribe
	--------											-------
* Get's shit done								* Meticulous understanding
* Ignores complexity						* Deep Depugging
* Intuitive leaps								* Mastery

Be a Conjurer! ==> Be a scribe selectively

*/
var account = function(initial){
	var balance = initial;

	var instance = {
		widthraw: function (amt) {
			balance -= amt;
			return balance;
		}
	var withdraw = function(amt){
		balance -= amt
		return balance
	}
	deposit: function(amt){
		balnce += amtreturn balance 
}
	
		return instance
	
}


/*------------------------------------------------------------------/
				Modularity vs Encapsulization vs Isolation vs Abstraction
/*------------------------------------------------------------------/

- Poor abstraction has a high cost: adds complexity
- Moularity: Factoring out similar code, or code that is re-usable
- Encapsulation: Drawing together related data
- Isolation: Degree to which different parts of the system interact with one another


#Good design
	
		Thin Interface
			- Keep interface simple

		Private Implementation
			- Hide unnecessary complexity

		Intuitive Abstractions
			- Easily understood interface


/*------------------------------------------------------------------/
															Decorators
/*------------------------------------------------------------------/
		
- Factor & reuse your code

- Abstracting code into functions:
	1. Don't retype logic
	2. Can easily modify code later

- Decorator: takes a function or object and changes it

*/

var carlike = function(obj, loc) {
	obj.loc = loc;
	obj.move = move;
	return obj;
}

var move = function(){ this.loc++ };

//Problem with above is that if move is called async, then 'this' will no longer be bound to a particular obj, 
//instead only the global obj:
var ben = {};
setTimeout(ben.move, 1000) //When timeout funs ben.move, this.loc will not be Ben!

//This style conserves memeory but 'this' may be wrong. Solution:

var carlike 


var carlike = function(obj, loc) {
	obj.loc = loc;
	obj.move = function(){obj.loc++ }; //this creates a closure around obj that will always be bound to the obj to whom this func belongs
	return obj;
}

//Downside of this style is that a new function, obj.move, will be creaed each time carlike is run
//This downside is often overcome b


/*------------------------------------------------------------------/
															Functional Classes
/*------------------------------------------------------------------/

# Decorates modify an object accepted as input
# Classes create new objects entirely   ***********************IMPORTANT!***********************
	1. Convention to name with a capital noun
	2. ****The var that points to the function is the "class"
	3. ****The function that makes the obj is called the "constructor"
	4. ****The obj created is called an "instance"
	5. Calling the constructor to create an instance is called 'instantiating'

*/

var thisFunction = function(){
	console.log(this);
	return function(){
		return console.log(this);
	}
};

var obj = {};

obj.thisFunction = thisFunction;

obj = {
	thisFunction: function(){
									var self = this;
									console.log(this); //<== this === obj
									return function(){
										return console.log(self); //<== this === window (global Object);
								}
}

obj.thisFunction()();


}

var Car = function(loc){
	var obj = {loc: loc};
	obj.move = function(){ obj.loc++; }; //Very memory intensive to constantly define same function across all instances
	return obj; 	
}

// ===> Bettter:

var Car = function(loc){
	var obj = {loc: loc};
	obj.move = move;
	return obj; 	
}

var move = function(){ this.loc++; }

//Problem here is that if you add new properties you have to add tem to both the 'Car' class as well as the in the global scope; 

// ===> Best:

var Car = function(loc) {
	var obj = {loc: loc};
	extends(obj, Car.methods);
	return obj;
}

Car.methods = {
	move: function(){ this.loc++ };
}

//Now new functions need only be declared once w/ Car.methods
//extends is not native to JS, part of jQuery or Lodash or similar

/*-----------------------------------------------------------------------/
														Prototypical Chains
/*-----------------------------------------------------------------------/

* Mechanism for getting objects to resemble other objects without copying
*/

Object.create(protoObj) // creates a new object, whose prototype will be protoObj

var obj1 = { a: 1 };
var obj2 = Object.create(obj1);
obj2.b = 2;
console.log(obj2.a) //===>  1

/*Only JS engine only looks up protoypal chain until prop is found

****** Alternative ***********/
var obj3 = extend({}, obj1); //creates a copy of obj1 in a one time operation


//If you change the source obj, Obj1, prototypes are the way to go:

obj1.z = 26;
console.log(obj2.z) //==> 26
console.log(obj3.z) //==> undefined 

/*Every object has access to a 'constructor' method, that exists on a global class constructor ==> 'Object.prototype'


/*-----------------------------------------------------------------------/
														Prototypical Classes
/*-----------------------------------------------------------------------/




/*-----------------------------------------------------------------------/
												Functional vs Functional Shared
/*-----------------------------------------------------------------------/


////////////////////
/*///Functional
////////////////////


//This is probably easier to use, but uses more memory, creating new greet functions for each person

function Person (name, hobby) {
	var person = {};
	person.name = name;
	person.hobby = hobby;
	
	person.greet = function() {
		return person.name + " says hi"
	}
	return person
}
var alice = Person('Alice', 'Programming')
alice.greet() //=> "Alice says hi" 

var f = alice.greet;
f(); //=> "Alice says hi"
//f() is still bound to same name as alice()




////////////////////
//Functional Shared
////////////////////

//This uses less memory, but is less intuitive;
//Involves pointing a property w/in an object to an external function using the 'this' keyword
//Extend the obj being created with a 'methods' obj containing all the methods to be used
//Set this 'methods' object as a property of the constructor

function Person (name, hobby) {nn
	var person = {};
	person.name = name;
	person.hobby = hobby;
	extend(person, Person.methods);
	
	return person
}

	function greetFn() = {
		return this.name + " says hi"
	}

	var alice = Person('Alice', 'Programming')
	alice.greet() //=> "Allice says hi"

	var f = alice.greet;
	f() //=> "'emtpy string' says hi"
	//f() is no longer bound to any object, reverts to empty string;



Person.methods = {
	greetFn: 	function {
							return this.name + " says hi";
						}
	byeFn: 		function() {
							return this.name + " says bye";
						}
}
