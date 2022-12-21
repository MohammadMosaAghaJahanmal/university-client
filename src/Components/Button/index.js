import React from 'react';
import styles from './styles.module.css';


function Button(props) {

    return (
        <button {...props} className={[styles.btn, props.className].join(' ')}>
            {props.label}
        </button>
    )
} 


export default Button;