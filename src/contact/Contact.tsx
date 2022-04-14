import React from 'react';
import style from './Contact.module.css'
import containerStyle from "../common/styles/Container.module.css";

const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${containerStyle.container} ${style.contactContainer}`}>
                <h2 className={style.contactHeader}>Contact</h2>
                <form className={style.contactForm}>
                    <input className={style.contactInput}/>
                    <input className={style.contactInput}/>
                    <textarea className={style.contactTextarea}/>
                    <button type={"submit"}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;