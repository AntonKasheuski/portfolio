import React from 'react';
import style from "./Project.module.css";

type PropsType = {
    style: { backgroundImage: string }
    title: string
    description: string
}

const Project = (props: PropsType) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.projectImg} style={props.style}>
                <button className={style.button}>open project</button>
            </div>
            <div className={style.projectText}>
                <h5 className={style.projectHeader}>
                    <a>{props.title}</a>
                </h5>
                <div className={style.projectDescription}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Project;