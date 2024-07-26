import React, { useContext } from "react";
import styles from './WhatIdo.module.scss'
import { DarkModeContext } from "../../context/ThemeContext";

const WhatIdo = ({ sectionsRef }) => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div ref={(ref) => (sectionsRef.current['section2'] = ref)} className={darkMode ? styles.whatDark : styles.whatLight}>
            <div>
                <img className={styles.highlight} src={darkMode ? '/whatDark.svg' : '/whatLight.svg'} />
            </div>
            <br />
            <p className={styles.description}>
                I'm a <strong>junior Front-end Developer</strong> currently working at Oola Technologies,
                where I specialize in <strong>Angular TS</strong> to create user-friendly web applications for the insurance industry.
                With nearly a year of experience in this role, I have honed my skills in building effective solutions.
                Before joining Oola Technologies, I freelanced with <strong>React JS for 3 months</strong>, developing dynamic and responsive web apps.
                <br />
                I also have a strong grasp of data structures and algorithms, and I enjoy problem-solving.
                My background includes some understanding of backend development, which complements my front-end skills,
                and a solid foundation in UI design using tools like Adobe XD and Figma.
                I am always eager to learn new technologies and embrace new challenges.
            </p>
        </div>
    )
}

export default WhatIdo