import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const E_Aggrements = (props) =>
{

  const [globalState] = useStore();

  const {heros, ceaggrements} = globalState;

  const aggrements = ceaggrements.filter(perAggr => perAggr.type === 'eco');

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "aggrements")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.a_aggrements} image={myHero} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
      {aggrements.length > 0 ? 
        <div className={styles.contentWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
            {aggrements.map(aggr => (
              <div key={aggr._id}>
                <Title
                    title={aggr[isRTL ? "pTitle": "title"]}
                    className={[styles.chTitle].join(" ")}
                    />
                <Text className={styles.text}>
                  <div className={styles.textData}>
                    {aggr[isRTL ? "pDescription": "description"]}
                  </div>
                </Text>
                <div className={styles.imgs}>
                  {aggr.images?.map(img => (
                    <div>
                      <img src={serverPath(img.imagePath)} alt={"AGGREMENTS"} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
        </div>
        :
        <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>  
        }
      </div>
    </div>
  )
} 



export default E_Aggrements;