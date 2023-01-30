import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/structure.jpg';
import Structure from '../../Assets/lib1.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const OrgStructure = (props) =>
{

  const [globalState] = useStore();

  const {heros, orgstructures} = globalState;

  const orgStructure = orgstructures[0];

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "organizational_structure")?.imagePath || "")).href;
  return (
    <div className={styles.orgStructure}>
      <SmallHero title={language.organizational_structure} image={myHero} isRTL={isRTL}/>
      <div className={[styles.osw, "w-controller"].join(" ")}>
        {
          orgStructure?.title ?
        <>
          <div className={styles.contentWrapper}>
            <div className={styles.history}>
              <Title 
                title={orgStructure[isRTL ? "pTitle": "title"]}
                className={[styles.chTitle, styles.title].join(" ")}
                />
              <Text className={styles.text}>
                <div className={styles.textData}>
                  {orgStructure[isRTL ? "pDescription": "description"]}
                </div>
              </Text>
              <div className={styles.br}></div>
            </div>
          </div>
          <div className={styles.orgImage}>
            <img src={serverPath(orgStructure?.imagePath)} alt={"Structure Image"}/>
          </div>
        </>
        :
        <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>
        }
      </div>
    </div>
  )
} 



export default OrgStructure;