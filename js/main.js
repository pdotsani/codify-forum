$(document).ready(function() {
	// Toggle focus style on searchbar in main page
	$("#nav-searchbar").on("focus", "input", function() {
		$(this).parent().addClass('search-focus');
	});
	$("#nav-searchbar").on("focusout", "input", function() {
		$(this).parent().removeClass('search-focus');
	});

	// Show & hide replies/new reply
	$("#show-reply").on("click", function() {
		console.log('toggled show reply');
		$(".replies").toggleClass('hidden').
		$(".replies").toggleClass('wrapped-up');
	});
	$("#create-reply").on("click", function() {
		console.log('toggled create reply');
		$(".post-reply-section").toggleClass('hidden').
		$(".post-reply-section").toggleClass('wrapped-up');
	});
});
