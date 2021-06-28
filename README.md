# YouTube.Live

```
Great Live Music. Period.

```

## Description 

Attend live concerts right from the comfort of your own home.  Watch your favorite musical artists and legendary rock bands perform in concert venues from all around the globe. Discover rare intimate peformances and historic sold out shows. 

Find/Search/Stream (add more...)


The is application is deployed on Heroku: [YouTube.Live](/)

URL to GitHub Repository: [YouTube.Live Repo](https://github.com/moagermo/youtube-live)


## Table of Contents
* [User Story](#user-story)
* [Business Context](#business-context)
* [Market Research](#market-research)
* [Current Features](#current-features)
* [Future Development](#future-development)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#Tests)
* [Collaborators](#collaborators)
* [Contributing](#contributing)
* [Acceptance Criteria](#acceptance_criteria)
* [License](#license)


## User Story

```
As a user, I want a channel to stream live music and find information about my favorite artists. When I visit the site, I can search for upcoming concert events and locations, and watch recommended videos based on different categories

```

## Business Context

Musical Artists and Venue Owners would benefit grealtly from making Live Concert Events more accessible to wide audiences. Creating a channel to stream live music would provide a safer and more affordable concert experience for audiences and generate more revenue for both parties. Audiences would benefit from the convenience and flexibiliy of streaming live music from the comfort of their own home.


## Market Research:

   * About 47% of those surveyed agreed that the idea of going to a major public  event “will scare me for a long time,” per a study last month by Performance Research.
     - [Variety](https://variety.com/2020/digital/news/post-pandemic-streaming-tv-increase-1234589195/)
    * The concert and events industry has been among the hardest hit by Covid-19. Losses in the United States amounted to more than $26.1 billion in 2020.
     - [Los Angeles Business Journal](https://labusinessjournal.com/news/2021/mar/01/are-virtual-concerts-future-live-entertainment/)
    * 60% of fans surveyed said they planned to continue watching live streams, even once venues reopen. 
     - [BroadWay World](https://www.broadwayworld.com/bwwmusic/article/Bandsintown-Finds-Unique-Insights-into-Music-Live-Streaming-with-Fan-and-Artist-Surveys-20200824)
    * 67% of live video viewers are more likely to buy a ticket to a concert or event after watching a live video of that event or a similar one. 
    - [Amp Live](/)
 
## Current Features

--info/facts about artists and musical venues? Stories behind the music/
--share/like/comment on videos and performances.
--Save/create your own library of live music. 

## Future Development

The Stream live concerts in real-time (add more...)

## Technologies 


[Trello](https://trello.com/) Agile Project Management with Scrum/Kanban Boards

[Adobe Spark](https://spark.adobe.com/page/tRIlDi39DdX6h/) WireFrame/Mockup of UI/UX design.

[ReactJS](https://github.com/facebook/react) A declarative, efficient, and flexible JavaScript library for building user interfaces.

[NodeJS](https://github.com/nodejs/node) open-source, cross-platform, JavaScript runtime environment.

[ExpressJS](https://github.com/expressjs) Fast, unopinionated, minimalist web framework for node.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


[YouTube Data API v3](https://console.cloud.google.com/apis/library/youtube.googleapis.com?project=vaulted-channel-306702) HTTP requests for Live Music Videos.

[SongKick API](https://www.songkick.com/developer) HTTP requests for information on live concert events, artists, and locations

## Installation

When you run `npx create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

`Fork` or `Clone` this application to your local directoy. In the project directory, you can run:

`npm start` to run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

Please see the following guide for more information on using [create-react-app](client/README.md)

## Usage 

To use this App, please:

Apply for a [SongKick](https://www.songkick.com/api_key_requests/new) API key.

Request a [YouTube Data API v3](https://developers.google.com/youtube?hl=en) API key from Google Developer Console.

This application is deployed on Heroku: [YouTube.Live](/)


## Test

To test this application, visit the deployed application on Heroku: 

There are two options for testing:

`Sign up` to create a new user account for testing.

-OR-

`Log in` to enter a user test credentials provided below.

```
User Name: testuser@fakemail.com
Password: testlive123
```

## Collaborators

|           |            |            |            |
|-----------|------------|------------|------------|
|![Anthony](/client/src/images/anthony.jpeg?raw=true "Anthony DeCapite")|[Anthony's Work](https://github.com/adecapite)|![Kyle](/client/src/images/kyle.jpeg?raw=true "Kyle Young")|[Kyle's Work](https://github.com/Youngin9210)
|![Mo](/client/src/images/mo.png?raw=true "Mo Ager")|[Mo's Work](https://github.com/moagermo)|![Morgan](/client/src/images/morgan.png?raw=true "Morgan Schall")|[Morgan's Work](https://github.com/mschall217)|
|![Ryan](/client/src/images/ryan.jpeg?raw=true "Ryan Evans")|[Ryan's Work](https://github.com/rdevans87)|

## Contributing

Please refer to the [Contributor Covenant](https://www.contributor-covenant.org/) for contribution guidelines.


## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Acceptance Criteria

* Must use ReactJS in some way (even if minimal).
* Must use a Node and Express Web Server.
* Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM.
* Musthave both GET and POST routes for retrieving and adding new data.
* Must be deployed using Heroku (with Data).
* Must utilize at least two libraries, packages, or technologies that we haven’t discussed.
* Must allow for or involve the authentication of users in some way.    
* Must have a polished frontend/UI.
* Must have folder structure that meets MVC Paradigm.
* Must meet good quality coding standards (indentation, scoping, naming).
* Must not expose sensitive API key information on the server.


## License

This application was created as a Final Group Project for `The Ohio State University's Full Stack Coding Bootcamp` and is not intended for commercial use. 

This project is for educational purposes only and is not affiliated with [YouTube](https://developers.google.com/terms?hl=en) or [SongKick](https://www.songkick.com/developer/api-terms-of-use), and the [collaborators](#collaborators) have no plans to generate revenue with this application. 

The content of this application is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For further details, see the Google [Developers Site Policies](https://developers.google.com/terms/site-policies). 

