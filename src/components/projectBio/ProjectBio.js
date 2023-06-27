import React from "react";
import styles from './ProjectBio.module.scss'
import { Link } from "react-router-dom";
import { ImArrowUpRight2 } from 'react-icons/im'

const ProjectBio = ({ params }) => {
    return (
        <div className={styles.project}>

            <div className={styles.projectBio}>
                <img src={params.logo} className={styles.logo} />
                <br />
                <div className={styles.name}>{params.name}</div>
                <div className={styles.subTitle}>{params.subTitle}</div>
                <Link to={params.link} target="_blank"><button className={styles.link}>{params.web ? "View website" : "View design on behance"} <ImArrowUpRight2 /></button></Link>
            </div>

            {params.desc && <div className={styles.desc}>
                <div className={styles.container}>
                    <img src='/smallHighlight1.svg' />
                    <div className={styles.descTitle}>Description</div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.desc }}></p>
            </div>}

            {params.demo && <div className={styles.demo}>
                <div className={styles.container}>
                    <img src='/smallHighlight1.svg' />
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

            {params.myPart && <div className={styles.myPart}>
                <div className={styles.container}>
                    <img src='/smallHighlight1.svg' />
                    <div className={styles.partTitle}>My part</div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.myPart }}></p>
            </div>}

            {params.tech && <div className={styles.tech}>
                <div className={styles.container}>
                    <img src='/smallHighlight1.svg' />
                    <div className={styles.techTitle}>Technologies</div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: params.tech }}></p>
            </div>}

        </div>
    )
}
export default ProjectBio