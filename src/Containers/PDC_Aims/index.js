import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";

const PDC_Aims = (props) =>
{

  const [globalState] = useStore();

  const {heros, pdcaims} = globalState;

  const aim = pdcaims[0];

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "a_aims")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.a_aims} image={myHero}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {pdcaims?.length > 0 ?
          <div className={styles.wrapper}>
            <div className={styles.content}>
              {/* <Title
                  title="No Title From Backend"
                  className={[styles.chTitle].join(" ")}
                  /> */}
              <Text className={styles.text}>
                <div className={styles.textData} dangerouslySetInnerHTML={{__html: aim[isRTL ? "pDescription" : "description"]}}></div>
              </Text>
            </div>
            <SideBar
              links={[
                {name: language.r_vission_mission, link: "/pdc/vission_mission"}, 
                {name: language.a_pdc_b, link: "/pdc/a_pdc_b"},
                {name: language.structure, link: "/pdc/structure"},
                {name: language.a_aims, link: "/pdc/aims"},
              ]}
              />
          </div>
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default PDC_Aims;