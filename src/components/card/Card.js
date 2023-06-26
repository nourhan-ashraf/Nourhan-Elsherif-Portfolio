import React from 'react';
import data from '../myWork/myWork.json';
import styles from './Card.module.scss'
import { Link } from 'react-router-dom';
import {BsArrowUpRightCircleFill} from 'react-icons/bs'
import {FiArrowUpRight} from 'react-icons/fi'
import {ImArrowUpRight2} from 'react-icons/im'
const WorkCard = () => {

  return (
    <div style={{display:"flex", flexDirection:"row"}}>
    
    {data.map((i)=>{
       return  (
        <Link style={{textDecoration:"none"}} to={`/project/${i.id}`}><div className={styles.card}>
           <img className={styles.image} src={i.img} />
           <div className={styles.title}>{i.name}</div>
           <div className={styles.desc}>{i.description}</div>
           <br />
           <Link to={`/project/${i.id}`}><button className={styles.btn}>View details <ImArrowUpRight2 /></button></Link>
       </div></Link>
      
   )
    })

    }
       

</div>
)}


export default WorkCard;
