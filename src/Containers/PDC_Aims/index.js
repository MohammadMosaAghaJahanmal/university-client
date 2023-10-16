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

  const {heros, aaims} = globalState;

  const aim = aaims[0];

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "a_aims")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.a_aims} image={myHero}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {aaims?.length > 0 ?
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
                {name: language.a_aims, link: "/academic/a_aims"}, 
                {name: language.a_self_assesment, link: "/academic/a_self_assesment"},
                {name: language.a_annual_program_monitoring, link: "/academic/a_annual_program_monitoring"},
                {name: language.a_councils_committees, link: "/academic/a_councils_committees"},
                {name: language.a_manual_policies, link: "/academic/a_manual_policies"},
                {name: language.a_capacity_building, link: "/academic/a_capacity_building"},
                {name: language.accreditation, link: "/academic/accreditation"},
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