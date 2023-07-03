import React, { useContext, useEffect, useState } from "react";
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/ThemeContext";

const WorkNav = () => {
    const {darkMode, toggleModes} = useContext(DarkModeContext)
    const [workClicked, setWorkClicked] = useState(false)

    useEffect(() => {
        if (window.location.pathname.startsWith('/project/')) setWorkClicked(true)

    }, [])
    return (
        <div className={darkMode ? styles.navDark : styles.navLight}>
            {!workClicked ? <img onClick={toggleModes} className={styles.darkIcon} src={darkMode ? "/light.png" : "/dark.png"} /> : <Link to="/"><img className={styles.backIcon} src={darkMode ? "/backDark.png" : "/back.png"} /></Link>}
       
            <Link to="https://drive.google.com/file/d/1kf9-IMa9yk4QsJ0m4FVaYljx5pTfwc5_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button className={darkMode ? styles.resumeBtnDark : styles.resumeBtnLight}>Resume</button>
            </Link>
        </div>
    )
}

export default WorkNav