// Listen for form submit
document.querySelector('#myForm')
	.addEventListener('submit', saveBookMark);

function saveBookMark(e){
	// console.log("save saveBookMark");
	var siteName = document.querySelector('#siteName').value;
	var SiteURL = document.querySelector('#siteURL').value;

	var bookmark = {
		name: siteName,
		url: siteURL
	};


	if(bookmark.name == '' || bookmark.url == ''){
		alert('Please fill in the form');
		return false;
	}

	// Check if the bookmarks array exists
	if(localStorage.getItem('bookmarks')===null){
		// Init Array
		var bookmarks = [];

		// Add bookmark to array
		bookmarks.push(bookmark);

		// Set to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
	} else {

		// Get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		// Add new bookmark into bookmarks
		bookmarks.push(bookmark);

		// Rest bookmarks badk to localStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
	}

	// Rest Form
	document.querySelector('#myForm').reset();

	// Fetch the bookmarks
	fetchBookMarks();

	e.preventDefault();
}


function fetchBookMarks(){
	// Get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// Get the output id
	var bookmarksResult = document.querySelector('#bookmarksResult');

	// Build Output
	bookmarksResult.innerHTML='';

	// Loop through bookmarks
	for (var i=0; i<bookmarks.length; i++){
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarksResult.innerHTML +=
		'<div>' +
				'<h3>' +
						name + '' +
						'<a class="btn btn-success" href="' +url + '">Visit</a> ' +
						'<a class="btn btn-danger" onclick="deleteBookmark(\'' +url+ '\')" href="#">Delete</a>' +
				'</h3>' +
		'</div>'			
	}
}

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
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

	// Re-fetch bookmarksResults
	fetchBookMarks();
}

// } else {
// 		// Get bookmarks from localStorage
// 		var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));

	// Test local storage
	// localStorage.setItem('test, "HelloWorld"')
	// console.log(localStorage.getItem('test'))

	// Prevents the form from submitting
	// e.preventDefault();