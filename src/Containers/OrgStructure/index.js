import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/structure.jpg';
import Structure from '../../Assets/lib1.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import {IoCheckmarkCircleOutline as CheckBox} from 'react-icons/io5'
const OrgStructure = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.orgStructure}>
      <SmallHero title={language.organizational_structure} image={HeroImage} isRTL={isRTL}/>
      <div className={[styles.osw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.history}>
            <Title 
              title="Organizational Structure"
              className={[styles.chTitle, styles.title].join(" ")}
              />
            <Text className={styles.text}>
              <div className={styles.textData}>
                <p>
                  Kardan University’s academic structure is headed by the Academic Council chaired by the Chancellor or Vice Chancellor for Academic Affairs in his absence. The Academic Council has the ultimate authority for overseeing the academic priorities in teaching, research, and learning.
                </p>
                <p>
                  The Academic Council oversees the University’s curriculum, quality assurance, program design and management, national and international accreditation standards, and development of academic strategy, policy, and performance. The Academic Council draws membership from the University’s leadership, Faculty Deans, Coordinators, Faculty Representatives, and Academic Administrators.
                </p>
              </div>
            </Text>
          <div className={styles.br}></div>
          </div>
        </div>
        <div className={styles.orgImage}>
          <img src={Structure} alt={"Image"}/>
        </div>
      </div>
    </div>
  )
} 



export default OrgStructure;