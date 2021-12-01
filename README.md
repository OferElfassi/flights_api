
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/DCS-Shenkar-2022/assignment9---ex2-express-mongo-heroku-OferElfassi">
    <img src="https://user-images.githubusercontent.com/13490629/144242469-581cfda9-76ff-44f2-a1e2-0a45b82b45db.png" alt="Logo" width="220" height="80">
  </a>

<h3 align="center">Flights Management API</h3>

  <p align="center">
    An awesome API made for managing company employees flights
    <br />
    <a href="https://documenter.getpostman.com/view/4322795/UVJeGbxp"><strong>Explore the API docs »</strong></a>
    <br />
    <br />
    <a href="https://employees-flight-api.herokuapp.com">API Endpoint</a>
    ·
    <a href="https://github.com/DCS-Shenkar-2022/assignment9---ex2-express-mongo-heroku-OferElfassi/issues">Report Bug</a>
    ·
    <a href="https://github.com/DCS-Shenkar-2022/assignment9---ex2-express-mongo-heroku-OferElfassi/pulls">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
    * [Built With](#built-with)
* [Getting Started](#getting-started)
    * [Installation](#installation)
* [Usage](#usage)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project


This project implements flight management API

Here's list of the main functionalities:
* Sign up to get API key
* Get weather on destination country/city of flight
* Preform CRUD operations on the flights dataset

The API is published on heroku in the following address : [https://employees-flight-api.herokuapp.com](https://employees-flight-api.herokuapp.com)



### Built With

* [Nodejs](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6445933&assignment_repo_type=AssignmentRepo)
```sh
git clone https://github.com/DCS-Shenkar-2022/assignment9---ex2-express-mongo-heroku-OferElfassi.git
```
2. Install NPM packages
```sh
npm install
```
3. Add .env file and write your credentials
```JS
DB_NAME= "********"
DB_USER= "********"
DB_PASS= "********"
DB_HOST= "********"
WEATHER_API_KEY= "********"
```

<!-- USAGE EXAMPLES -->
## Usage
In order to use the demo API use the following endpoint - [https://employees-flight-api.herokuapp.com](https://employees-flight-api.herokuapp.com)

Here's example call to the API:

GET: Get flight by id (Using AJAX)
```JS
var settings = {
    "url": "https://employees-flight-api.herokuapp.com/api/flights/61a74684faab93f0ec373026",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Authorization": "C86B2FC2"
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
```
Response (JSON)
```JSON
{
    "message": "Flights found successfully.",
        "data": {
        "dest": "Great Falls",
            "date": "2022-02-15T09:20:34.283Z",
            "weather": {
            "sky": "overcast clouds",
                "humidity": 51,
                "temp": "13.92 c"
        }
    }
}
```


_For more examples, please refer to the [Documentation](https://documenter.getpostman.com/view/4322795/UVJeGbxp)_


<!-- CONTACT -->
## Contact

Ofer Elfassi - [@Linkedin](https://www.linkedin.com/in/oferelfassi) - ofer2212@gmail.com

Project Link: [https://github.com/DCS-Shenkar-2022/assignment9---ex2-express-mongo-heroku-OferElfassi](https://github.com/DCS-Shenkar-2022/assignment9---ex2-express-mongo-heroku-OferElfassi)



