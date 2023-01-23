import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/polic.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import SideBar from "../../Components/SidaBar";

const E_Curriculum = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');
  return (
    <div className={styles.container}>
      <SmallHero title={language.a_curriculum} image={HeroImage} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Title 
                title={"No Title From The Backend Just One Image"}
              />
              <img src={HeroImage} alt="Curriculam Image"/>
            </div>
            <SideBar
              links={[
                {name: language.a_vission_mission, link: "/academic/e_vission_mission"},
                {name: language.a_curriculum, link: "/academic/e_curriculum"},
                {name: language.a_organizational_structure, link: "/academic/e_organizational_structure"},
                {name: language.a_aggrements, link: "/academic/e_aggrements"},
              ]}
              />
          </div>
        </div>
      </div>
    </div>
  )
} 



export default E_Curriculum;