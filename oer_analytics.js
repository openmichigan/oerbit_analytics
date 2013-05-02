

if (Drupal.jsEnabled) {
	
	document.documentElement.className = 'js';
	document.cookie = 'has_js=1; path=/';

	$(document).ready(Drupal.attachBehaviors);
}

Drupal.behaviors.oer_analyticsBehavior = function () {
	$("#oer-analytics-button").hide();
	console.log("got to line 15");
	$("#hovershow").click(function () {
		$("#oer-analytics-button").fadeIn();
		$("#hovershow").css('display', 'none');
	});

	$("#hiddenq").click(function () {
		$("#hovershow").fadeIn();
		$("#oer-analytics-button").css('display','none');
	});	

};



