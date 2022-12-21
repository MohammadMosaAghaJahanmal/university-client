import React from 'react';
import styles from './styles.module.css';


function Input(props) {

    return (
        (props.type === "textarea") ? 
        <textarea 
            type={props.type} 
            placeholder={props.placeholder}
            className={[styles.input, props.className].join(" ")}
            value={props.value}
        ></textarea>
        :
        <input 
            type={props.type} 
            placeholder={props.placeholder} 
            onChange={props.onChange} 
            className={[styles.input, props.className].join(" ")}
            value={props.value}
        />
    )
} 


export default Input;