// Hide "id=Output"
document.querySelector('#output').style.display = "none";

document.querySelector('#inputValue').addEventListener('input', convert)

function convert(e){
	// Test the function is called
	// console.log("function is run")
	let input = e.target.value;

	// Show Output
	document.querySelector('#output').style.display="blank"

	// Pounds to Grams
	document.querySelector('#grams').innerHTML = input * 453.592
	// Pounds to Grams
	document.querySelector('#grams').innerHTML = input * 453.592
		// Pounds to Grams
	document.querySelector('#grams').innerHTML = input * 453.592


}