$(document).ready(function() {
	// Toggle focus style on searchbar in main page
	$("#nav-searchbar").on("focus", "input", function() {
		$(this).parent().addClass('search-focus');
	});
	$("#nav-searchbar").on("focusout", "input", function() {
		$(this).parent().removeClass('search-focus');
	});
});
