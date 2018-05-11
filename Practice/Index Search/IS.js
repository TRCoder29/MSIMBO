<<<<<<< HEAD
// console.log("Hello from IS.js");

// Get Input Element (In JavaScript, we're using let rather than var now)
let filterInput=document.querySelector('#filter');

// Add event listener (Keyup means that whenever you enter something, something will be acknowledged and pop up)
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	// Testing this function
	// console.log(1);

	// Get Value of Input
	let filterValue = filterInput.value.toUpperCase();
	// Test it out
	// console.log(filterValue);

	// Get ul List
	// let ul=document.querySelector('#names');
	// Test it out
	// console.log(ul);

	// Get all li items. All items with the li class will be referenced and accessed.
	let li=document.querySelectorAll('li.sw-link');
	// Test it out
	// console.log(li);

	// Loop through list items, because we want to cycle through all list items in our search
	for (let i=0; i<li.length; i++){
		// Get Link
		let a = li[i].querySelector('a');
		// Test it out
		// console.log(a);

		// If Match
		if(a.innerHTML.toUpperCase().includes(filterValue)){
			li[i].style.display='block';
		} else{
			li[i].style.display = 'none';
		}
	}
=======
// console.log("Hello from IS.js");

// Get Input Element (In JavaScript, we're using let rather than var now)
let filterInput=document.querySelector('#filter');

// Add event listener (Keyup means that whenever you enter something, something will be acknowledged and pop up)
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	// Testing this function
	// console.log(1);

	// Get Value of Input
	let filterValue = filterInput.value.toUpperCase();
	// Test it out
	// console.log(filterValue);

	// Get ul List
	// let ul=document.querySelector('#names');
	// Test it out
	// console.log(ul);

	// Get all li items. All items with the li class will be referenced and accessed.
	let li=document.querySelectorAll('li.sw-link');
	// Test it out
	// console.log(li);

	// Loop through list items, because we want to cycle through all list items in our search
	for (let i=0; i<li.length; i++){
		// Get Link
		let a = li[i].querySelector('a');
		// Test it out
		// console.log(a);

		// If Match
		if(a.innerHTML.toUpperCase().includes(filterValue)){
			li[i].style.display='block';
		} else{
			li[i].style.display = 'none';
		}
	}
>>>>>>> 03dec4003b8f522f149ef4e102b0e9c32ff085e8
}