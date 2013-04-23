<?php

/**
* @file
* Administration callbacks for the oer_analytics module.
*/

// Much of this is lifted from the "Creating Drupal 6.x modules" docs on the
// Drupal website http://drupal.org/node/231276 and the "Writing a Module"
// chapter of Pro Drupal Development 2nd Edition by John K. VanDyk.  ISBN-13:
// 978-1430209898
// In turn, much is borrowed from https://github.com/jasonhoekstra/learning_registry/blob/6.x-1.x/learning_registry.admin.inc

/**
* Form builder. Configure oer_analytics module.
* 
* @see system_settings_form()
*/

function oer_analytics_admin_settings() {
	$form = array();
	$form['oer_analytics_gac_key'] = array(
		'#type' => 'textfield',
		'#title' => t('YouTube account application key'),
		'#size' => 128,
		'#maxlength' => 1024,
		'#default_value' => variable_get('oer_analytics_gac_key', NULL),
		'#description' => t('The secret key your YouTube Data API requires.'),
		'#required' => TRUE,
	);
	return system_settings_form($form);
}

/**
 * Validate the learning_registry configuration form. If needed.
 *
 * @param array $form
 *   The array that describes the configuration form.
 * @param array $form_state
 *   The values of the array.
 */
function oer_analytics_admin_settings_validate($form, $form_state) {
  $yt_key = $form_state['values']['oer_analytics_gac_key'];
  if (!valid_url($yt_key, TRUE)) {
    form_set_error('oer_analytics_gac_key', t('Please provide a valid key.'));
  }
}