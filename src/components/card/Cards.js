import React, { useContext, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import WorkCard from './Card';
import styles from './Cards.module.scss'
import { DarkModeContext } from '../../context/ThemeContext';
const ScrollableContainer = () => {
    const {darkMode} = useContext(DarkModeContext)
    const containerRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scrollContainer = (scrollOffset) => {
        if (containerRef.current) {
            const newScrollLeft = scrollLeft + scrollOffset;
            containerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
            setScrollLeft(newScrollLeft);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.scrollable} ref={containerRef}>
                <WorkCard />
            </div>
            <button className={`${darkMode ? styles.scrollButtonDark : styles.scrollButton} ${styles.left}`} onClick={() => scrollContainer(-200)}>
                <FaChevronLeft />
            </button>
            <button className={`${darkMode ? styles.scrollButtonDark : styles.scrollButton} ${styles.right}`} onClick={() => scrollContainer(200)}>
                <FaChevronRight />
            </button>
        </div>
    );
};

export default ScrollableContainer;
