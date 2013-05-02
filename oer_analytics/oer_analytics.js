

if (Drupal.jsEnabled) {
	
	document.documentElement.className = 'js';
	document.cookie = 'has_js=1; path=/';

	$(document).ready(Drupal.attachBehaviors);
}

Drupal.behaviors.oer_analyticsBehavior = function () {
	$("#oer-analytics-button").hide();
	$("#oer-analytics-buttona").click(function () {
		$("#oer-analytics-button").fadeIn();
		$("#oer-analytics-buttona").css('display', 'none');
	});

	$("#hiddenq").click(function () {
		$("#oer-analytics-buttona").fadeIn();
		$("#oer-analytics-button").css('display','none');
	});	

};



