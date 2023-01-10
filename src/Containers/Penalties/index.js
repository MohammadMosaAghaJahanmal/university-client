import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/penalty.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";

const penalties = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.container}>
      <SmallHero title={language.penalties} image={HeroImage} isRTL={isRTL} bgAnimation={false}/>
      <div className={[styles.haw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.achive}>
              <Title 
                  title="TITLE FROM BACKEND"
                  className={[styles.chTitle].join(" ")}
                  />
              <Text className={styles.text}>
                <div className={styles.textData}>
                  <p>Saba University was established in 2011 to provide quality higher education that Respond to the needs of society and the labor market. Since then, we have produced More than 3200 graduates collectively from journalism, civil engineering, economics, Sharia, law, and political sciences.</p>
                  <p>Saba University was established in 2011 to provide quality higher education that Respond to the needs of society and the labor market. Since then, we have produced More than 3200 graduates collectively from journalism, civil engineering, economics, Sharia, law, and political sciences.</p>
                </div>
              </Text>
            </div>
            <SideBar
              links={[
                {name: language.student_portal, link: "/students/student_portal"}, 
                {name: language.eligibility_criteria, link: "/students/eligibility_criteria"}, 
                {name: language.scholarships_financing, link: "/students/scholarships_financing"}, 
                {name: language.migration_policy, link: "/students/migration_policy"}, 
                {name: language.semester_promotion_rules, link: "/students/semester_promotion_rules"}, 
                {name: language.students_verification, link: "/students/students_verification"}, 
                {name: language.penalties, link: "/students/penalties"}, 
              ]}
              />
          </div>
        </div>
      </div>
    </div>
  )
} 



export default penalties;