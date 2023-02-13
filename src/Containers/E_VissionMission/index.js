import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import useStore from "../../store/store";
import serverPath from '../../utils/serverPath';
const E_VissionMission = (props) =>
{
  const [globalState] = useStore();
  const {heros, cevissions, cemissions, ceabouts} = globalState;
  const [visMis, setVisMis] = useState({
    vission: {},
    mission: {},
    about: {}
  });

  useEffect(() => {
    let vis = cevissions.find(v => v.type === 'eco');
    let mis = cemissions.find(v => v.type === 'eco');
    let about = ceabouts.find(v => v.type === 'eco');
    setVisMis(prev => ({
      vission: vis || {},
      mission: mis || {},
      about: about || {},
    }));
  }, []);
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "vission_mission")?.imagePath || "")).href;

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.vissionMission}>
      <SmallHero title={language.a_vission_mission} image={myHero}  bgAnimation={true}/>
      <div className={[styles.vmw, "w-controller"].join(" ")}>
      {
          (visMis.vission?.title && visMis.mission?.title && visMis.about?.description) ?
        <div className={styles.wrapper}>
          <div className={styles.vm}>
            <div className={styles.vmCard}>
              <Title title={visMis.vission[isRTL ? "pTitle" : "title"]} className={styles.title}/>
              <Text dangerouslySetInnerHTML={{__html: visMis.vission[isRTL ? "pDescription": "description"]}}
                className={styles.text}
              />
            </div>
            <div className={styles.vmCard}>
              <Title title={visMis.mission[isRTL ? "pTitle" : "title"]} className={styles.title} />
              <Text dangerouslySetInnerHTML={{__html: visMis.mission[isRTL ? "pDescription": "description"]}}
                className={styles.text}
              />
            </div>
            <div className={styles.achive}>
              <Title 
                  title={language.a_about}
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
              <div className={styles.textData} dangerouslySetInnerHTML={{__html: visMis.about[isRTL ? "pDescription": "description"]}}>
              </div>
            </div>
          </div>
          <SideBar
              links={[
                {name: language.a_vission_mission, link: "/academic/e_vission_mission"},
                {name: language.a_curriculum, link: "/academic/e_curriculum"},
                {name: language.a_organizational_structure, link: "/academic/e_organizational_structure"},
                {name: language.a_aggrements, link: "/academic/e_aggrements"},
              ]}
            />
        </div>
        : 
        <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>
        }
      </div>
    </div>
  )
} 



export default E_VissionMission;