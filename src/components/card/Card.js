import React, { useContext, useEffect, useRef } from 'react';
import data from '../myWork/myWork.json';
import styles from './Card.module.scss'
import { Link } from 'react-router-dom';
import { ImArrowUpRight2 } from 'react-icons/im'
import { DarkModeContext } from '../../context/ThemeContext';
const WorkCard = () => {
  const { darkMode } = useContext(DarkModeContext)
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (e) => {
      if (e.deltaY < 0) {
        e.preventDefault();
        scrollContainer.scrollLeft -= 500;
      }
      else if (e.deltaY > 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += 500;
      }
      else {
        e.preventDefault();
        scrollContainer.scrollLeft += 0;
      }
    };


    scrollContainer.addEventListener('wheel', handleWheel);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className={styles.scrollContainer}>

      {data.map((i) => {
        return (
          <div className={darkMode ? styles.cardDark : styles.cardLight}>
            <a style={{ cursor: 'auto' }} href={i.img} target="_blank">
              <img className={styles.image} src={i.img} alt="project mockup image" />
            </a>
            <div className={styles.title}>{i.name}</div>
            <div className={styles.desc}>{i.subTitle}</div>
            <br />
            <Link to={`/project/${i.linkName}`}><button className={styles.btn}>View details <ImArrowUpRight2 /></button></Link>
          </div>

        )
      })

      }


    </div>
  )
}


export default WorkCard;
