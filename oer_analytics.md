# OERbit Analytics

---

## The what

This is a Drupal module built to pair with the OERbit Drupal framework developed by Open.Michigan. It gets YouTube and Google Analytics of the media/web pages published on the [Open.Michigan website](http://open.umich.edu) and displays them in a block, as a themed list (in the current iteration, you may use the Context module to choose where it appears).

Module **CURRENTLY IN DEVELOPMENT** (the display in particular), and pending significant updates.

## Dependencies

This module depends on the [OAuth](http://drupal.org/project/oauth) module, the [Google Analytics API](http://drupal.org/project/google_analytics_api) module, and the [Cronplus](http://drupal.org/project/cronplus) module.

## Use

Make sure you have the dependencies installed.

Configure your Google Analytics API module such that it will call to the correct Google Analytics profile, to which you have access.

Note that the current setup of this module depends on a database structure like that which Open.Michigan's instance of OERbit uses and may need significant modification for other use as it stands.

From GitHub:

```cd``` to the ```sites/all/modules``` folder of your OERbit instance.

```git clone https://github.com/openmichigan/oerbit_analytics.git oer_analytics``` in that folder.

Adjust ```oer_analytics_cron```/cronplus as you see fit or need for your peformance constraints, etc.


...that's all you need for the moment (but again, it depends heavily on an instance mirroring Open.Michigan's OERbit, including the structure of the (MySQL) database)


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

* TODO: Make functionality more modularizable (e.g. easier to pick out different likely desired pieces of information in the Google Analytics section of the ```oer_analytics.module``` file without digging too much into the code)

* TODO: Improve performance. ```Cronplus``` will be used to update the metadata for YouTube videos daily (at approximately 3 am), but this still degrades performance at 3 am and with added functionality in future phases of the project, performance remains a top concern.
Steps (1) and (2) in the **_process_** section are the current largest concerns with respect to performance, but this list may shrink/lengthen/change.

* TODO (current): Database updates need correction.

* TODO (current): There may be one remaining bug in the YouTube metadata aggregation code causing some numbers to be incorrect -- working on this. (Previously noted bug is amended and OK now)

* TODO: Update YouTube gathering to the v3 API (and potentially integrate fully with the Google Analytics API).

* Stay tuned for potential course module integration or something totally different

## Licensing information

(for now) See ```oer_analytics.module```, line 1 following.


