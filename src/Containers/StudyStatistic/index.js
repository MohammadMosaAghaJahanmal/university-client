import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";

const StudyStatistic = (props) =>
{
  const [globalState] = useStore();

  const {heros, studystatistics} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "study_statistic")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.study_statistic} image={myHero}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {studystatistics?.length > 0 ?
            studystatistics.map((per, index) => (
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Text className={styles.text}>
                <div className={styles.textData} dangerouslySetInnerHTML={{__html: per[isRTL ? "pDescription" : "description"]}}></div>
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



export default StudyStatistic;