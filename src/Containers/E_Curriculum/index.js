import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const E_Curriculum = (props) =>
{

  const [globalState] = useStore();

  const {heros, cecurriculums} = globalState;

  const curriculum = cecurriculums.find(curriculum => curriculum.type === 'eco');

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "curriculum")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.a_curriculum} image={myHero} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {curriculum?.imagePath ? 
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Title 
                title={language.a_curriculum}
              />
              <img src={serverPath(curriculum.imagePath)} alt="Curriculam Image"/>
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
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default E_Curriculum;