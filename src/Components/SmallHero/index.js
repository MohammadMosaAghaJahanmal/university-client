import React from 'react';
import styles from './styles.module.css';


function SmallHero(props) {

    return (
			<div className={[styles.hero, props.className].join(' ')} style={props.image && {backgroundImage: `url(${props.image})`}}>
        <div className="w-controller">
          {props.title}
        </div>
      </div>
    )
} 


export default SmallHero;