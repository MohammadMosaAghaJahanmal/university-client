import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const ChancellorMessage = (props) =>
{

  const [globalState] = useStore();

  const {heros, chancellormessages} = globalState;

  const chanMsg = chancellormessages[0];

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "chancellor_message")?.imagePath)).href;
  return (
    <div className={styles.chancellorMessage}>
      <SmallHero title={language.chancellor_message} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cmWrapper, "w-controller"].join(" ")}>
        <div className={styles.cmContent}>
          {chanMsg?.message ?
              <div className={styles.cmTextContent}>
                <div className={styles.cmImg}>
                  <img src={serverPath(chanMsg?.imagePath)}  alt="Chancellor Image"/>
                </div>
                <Title 
                  title={language.chancellor_of_saba + " " + chanMsg[isRTL ? "pChancellorName": "chancellorName"]}
                  className={[styles.chName, styles.title].join(" ")}
                  />
                <Title 
                  title={language.chancellor_message}
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
                <Text className={styles.text}>
                  <div className={styles.textData}>
                    {chanMsg[isRTL ? "pMessage": "message"]}
                  </div>
                </Text>
            </div>
            :
            <p className="msg">{language.nothing_to_show}</p>
          }
      </div>
      </div>
    </div>
  )
} 



export default ChancellorMessage;