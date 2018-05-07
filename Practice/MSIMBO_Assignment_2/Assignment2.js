// MSIMBO
// JavaScript Practice


// Questions
// 1.	Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.

function printInt(num){
	for(i=1; i<=num; i++){
		console.log(i);
	}
}

// printInt(30);

function printInt(num){
var i = 1;
while (i<=num){
	console.log(i);
	i++;
	}
}
// printInt(30);


// ------------------------------------------------------------------------------------------------------------------
// 2.	Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse (from n to 1) in console.

function printIntRev(num){
	for(i=num; i>=1; i--){
		console.log(i);
	}
}

// printIntRev(30);

function printIntRev(num){
var i = num;
while (i>=1){
	console.log(i);
	i--;
 }
}
// printIntRev(30);


// ------------------------------------------------------------------------------------------------------------------
// 3.	Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’
// if x is a string; and return boolean if x is a boolean. Otherwise returns -1. 
// E.g. checkInput(5) => ‘number’
//        checkInput(‘hello’)=> ‘string’
//        checkInput(‘5’) => ‘string’
//        checkInput(true)=> boolean
//        checkInput(none) => -1

// function checkInput(x)
// Take one parameter x
// Return the string ‘number’ if x is a number;
// Return the string ‘string’ if x is a string;
// Return boolean if x is a boolean.
// Otherwise returns -1. 

function checkInput(x){
	//if x is a number
	if(typeof x == 'number') {
		return 'number';
	// if x is a string
	} else if (typeof x == 'string') {
		return 'string';
	// if x is a boolean
	} else if (typeof x == 'boolean') {
		return 'boolean';
	// otherwise 
	} else {
		return -1;
	}
}

// console.log(checkInput(true));


function checkInput(x){
switch(x) {
case typeof x == 'number':
console.log("number");
break;
case typeof x == 'string':
console.log("string.");
break;
case typeof x == 'boolean':
console.log("boolean");
break;
default:
console.log(-1);
 }
}

// checkInput(true);


// var type = typeof x;
// if (type == 'number' || type == 'string' || type == 'boolean'){
// 	return type
// } else{
// 	return -1;
// }



// ------------------------------------------------------------------------------------------------------------------
// 4.	Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num. 
// 	Examples: simpleEvenAdding(5) => 6 (because 2+4 = 6)
// 	       simpleEvenAdding(10) => 30 (because 2+4+6+8+10 = 30)
// 	       simpleEvenAdding(11) => 30 (because 2+4+6+8+10 = 30)
//         simpleEvenAdding(1) => 0
// 	       simpleEvenAdding(0) => 0

function simpleEvenAdding(num){
	var answer = 0;
	for(var i=0; i<=num; i+=2){
		answer=answer+i;
	}
	return answer;
}

// console.log(simpleEvenAdding(5));

// ------------------------------------------------------------------------------------------------------------------
// *5.	Write the function letterCapitalize(str) taking a string and capitalized the first letter of each word.
// The given words will be separated by only one space.

// 	Examples:
// 		letterCapitalize(“hello world”) = “Hello Word”
// letterCapitalize(“you cannot find the answer online”) = “You Cannot Find The Answer Online”
	
// Hint: There is a built-in function in javaScript that change string into uppercase. There is also function to separate string into an array of characters.

function letterCapitalize(str){
	var sepArray = str.split(" ");
	var newString = "";
	for(var i=0; i<sepArray.length; i++){
		var splitArray = sepArray[i].slice(0,1).toUpperCase();
		var restArray = sepArray[i].slice(1);
		newString = newString + " " + splitArray  + restArray
	}
	return newString.slice(1);
}
// console.log(letterCapitalize("you already know"));


function letterCapitalize(str){
	var splitArray = str.split(" ");
	var newString = "";

	for(var i=0; i<splitArray.length;i++){
		newString += " " + splitArray[i][0].toUpperCase( + splitArray[i].slice(1));
	}
	return newString.slice(1);
}
// console.log(letterCapitalize("you already know"));


// ------------------------------------------------------------------------------------------------------------------
// 6.	Write the function simpleReverse(str) taking a string and return the string in reversed order. 
// 	Examples:
// 		simpleReverse(‘hello’) => ‘olleh’
// 		simpleReverse(‘I Love Code’) => ‘edoC evoL I’

// Hint: Think of how you can loop through a string or array of characters backwards to produce a new string

function simpleReverse(str){
	var sepArray = str.split("");
	var letterSplit = sepArray.reverse();
	return letterSplit.join("");
}
// console.log(simpleReverse("Happy Birthday"));


// ------------------------------------------------------------------------------------------------------------------
// 7.	Write the function findDiff(arr) taking a array of numbers as parameter and return the difference between the maximum number
// and the minimum number (max - min). 
// 	Examples:
// 	findDiff([1,2,4,6,20, 3]) => 19 (Because 20 - 1 = 19)
// 	findDiff([24, 22, 23, 22, 24]) => 2 (Because 24 - 22 = 2)
// 	findDiff([1, 1, 1, 1, 1]) => 0 
// findDiff([1]) => 0;
// findDiff([]) => 0;

function findDiff(arr){
	// var myArray = arr;
	for(var i=0; i<arr.length; i++){
	var maxArray = Math.max.apply(null, arr);
	var minArray = Math.min.apply(null, arr);
	var arrDiff = maxArray-minArray;
	}
	return arrDiff;
}
// console.log(findDiff([1,2,4,6,20, 3]));



// ------------------------------------------------------------------------------------------------------------------
// 8.	Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to.
// Seperate the number of hours and minutes with a colon.
// 	Example:
// 		timeConvert(61) => 1:1
// 		timeConvert(63) => 1:3
// 		timeConvert(120)=> 2:0
// 		timeConvert(59)=> 0:59
//     	Hints: Dividing and modulo the number 60.

function timeConvert(num){
	var hours = parseInt(num/60);
	var minutes = (num%60);
	var time = hours + ":" + minutes
	return time;
}

// console.log(timeConvert(300));


// ------------------------------------------------------------------------------------------------------------------
// *9.	Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long.
// Assume Str is not empty string.
// Example:
// 	findStr(“hi”, “dasdhidasdahidashi”) => 3
// 	findStr(“o”, “daodo”) => 2
// 	findStr(“ha”,”abcde”)=> 0


// Have to make str into something that the system will look for
// Make long into a string that will be searched according to str

function findStr(str, long){
	var counter = 0;
	var newArray = [];
	// var answer = str;
	var splitLetters = long.split("");
	for (var i=0;i<long.length;i++){
	} if (splitLetters!=i){
		return counter++;
		console.log(counter++);
	}
}

// console.log(findStr("hi", "dasdhidasdahidashi"));



// ------------------------------------------------------------------------------------------------------------------
// 10.	Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every
// possible self dividing number between them, including the bounds. 

// Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number
// because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 

// Examples:
// 	selfDividingNumbers(1, 22) => [1,2,3,4,5,6,7,8,9,11,12,15,22]
// 	selfDividingNumbers(1, 10) => [1,2,3,4,5,6,7,8,9]
// selfDividingNumbers(12, 21) => [12, 15]



// function selfDividingNumbers(left, right){
// 	var newArray = [];
// 	for(var i=0; i<=right; i++){
// 		return newArray;
// 	}
// }
// selfDividingNumbers(1, 22);



// function selfDividingNumbers(left, right){
// 	for (let i=left; i<=right; i++){
// 		if (isSelfDividing(i)){
// 			myArray.push(i);
// 		}
// 	}
// 	return myArray
// }
// console.log(selfDividingNumbers(1,22));


// function selfDividingNumbers(left, right){
	// var myArr = [];
	// for(var i = left; i<=right;i++){
	// 	// check if i is selfdividing number
	// 	if (isSelfDividing(i)){
	// 		myArr.push(i);
	// 	}
	// }
	// return myArr;
// }

// selfDividingNumbers();

// Helper function:
// Is given number self dividing number?
// return true if the given number is self dividing
// return false if the given number is not self dividing


// Extra Credit:
// Write the function moveZeros(nums) taking an arry of numbers and move all 0’s to the end of it while maintaining
// the relative order of the non-zero elements. For example:
// moveZeros([0,1,0,3,12]) => [1,3,12,0,0]
// moveZeros([1,2,0,0,2,312,33,0,0]=>[1,2,2,312,33]
// moveZeros([0,0,0])=>[0,0,0]
// moveZeros([1,2,312,11,2]) => [1,2,312,11,2]

function moveZeros(nums){
	var newArray = [];
	for(var i = 0; i<=length.nums;i++){
		if (i==0){
		return newArray.push([i]);
		}
	}
}
moveZeros([0,1,0,3,12]);




// ------------------------------------------------------------------------------------------------------------------
// Deliverables
// 	Send your assignment2.js while email to shiyu3169@gmail.com

// Note: Extra credit for finding more than one way to answer the question.
// ------------------------------------------------------------------------------------------------------------------
