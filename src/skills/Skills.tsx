import React from 'react';
import style from './Skills.module.css'
import containerStyle from "../common/styles/Container.module.css";
import Skill from "./Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <Title
                    firstWord={"My "}
                    secondWord={"Skills"}
                />
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