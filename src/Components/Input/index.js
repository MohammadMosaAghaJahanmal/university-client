import React from 'react';
import styles from './styles.module.css';


function Input(props) {

    return (
        (props.type === "textarea") ? 
        <textarea 
            {...props}
            className={[styles.input, props.className].join(" ")}
            value={props.value}
        ></textarea>
        :
        <input 
            {...props}
            onChange={props.onChange} 
            className={[styles.input, props.className].join(" ")}
        />
    )
} 


export default Input;