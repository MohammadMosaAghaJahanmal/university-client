import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/lab.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";

const E_VissionMission = (props) =>
{
  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.vissionMission}>
      <SmallHero title={language.a_vission_mission} image={HeroImage}  bgAnimation={true}/>
      <div className={[styles.vmw, "w-controller"].join(" ")}>
        <div className={styles.wrapper}>
          <div className={styles.vm}>
            <div className={styles.vmCard}>
              <Title title="Vission" className={styles.title}/>
              <Text text="
                To be a recognized university in the country 
                and region for quality teaching, research and learning, 
                strong management system for nurturing a generation disciplined with national values brightening future of the country.
                " 
                className={styles.text}
              />
            </div>
            <div className={styles.vmCard}>
              <Title title="Mission" className={styles.title} />
              <Text text="
                Saba University serves the nation and region through providing, 
                retaining, and practicing value-based knowledge, 
                skills, research and producing strong academic cadres known for their best Islamic, 
                national, and social characters.
                "
                className={styles.text}
              />
            </div>
            <div className={styles.achive}>
              <Title 
                  title="No Title From Backend Just Text Editor"
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
              <div className={styles.textData}>
                <p>
                  Some Text From backend
                </p>
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
      </div>
    </div>
  )
} 



export default E_VissionMission;