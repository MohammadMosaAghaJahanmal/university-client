import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const Title = (props) =>
{

  return (
      <div {...props} className={[styles.title, props.className].join(' ')}>
        {
        (props.title || props.text) ? 
          <p>{props.text || props.title}</p>
          :
          props.children
        }
      </div>
  )
}



export default Title