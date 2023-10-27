import React, { useContext, useEffect, useState } from "react";
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/ThemeContext";

const Nav = ({ handleScroll }) => {
    const {darkMode, toggleModes} = useContext(DarkModeContext)
    {/*const [homeClicked, setHomeClicked] = useState(true)
    const [doClicked, setDoClicked] = useState(false)
const [contactClicked, setContactClicked] = useState(false)*/}
    const [workClicked, setWorkClicked] = useState(false)

    {/*const handleHomeClick = () => {
        setHomeClicked(true);
        setDoClicked(false);
        setWorkClicked(false);
    setContactClicked(false);
        handleScroll('section1');
    }*/}
    const handleDoClick = () => {
        {/*setHomeClicked(false);
        setDoClicked(true);
        setWorkClicked(false);
    setContactClicked(false);*/}
        handleScroll('section2');

    }
    const handleWorkClick = () => {
        {/*setHomeClicked(false);
        setDoClicked(false);
        setWorkClicked(true);
    setContactClicked(false);*/}
        handleScroll('section3');

    }
    const handleContactClick = () => {
        {/*setHomeClicked(false);
        setDoClicked(false);
        setWorkClicked(false);
    setContactClicked(true);*/}
        handleScroll('section4');

    }

    useEffect(() => {
        if (window.location.pathname.startsWith('/project/')) setWorkClicked(true)

    }, [])
    return (
        <div className={darkMode ? styles.navDark : styles.navLight}>
            {!workClicked ? <img onClick={toggleModes} className={styles.darkIcon} src={darkMode ? "/light.png" : "/dark.png"} /> : <Link to="/"><img className={styles.backIcon} src="/back.png" /></Link>}
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