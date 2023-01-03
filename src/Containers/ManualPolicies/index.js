import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/polic.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
// import {IoGitCommitOutline as CheckBox} from 'react-icons/io5';
import {FaPiedPiperHat as CheckBox} from 'react-icons/fa';

const ManualPolicies = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.mpa}>
      <SmallHero title={language.manual_policies} image={HeroImage}  style={{color: "#0080d6"}}/>
      <div className={[styles.mpw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.mp}>
            <Title 
                title="Policy One"
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
          <div className={styles.br}></div>
          <div className={styles.mp}>
            <Title 
                title="Policy Two"
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



export default ManualPolicies;