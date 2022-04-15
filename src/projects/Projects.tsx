import React from 'react';
import style from "./Projects.module.css";
import containerStyle from "../common/styles/Container.module.css";
import Project from "./Project";
import Title from "../common/components/title/Title";
import socialImage from './../assets/image/social-net.jpeg'
import todoImage from './../assets/image/todolist.jpeg'
import fridayImage from './../assets/image/friday.jpeg'

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    const friday = {
        backgroundImage: `url(${fridayImage})`
    }

    const projects = [
        {
            id: 1,
            style: social,
            title: 'Social Network',
            description: 'Dolore, porro rem endus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolore, porro rem quod illo'
        },
        {
            id: 2,
            style: todolist,
            title: 'Todo List',
            description: 'React\'s new "hooks" APIs give function components the ability to use local component state, execute side effects, and more. React also lets us write custom hooks, which let us extract reusable hooks to add our own behavior on top of React\'s built-in hooks.'
        },
        {
            id: 3,
            style: friday,
            title: 'Friday Project',
            description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking ...'
        },
    ]

    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <Title
                    firstWord={"My "}
                    secondWord={"Projects"}
                />
                <div className={style.myProjects}>
                    {projects.map(pr =>
                        <Project
                            key={pr.id}
                            id={pr.id}
                            style={pr.style}
                            title={pr.title}
                            description={pr.description}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;