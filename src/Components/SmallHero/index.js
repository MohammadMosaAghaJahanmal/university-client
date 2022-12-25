import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';


function SmallHero(props) {

    let image = (props.image && {backgroundImage: `url(${props.image})`});
    let direction = (props.direction && {direction: props.direction});
    let isRTL = (props.isRTL && {transform: "rotateY(180deg)"});

    const [bgPosition, setBgPosition] = useState({});

    const {bgAnimation} = props;

    useEffect(() => {
      let anime = 1;
      if(bgAnimation === true)
        anime = setInterval(() => {

          if(!bgPosition.backgroundPosition)
            setBgPosition(prev => ({backgroundPosition: "bottom"}));

          if(bgPosition.backgroundPosition === 'center')
            setBgPosition(prev => ({backgroundPosition: "top"}));

          if(bgPosition.backgroundPosition === 'top')
            setBgPosition(prev => ({backgroundPosition: "bottom"}));

          if(bgPosition.backgroundPosition === 'bottom')
            setBgPosition(prev => ({backgroundPosition: "center"}));
        }, 3000);

      return () => clearInterval(anime)
      
    }, [bgAnimation, bgPosition.backgroundPosition])

    return (
			<div className={[styles.hero, props.className].join(' ')} style={{...image, ...direction, ...isRTL, ...props.style, ...bgPosition}}>
        <div className="w-controller" style={{...isRTL}}>
            {props.title}
        </div>
      </div>
    )
} 


export default SmallHero;