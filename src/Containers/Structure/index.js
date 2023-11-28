import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import { useParams } from "react-router-dom";
const Structure = (props) =>
{
  const {id} = useParams();
  const [globalState] = useStore();

  const {heros, structures} = globalState;


  const structure = structures.find(per => per.type === id);

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "structure")?.imagePath || "")).href;
  return (
    <div className={styles.structure}>
      <SmallHero title={language.structure} image={myHero} isRTL={isRTL}/>
      <div className={[styles.osw, "w-controller"].join(" ")}>
        {
          structure?.title ?
        <>
          <div className={styles.contentWrapper}>
            <div className={styles.history}>
              <Title 
                title={structure[isRTL ? "pTitle": "title"]}
                className={[styles.chTitle, styles.title].join(" ")}
                />
              <Text className={styles.text}>
                <div className={styles.textData} dangerouslySetInnerHTML={{__html: structure[isRTL ? "pDescription": "description"]}}></div>
              </Text>
              <div className={styles.br}></div>
            </div>
          </div>
          <div className={styles.orgImage}>
            <img src={serverPath(structure?.imagePath)} alt={"Structure Image"}/>
          </div>
        </>
        :
        <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>
        }
      </div>
    </div>
  )
} 



export default Structure;