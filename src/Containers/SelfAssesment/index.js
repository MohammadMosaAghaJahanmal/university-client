import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/polic.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";

const SelfAssesment = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.container}>
      <SmallHero title={language.a_self_assesment} image={HeroImage} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Title
                  title="No Title From Backend"
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
                {name: language.a_aims, link: "/academic/a_aims"}, 
                {name: language.a_self_assesment, link: "/academic/a_self_assesment"},
                {name: language.a_annual_program_monitoring, link: "/academic/a_annual_program_monitoring"},
                {name: language.a_councils_committees, link: "/academic/a_councils_committees"},
                {name: language.a_manual_policies, link: "/academic/a_manual_policies"},
                {name: language.a_capacity_building, link: "/academic/a_capacity_building"},
                {name: language.accreditation, link: "/academic/accreditation"},
              ]}
              />
          </div>
        </div>
      </div>
    </div>
  )
} 



export default SelfAssesment;