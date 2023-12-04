import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";

const PlanedResearche = (props) =>
{
  const [globalState] = useStore();

  const {heros, planedresearches} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "planed_researche")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.planed_researche} image={myHero}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {planedresearches?.length > 0 ?
            planedresearches.map((perField, index) => (
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Text className={styles.text}>
                <div className={styles.textData} dangerouslySetInnerHTML={{__html: perField[isRTL ? "pDescription" : "description"]}}></div>
              </Text>
            </div>
          </div>
          ))
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default PlanedResearche;