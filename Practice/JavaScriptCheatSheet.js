// Creates a pop up alert related to the element
// alert("Hello from JavaScript" + 2);

// alert is a function, () is where you put the input
// alert(1+2);

// Defining Variables
// var mynumber=35;
// var mynumber2=53;
// alert(mynumber + mynumber2);

// Writing the Date
// var today=new Date();
// document.write(today);

//camel case
// var myFavoriteNumber=77;

//partial case
//var MyFavoriteNumber=77;

//Underscore
//var MyFavoriteNumber=77;

// var the_date=new Date();
// document.write("<h2>The Month</h2>");
// document.write(the_date.getMonth()+1);

// document.write("<h2>The Year</>");
// document.write(the_date.getFullYear());

// var colors=['red', 'blue', 'green', 'pink'];
// var colors=new Array('red', 'blue', 'green', 'pink');

// var numbers=[1, 2, 3, 4, 5];

// alert(colors);
// // alert(color[0]);

// // colors [0]='yellow';
// // colors [0]='red';
// // colors [0]='green';
// // colors [4]='blue';

// //To add something to a previous command
// colors.push('purple');

// //Count how many items within the "colors" command
// alert(colors.length);

// var person={
// 	firstName: "Taja",
// 	lastName: "Ricketts",
// 	age: 32,
// 	Children: ['Alice', 'Bob', 'Camile']
// }

// // Add to web console
// console.log(person);



// function Fruit(name, color, shape){
// 	this.name = name;
// 	this.color=color;
// 	this.shape=shape;
// }

// var apple = new Fruit('apple', 'red', 'round');
// // var watermelon = new Fruit ('watermelon', 'green', 'round')

// // Example of writing text and pulling a command into it
// document.write("<h2>");
// document.write("Apple's color is: ");
// document.write(apple.color);
// document.write("</h2>")

// // = vs ==: Using one = prompts a command, but == prompts an equation.
// if (1+1==2) {
// 	console.log("yes, it's true");
// } else {
// 	console.log("no, you are wrong");
// }

// var array2 = ['hello', 'hi'];

// if (1==1||2==3){
// 	console.log("yes")
// } else{
// 	console.log("no")
// }
// alert("Hello from JavaScript")

// document.write("<ul><li>Item 1</li><li>Item 2</li></ul>")

// document.write(string1+string2);

// var boolean1=true;

// var boolean2=false;

// Come back to this
// if (password ==""){
// 	alert("Please enter password!");
// } else if(password !=verify_password){
// 	alert("Your passwords don't match!");
// } else if	alert("Register Successfully!")

// document.write(1==1);

// document.write(2==3);

// document.write(1==1 && 2==2);
// document.write(1==1 && 2==3)

// document.write(1==1||2==3);

// var colors = ['red', 'blue', 'pink', 'green']

// console.log(colors);

// colors[0]='yellow'
// colors[3]='green'

// document.write(""+colors[0]);
// document.write(""+colors[1]);
// document.write(""+colors[2]);
// document.write(""+colors[3]);
// document.write(""+colors[4]);

// // A push command inserts the new item at the end of the array
// colors.push('green')

// var fruit=56

// switch(fruit){
// 	case 'orange':
// 		document.write(fruit);
// 		break;
// 	case 'banana':
// 		document.write(fruit);
// 		break;
// 	case 'watermelon':
// 		document.write(fruit);
// 		break;
// 	case 56;
// 		document.write(fruit);
// 		break;
// 	default:
// 		document.write("I'm another apple");
// }

// var numbers=[1,2,3,4,5];

// Where to start, where to continue, what you want to do
// for loop
// for(var i=0; i<5; i=i+1){
// 	document.write(i);
// }
// for(var j=1; j<10; j=j+1){
// 	document.write(j);
// }

// var numbers = [1, 2, 3, 4, 5]

// for(var i=0; i<numbers.length; i=i+1){
// 	document.write(numbers[i] +5);
// }

// var i = 0;
// while (i<numbers.length){
// 	document.write(numbers [i]+5);
// 	i=i+1;
// }

// numers.forEach(function(number){
// 	document.write(number+5);
// }

// var strings = ['hi', 'hello', 'bye']

// strings.forEach(function(n){
// 	document.write(n + 'you');
// }

// var i=0;
// 	while(i < strings.length){
// 		document.write(strings[i]+'you')
// 	}

// While Loop
// var j=1;
// while(j<10){
// 	document.write(j);
// 	j=j+1;
// }

// var numbers = [1, 2, 3, 4, 5, 6]

// for(var i=0; i<numbers.length; i=i+1){
// 	if(numbers[i]>3){
// 		document.write("Hello World")
// 	}
// }

// var text = ['hello', 'hi', 'welcome', 'bye']

// for (var i=0; i<text.length; i=i+1){
// 	if(text[i]=='Welcome'){
// 		document.write(text[i]+ 'again');
// 		document.write('<br>')
// 	} else{
// 		document.write('You are not welcome')
// 		document.write('<br>')
// 	}
// }

// var i = 0;
// while(i<text.length){
// 	if(text [i]=='welcome'){
// 		document.write(text[i] + 'again');
// 		document.write('<br>');
// 	} else {
// 		document.write('You are not welcome');
// 		document.write('<br>');
// 	}
// 	i=i+1;
// }

// text.forEach(function(str){
// 	if (str == 'welcome') {
// 		document.write(str + 'again');
// 		document.write('<br>');
// 	} else {
// 		document.write('You are not welcome');
// 		document.write('<br>');
// 	}
// }

// Function (Class is an example of a function, something you can use over and over)
// function checkWelcome(str){
// 	if(str == 'welcome'){
// 		document.write(str + 'again');
// 		document.write('<br>');
// 	} else {
// 		document.write ('You')
// 	}
// }

// function plusThenMultiply (num1, num2){
// 	alert(num1 + num2);
// }

// plusThenMultiply(241234, 231);
// plusThenMultiply(1231, 231231);
// plusThenMultiply(222, 23331);
// plusThenMultiply(11, 33);
// plusThenMultiply(44, 555);

// console.log("Hello in console");

// var number1=35;

// console.log (number1);

// var number1 = 30;
// var number2 = 40;

// alert (number1-number2)

// var string1 = "My number1"

// // console.log(string1 +)

// var Test = 2;
// var test = 1;

// console.log(Test)
// console.log(test)

// var my_favorite_number = 44;

// var today = new Date();

// document.write(today);
// // document.write(today.getMonth)

// alert(today);

// var (colors) = ['red', 'blue', 'orange','yellow'];

// console.log (colors);

// document.write(colors[0]);
// document.write(colors[1]);
// document.write(colors[2]);
// document.write(colors[3]);

// colors[3] = 'yellow';

// document.write(colors[3]);

// console.log(colors);

// colors.push('red');
// colors.push('green');

// var j = 0;
// while(j<colors.length){
// 	colors[j] = 'bye';
// 	j++;
// }

// // 1 is equal to 1
// document.write(1==1)

// // 1 is greater than 1
// document.write(1>1)

// // 1 is less than 1
// document.write(1<1)

// // 1 is not equal to 2
// document.write(1!=2)

// document.write(!(1<0));
// if(1<2){
// 	document.write("Hello")
// }

// var number1 = 1;
// switch(numbers){
// 	case "<2":
// 		document.write("Hello")
// 	default:
// 		document.write("Bye")
// }

// var person = {
// 	firstName:'Alice'
// 	lastName:'Wang'
// 	age:'24'
// 	parents: ['Bob', 'Charlie']
// 	fullName: function(){
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// console.log(person.firstName);

// var person = {
// 	firstName: 'Alice'
// 	lastName: 'Travel'
// 	address:{
// 		street: '555 Ocean Ave'
// 		city: 'Boston'
// 		state: 'MA'
// 	}
// }

// console.log(person.fullName());

// var users = [
// 	{
// 		username: 'swang'
// 		password: 'shiyuwang'
// 	}
// 	{
// 		username: 'john123'
// 		password: 'Doe321312'
// 	}
// 	{
// 		username: 'hello3333'
// 		password: 'bye333222'
// 	}
// 	]
// ----------------------------------------
// function FirstFactorial(num){
// 	var answer = 1;
// 	for (var i=num; i>1; i=i-1){
// 		answer=answer*i;
// 	}
// 	return answer;
// }
// console.log(FirstFactorial(6));

// // This is the piece that the function needs to run.
// // Console is the placeholder, and within this placeholder we have the information needed to solve the function included in ().
// // So, you are literally taking the "FirstFactoral(num)" and now naming "num" with 6, for example.
// // The first item defines what "num" is.
// // The second piece says "num" must be greater than 1 to proceed.
// // Then, we look at "num" or "i" in the equation answer = answer*i, which will be 6 = 1*6
// // That answer then goes through step three i=i-1, which will equal 5.
// // But first, "answer" goes through the first two qualifiers as a safety, almost like a QA.
// // If this happens, then we take i and subtract 1 to get the new i. The ne


// How it looks:
// answer=answer*i
// i=i-1

// In the beginning answer=1, i=6, so, first...
// Is 6 bigger than 1, yes, so proceed.
// (first)answer=answer*i becomes
// (first)answer = 1*6
// (first)answer = 6 = 1*6

// Then, i=i-1
// i = 6-1, so
// new i=5, because 5=6-1
// Is 5 bigger than 1, yes, so proceed.
// new answer = first answer*new i
// new answer = 6x5 = 30

// Then, i=i-1
// i = 5-1, so
// new i=4, 4=5-1
// Is 4 bigger than 1, yes, so proceed.
// new answer = last answer*new i
// new answer = 30x4 = 120

// Then, i=i-1
// i = 4-1, so
// new i=3, 3=4-1
// Is 3 bigger than 1, yes, so proceed.
// new answer = last answer*new i
// new answer = 120x3 = 360

// Then, i=i-1
// i = 3-1, so
// new i=2, 2=3-1
// Is 2 bigger than 1, yes, so proceed.
// new answer = last answer*new i
// new answer = 360x2 = 720

// Then, i=i-1
// i = 2-1, so
// new i=1, 1=2-1
// new answer = last answer*new i
// new answer = 720x1 = 720
// Is 1 bigger than 1, no, so stop.

// function FirstFactorial(num){
// 	var answer = 1;
// 	var i = num;
// 	while (i>1){
// 		answer = answer*1;
// 		i = i-1;
// 	}
// 	return answer;
// }
// console.log(FirstFactorial(6));

// // i=i+1 is the same as i++
// // i=i-1 is the same as i--
// // i=i+2 is the same as i+=2
// // i=i+3 is the same as i-=3

// function FirstFactorial(num){
// 	var answer = 1;
// 	var i = num;
// 	while (i>1){
// 		answer = answer*1;
// 		i = i-1;
// 		// i--;
// 	}
// 	return answer;
// }
// console.log(FirstFactorial(5));

// Using the JavaScript language,
// have the function SimpleAdding (num) add up all the
// numbers from 1 to num. For example:
// if the input is 4 then the function should return 10,
// because 1 + 2 + 3 = 10.
// Hint: Use loop (from 1 to num) or (from num to 1)

// function SimpleAdding(num){
// 	var answer = 1;
// 	for (var i=num; i>1; i=i-1){
// 		answer=answer+i;
// 	}
// 	return answer;
// }
// console.log(SimpleAdding(4));

// How it looks:
// answer=answer+i
// i=i-1

// In the beginning answer=1, i=4, so, first...
// Is 4 bigger than 1, yes, so proceed.
// (first)answer=answer + i becomes
// (first)answer = 1+4
// (first)answer = 5 = 1+4

// Then, i=i-1
// i = 4-1, so
// new i=3, because 3=4-1
// Is 3 bigger than 1, yes, so proceed.
// new answer = first answer+new i
// new answer = 5+3 = 8

// Then, i=i-1
// i = 3-1, so
// new i=2, 2=3-1
// Is 2 bigger than 1, yes, so proceed.
// new answer = last answer+new i
// new answer = 8+2 = 10

// Then, i=i-1
// i = 2-1, so
// new i=1, 1=2-1
// Is 1 bigger than 1, no, so stop.

// Or, you can use this:
// Adding from 1 to num
// Note: Var answer is 0, because of the possibility that i<=0.
// Remember: i=i-1 is i++
// function SimpleAdding(num){
// 	var answer = 0;
// 	for (var i=1; i<=num; i++){
// 		answer=answer+i;
// 	}
// 	return answer;
// }
// console.log(SimpleAdding(4));
// answer=0, num = 4
// 1)i=1, a=0+1=1
// 2)i=2, a=1+2=3
// 3)i=3, a=3+3=6
// 4)i=4, a=6+4=10
// 
// // Or, you can use this:
// // Adding from num to 1
// function SimpleAdding(num){
// 	var answer = 0;
// 	for (var i=num; i>0; i--){
// 		answer=answer+i;
// 	}
// 	return answer;
// }
// console.log(SimpleAdding(4));
// answer = 0, num = 4
// 1) i=4, a=0+4 = 4
// 2) i=3, a=4+3 = 7
// 3) i=2, a=7+2 = 9
// 4) i=1, a=9+1 = 10
// 5) i=0, So stop.

// For loop, create list:
// function createList(num){
// 	document.write("<ul>");
// 	for (var i=0; i<num; i++){
// 		document.write("<li>");
// 		document.write("Item"+i);
// 		document.write("</li>");
// 	}
// 	document.write("<ul>")
// }
// createList(5);
// createList(5);
// 
// While loop, create list (come back to this):
// function createList(num){
// 	document.write("<ul>");
// 	while (i<num; i++){
// 		document.write("<li>");
// 		document.write("Item"+i);
// 		document.write("</li>");
// 	}
// var i=0; 
// 	document.write("<ul>")
// }
// createList(5);
// createList(5);
// --------------------------------------------
// document.write(1>0 && 1<2);
// document.write(1<0 &&1<2);
// document.write(1<0||1<2);
// document.write(!(1<0));

// LR|And Or
// TT|T   T
// FT|F   T
// TF|F   T
// FF|F   F

// if(1<0){
// 	document.write("hello")
// } else if(1!=1){
// 	document.write("welcome")
// } else if (1<3)

// if (number1=="hello"){
// 	document.write("hello");
// } else if (number1=="welcome"){
// }
// --------------------------------------------
// Using the JavaScript Language, have the function OddAdding(num)
// add up all the odd numbers from 1 to . For example: if the input
// is 6 then your function should return 9, because 1+3+5=9.
// More examples:
// OddAdding(10) -> 1+3+5+7+9=25
// OddAdding(2) -> 1
// OddAdding(1) -> 1

// function OddAdding(num){
// 	var answer = 1;
// 	for (var i=num; i>1; i=i-2){
// 		answer=answer+i;
// 	}
// 	return answer;
// }
// console.log(OddAdding(10));

// // Or, you can use:
// function OddAdding(num){
// 	var answer = 0;
// 	for(var i=1; i<=num; i+=2){
// 		answer=answer+i;
// 	}
// }
// console.log(OddAdding(10));
// a=0
// 1) i=1, a=0+1=1
// 2) i=3, a=1+3=4
// 3) i=5, a=4+5=9
// 4) i=7, a=9+7=16
// 5) i=9, a=16+9=25

// Or, you can use:
// function OddAdding(num){
// 	var i=1;
// 	while (i<=num){
// 		answer=answer+i;
// 		i+=2;
// 	}
// 	return answer;
// }
// console.log(OddAdding(7));
// a=0
// 1) i=1, a=0+1=1
// 2) i=3, a=0+1+3=4
// 3) i=5, a=0+1+3+5=8
// 4) i=7, a=0+1+3+5+7=16

// Or, you can use:
// function OddAdding2(num){
// 	var i = 1;
// 	answer = 0;
// 	while(i<=num){
// 		// check if i is odd
// 		if (i % 2==1){
// 			answer += i;
// 		}
// 		i++;
// 	}
// 	return answer;
// }
// console.log(OddAdding2(7));

// Using the JavaScript Language,
// have the function CheckNums(num1, num2)
// takes two parameters beign passed
// and return true if num2 is greater than num1,
// otherwise, return false. If the parameters values are equal to each other then return -1.
// 
// e.g. CheckNums(100, 200) -> True
// CheckNums(235, 123) -> False
// CheckNums(50, 50) -> -1
//Hint: If statement 
// Return True
// Return False
// Return -1

// Shows up in the console, but not on the page:
// function checkNums(num1, num2){
// if(num1<num2){
// 	return true
//  } else if(num1>num2){
// 	return false
//  } else if (num1==num2){
// 	return -1
// }
// }
// console.log(checkNums(100, 200))
// console.log(checkNums(235, 123))
// console.log(checkNums(50, 50))

// Shorter way to do this:
function checkNums2(num1, num2){
	if (num2==num1){
		return -1;
	} else {
		return num2>num1;
	}
}

console.log(checkNums2(100, 200))
console.log(checkNums2(235, 123))
console.log(checkNums2(50, 50))

// Shows up on the page, but not in the console:
// function checkNums(num1, num2){
// if(num1<num2){
// 	document.write("True")
//  } else if(num1>num2){
// 	document.write("False")
//  } else if (num1==num2){
// 	document.write("-1")
// }
// }
// checkNums(100, 100)

// var myVariable = 38 % 5;
// document.write(myVariable);


