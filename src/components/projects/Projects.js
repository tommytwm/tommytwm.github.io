/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Card from './card/Card';
import './Projects.css';

const project = [];

project[0] = {
    title: "This website!",
    date: "September 2020",
    event: "For my own benefit ❤️",
    description: "I built this website as a way to help practice my CSS & React front-end development skills. I am continuously going to add and change the website but feel free to check out my repo on GitHub!",
    link: "https://github.com/tommytwm/my-website"
}

project[1] = {
    title: "Store-2-door",
    date: "June 2020",
    event: "CPSC 304 - Introduction to Relational Databases",
    description: "This academic project was developed as a delivery and service app for people who aren’t able to independently grab their essential needs. This involved developing and populating a relational database schema in MySQL and hosting it on Heroku, with our full-stack on TypeScript & NodeJS.",
    link: "https://github.com/tommytwm/store-2-door"
};

project[2] = {
    title: "Superwarm",
    date: "December 2019",
    event: "MLH Local Hack Day UBC: Build Day 2019",
    description: "Superwarm is an online forum for students to connect and ask questions regarding mental health. I helped developed this prototype in a 12 hour hackathon using ReactJS as our front-end framework.",
    link: "https://github.com/tommytwm/super-warm"
};

project[3] = {
    title: "Jessica: AI Chatbot",
    date: "February 2019",
    event: "Bizhacks UBC",
    description: "Jessica is an AI Chatbot I helped developed using Google Dialogflow API, and Java, Android Studio to demo. The app was inspired to help improve the retail experience for customers navigating Best Buy’s inventory.",
    link: null
};

function Projects() {
    return(
        <div className="Projects" id="Projects">
            <h2 className="Projects-header">
                Some projects I worked on ✨
            </h2>
            <h4 className="Projects-subheader">
                (that may or may not be completed (oops) 🤷‍♂️)
            </h4>
            <Card
                title={project[0].title}
                date={project[0].date}
                event={project[0].event}
                description={project[0].description}
                link={project[0].link}  
            />
            <Card
                title={project[1].title}
                date={project[1].date}
                event={project[1].event}
                description={project[1].description}
                link={project[1].link}  
            />
            <Card
                title={project[2].title}
                date={project[2].date}
                event={project[2].event}
                description={project[2].description}
                link={project[2].link}  
            />
            <Card
                title={project[3].title}
                date={project[3].date}
                event={project[3].event}
                description={project[3].description}
                link={project[3].link}  
            />
        </div>
    );
};

export default Projects;