
/*------------------------------------------------------/
									Tips, Tricks & Nuggets
/*------------------------------------------------------*/
		
		console.dir(obj) //==> Returns an interactive list of the properties that obj contains
		
		Object.defineProperty(obj, prop, descriptor) //=> Creates an immutable (non-delete-able) && non-enumerable property (won't show up on for-in) on obj;
			
			/****  Arguements:
					
					1. obj 					Object to which property should be added
					
					2. prop   			Name of property
					
					3. descriptor		{								(defaults)
														value: 				undefined  
														enumerable: 	false				==> Should prop show up in list of obj's keys?
														writable: 		false				==> Should prop be assignable/changeable with assignment key (=)
														configurable: false				==> Should prop be changeable/deleteable 
													}
			*/

		obj.constructor() //=> Returns a reference to the object that created obj's prototype

		Object.getPrototypeOf ~~~ Object.__proto__

		instanceof //=> Usess



/*------------------------------------------------------/
									Data Modelling & Classes
/*------------------------------------------------------*/

//USE: parenty, child
//USE: prototype link (chain)
//USE: prototype property
//DO NOT USE: prototype property



function moneyClosure (){
	return function(){
		return 'child.money: ' + child.money);
	};
}

var parent = { money:100 };
var child = Object.create(parent);
setTimeout(moneyClosure(), 1000);
parent.money = 5;
console.log('parent.money:', parent.money);

//Not a copy; a permanent link to parent's properties
//Closure don't save vales, they save 

Object.getPrototypeOf(f) //=> finds prototype parent of 'f'

//### new keyword
	
	function Person() {}

	Person.prototype //==> {}

	Person.prototype.x = 10;

	var alice = new Person();
	//Creates a new instance of person 
	// 1. var alice = Object.create(Person.prototype);
	// 2. 

/*------------------------------------------------------/
									Time & Space Complexity
/*------------------------------------------------------/


### 	Why is this Important?	- Helps us understand & improve our code


XXXXXX Problem XXXXX
	
	Give an array of n numbers, find the largest difference

	A. Solution 1:
				2	3	4	5
			2	X 1 2 3
			3 1 X
			4 2 1 X 
			5 3 


			* Compare every number to every other number  ==> n*n complexity

	B. Solution 2:

			* Find the largest and smallest numbers, then subtract ==> n+n complexity

	B. Solution 3:
			
			* Collection was sorted, only 3 steps ==> Find first, find last, subtract ==> 3 complexity
			* Constant complexity is good!


XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

	Types of Complexity

		1. 		Constant 						==>  	O(1)


		1.5. 	Amortized Constant 	==>		O(1)
					
						* Usually constant, 
						occasionally has 
						operation that takes 
						longer


		2. 		Linear							==>  	O('2n')


		3. 		Logrhythmic					==>	  O(log(n))
					
						* Common in binary 
						search (taking half 
						and deciding)


		4. 		Quadratic						==>		O(n^2)


		5. 		Exponential					==>		O(C^n)


/*------------------------------------------------------/
									Prototypical
/*------------------------------------------------------/

window.name = "Window" 

XXXXXXXXXXX  	Prototypal 		XXXXXXXXXXXXX*/

function Person(name, hobby){
	var person = {}
	person.name = name
	person.hobby = hobby
	Object.assign(person, personMethods)
	return person
}


//XXXXXXXXXXX  	Functional Shared (w/mixins) 		XXXXXXXXXXXXX

function Person(name, hobby){
	var person = Object.create(personMethods)
	person.name = name
	person.hobby = hobby
	return person
}


//XXXXXXXXXXX  	Pseudoclassical 		XXXXXXXXXXXXX

function Person(name, hobby){
	var person = {}
	this.name = name
	this.hobby = hobby
}
Person.prototype = {
	greet: function(){
	return this.name + 'says hi'
	},
	sleep: function(){
	return this.name + 'is tired'
	}
Person.prototype.constructor = Person; ==> reassigning throws away old object


--------		or  			----------

12
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

var personMethods = {
	greet: function(){
	return this.name + 'says hi'
	},
	sleep: function(){
	return this.name + 'is tired'
	}

	var alice = Person('Alice,' programming)
	alice.greet() ==> Alice says hi
	alice.sleep() ==> Alice is tired

	var f = alice.greet;
	f(); ==> Window says hi
}

alice = Object.create(Person.prototype)


					
// var alice = new Person('Alice', 'Programming')
// Person.call(alice, 'Alice', 'programming');

/*------------------------------------------------------/
								Advanced Data Structure
/*------------------------------------------------------/


Creating objects, array, functions, etc, requires memory;


Variables point to specific addresses in memory;


Jumping to variables is an activity of constant complexity


Deleting variables is an activity of linear complexity


Arrays have data all in one row; 


Arrays have random-acces -- can directly go to any element;


XXXXXXXXXXXXXX Link List XXXXXXXXXXXXXX

var head = { value: 10 };
head.next = { value: 20 };
head.next.next = { value:30 };

Link-lists do not have random access -- must go down tree;

Link-lists are more efficent to add things to  




