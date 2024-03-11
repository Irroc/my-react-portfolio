import Project from "../components/Project";
// import {projects} from "../data/ProjectsToRender";
const project1 = {
  id: 1,
  link: 'https://github.com/Irroc/cocktail_finder',
  img: "/CocktailFinder.png",
  description: "This Cocktail Finder application was intended to provide users with a way to search ingredients and save their favorite recipes."
}
const project2 = {
  id: 2,
  link: 'https://github.com/Irroc/arcade-manager',
  img: "ArcadeManager.png",
  description: "This Arcade Management is the front-end and back-end of a website and utilizes Express.js, and Sequelize to interact with a MySQL database."
}
const project5 = {
  id: 3,
  link: 'https://gist.github.com/Irroc/ac2d722c261923ec05b8c3f6c05cef8c',
  img: "/RegexTutorial.png",
  description: "This is my own Regex Tutorial to help myself understand the basics of Regex."
}
const project3 = {
  id: 4,
  link: 'https://github.com/Irroc/employee-tracker',
  img: "/MysqlDatabase.png",
  description: "This employee tracker was made to track employee information easier as well as add the employees to departments and different roles they may have while working for the user."
}
const project4 = {
  id: 5,
  link: 'https://github.com/Irroc/weather-application',
  img: "/WeatherApp.png",
  description: "This is my weather application so that you can search the city's name to get the weather. Also the old searches will be saved in the history section and available to click next time so you dont have to search it again."
}
const project6 = {
  id: 6,
  link: 'https://github.com/Irroc/javascript-review-game',
  img: "/ReviewGame.png",
  description: "This is a review game where your timed to answer as many questions pulled at random from a pool of questions."
}
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="container">
        <Project projects={project1} />
        <Project projects={project2} />
        <Project projects={project3} />
        <Project projects={project4} />
        <Project projects={project5} />
        <Project projects={project6} />
      </div>
    </div>
  );
}
