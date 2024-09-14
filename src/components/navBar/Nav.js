import React, { useContext, useEffect, useState } from "react";
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/ThemeContext";

const Nav = ({ handleScroll }) => {
    const { darkMode, toggleModes } = useContext(DarkModeContext)
    const [workClicked, setWorkClicked] = useState(false)

    const handleDoClick = () => {
        handleScroll('section2');
    }
    const handleWorkClick = () => {
        handleScroll('section3');
    }
    const handleContactClick = () => {
        handleScroll('section4');
    }

    useEffect(() => {
        if (window.location.pathname.startsWith('/project/')) setWorkClicked(true)
    }, [])

    return (
        <div className={darkMode ? styles.navDark : styles.navLight}>
            {!workClicked ? <img alt="color mode toggle" onClick={toggleModes} className={styles.darkIcon} src={darkMode ? "/light.png" : "/dark.png"} /> : <Link to="/"><img alt="color mode toggle" className={styles.backIcon} src="/back.png" /></Link>}
            <div>
                <ul className={styles.flexCenter}>
                    <li onClick={handleDoClick} className={styles.listItem}>What I do</li>
                    <li onClick={handleWorkClick} className={workClicked ? styles.listItemClicked : styles.listItem}>My Work</li>
                    <li onClick={handleContactClick} className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link to="https://drive.google.com/file/d/1rAeUtFG1drkPDOVzZeI1MQnDBr0m2bCi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className={darkMode ? styles.resumeBtnDark : styles.resumeBtnLight}>Resume</button>
            </Link>
        </div>
    )
}

export default Nav