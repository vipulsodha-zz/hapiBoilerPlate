# CTPL - REST API's and Front End :
  

  Node.js Rest Api for Crowdfire Twitter Primier League - `Hapi, Joi, Mongoose, Node, Swagger, Mocha, AngularJs, Material Library, Istanbul`

# Deployment :
  

    Entry Point:

      `app.js`

    Install Dependencies:

      $ npm install
    
    Start mongod (Seperate Window)

      $ mongod

    Start Application (Seperate Window)

      $ npm start

    Start Test (In same window as dependecy installation)

    Includes mocha test, eslint, istanbul code coverage

      $ npm test

  * Server starts at `http://HOST:PORT`
  * Api Documentation at `http://HOST:PORT/documentation`

  ##Enviorment Variables

  + `API_URL_TWITTER_STATS`
  + `API_URL_TWITTER_PROFILE`
  + `PORT`
  + `HOST`
  + `MONGO_HOST`
  + `MONGO_PORT`
  + `MONGO_DB`
  + `API_KEY`
  + `APP_NAME`
  + `DOMAIN_NAME`
  + `API_URL_INSTAGRAM_STATS`

  ## Documentation :

  ### Directories:

  + ./config: Contains the configuration for the server i.e. the host name and port nuumber taken from enviorment variables.

  + ./controllers: Contains three folders form which routeLogic contains the business Logic

  + ./db: Contains the db connection and the db handler functions.

  + ./lib: Contains the helper functions and the score calculator of league

  + ./errorr: Contains the errors with error code and message for frontend.

  + ./mocks: Contains the mocks for test cases

  + ./public_html: Contains the front end app developed in `AngularJs` with all love.

  + ./routes: contains 4 files

  > common: Contains common routes like leaderboard, etc

  > create: Contains league creation routes getting league Id, posting rules, inviting friends.

  > Join: Contains join league route

  + ./test: Contains the unit and integration test cases.

  + ./validate: Contains all the validation logic for all routes

    `For indepth documentation on api's open /documentation on browser`

