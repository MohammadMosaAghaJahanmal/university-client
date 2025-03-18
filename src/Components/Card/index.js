import React, { memo } from "react";
import styles from './style.module.css';
import { NavLink } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import languages from "../../localization";

const Card = (props) =>
{



  return (
      <div {...props} className={[styles.card, props.className].join(' ')} title="">
        <p className={styles.title}>{props.title}</p>
        <div className={styles.desc} dangerouslySetInnerHTML={{__html:props.desc}}></div>
        {
          props.isdownloadable ?
          <a href={serverPath(props.navigate)} download={props.isdownloadable} className={styles.btn} target="_blank" rel="noreferrer">
            {languages.find_out_more}
          </a>
        :
          <NavLink to={props.navigate} className={styles.btn}>
            {languages.find_out_more}
          </NavLink>
        }

      </div>
  )
}



export default memo(Card, (prev, next) => 
  prev?.title?.trim() === next?.title?.trim() &&
  prev?.desc?.trim() === next?.desc?.trim()  &&
  prev?.isRTL?.trim() === next?.isRTL?.trim() 
);