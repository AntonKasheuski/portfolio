import React from 'react';
import style from './Main.module.css'
import containerStyle from './../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={containerStyle.container}>
                <div className={style.text}>
                    <span>Hello!</span>
                    <h1>I am Anton Kasheuski</h1>
                    <span>Frontend developer</span>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;