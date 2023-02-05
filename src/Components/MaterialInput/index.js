import React from 'react';
import styles from './styles.module.css';


function MaterialInput(props) {

		const options = props?.options?.map((option, index) => {
			let isSelected = {}
			return <option value={option} style={{textTransform: "capitalize"}} key={(option + " " + index)} {...isSelected}>
				{option}
			</option>
		})

    return (
			<div className={styles.inputGroup}>
				{
					props.label &&
					<label htmlFor={props.id}>{props.label}</label>
				}
				<div className={[styles.input].join(" ")}>
					{
						props.type === 'select' ?
						<select 
							value={props.select}
							placeholder={props.placeholder} 
							onChange={props.onChange} 
							className={props.className}
						>
							{options}
						</select>
						:
						<input 
							type={props.type} 
							placeholder={props.placeholder} 
							id={props.id} 
							onChange={props.onChange} 
							value={props.value} 
							className={props.className}
							size={props.size}
						/>
					}
					<span className={styles.before}></span>
					<span className={styles.after}></span>
				</div>
			</div>
    )
} 


export default MaterialInput;