import React from 'react';
import style from "./Footer.module.css";
import containerStyle from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${containerStyle.container} ${style.footerContainer}`}>
                <h2 className={style.footerHeader}>Anton Kasheuski</h2>
                    <div className={style.footerIcons}>
                        <div className={style.footerIcon}></div>
                        <div className={style.footerIcon}></div>
                        <div className={style.footerIcon}></div>
                        <div className={style.footerIcon}></div>
                    </div>
                <div className={style.footerRights}>© 2022 All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;