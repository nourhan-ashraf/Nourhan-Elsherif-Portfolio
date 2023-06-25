import React from "react";
import styles from './Work.module.scss'
const Work = ({ sectionsRef }) => {
    return (
        <div ref={(ref) => (sectionsRef.current['section3'] = ref)}  className={styles.work}>
            <div className={styles.container}>
                <img src='/smallHighlight1.svg' />
                <div className={styles.title}>My Work</div>

            </div>
        </div>
    )
}

export default Work