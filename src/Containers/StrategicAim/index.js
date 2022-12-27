import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/stra.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
// import {IoGitCommitOutline as CheckBox} from 'react-icons/io5';
import {FaPiedPiperHat as CheckBox} from 'react-icons/fa';

const StrategicAim = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.strategicAim}>
      <SmallHero title={language.stratigic_aim} image={HeroImage} isRTL={isRTL}/>
      <div className={[styles.saw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.stratigic}>
            <Title 
                title="Stratigic Aim One"
                className={[styles.chTitle, styles.title].join(" ")}
                />
            <div className={styles.ach}>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality One</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality One</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality One</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality One</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality One</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality One</span>
              </div>
            </div>
          </div>
          <div className={styles.stratigic}>
            <Title 
                title="Stratigic Aim Two"
                className={[styles.chTitle, styles.title].join(" ")}
                />
            <div className={styles.ach}>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality Two</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality Two</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality Two</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality Two</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality Two</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality Two</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 



export default StrategicAim;