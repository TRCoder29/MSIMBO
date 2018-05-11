<<<<<<< HEAD
// Hide "id=Output"
// document.querySelector('#output').style.display = "none";
document.querySelector('#output').style.visibility = "hidden";

// Catch User Input
document.querySelector('#inputValue').addEventListener('input', convert);

// Catch Unit Selection
document.querySelector('#unit').addEventListener('input', convert);

function convert(e){
	// Test the function is called
	// console.log("function is run")
	let input = e.target.value;

	// Get User's Unit Selection
	let unit=document.querySelector('#unit').value;

	// Check the Unit Value


	// Show Output
	// document.querySelector('#output').style.display="block"
	document.querySelector('#output').style.visibility="visible";

	// Pounds to Grams
	document.querySelector('#grams').innerHTML = input * 453.592;
	// Pounds to Grams
	document.querySelector('#kg').innerHTML = input * 453.592/1000;
		// Pounds to Grams
	document.querySelector('#oz').innerHTML = input * 16;


=======
// Hide "id=Output"
// document.querySelector('#output').style.display = "none";
document.querySelector('#output').style.visibility = "hidden";

// Catch User Input
document.querySelector('#inputValue').addEventListener('input', convert);

// Catch Unit Selection
document.querySelector('#unit').addEventListener('input', convert);

function convert(e){
	// Test the function is called
	// console.log("function is run")
	let input = e.target.value;

	// Get User's Unit Selection
	let unit=document.querySelector('#unit').value;

	// Check the Unit Value


	// Show Output
	// document.querySelector('#output').style.display="block"
	document.querySelector('#output').style.visibility="visible";

	// Pounds to Grams
	document.querySelector('#grams').innerHTML = input * 453.592;
	// Pounds to Grams
	document.querySelector('#kg').innerHTML = input * 453.592/1000;
		// Pounds to Grams
	document.querySelector('#oz').innerHTML = input * 16;


>>>>>>> 03dec4003b8f522f149ef4e102b0e9c32ff085e8
}