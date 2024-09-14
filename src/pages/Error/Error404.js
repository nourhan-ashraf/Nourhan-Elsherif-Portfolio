import React from "react";
import { Link } from "react-router-dom";
import styles from './Error404.module.scss'

const Error = () => {
    return (
        <div className={styles.error}>
            <Link to="/"><img alt="Error 404 picture" className={styles.image} src="/404.svg" /></Link>
        </div>
    )
}
export default Error