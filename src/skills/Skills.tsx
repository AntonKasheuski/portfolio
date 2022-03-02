import React from 'react';
import style from './Skills.module.css'
import containerStyle from "../common/styles/Container.module.css";
import Skill from "./Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.skillsHeader}>My skills</h2>
                <div className={style.mySkills}>
                    <Skill skill={'React'}/>
                    <Skill skill={'JS'}/>
                    <Skill skill={'CSS'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;