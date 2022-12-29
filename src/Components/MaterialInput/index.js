import React from 'react';
import styles from './styles.module.css';


function MaterialInput(props) {

    return (
			<div className={styles.inputGroup}>
				{
					props.label &&
					<label htmlFor={props.id}>{props.label}</label>
				}
				<div className={styles.input}>
					<input 
						type={props.type} 
						placeholder={props.placeholder} 
						id={props.id} 
						onChange={props.onChange} 
						value={props.value} 
					/>
					<span className={styles.before}></span>
					<span className={styles.after}></span>
				</div>
			</div>
    )
} 


export default MaterialInput;