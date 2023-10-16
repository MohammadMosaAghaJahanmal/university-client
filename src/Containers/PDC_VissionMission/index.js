import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import useStore from "../../store/store";
import serverPath from '../../utils/serverPath';

const C_VissionMission = (props) =>
{
    const [globalState] = useStore();

  const {heros} = globalState;

  // const myHero = new URL(serverPath(heros?.find(hero => hero.type === "c_vission_mission")?.imagePath || "")).href;
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "vission_mission")?.imagePath || "")).href;

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.vissionMission}>
      <SmallHero title={language.vission + ", " + language.mission} image={myHero}  bgAnimation={true}/>
      <div className={[styles.vmw, "w-controller"].join(" ")}>
        <div className={styles.wrapper}>
          <div className={styles.vm}>
            <div className={styles.vmCard}>
              <Title title={language.vission} className={styles.title}/>
              <Text
                className={styles.text}
                style={{display: "grid", rowGap: "15px"}}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti 
                repudiandae odit enim repellat incidunt, 
                natus dignissimos nemo aperiam voluptate reprehenderit!
              </Text>
            </div>
            <div className={styles.vmCard}>
              <Title title={language.mission} className={styles.title} />
              <Text
                className={styles.text}
                style={{display: "grid", rowGap: "15px"}}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti 
                repudiandae odit enim repellat incidunt, 
                natus dignissimos nemo aperiam voluptate reprehenderit!
              </Text>
            </div>
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
    </div>
  )
} 



export default C_VissionMission;