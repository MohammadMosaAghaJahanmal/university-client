import React from 'react';
import styles from './styles.module.css';
import {IoArrowBackCircleOutline as Left, IoArrowForwardCircleOutline as Right} from 'react-icons/io5'

function Pagination(props) {

	return (
		<div className={styles.container}>
			<button 
				className={styles.btn} 
				onClick={() => props.onChange(props.value - 1)} 
				disabled={((props.value - 1) < props.min)}
				>
				<Left 
					size={25}
					color={"#0080d6"}
				/>
			</button>
			<input 
				type={"number"} 
				min={props.min || 1} 
				max={props.max} 
				value={props.value} 
				onChange={(e) => {
					try {
						let value = Number.parseInt((e.target.value || 0));
						if(value <= 0)
							return
						if(value > props.max)
							return
						props.onChange(value);
					} catch (error) {
						props.onChange(props.value)
					}
				}}
				className={[styles.input, props.className].join(" ")} 
				/>
			<button 
				className={styles.btn} 
				onClick={() => props.onChange(props.value + 1)} 
				disabled={((props.value + 1) > props.max)}
				>
				<Right 
					size={25}
					color={"#0080d6"}
				/>
			</button>
		</div>
	)
} 


export default Pagination;