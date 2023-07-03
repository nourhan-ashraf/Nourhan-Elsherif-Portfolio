import React, { useContext } from "react";
import styles from './Work.module.scss'
import Cards from "../card/Cards";
import { DarkModeContext } from "../../context/ThemeContext";

const Work = ({ sectionsRef }) => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div ref={(ref) => (sectionsRef.current['section3'] = ref)} className={styles.work}>
            <div>
                <img className={styles.highlight} src={darkMode ? '/workDark.svg' : '/workLight.svg'} />
                <br />
                <br />
                <br />

                <Cards />

            </div>
        </div>
    )
}

export default Work