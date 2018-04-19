# Self Critique

## What did we do well?

* We efficiently divided up the new user stories we received from the other team,
  and each quickly addressed and finished our assigned user stories early in the
  phase so that we could spend a lot of time refactoring the code and making the
  site mobile friendly.
* We all sat down and worked on refactoring the code together using the refactoring
  principles discussed in the textbook and in class. While a lot of what we refactored
  was simply to make the code more readable, we also refactored some code
  (such as Search.js) to handle the data pipeline more effectively so that we could
  theoretically add more attributes to our models in the future without having to
  change code.
* Front-end refactored or re-implemented every component so that the entire website
  was more mobile friendly.
* Back-end also extended our robust data scraper to populate our database with
  even more data from [www.nps.gov](www.nps.gov), [www.flickr.com](www.flickr.com),
  [www.bestbuy.com](www.bestbuy.com), and [www.amazon.com](www.amazon.com)

## What did we learn?

* We learned how to work with customers (the other team) to address issues they
  had with our website. We collaborated with them to figure out exactly what they
  wanted and how to best address it. After meeting with the other team, we then
  had a group meeting to discuss how to best solve the issues. This process taught
  us how to collaborate more effectively.
* Our front-end team had little experience developing sites for mobile, and we
  learned a lot about how to used `reactstrap` to make our site scalable and mobile
  friendly.
* Our back-end team restructured the directory structure of the project to have
a more organized repository so that anyone can go in and easily find and
understand front-end and back-end code. This taught us how to better organize
code and project directory structures.

## What can we do better?

* We still have a few front-end formatting issues for the site on mobile. Although
  everything is functional on mobile, some pages are not as nice looking on mobile
  as they are on the desktop site layout.
* We still have some data missing for some of the cameras. We were not able to populate
  all of the camera data, so we instead made a default camera page that gracefully
  shows any camera used by a photo in our database (even if we don't have specification
  data bout the camera). In the future, we might want to add more camera data to
  the database.
* Our site still has some layout issues on Safari. We need to figure out how to
  have the page format correctly on Safari in-case someone looks at our site in
  the future on Safari.

## What puzzles us?

* We do not understand why the website does not have proper formatting on Safari.
* Although we are satisfied with out front-end layout, we do recognize that changes
  could be made to the layout and color scheme to make the site better to look at.
  We just don't have the advanced design experience needed to know what other changes
  could be made to improve the overall look of the site.
