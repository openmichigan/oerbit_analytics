

//alert("hello, testing js!");

//alert("does this work now?");

if (Drupal.jsEnabled) {
	
	document.documentElement.className = 'js';
	document.cookie = 'has_js=1; path=/';

	$(document).ready(Drupal.attachBehaviors);
}

Drupal.behaviors.oer_analyticsBehavior = function () {
	var showing = true;

	$("#oer-analytics-button").hover(function (){
		$("#oer-analytics-button").fadeOut();
		$("#overall-show").fadeIn();
		showing = false;
	});

	if (!showing) {
		$('#overall-show').hover(function (){
			$('#oer-analytics-button').fadeIn();
			$('#overall-show').fadeOut();
		});
	}

	// $("#overall-show").hover(function(){
	// 	$('#oer-analytics-button').show();
	// 	//$('#overall-show').hide();
	// });
};

// 	var div_clicked = false;

// 	$('#oer-analytics-button').click(function () {
// 		div_clicked = true;
// 	});

// 	$(document).click(function () {
// 		if (!div_clicked) {
// 			$('#oer-analytics-button').hide);
// 		}
// 		div_clicked = false;
// 	});

// }


