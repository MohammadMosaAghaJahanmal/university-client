import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import {IoCheckmarkCircleOutline as CheckBox} from 'react-icons/io5'
import SideBar from "../../Components/SidaBar";
import useStore from "../../store/store";
import serverPath from '../../utils/serverPath';
const R_VissionMission = (props) =>
{
  const [globalState] = useStore();
  const {heros, cevissions, cemissions, raims} = globalState;
  const [visMis, setVisMis] = useState({
    vission: {},
    mission: {},
  });

  useEffect(() => {
    let vis = cevissions.find(v => v.type === 're');
    let mis = cemissions.find(v => v.type === 're');
    setVisMis(prev => ({
      vission: vis || {},
      mission: mis || {},
    }));
  }, []);
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "vission_mission")?.imagePath || "")).href;

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.vissionMission}>
      <SmallHero title={language.r_vission_mission} image={myHero}  bgAnimation={true}/>
      <div className={[styles.vmw, "w-controller"].join(" ")}>
        {
        (visMis.vission?.title && visMis.mission?.title) ?
        <div className={styles.wrapper}>
          <div className={styles.vm}>
            <div className={styles.vmCard}>
              <Title title={visMis.vission[isRTL ? "pTitle" : "title"]} className={styles.title}/>
              <Text
                className={styles.text}
                dangerouslySetInnerHTML={{__html: visMis.vission[isRTL ? "pDescription" : "description"]}}
                style={{display: "grid", rowGap: "15px"}}
              />
            </div>
            <div className={styles.vmCard}>
              <Title title={visMis.mission[isRTL ? "pTitle" : "title"]} className={styles.title} />
              <Text
                className={styles.text}
                dangerouslySetInnerHTML={{__html: visMis.mission[isRTL ? "pDescription" : "description"]}}
                style={{display: "grid", rowGap: "15px"}}
              />
            </div>
            {raims.length > 0 &&
            <div className={styles.achive}>
              {raims.map(raim => (
              <div key={raim._id}>
                <Title 
                    title={raim[isRTL ? "pTitle" : "title"]}
                    className={[styles.chTitle, styles.title].join(" ")}
                    />
                <div className={styles.ach}>
                  {raim.aims.map(aim => (
                    <div className={[styles.item].join(" ")} key={aim._id}>
                      <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                      <span className={styles.itemText}>{aim[isRTL ? "pAim" : "aim"]}</span>
                    </div>
                  ))}
                </div>
              </div>
              ))}
            </div>
            }
          </div>
          <SideBar
              links={[
                {name: language.capacity_building, link: "/research/capacity_building"},
                {name: language.r_vission_mission, link: "/research/vission_mission"},
                {name: language.manual_policies, link: "/research/manual_policies"},
                {name: language.saba_magazine, link: "/research/saba_magazine"},
                {name: language.research_publications, link: "/research/research_publications"}
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



export default R_VissionMission;