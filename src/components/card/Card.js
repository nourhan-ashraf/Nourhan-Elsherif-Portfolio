import React, { useContext } from 'react';
import data from '../myWork/myWork.json';
import styles from './Card.module.scss'
import { Link } from 'react-router-dom';
import {ImArrowUpRight2} from 'react-icons/im'
import { DarkModeContext } from '../../context/ThemeContext';
const WorkCard = () => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
    
    {data.map((i)=>{
       return  (
        <Link style={{textDecoration:"none"}} to={`/project/${i.id}`}><div className={darkMode ? styles.cardDark : styles.cardLight}>
           <img className={styles.image} src={i.img} />
           <div className={styles.title}>{i.name}</div>
           <div className={styles.desc}>{i.subTitle}</div>
           <br />
           <Link to={`/project/${i.id}`}><button className={styles.btn}>View details <ImArrowUpRight2 /></button></Link>
       </div></Link>
      
   )
    })

    }
       

</div>
)}


export default WorkCard;
