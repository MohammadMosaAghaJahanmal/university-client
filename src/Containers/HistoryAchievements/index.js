import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import {IoCheckmarkCircleOutline as CheckBox} from 'react-icons/io5'
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const HistoryAchievements = (props) =>
{


  const [globalState] = useStore();

  const {histories, achievements, heros} = globalState;

  const history = histories[0];
  const achievement = achievements[0];

  const isRTL = (language.getLanguage() === 'ps');

  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "history_and_achievements")?.imagePath || "")).href;
  return (
    <div className={styles.historyAchievements}>
      <SmallHero title={language.history_and_achievements} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.haw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>

          <div className={styles.history}>
            <Title 
              title={language.history_of_saba}
              className={[styles.chTitle, styles.title].join(" ")}
              />
              {history?.description ?
              <Text className={styles.text}>
                <div className={styles.textData}>
                  {history[isRTL ? "pDescription" : "description"]}
                </div>
              </Text>
              :
              <p className="msg">{language.nothing_to_show}</p>
              }
            <div className={styles.br}></div>
          </div>


          <div className={styles.achive}>
            <Title 
                title={language.achievements}
                className={[styles.chTitle, styles.title].join(" ")}
                />
              { achievement?.description ?
              <>
                <Text className={styles.text}>
                  <div className={styles.textData}>
                    {achievement[isRTL ? "pDescription" : "description"]}
                  </div>
                </Text>
                {achievement?.achievements?.length > 0 &&
                achievement.achievements.map(ach => (
                  <div className={styles.ach}>
                    <div className={[styles.item].join(" ")}>
                      <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                      <span className={styles.itemText}>{ach[isRTL ? "pAchievement" : "achievement"]}</span>
                    </div>
                  </div>
                ))
                }
              </>
              :
              <p className="msg">{language.nothing_to_show}</p>
              }
          </div>
        </div>
      </div>
    </div>
  )
} 



export default HistoryAchievements;