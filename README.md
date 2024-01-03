<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
<h1 align="center">The Employee Madness</h1>

  <p align="center">
    In this project I needed to make multiply extensions to an already existing MERN project.
    <br />
    <a href="https://github.com/CodecoolGlobal/the-employee-madness-react-MindMySelf"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/CodecoolGlobal/the-employee-madness-react-MindMySelf/issues">Report Bug</a>
    ·
    <a href="https://github.com/CodecoolGlobal/the-employee-madness-react-MindMySelf/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a learning project for MERN. I needed to complete multiply tasks to extend this project with new features like filters or sorting options.

<p align="right"><a href="#readme-top">:top:</a></p>



### Built With

* [![JavaScript][JavaScript]][JS-url]
* [![Express JS][ExpresJS]][ExpressJS-url]
* [![MongoDB][Mongo DB]][MongoDB-url]
* [![NodeJS][Node JS]][NodeJS-url]
* [![React][React.js]][React-url]

<p align="right"><a href="#readme-top">:top:</a></p>



<!-- GETTING STARTED -->
## Getting Started

Please look at the core requirements for the project:

### Prerequisites


1) JavaScript
2) MongoDB
3) Express JS
4) Code editor - for example Visual Studio Code


### Installation

#### Server side

##### Install dependencies
```bash
cd ./server
npm install
```

##### .env file
Copy the .env.sample as .env and fill up the environment variable for your personal mongodb connecttion url.

##### Prepare the database

```bash
cd ./server
npm run populate
```

**populate command** will run the populate.js file as a script and it will generate a buch of starter data for your database. 

##### Running the code

```bash
cd ./server
npm run dev
```

It will start the server with nodemon. So it will watch the changes and restart the server if some ot the files changed.

##### Testing with test.http

If you like to try the endpoints of the rest api, you can check the test.http file for urls are should work on your environment as well. And if you install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extenstion for vscode you can actually run those in your editor.



#### Client side

##### Install dependencies

```bash
cd ./client
npm install
```

##### Proxy

Watch for the port of your rest api. By default it will bind on port 8080 and the frontend proxy settings also depend on this configuration. If you for some reasons change the port of the backend, don't forget to change the ./client/package.json proxy settings as well.

##### Runnig the code

```bash
cd ./client
npm start
```

<p align="right"><a href="#readme-top">:top:</a></p>



<!-- USAGE EXAMPLES -->
## Usage

The user can browse through a list of employees through multiply pages.
The user can create, modify and delete employees from the list.
The user can apply various filtering methods to search employess by different attributes.
The user can search for employees with the help of a searchbar.

<p align="right"><a href="#readme-top">:top:</a></p>



<!-- CONTRIBUTING -->
## Contributing

This project was made by Cselőtei Gergely a Codecool student.

<p align="right"><a href="#readme-top">:top:</a></p>



<!-- CONTACT -->
## Contact

:man_technologist: Gergely Cselőtei   [![LinkedIn][linkedin-shield]][linkedin-Gergely]<br>


<p align="right"><a href="#readme-top">:top:</a></p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CodecoolGlobal/the-employee-madness-react-MindMySelf?style=for-the-badge
[contributors-url]: https://github.com/CodecoolGlobal/the-employee-madness-react-MindMySelf/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CodecoolGlobal/the-employee-madness-react-MindMySelf?style=for-the-badge
[forks-url]: https://github.com/MindMySelf/OOP_TW3/forks
[stars-shield]: https://img.shields.io/github/stars/CodecoolGlobal/the-employee-madness-react-MindMySelf?style=for-the-badge
[stars-url]: https://github.com/CodecoolGlobal/the-employee-madness-react-MindMySelf/stargazers
[issues-shield]: https://img.shields.io/github/issues/CodecoolGlobal/the-employee-madness-react-MindMySelf?style=for-the-badge
[issues-url]: https://github.com/CodecoolGlobal/the-employee-madness-react-MindMySelf/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-Gergely]: https://www.linkedin.com/in/gergely-csel%C5%91tei-4469a127a/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JS-url]: https://www.javascript.com/
[ExpresJS]: https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white
[ExpressJS-url]: https://expressjs.com/
[Mongo DB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Node JS]: https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
