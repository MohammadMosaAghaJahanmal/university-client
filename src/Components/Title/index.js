import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const Title = (props) =>
{

  return (
      <div className={[styles.title, props.className].join(' ')}>
        <p>{props.text}</p>
      </div>
  )
}



export default Title