<<<<<<< HEAD
// Listen for form submit (Basically telling JS to work with a specific
// form in the HTML, so, we've labeled the form with id=myForm in the HTML
 // and #myForm in the JS. We want to search the web page/"document" for certain
 // pieces of information, once we search for them.)
document.querySelector('#myForm')
	// What kind of event the DQS in JS listening for, and the function to run thereafter
	// We will have to make a function for saveBookMark, which appears later.
	.addEventListener('submit', saveBookMark);


// Listen for filter keyup
document.querySelector('#filter').addEventListener('keyup', filterBookmarks);

// The 'e' is shorthand for 'event' in JS.
function saveBookMark(e){
	// To test in the console
	// console.log("save saveBookMark");
	// To prevent the page from refreshing
	// e.preventDefault();

	// Defining the variables, which are the pieces of info that
	// the function will be working with. These are taken from the
	// form ids in HTML:
	var siteName = document.querySelector('#siteName').value;
	var SiteURL = document.querySelector('#siteURL').value;

	// This is how we define what goes into an actual Bookmark entry
	// which are the siteName and siteURL ids from HTML:
	var bookmark = {
		name: siteName,
		url: siteURL
	};

	// Alert to site visitor to make sure they fill out the form
	 // before proceeding. It's basically saying, if either the
	 // bookmark name or bookmark url field are empty, then an alert
	 // will be prompted:
	if(bookmark.name == '' || bookmark.url == ''){
		alert('Please fill in the form.');
		return false;
	}

	// Check if the bookmarks array exists. 'If null' is defined first.
	if(localStorage.getItem('bookmarks')===null){
		// Init Array (Adding the Array onto Local Storage
		// by first creating an array.)
		var bookmarks = [];

		// (This is how we) Add bookmarks to array
		bookmarks.push(bookmark);

		// Set to localStorage all bookmarks, and turn them into strings
		// (JSON is a JS object, stringify turns the variables into a string):
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		// (If not 'null' and the bookmark exsists) Get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		// Add new bookmark into bookmarks storage
		bookmarks.push(bookmark);

		// Rest bookmarks back to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
	}

	// Rest Form (Question: But why are we resetting it?)
	document.querySelector('#myForm').reset();

	// Fetch the bookmarks
	fetchBookMarks();

	// Prevent from from submitting
	e.preventDefault();

}

// To access the bookmarks
function fetchBookMarks(){
	// Get bookmarks from localStorage (where you want to retrieve)
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// Get the output id (where you want to put the bookmarks)
	var bookmarksResult = document.querySelector('#bookmarksResult');

	// Build Output
	bookmarksResult.innerHTML='';

	// Loop through bookmarks
	for (var i=0; i<bookmarks.length; i++){
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		// Buttons to either visit or delete bookmarks
		bookmarksResult.innerHTML +=
		'<li class="list-group-item book">' +
				'<h3>' + name + '</h3>' +
				'<a class="btn btn-success" href="' +url + '">Visit</a> ' +
				'<a class="btn btn-danger" onclick="deleteBookmark(\'' +url+ '\')" href="#">Delete</a>' +
		'</li>'			
	}
}

// To delete bookmarks
function deleteBookmark(url){
	// Test if the funcion is called
	// console.log("hello from deleteBookmark");

	// Get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// Loop through bookmarks
	for(var i=0; i<bookmarks.length;i++){
		if(bookmarks[i].url==url) {
			// Remove bookmark from bookmarks array
			bookmarks.splice(i, 1);
			break;
		}
	}
	// Rest bookmarks back to localStorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	// Re-fetch bookmarksResults
	fetchBookMarks();
}

// Added 4/23: Bookmark search bar to search for particular bookmarks
function filterBookmarks(){
	// test if function is called
	// console.log(1);

	// Get input value
	let filterValue=document.querySelector('#filter').value.toUpperCase();
	// console.log(filterValue)

	// Get all bookmarks li
	let bookmarks=document.querySelectorAll('.book');
	// console.log(bookmarks);

	// Loop through bookmarks
	for(let i=0; i<bookmarks.length; i++){

		// Get h3 tag in current li
		let bookmarkName = bookmarks[i].querySelector('h3');

		// If input value is related to bookmark
		if(bookmarkName.innerHTML.toUpperCase().includes(filterValue)){
			// Show the list item
			bookmarks[i].style.display="block";
		} else{
			// Hide list item
			bookmarks[i].style.display="none";
		}
	}
}