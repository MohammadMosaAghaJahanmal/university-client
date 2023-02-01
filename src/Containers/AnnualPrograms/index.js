import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/polic.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";

const AnnualPrograms = (props) =>
{

  const [globalState] = useStore();

  const {heros, aannualprograms} = globalState;

  const anualPrograms = aannualprograms[0];

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "a_annual_program_monitoring")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.a_annual_program_monitoring} image={myHero} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {aannualprograms?.length > 0 ?
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Title
                  title={anualPrograms[isRTL ? "pTitle" : "title"]}
                  className={[styles.chTitle].join(" ")}
                  />
              <Text className={styles.text}>
                <div className={styles.textData}>
                {anualPrograms[isRTL ? "pDescription" : "description"]}
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
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default AnnualPrograms;