import React from "react";
import styles from './Contact.module.scss'
const Contact = ({ sectionsRef }) => {
    return (
        <div ref={(ref) => (sectionsRef.current['section4'] = ref)} className={styles.contact}>
            <div className={styles.container}>
                <img src='/smallHighlight1.svg' />
                <div className={styles.title}>Contact</div>
            </div>
            <div className={styles.subTitle}>Get in touch with me on:</div>
        </div>
    )
}
export default Contact