import React, { useContext } from "react";
import styles from './ProjectBio.module.scss'
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from 'react-icons/im'
import { DarkModeContext } from "../../context/ThemeContext";

const ProjectBio = ({ params }) => {
    const { darkMode } = useContext(DarkModeContext)

    return (
        <div className={styles.project}>

            <div className={darkMode ? styles.projectBioDark : styles.projectBioLight}>
                <img alt="project logo" src={params.logo} className={styles.logo} />
                <br />
                <div className={styles.name}>{params.name}</div>
                <div className={styles.subTitle}>{params.subTitle}</div>
                {params.link === "" ? ""
                    : <Link to={params.link} target="_blank"><button className={styles.link}>{params.web ? "View website" : "View design on behance"} <ImArrowUpRight2 /></button></Link>}
                <Link to={params.github} target="_blank"><button className={styles.link}>{params.github ? "View project on github" : ""} {params.github ? <ImArrowUpRight2 /> : ""} </button></Link>


            </div>

            {params.desc && <div className={darkMode ? styles.descDark : styles.descLight}>
                <div>
                    <img alt="highlight" className={styles.highlight} src={darkMode ? '/descDark.svg' : '/descLight.svg'} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.desc }}></p>
            </div>}

            {params.demo && <div className={darkMode ? styles.demoDark : styles.demoLight}>
                <div>
                    <img alt="highlight" className={styles.highlight} src={darkMode ? '/demoDark.svg' : '/demoLight.svg'} />
                </div>
                <br />
                <div className={styles.center}>
                    <iframe className={styles.video} controls src={params.demo} />
                </div>

            </div>}

            {params.myPart && <div className={darkMode ? styles.myPartDark : styles.myPartLight}>
                <div>
                    <img alt="highlight" className={styles.highlight} src={darkMode ? '/partDark.svg' : '/partLight.svg'} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.myPart }}></p>
            </div>}

            {params.tech && <div className={darkMode ? styles.techDark : styles.techLight}>
                <div>
                    <img alt="highlight" className={styles.highlightTech} src={darkMode ? '/techDark.svg' : '/techLight.svg'} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.tech }}></p>
            </div>}

        </div>
    )
}
export default ProjectBio