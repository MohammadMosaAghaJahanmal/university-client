import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Breadcrumb from '../Breadcrumb';


function SmallHero(props) {
    let image = (props?.image && {backgroundImage: `url(${props?.image})`});
    let direction = (props.direction && {direction: props.direction});
    let isRTL = (props.isRTL && {transform: "rotateY(180deg)"});
    const [bgPosition, setBgPosition] = useState(props.bgPosition || {});

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
      <>
			<div className={[styles.hero, props.className].join(' ')} style={{...image, ...direction, ...isRTL, ...props.style, ...bgPosition}}>
        <div className="w-controller" style={{...isRTL}}>
            {props.title}
        </div>
      </div>
      <Breadcrumb />
      </>

    )
} 


export default memo(SmallHero, (prev, next) => prev.title === next.title);