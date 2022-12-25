import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/vision.jpg';
import Input from '../../Components/Input';
import Button from "../../Components/Button";
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
const vissionMission = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.vissionMission}>
      <SmallHero title={language.our_vission_and_mission} image={HeroImage} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.vmw, "w-controller"].join(" ")}>
        <div className={styles.vm}>
          <div className={styles.vmCard}>
            <Title title="Our Vission" className={styles.title}/>
            <Text text="
              To be a recognized university in the country 
              and region for quality teaching, research and learning, 
              strong management system for nurturing a generation disciplined with national values brightening future of the country.
              " 
              className={styles.text}
            />
          </div>
          <div className={styles.vmCard}>
            <Title title="Our Mission" className={styles.title} />
            <Text text="
              Saba University serves the nation and region through providing, 
              retaining, and practicing value-based knowledge, 
              skills, research and producing strong academic cadres known for their best Islamic, 
              national, and social characters.
              " 
              className={styles.text}
            />
          </div>
        </div>
        <div className={styles.photoFrame}>
        </div>
      </div>
    </div>
  )
} 



export default vissionMission;