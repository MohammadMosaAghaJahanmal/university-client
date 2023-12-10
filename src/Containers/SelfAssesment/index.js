import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";

const SelfAssesment = (props) =>
{

  const [globalState] = useStore();

  const {heros, selfassesments} = globalState;

  

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "self_assesment")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.a_self_assesment} image={myHero} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {selfassesments?.length > 0 ?
          <div className={styles.wrapper}>
            <div className={styles.content}>
              {selfassesments.map(per => (
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



export default SelfAssesment;