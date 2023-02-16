import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import useStore from "../../store/store";
import serverPath from '../../utils/serverPath';

const VissionMission = (props) =>
{
  const [globalState] = useStore();

  const {heros, cevissions, cemissions, avissionmissionimages} = globalState;
  const [visMis, setVisMis] = useState({
    vission: {},
    mission: {},
    img: {}
  });

  useEffect(() => {
    let vis = cevissions.find(v => v.type === 'ab');
    let mis = cemissions.find(v => v.type === 'ab');
    setVisMis(prev => ({
      vission: vis || {},
      mission: mis || {},
      img: avissionmissionimages[0]
    }));
  }, []);
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "vission_mission")?.imagePath || "")).href;

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.vissionMission}>
      <SmallHero title={language.our_vission_and_mission} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.vmw, "w-controller"].join(" ")}>
      {(visMis?.mission?.title && visMis?.vission?.title) 
        ? 
        <>
          <div className={styles.vm}>
            <div className={styles.vmCard}>
              <Title title={visMis.vission[isRTL ? "pTitle" : "title"]} className={styles.title}/>
              <Text
                className={styles.text}
                dangerouslySetInnerHTML={{__html: visMis.vission[isRTL ? "pDescription": "description"]}}
                style={{display: "grid", rowGap: "15px"}}
              />
            </div>
            <div className={styles.vmCard}>
              <Title title={visMis.mission[isRTL ? "pTitle" : "title"]} className={styles.title} />
              <Text
                className={styles.text}
                dangerouslySetInnerHTML={{__html: visMis.mission[isRTL ? "pDescription": "description"]}}
                style={{display: "grid", rowGap: "15px"}}
              />
            </div>
          </div>
            { visMis?.img?.imagePath &&
            <div className={styles.photoFrame}>
                <img 
                  src={serverPath(visMis?.img?.imagePath)}
                  alt="VISSION_MISSION IMAGE"
                  className={styles.image}
                />
            </div>
            }
        </>
      :
      <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>
      }
      </div>
    </div>
  )
} 



export default VissionMission;