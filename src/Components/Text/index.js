import React, {memo} from "react";
import styles from './style.module.css';

const Text = (props) =>
{

  return (
      <div {...props} className={[styles.text, props.className].join(' ')}>
        {
          props.text 
          ?
          <p>{props.text}</p>
          :
          props.children
        }
      </div>
  )
}



export default memo(Text)