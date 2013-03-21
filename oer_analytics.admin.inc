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
* @