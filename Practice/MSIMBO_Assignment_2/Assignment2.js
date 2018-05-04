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

// while (i<=num;){
// 	console.log(i);
// 	i++;
// }

// printInt(30);

// Find an additional way to do this for extra credit.

// ------------------------------------------------------------------------------------------------------------------
// 2.	Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse (from n to 1) in console.

function printIntRev(num){
	for(i=num; i>=1; i--){
		console.log(i);
	}
}

// printIntRev(40);

// Find an additional way to do this for extra credit.

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

// Find an additional way to do this for extra credit.
// Switch statement would also work for this.

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

// Find an additional way to do this for extra credit.

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


// Note, find a way to get rid of that extra space before "you"

// Find an additional way to do this for extra credit.

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
// console.log(findDiff());

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
	var answer = str;
	var splitLetters = long.split(str);
	for (var i=0;i<long.length;i++){
	} if (splitLetters){
		continue;
	} else {
		counter++;
	}
}
findStr("hi", "dasdhidasdahidashi");

// function findStr(str, long){
// 	var newArray = [];
// 	// var answer = str;
// 	var splitLetters = long.split(str);
// 	for (var i=str;i<long.length;i++){
// 		if (str !== splitLetters)
// 		newArray.push(i);
// 	} else {
// 		break;
// 	}
// 	return newArray.length;
// }
// findStr("hi", "dasdhidasdahidashi");


	// int index = str.indexOf(long);
 	//System.out.println(index);


	// var strNum = str.tonumber();
	// var longNum = long.tonumber();

// function findStr(str, long){
// // the number of letters in the str
// let len = str.length;
// // len = 2
// let longArr = [];
// for(let i = 0; i < long.length; i++){
// 	if(long.slice(i,i+len)==str){
// 		accumulator++;
// 	}
//  }
//  return accumulator;
// }
// findStr("hi","hello");

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

// function selfDividingNumbers(left, right){
//     var selfDiv = [], result;
//     for(left; left < right +1; left++) {
//         for(var i=0; i<left.toString().length; i++) {
//             if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
//                 result = true;
//             }
//             else {
//                 result = false;
//                 break;
//             }        
//         }
//         if(result == true)
//             selfDiv.push(left);
//     }
//     return selfDiv;
// }
// console.log(selfDividingNumbers(1, 22));


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
	var myArr = [];
	for(var i = nums; i<=length.nums;i++){
		if (i>=1){
			myArr.push(i);
		}
	}
}
moveZeros([0,1,0,3,12]);



// ------------------------------------------------------------------------------------------------------------------
// Deliverables
// 	Send your assignment2.js while email to shiyu3169@gmail.com

// Note: Extra credit for finding more than one way to answer the question.
// ------------------------------------------------------------------------------------------------------------------

// Hints:
// myvar = true;
// console.log(typeof 1==1)

// // Splitting strings into single letters:
// var myVar = "Hello World, 123"
// var myArr = myVar.split("");
// console.log(myArr);

// // Splitting strings into an array:
// var myVar = "Hello World, 123"
// var myArr = myVar.split(" ");
// console.log(myArr);

// // Reverse
// var myArr = ["hello", "world"];
// console.log(myArr.reverse());

// // Uppercase
// console.log("Hello".toUpperCase())

// // Pull out the different items within a string:
// console.log("hello".slice(2, 3))

// // or
// console.log("hello".substring(1))

// // Find the maximum number:
// console.log(Math.max(1,2,3,4))

// // Find the minimum number:
// console.log(Math.min(1,2,3,4))

// // To parse out integers:
// // This is the initial equation: console.log(parseInt(100/55)).
// // Now, we can isolate just the integers of it, using:
// console.log(parseInt(100/55))

// // or
// console.log(100%55)


// function letterCapitalize(str){
// 	str.split(" ").slice(1).toUpperCase();
// 	// console.log(str.toUpperCase());
// 	return;
// }

// letterCapitalize();

// Class Hint:
// function letterCapitalize (str){
// 	// split str into array of words
// 	var strArray = str.split(" ")
// 	return strArray;
// }

// // Splitting strings into an array:
// var myVar = "Hello World, 123"
// var myArr = myVar.split(" ");
// console.log(myArr);


// // Splitting strings into single letters:
// var myVar = "Hello World, 123"
// var myArr = myVar.split("");
// console.log(myArr);

// // Reverse
// var myArr = ["hello", "world"];
// console.log(myArr.reverse());

// Play around with these commands:
// "hello".split("")
// "hello"[0]

// Use the parse 
// // To parse out integers:
// // This is the initial equation: console.log(parseInt(100/55)).
// // Now, we can isolate just the integers of it, using:
// console.log(parseInt(100/55))

// Remember:
// 60/60 = 1
// 61/60 = 1.016666666666666
// 63%60 = 3
// 125%60 = 5
// We can parse out the remainders and convert them into minutes, maybe by multiplying them by 60, then turning
// them into some whole number, then adding them to the final expression/console log, etc.

// From class:
// function simpleAdding(num){
// 	let result = 0;
// 	// loop from 1 to n
// 	for(let i=1; i<= n; i++){
// 		result +=i;
// 	}
// 	return result;
// }
// console.log(simpleAdding());

// function simpleOddAdding(n){
// 	// the result of adding
// 	var result = 0;
// 	// loop from 1 to n
// 	for (let i=1; 1<=n; i++){
// 		// check if i is odd number
// 		if (i%2 ==1){
// 			result +=i;
// 		}
// 		return result;
// 	}
// }
// console.log(simpleOddAdding());