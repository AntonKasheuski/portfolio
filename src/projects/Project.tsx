import React from 'react';
import style from "./Project.module.css";

const Project = (props: {project: string}) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.projectImg}>
                <button>open project</button>
            </div>
            <div className={style.projectText}>
                <h3 className={style.projectHeader}>{props.project}</h3>
                <div className={style.projectDescription}>Project description</div>
            </div>
        </div>
    );
};

export default Project;