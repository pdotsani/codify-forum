$(document).ready(function() {
	// Toggle focus style on searchbar in main page
	$("#nav-searchbar").on("focus", "input", function() {
		$(this).parent().addClass('search-focus');
	});
	$("#nav-searchbar").on("focusout", "input", function() {
		$(this).parent().removeClass('search-focus');
	});

	// Show & hide replies/new reply within post template
	$("#show-reply").on("click", function() {
		// console.log($(this).parentsUntil("#post-template").last().next());
		$(this).parentsUntil("#post-template")
			.last().next().toggleClass('hidden');
		$(this).parentsUntil("#post-template")
			.last().next().toggleClass('wrapped-up');
	});
	$("#create-reply").on("click", function() {
		// console.log($(this).parentsUntil("#post-template").last().next().next().children());
		$(this).parentsUntil("#post-template")
			.last().next().next().children().toggleClass('hidden');
	});
});
