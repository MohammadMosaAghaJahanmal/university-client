import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/2023.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
// import {IoGitCommitOutline as CheckBox} from 'react-icons/io5';
import {FaPiedPiperHat as CheckBox} from 'react-icons/fa';

const AcademicCalendar = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.ac}>
      <SmallHero title={language.academic_calendar} image={HeroImage} isRTL={isRTL} className={[styles[isRTL + "Hero"], styles.hero].join(" ")}/>
      <div className={[styles.acw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={language.academic_calendar}
            className={styles.title}
          />
          <Text
            className={styles.text}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti repudiandae odit enim repellat incidunt, natus dignissimos nemo aperiam voluptate reprehenderit!
          </Text>
          <Text
            className={styles.text}
          >
            Two Annual Semesters
          </Text>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Title 
                title="Semester"
                className={styles.header}
              />
              <div className={styles.group}>
                <p>Semester</p>
                <p>Spring</p>
              </div>
              <div className={styles.group}>
                <p>A.D</p>
                <p>March</p>
              </div>
              <div className={styles.group}>
                <p>L.Y</p>
                <p>Hamal</p>
              </div>
            </div>
            <div className={styles.card}>
              <Title 
                title="Semester"
                className={styles.header}
              />
              <div className={styles.group}>
                <p>Semester</p>
                <p>Spring</p>
              </div>
              <div className={styles.group}>
                <p>A.D</p>
                <p>March</p>
              </div>
              <div className={styles.group}>
                <p>L.Y</p>
                <p>Hamal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 



export default AcademicCalendar;