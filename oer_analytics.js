

if (Drupal.jsEnabled) {
	
	document.documentElement.className = 'js';
	document.cookie = 'has_js=1; path=/';

	$(document).ready(Drupal.attachBehaviors);
}

Drupal.behaviors.oer_analyticsBehavior = function () {
	
	$("#hovershow").hide();

	$("#hiddenq").click(function () {
		$("#oer-analytics-button").fadeOut();
		$("#hovershow").css('display','block');
	});

	$("#hovershow").click(function () {
		$("#oer-analytics-button").fadeIn();
		$("#hovershow").css('display', 'none');
	})

};



