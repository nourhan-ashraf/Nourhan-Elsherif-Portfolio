import React, { useContext } from "react";
import styles from './WhatIdo.module.scss'
import { DarkModeContext } from "../../context/ThemeContext";

const WhatIdo = ({ sectionsRef }) => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div ref={(ref) => (sectionsRef.current['section2'] = ref)} className={darkMode ? styles.whatDark : styles.what}>
            <div className={styles.container}>
                <img src={darkMode ? '/smallHighlightDark.svg' : '/smallHighlight1.svg'} />
                <div className={styles.title}>What I do</div>

            </div>
            <br />
            <p className={styles.description}>
                I’m a fresh graduate Computer Engineer, I specialize in <strong>Front-end development</strong>,
                specifically in creating web applications using <strong>React JS</strong>. Additionally,
                I possess expertise in designing user interfaces through tools like <strong >Adobe XD</strong> and <strong >Figma</strong>.
                Beyond my technical skills, I have a passion for various forms of art and I actively engage
                in digital painting as well. I am highly motivated to expand my knowledge and thrive on embracing
                new challenges with enthusiasm.
            </p>
        </div>
    )
}

export default WhatIdo