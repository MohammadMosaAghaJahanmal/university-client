import React from 'react';
import styles from './styles.module.css';


function SmallHero(props) {

    let image = (props.image && {backgroundImage: `url(${props.image})`});
    let direction = (props.direction && {direction: props.direction})
    return (
			<div className={[styles.hero, props.className].join(' ')} style={{...image, ...direction}}>
        <div className="w-controller">
          {props.title}
        </div>
      </div>
    )
} 


export default SmallHero;