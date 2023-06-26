import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import WorkCard from './Card';
import styles from './Cards.module.scss'
const ScrollableContainer = () => {
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
            <button className={`${styles.scroll_button} ${styles.left}`} onClick={() => scrollContainer(-200)}>
                <FaChevronLeft />
            </button>
            <button className={`${styles.scroll_button} ${styles.right}`} onClick={() => scrollContainer(200)}>
                <FaChevronRight />
            </button>
        </div>
    );
};

export default ScrollableContainer;
