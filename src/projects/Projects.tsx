import React from 'react';
import style from "./Projects.module.css";
import containerStyle from "../common/styles/Container.module.css";
import Project from "./Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <h2 className={style.projectsHeader}>My projects</h2>
                <div className={style.myProjects}>
                    <Project project={'Project1'}/>
                    <Project project={'Project2'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;