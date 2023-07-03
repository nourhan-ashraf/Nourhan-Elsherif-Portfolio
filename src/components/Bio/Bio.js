import React, { useContext } from "react";
import styles from './Bio.module.scss'
import { DarkModeContext } from "../../context/ThemeContext";
const Bio = () => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div className={darkMode ? styles.bioDark : styles.bioLight}>
            <div className={styles.leftPart}>
                <div className={styles.hiTitle}>Hi, my name is</div>
                <div className={styles.container}>
                    <img width="65%" src="./highlight2.svg" />
                    <div className={styles.name}>Nourhan Elsherif</div></div>

                <div className={styles.subTitle}>I’m a&nbsp;
                    <div className={styles.job}> Front-end Engineer</div>
                </div>
                <div className={styles.subTitle}>who has passion for Graphic Design and Digital Painting.</div>
                <br />
                <div className={styles.centerLoc}>
                    <img className={styles.locationIcon} src="/location.png" /> &nbsp;
                    <div className={styles.location}>Cairo, Egypt</div>
                </div>
            </div>

            <div className={styles.picContainer}>
                <img className={styles.picBg} src="/yellowLight2.svg" />
                <img className={styles.myPic} src="/me3.svg" />
                <img className={styles.art} src="/art.png" />
                <img className={styles.code} src={darkMode ? "/codeDark.png" : "/codeLight.png"} />

            </div>
        </div>
    )
}

export default Bio