import budgetTracker from '../assets/budget-tracker.png';
import crystalJumper from "../assets/crystalJumper.png";
import whatsMyJam from "../assets/whatsmyjam.png";
import noteTaker from "../assets/note-taker.png";
import wethaWizard from "../assets/wethaWizard.png";
import personalPortfolio from "../assets/personalPortfolio.png";
import kissmet from "../assets/kissmetlogin.png";
import Notary from "../assets/Notary Home.png";

export const ProjectList = [
    {
        name: "Crystal Jumper",
        image: crystalJumper,
        skills: "Node, Phaser 3, Express, Handlebars, bcrypt, MySQL, Sequelize, dotenv",
        link: "https://github.com/ckavanattu/PROJECT-2-GROUP-3",
        app: "https://crystaljump.herokuapp.com/",
        summary: "Test your reflexes with an exhilarating platformer! How long can you last?"
    },
    {
        name:"Balling On A Budget",
        image:budgetTracker,
        skills: "Node, Express, Javascript, Service Workers, ",
        link: "https://github.com/hvphan1993/balling-on-a-budget.git",
        app: "https://warm-earth-62853.herokuapp.com/",
        summary: "Keep track of your income and expenditures with this helpful app!"
    },
    {
        name: "What's My Jam",
        image: whatsMyJam,
        skills: "CSS, HTML, Javascript",
        link: "https://github.com/CannibalClarence/Whats-My-Jam.git",
        app: "https://cannibalclarence.github.io/Whats-My-Jam/",
        summary: "Tired of listening to the same old songs? Find your newest jam with our radio finding app."
    },
    {
        name: "Note Taker",
        image: noteTaker,
        skills: "Javascript, Express, Heroku",
        link: "https://github.com/hvphan1993/Note-Breaker.git",
        app: "https://infinite-springs-49706.herokuapp.com/",
        summary: "Keep track of your thoughts and stay organized with the Note Taker."
    },
    {
        name: "Wetha Wizard",
        image: wethaWizard,
        skills: "HTML, Bootstrap, Javascript",
        link: "https://github.com/hvphan1993/Wetha-Wizard.git",
        app: "https://hvphan1993.github.io/Wetha-Wizard/",
        summary: "This weather app uses Bootstrap, JavaScript, and OpenWeatherAPI to create a 5-day forecast of the city searched."
    },
    {
        name: "Notary",
        image: Notary,
        skills: "Bootstrap, JavaScript",
        link: "https://hvphan1993.github.io/Notary/#",
        app: "App work in progress",
        summary: "This project uses JavaScript and Bootstrap to explore the users text files and generate data regarding most and least used words, number of a searched word, and total word count. The project is currently a work in progress. Start the server, drag text files into the Book folder, and start exploring!"
    }
   
]