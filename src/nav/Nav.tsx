import React from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CallIcon from '@mui/icons-material/Call';
import Tooltip from '@mui/material/Tooltip';

const Nav = () => {

    const tooltipStyle = {
        tooltip: {
            sx: {
                color: "#fff",
                backgroundColor: "#6c54c7",
                fontSize: "1rem",
                fontFamily: "Lato,sans-serif",
                lineHeight: "120%",
                fontWeight: "700",
                borderRadius: "0.5rem",
                right: "10px",
                padding: "10px 15px 10px 15px",
            }
        },
        arrow: {
            sx: {
                color: "#6c54c7",
            }
        },
    }

    return (
        <nav className={style.nav}>
            <NavLink to='/about' className={navData => navData.isActive ? style.activeIcon : style.icon}>
                <div className={style.iconBox}>
                    <Tooltip title="About" placement="left" arrow componentsProps={tooltipStyle}
                    >
                        <PersonIcon sx={{fontSize: 40}}/>
                    </Tooltip>
                </div>
            </NavLink>
            <NavLink to='/skills' className={navData => navData.isActive ? style.activeIcon : style.icon}>
                <div className={style.iconBox}>
                    <Tooltip title="Skills" placement="left" arrow componentsProps={tooltipStyle}>
                        <PsychologyIcon sx={{fontSize: 40}}/>
                    </Tooltip>
                </div>
            </NavLink>
            <NavLink to='/projects' className={navData => navData.isActive ? style.activeIcon : style.icon}>
                <div className={style.iconBox}>
                    <Tooltip title="Projects" placement="left" arrow componentsProps={tooltipStyle}>
                        <BusinessCenterIcon sx={{fontSize: 40}}/>
                    </Tooltip>
                </div>
            </NavLink>
            <NavLink to='/contact' className={navData => navData.isActive ? style.activeIcon : style.icon}>
                <div className={style.iconBox}>
                    <Tooltip title="Contact" placement="left" arrow componentsProps={tooltipStyle}>
                        <CallIcon sx={{fontSize: 40}}/>
                    </Tooltip>
                </div>
            </NavLink>
        </nav>
    );
};

export default Nav;