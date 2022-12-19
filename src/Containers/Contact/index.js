import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/contact1.jpg';
const Contact = (props) =>
{

  return (
    <div className={styles.news}>
      <SmallHero title="Contact Us" image={HeroImage}/>
      <div className={[styles.newsWrapper, "w-controller"].join(" ")}>
        Welcome Contact
      </div>
    </div>
  )
} 



export default Contact;