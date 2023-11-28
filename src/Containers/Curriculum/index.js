import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import { useParams } from "react-router-dom";

const Curriculum = (props) =>
{
  const {id} = useParams()
  const [globalState] = useStore();

  const {heros, curriculums} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "curriculums")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.curriculum} image={myHero}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {curriculums?.length > 0 ?
            curriculums.map((curriculum, index) => curriculum.type === id ? (
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Text className={styles.text}>
                <div className={styles.textData} dangerouslySetInnerHTML={{__html: curriculum[isRTL ? "pDescription" : "description"]}}></div>
              </Text>
            </div>
          </div>
          ): null)
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default Curriculum;