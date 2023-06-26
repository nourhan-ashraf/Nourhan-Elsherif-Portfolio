import React, { useState } from "react";
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom';

const Nav = ({ handleScroll }) => {
    {/*const [homeClicked, setHomeClicked] = useState(true)
    const [doClicked, setDoClicked] = useState(false)
    const [workClicked, setWorkClicked] = useState(false)
const [contactClicked, setContactClicked] = useState(false)*/}
    const [darkMode, setDarkMode] = useState(false);

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
    const handleColorModeClick = () => {
        setDarkMode(!darkMode)
    }
  
    return (
        <div className={styles.nav}>
            <img onClick={handleColorModeClick} className={styles.darkIcon} src={darkMode ? "/light.png" : "/dark.png"} />
            <div>
                <ul className={styles.flexCenter}>
                    <li onClick={handleDoClick} className={styles.listItem}>What I do</li>
                    <li onClick={handleWorkClick} className={styles.listItem}>My Work</li>
                    <li onClick={handleContactClick} className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link to="https://drive.google.com/file/d/1kf9-IMa9yk4QsJ0m4FVaYljx5pTfwc5_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">  
        <button className={styles.resumeBtn}>Resume</button>
        </Link>
        </div>
    )
}

export default Nav