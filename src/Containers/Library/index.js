import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/book2.jpg';
import Input from '../../Components/Input';
import Button from "../../Components/Button";
import language from '../../localization';
const Library = (props) =>
{

  return (
    <div className={styles.library}>
      <SmallHero title={language.online_library} image={HeroImage} style={{backgroundPosition: "bottom", textShadow: "1px 1px 3px black"}}/>
      <div className={styles.libraryWrapper}>
        
      </div>
    </div>
  )
} 



export default Library;