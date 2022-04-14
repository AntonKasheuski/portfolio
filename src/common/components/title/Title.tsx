import React from 'react';
import style from "./Title.module.css";

type PropsType = {
    firstWord: string
    secondWord: string
}
const Title = (props: PropsType) => {
    return (
        <div className={style.title}>
            <h2>{props.firstWord}
                <span>{props.secondWord}</span>
            </h2>
            <div className={style.animatedBar} />
        </div>
    );
};

export default Title;