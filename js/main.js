$(document).ready(function() {
	
	// Toggle focus style on searchbar in main page
	$("#nav-searchbar").on("focus", "input", function() {
		$(this).parent().addClass('search-focus');
	});
	$("#nav-searchbar").on("focusout", "input", function() {
		$(this).parent().removeClass('search-focus');
	});

	// function to unhide and wrap-up div
	function unhideWrapUp(section) {
		section.toggleClass('hidden');
		section.toggleClass('wrapped-up');
	}

	// Show & hide replies/new reply within post template
	$("#show-reply").on("click", function() {
		var getToReplies = $(this).parentsUntil("#post-template")
			.last().siblings(".replies");
		unhideWrapUp(getToReplies);
	});
	$("#create-reply").on("click", function() {
		var getToCreateReply = $(this).parentsUntil("#post-template")
				.last().siblings(".post-reply");
		unhideWrapUp(getToCreateReply);
	});
	$("button#cancel-reply").on("click", function() {
		var getToCreateReply = $(this).parentsUntil("#post-template").last();
		unhideWrapUp(getToCreateReply);
	});

});
