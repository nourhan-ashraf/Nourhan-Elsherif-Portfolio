import React, { useContext } from "react";
import styles from './ProjectBio.module.scss'
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from 'react-icons/im'
import { DarkModeContext } from "../../context/ThemeContext";

const ProjectBio = ({ params }) => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div className={styles.project}>

            <div className={darkMode ? styles.projectBioDark : styles.projectBioLight}>
                <img src={params.logo} className={styles.logo} />
                <br />
                <div className={styles.name}>{params.name}</div>
                <div className={styles.subTitle}>{params.subTitle}</div>
                <Link to={params.link} target="_blank"><button className={styles.link}>{params.web ? "View website" : "View design on behance"} <ImArrowUpRight2 /></button></Link>
            </div>

            {params.desc && <div className={darkMode ? styles.descDark : styles.descLight}>
                <div className={styles.container}>
                    <img src={darkMode? '/smallHighlightDark.svg' : '/smallHighlight1.svg'} />
                    <div className={styles.descTitle}>Description</div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.desc }}></p>
            </div>}

            {params.demo && <div className={darkMode ? styles.demoDark : styles.demoLight}>
                <div className={styles.container}>
                    <img src={darkMode? '/smallHighlightDark.svg' : '/smallHighlight1.svg'} />
                    <div className={styles.demoTitle}>Demo</div>
                </div>
                <br />
                <div className={styles.center}>
                <video className={styles.video}  controls>
                    <source src={"https://drive.google.com/file/d/1shebb16I6g27druutkGtjkKgzBcWjfyU/view?usp=sharing"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>}

            {params.myPart && <div className={darkMode ? styles.myPartDark : styles.myPartLight}>
                <div className={styles.container}>
                    <img src={darkMode? '/smallHighlightDark.svg' : '/smallHighlight1.svg'} />
                    <div className={styles.partTitle}>My part</div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.myPart }}></p>
            </div>}

            {params.tech && <div className={darkMode ? styles.techDark : styles.techLight}>
                <div className={styles.container}>
                    <img src={darkMode? '/smallHighlightDark.svg' : '/smallHighlight1.svg'} />
                    <div className={styles.techTitle}>Technologies</div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.tech }}></p>
            </div>}

        </div>
    )
}
export default ProjectBio