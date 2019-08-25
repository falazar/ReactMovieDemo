# Coding Challenge 

## Objective
Create a webpage that manages a home movie collection.

## User Stories
1. As a user I want to use the app in the latest version of Chrome.
-- The application should work with any modern browser. 
2. As a user I want to be able to enter new movies.
-- New movies are able to be searched for and added to a list.
 Supported lists currently are "Watch list" or "Seen List" with a general "all movies" display list also available, 
Each list is given its own page for easy access. 
New lists can be added very simply. 
3. As a user I want to be able to search existing movies by an arbitrary field.
-- Searches on movie in each list can be done using a combination of different fields, extra fields can be added as needed. 
Genre field may be searched using up to two ANDED values.  
Ratings are searched as a range, with the default only showing 5-10 rated movies.
4. As a user I want to be able to see a list of all my movies.
--Two lists are currently supported:
http://localhost:3000/watchlistmovies
http://localhost:3000/seenmovies
With searchability within each group. 
5. As a user I need to be able to both DELETE a movie and UPDATE movie metadata.
--The Review Movie form allows for metadata to be stored about the movies, 
including the user rating, and a user review, and category selection or none to remove from lists. 
6. As a user I want to record the following info about any given movie :
    - Genre
    - Actors
    - Title
    - Year
    - Rating
-- These fields plus more are supported in this application, including imdbID, trailer url, description, poster, release date, opening box office numbers.
These data are gathered from the mysql database and gathered from multiple sources including imdb.
The user managed fields of user rating, user review, and category are editable for each movie and user. 


--Extras:
--A userId is simulated at the App level of 23, it can be manually changed for testing, 
or a simple login authentication can be added to the project. 
--A basic ui css and interface has been created, allowing for flexible display of movie posters for the list pages. 
--A movie trailer and full movie has been included on the details page (full link simulated as more server side work usually figures this out)
--Static urls with text are generated allowing nicer SEO optimization and better looking urls containing the movie title. 
http://localhost:3000/movie/6224/A-Quiet-Place
--A simple about page has been added to show example. 

--TODOs
  Lots more could be done including error checking, UI, speedups, etc.

 


## Technical Requirements
1. The page MUST be a single page application (though may have multiple routes and templates).
2. You MUST use ReactJS 
3. You MUST use git for version control.
4. Please include a real SQL database.  Firebase or equivalent solutions are too simplistic
5. Please use a package manager such as npm or yarn


## Bonus points:
    - App is constructed using the MVC architectural pattern
    - lodash.js or underscore.js
    - bootstrap.css or equivalent
    - One-way dataflow using a stream library like BaconJS or RxJS
    DONE - The database also stores movie posters ** 


You MAY use other publicly available JS components (please document separately any libraries or frameworks that you choose to use other than the ones listed here).
--react-router-dom was used for linking. 

## Tips
- We are more interested in how it works than in how it looks
- It is more important that your code is bug free then feature rich
- Mistakes are ok, but be prepared to explain your code and defend your decisions


## Additional Comments
- When you start the challenge, please commit a file to the git repo named "started" with the content being the current date/time.
- Use what you believe to be best practices when developing the page. You will be judged on both the function and the form of your code.
- When you finish, create a git bundle( git bundle create code_challenge.bdl --all).
- Email that bundle to the person who sent you this coding challenge or host it on dropbox and email the link to download it.












