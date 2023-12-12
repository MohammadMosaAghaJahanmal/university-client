import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";

const KankorRegistrationDate = (props) =>
{

  const [globalState] = useStore();

  const {heros, kankorregistrationdates} = globalState;

  

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "kankor_registration_date")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.kankor_registration_date} image={myHero} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {kankorregistrationdates?.length > 0 ?
          <div className={styles.wrapper}>
            <div className={styles.content}>
              {kankorregistrationdates.map(per => (
              <div key={per.id}>
                <Text className={styles.text}>
                  <div className={styles.textData} dangerouslySetInnerHTML={{__html: per[isRTL ? "pDescription": "description"]}}></div>
                </Text>
              </div>
              ))
              }
            </div>
          </div>
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default KankorRegistrationDate;