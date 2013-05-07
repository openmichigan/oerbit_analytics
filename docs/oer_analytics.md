# OERbit Analytics

---

## The what

This is a Drupal module built to pair with the OERbit Drupal framework developed by Open.Michigan. It gets YouTube and Google Analytics of the media/web pages published on the [Open.Michigan website](http://open.umich.edu) and displays them in a block, as a themed list (in the current iteration, you may use the Context module to choose where it appears).

Module **CURRENTLY IN DEVELOPMENT** and pending significant updates.

## Dependencies

This module depends on the [OAuth](http://drupal.org/project/oauth) module, the [Google Analytics API](http://drupal.org/project/google_analytics_api) module, and the [Elysia Cron](http://drupal.org/project/elysia_cron) module.

## Use

Make sure you have the dependencies installed.

Configure your Google Analytics API module such that it will call to the correct Google Analytics profile, to which you have access.

Register for an API Key at the [Google API Console](https://code.google.com/apis/console) if you do not have one. 

Go to ```admin/settings/oer-analytics``` in your Drupal site and paste the API key in that text box. Save it.

Note that the current setup of this module depends on a database structure like that which Open.Michigan's instance of OERbit uses and may need significant modification for other use as it stands.

From GitHub:

```cd``` to the ```sites/all/modules``` folder of your OERbit instance.

```git clone https://github.com/openmichigan/oerbit_analytics.git oer_analytics``` in that folder.


...that's all you need for the moment. (But again, it depends heavily on an instance mirroring Open.Michigan's OERbit, including the structure of the (MySQL) database.)


## The process

As for what is actually going on as the module 'grabs the info and displays it in a block': 

<img src="analytics_project_diagram_1.png" />

The arrows in the diagram, you'll notice, are labeled with numbers -- the approximate order in which processes are happening behind the scenes.

1) OERbit queries the database for information (specifically, YouTube video IDs and the Drupal node IDs with which they are associated)

2) A call is made to the YouTube API (currently, v2, which is to be deprecated), using the information gathered from the database, in order to get information e.g. # of views per video

3) The aggregated information from steps (1) and (2) is properly aggregated and stored in new database tables for the oer_analytics module

4) This is the 'fourth part' of the process, but it is also a more continuous process really, operating on a slightly different timeline: leveraging the Google Analytics API module, which this depends on, to grab Google Analytics data for the correct pages in the setup G.A. (Google Analytics) profile. Specifically, this module will grab views for every page of node type _course_ (defined in [OERbit](https://github.com/openmichigan/OERbit) ), and for each course which has a bulk download, loads of the bulk download page for that course. (Further updates pending.)

5) All this information, whether from the database, live API responses, or cache, is aggregated properly and displayed.

## TODOS and concerns

* TODO: Make functionality more modularizable (e.g. easier to pick out different likely desired pieces of information in the Google Analytics section of the ```oer_analytics.module``` file without digging too much into the code) -- G.A. code in particular will be refactored after first live release.

* TODO: Further display decisions, increased user-friendliness for multiple uses

* TODO: Integration of JavaScript charts

* TODO: more testing, + feature??

## Licensing information

(for now) See ```oer_analytics.module```

