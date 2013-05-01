

if (Drupal.jsEnabled) {
	
	document.documentElement.className = 'js';
	document.cookie = 'has_js=1; path=/';

	$(document).ready(Drupal.attachBehaviors);
}

Drupal.behaviors.oer_analyticsBehavior = function () {
	
	//$("#hovershow").hide();
	$("#oer-analytics-button").hide();

	$("#hovershow").hover(function () { // click??
		$("#oer-analytics-button").fadeIn();
		$("#hovershow").css('display', 'none');
	});

	//$("#hiddenq").click(function () {
	$("#oer-analytics-button").hover(function () {
		$("#hovershow").fadeIn();
		$("#oer-analytics-button").css('display','none');
		//$("#hovershow").css('display','block');
		
	});

	

};



