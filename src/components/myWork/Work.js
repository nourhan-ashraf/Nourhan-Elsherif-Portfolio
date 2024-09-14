import React, { useContext } from "react";
import styles from './Work.module.scss'
import { DarkModeContext } from "../../context/ThemeContext";
import WorkCard from "../card/Card";

const Work = ({ sectionsRef }) => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <div ref={(ref) => (sectionsRef.current['section3'] = ref)} className={styles.work}>
            <img alt="highlight" className={styles.highlight} src={darkMode ? '/workDark.svg' : '/workLight.svg'} />
            <WorkCard />
        </div>
    )
}

export default Work