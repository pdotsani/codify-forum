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
		var getToReplies = $(this).parentsUntil("#post-template")
			.last().siblings(".replies");

		getToReplies.toggleClass('hidden');
		getToReplies.toggleClass('wrapped-up');
	});
	$("#create-reply").on("click", function() {
		var getToCreateReply = $(this).parentsUntil("#post-template")
				.last().siblings(".post-reply");

		getToCreateReply.toggleClass('hidden');
		getToCreateReply.toggleClass('wrapped-up');
	});
});
