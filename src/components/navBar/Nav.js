import React, { useState } from "react";
import styles from './Nav.module.scss'
const Nav = ({ handleScroll }) => {
    const [homeClicked, setHomeClicked] = useState(true)
    const [doClicked, setDoClicked] = useState(false)
    const [workClicked, setWorkClicked] = useState(false)
    const [contactClicked, setContactClicked] = useState(false)
    const [darkMode, setDarkMode] = useState(false);

    const handleHomeClick = () => {
        setHomeClicked(true);
        setDoClicked(false);
        setWorkClicked(false);
        setContactClicked(false);
        handleScroll('section1');
    }
    const handleDoClick = () => {
        setHomeClicked(false);
        setDoClicked(true);
        setWorkClicked(false);
        setContactClicked(false);
        handleScroll('section2');

    }
    const handleWorkClick = () => {
        setHomeClicked(false);
        setDoClicked(false);
        setWorkClicked(true);
        setContactClicked(false);
        handleScroll('section3');

    }
    const handleContactClick = () => {
        setHomeClicked(false);
        setDoClicked(false);
        setWorkClicked(false);
        setContactClicked(true);
        handleScroll('section4');

    }
    const handleColorModeClick = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={styles.nav}>
            <img onClick={handleColorModeClick} className={styles.darkIcon} src={darkMode ? "/light.png" : "/dark.png"} />
            <div>
                <ul className={styles.flexCenter}>
                    <li onClick={handleHomeClick} className={homeClicked ? styles.listItemClicked : styles.listItem}>Home</li>
                    <li onClick={handleDoClick} className={doClicked ? styles.listItemClicked : styles.listItem}>What I do</li>
                    <li onClick={handleWorkClick} className={workClicked ? styles.listItemClicked : styles.listItem}>My Work</li>
                    <li onClick={handleContactClick} className={contactClicked ? styles.listItemClicked : styles.listItem}>Contact</li>
                </ul>
            </div>
            <button className={styles.resumeBtn}>Resume</button>

        </div>
    )
}

export default Nav