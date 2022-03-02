import React from 'react';
import style from './Skill.module.css'

const Skill = (props: { skill: string }) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.skillLogo}></div>
            <h3 className={style.skillHeader}>{props.skill}</h3>
            <div className={style.skillDescription}>
                Skill description Skill description Skill description
                Skill description Skill description Skill description
                Skill description Skill description Skill description
                Skill description Skill description Skill description
                Skill description Skill description Skill description
                Skill description Skill description
            </div>
        </div>
    );
};

export default Skill;