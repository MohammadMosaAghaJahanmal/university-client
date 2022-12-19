import React, {useEffect, useState} from "react";
import Title from "../../../Components/Title";
import styles from './style.module.css';

const Feature = (props) =>
{

  return (
      <div className={styles.feature}>
        <div className={[styles.featureWrapper, "w-controller"].join(' ')}>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <p className={styles.featureTitle}>Lorem ipsum dolor sit amet</p>
              <p className={styles.featureDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti repudiandae odit enim repellat incidunt, natus dignissimos nemo aperiam voluptate reprehenderit!</p>
            </div>
            <div className={styles.featureCard}>
              <p className={styles.featureTitle}>Lorem ipsum dolor sit amet</p>
              <p className={styles.featureDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti repudiandae odit enim repellat incidunt, natus dignissimos nemo aperiam voluptate reprehenderit!</p>
            </div>
            <div className={styles.featureCard}>
              <p className={styles.featureTitle}>Lorem ipsum dolor sit amet</p>
              <p className={styles.featureDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti repudiandae odit enim repellat incidunt, natus dignissimos nemo aperiam voluptate reprehenderit!</p>
            </div>
          </div>
        </div>
      </div>
  )
}



export default Feature;