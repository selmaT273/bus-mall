# bus-mall
BusMall project

* Display 3 unique images at a time side by side for users to vote (click) their favorite image out of the 3
    * Create constructor function that creates an object associated with each product w/ properties for
        * Name 
        * image file path
    * create algorithim that generates 3 unique random images
    * add event listener to the part of the html where images are displayed
    * generate 3 new random images on each product click

* Track user's selections 
    * In constructor function, define a property to hold number of clicks for each product
    * after each click/selection, update that property to show if it was clicked

* Limit number of rounds
    * end the session after 25 rounds
    * store number of rounds in a variable
    
* Show a report of results after 25 rounds
    * create and attach property to constructor function that keeps track of all products currently up for consideration
    * after voting is completely done remove event listener on product
    * display list of all products w/ number of votes and number of times it was shown

