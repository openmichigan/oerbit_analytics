

if (Drupal.jsEnabled) {
	
	document.documentElement.className = 'js';
	document.cookie = 'has_js=1; path=/';

	//$(document).ready(Drupal.attachBehaviors);
	Drupal.attachBehaviors;
    console.log("Page load?");
}


Drupal.behaviors.oer_analyticsBehavior = function () {
	//$("#oer-analytics-button").hide();
	$("#hiddenq").click(function () { // show button open on page load
		$("#oer-analytics-buttona").fadeIn();
		//$("oer-analytics-button").css('display', 'block');
		//$("#oer-analytics-buttona").css('display', 'none');
		$("#oer-analytics-button").hide();
	});

	$("#oer-analytics-buttona").click(function () {
		$("#oer-analytics-button").hide(); //css('display','none');
		$("#oer-analytics-buttona").fadeIn();
		
	});	

};



