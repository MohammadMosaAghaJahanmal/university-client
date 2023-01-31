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

  const {heros, cevissions, cemissions, ceabouts} = globalState;
  const [visMis, setVisMis] = useState({
    vission: {},
    mission: {},
    about: {}
  });

  useEffect(() => {
    let vis = cevissions.find(v => v.type === 'cs');
    let mis = cemissions.find(v => v.type === 'cs');
    let about = ceabouts.find(v => v.type === 'cs');
    setVisMis(prev => ({
      vission: vis || {},
      mission: mis || {},
      about: about || {},
    }));
  }, []);
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "c_vission_mission")?.imagePath || "")).href;

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
              <Text text={visMis.vission[isRTL ? "pDescription" : "description"]}
                className={styles.text}
              />
            </div>
            <div className={styles.vmCard}>
              <Title title={visMis.mission[isRTL ? "pTitle" : "title"]} className={styles.title} />
              <Text text={visMis.mission[isRTL ? "pDescription" : "description"]}
                className={styles.text}
              />
            </div>
            <div className={styles.achive}>
              <Title 
                  title={language.a_about}
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
              <div className={styles.textData}>
                <p>
                  {visMis.about[isRTL ? "pDescription" : "description"]}
                </p>
              </div>
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
        : 
        <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>
        }
      </div>
    </div>
  )
} 



export default C_VissionMission;