import React from "react";
import styles from './style.module.css';
const ImagesViewer = (props) =>
{

  const imagesLength = props.images?.length < 4 ? props.images?.length : 4 ;

  return (
      <div {...props} className={[styles.imagesWrapper, styles["i"+imagesLength], props.className].join(' ')}>
        {props.images?.map((image, index) => (
          <img src={image} alt="IMG" key={ "key " + index} />
        ))}
      </div>
  )
}



export default ImagesViewer