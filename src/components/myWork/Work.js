import React, { useContext } from "react";
import styles from './Work.module.scss'
import data from './myWork.json'
import Cards from "../card/Cards";
import { DarkModeContext } from "../../context/ThemeContext";

const Work = ({ sectionsRef }) => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div ref={(ref) => (sectionsRef.current['section3'] = ref)} className={styles.work}>
            <div className={styles.container}>
                <img src={darkMode ? '/smallHighlightDark.svg' : '/smallHighlight1.svg'} />
                <div className={styles.title}>My Work</div>
                <br />
                <br />
                <br />

                <Cards />

            </div>
        </div>
    )
}

export default Work