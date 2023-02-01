import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import {FaPiedPiperHat as CheckBox} from 'react-icons/fa';
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import SweetAlert from "../../Components/SweetAlert";
import Loader from "../../Components/Loader";
const ManualPolicies = (props) =>
{
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, rmanualpolicies} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "manual_policies")?.imagePath || "")).href;

  
  useEffect(() => {
    
    (async() => {
      try {
        if(rmanualpolicies.length <= 0)
        {
          setIsLoading(true);
            const response = await fetch(serverPath('/r_m_policy'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "rmanualpolicies", data: data})
            }

          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [])

  return (
    <div className={styles.mpa}>
      <SmallHero title={language.manual_policies} image={myHero}  style={{color: "#0080d6"}}/>
      <div className={[styles.mpw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
          rmanualpolicies.length > 0 ? 
        <div className={styles.wrapper}>
          <>
          <div className={styles.contentWrapper}>
          {rmanualpolicies.map(policy => (
            <div className={styles.mp} key={policy._id}>
              <Title 
                  title={policy[isRTL ? "pTitle": "title"]}
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
              <div className={styles.ach}>
              {policy.policies.map(pol => (
                <div className={[styles.item].join(" ")} key={pol._id}>
                  <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                  <span className={styles.itemText}>{pol[isRTL ? "pPolicy": "policy"]}</span>
                </div>
              ))}

              </div>
            </div>
          ))}
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
          </>
        </div>
          :
          <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>  
      }
      </div>
    </div>
  )
} 



export default ManualPolicies;