import React from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CallIcon from '@mui/icons-material/Call';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/about' className={navData => navData.isActive ? style.activeIcon : style.icon}>
                <div className={style.iconBox}>
                    <PersonIcon sx={{ fontSize: 40 }}
                    />
                </div>
            </NavLink>
            <NavLink to='/skills' className={navData => navData.isActive ? style.activeIcon : style.icon}>
                <div className={style.iconBox}>
                    <PsychologyIcon sx={{ fontSize: 40 }}/>
                </div>
            </NavLink>
            <NavLink to='/projects' className={navData => navData.isActive ? style.activeIcon : style.icon}>
                <div className={style.iconBox}>
                    <BusinessCenterIcon sx={{ fontSize: 40 }}/>
                    <div className={style.navText}>Projects</div>
                </div>
            </NavLink>
            <NavLink to='/contact' className={navData => navData.isActive ? style.activeIcon : style.icon}>
                <div className={style.iconBox}>
                    <CallIcon sx={{ fontSize: 40 }}/>
                </div>
            </NavLink>
        </nav>
    );
};

export default Nav;