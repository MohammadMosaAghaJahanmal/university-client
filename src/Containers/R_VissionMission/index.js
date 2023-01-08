import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/lab.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import {IoCheckmarkCircleOutline as CheckBox} from 'react-icons/io5'
import SideBar from "../../Components/SidaBar";

const R_VissionMission = (props) =>
{
  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.vissionMission}>
      <SmallHero title={language.r_vission_mission} image={HeroImage}  bgAnimation={true}/>
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
                  title="Aim"
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
              <div className={styles.ach}>
                <div className={[styles.item].join(" ")}>
                  <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                  <span className={styles.itemText}>Saba University will remain committed to ensuring quality</span>
                </div>
                <div className={[styles.item].join(" ")}>
                  <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                  <span className={styles.itemText}>Saba University will remain committed to ensuring quality</span>
                </div>
              </div>
            </div>
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
      </div>
    </div>
  )
} 



export default R_VissionMission;