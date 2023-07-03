import React, { useContext } from "react";
import styles from './ProjectBio.module.scss'
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from 'react-icons/im'
import { DarkModeContext } from "../../context/ThemeContext";
import YouTube from 'react-youtube';

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
                <div>
                    <img className={styles.highlight} src={darkMode? '/descDark.svg' : '/descDark.svg'} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.desc }}></p>
            </div>}

            {params.demo && <div className={darkMode ? styles.demoDark : styles.demoLight}>
                <div>
                    <img className={styles.highlight} src={darkMode? '/demoDark.svg' : '/demoLight.svg'} />
                </div>
                <br />
                <div className={styles.center}>
                <iframe  className={styles.video} controls src={"https://drive.google.com/uc?id=1shebb16I6g27druutkGtjkKgzBcWjfyU"} />
                </div>

            </div>}

            {params.myPart && <div className={darkMode ? styles.myPartDark : styles.myPartLight}>
                <div>
                    <img className={styles.highlight} src={darkMode? '/partDark.svg' : '/[partLight].svg'} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.myPart }}></p>
            </div>}

            {params.tech && <div className={darkMode ? styles.techDark : styles.techLight}>
                <div>
                    <img className={styles.highlight} src={darkMode? '/techDark.svg' : '/techLight.svg'} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.tech }}></p>
            </div>}

        </div>
    )
}
export default ProjectBio