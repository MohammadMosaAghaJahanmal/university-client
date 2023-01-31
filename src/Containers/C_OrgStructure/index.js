import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const C_OrgStructure = (props) =>
{
  const [globalState] = useStore();

  const {heros, ceorganizationalstructures} = globalState;

  const struc = ceorganizationalstructures.find(struc => struc.type === 'cs');

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "c_organizational_structure")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.a_organizational_structure} image={myHero} bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          {struc?.imagePath ?
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Title 
                title={language.a_organizational_structure}
              />
              <img src={serverPath(struc?.imagePath)} alt="Curriculam Image"/>
            </div>
            <SideBar
              links={[
                {name: language.a_vission_mission, link: "/academic/c_vission_mission"},
                {name: language.a_curriculum, link: "/academic/c_curriculum"},
                {name: language.a_organizational_structure, link: "/academic/c_organizational_structure"},
                {name: language.a_aggrements, link: "/academic/c_aggrements"},
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



export default C_OrgStructure;