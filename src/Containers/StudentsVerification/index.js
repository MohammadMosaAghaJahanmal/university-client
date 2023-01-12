import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/admission.jpg';
import Input from '../../Components/Input';
import Button from "../../Components/Button";
import { FaFacebookF, FaMapMarkedAlt, FaYoutube } from "react-icons/fa";
import languages from "../../localization";
import MaterialInput from "../../Components/MaterialInput";
import logo from '../../Assets/logo.png'

const StudentsVerification = (props) =>
{

  const isRTL = (languages.getLanguage() === 'ps');

  let results = [
    {id: "19290", fullName: 'Ahmadullah', fatherName: "Abdullah", province: "Kandahar", faculty: "Computer Sciences", marks: "888", pass: "true"},
    {id: "18310", fullName: 'Mohammad Mosa', fatherName: "Mohammad Agha", province: "Kandahar", faculty: "Computer Sciences", marks: "999", pass: "false"},
  ];

  return (
    <div className={styles.oa}>
      <SmallHero title={languages.result} image={HeroImage} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        <div className={styles.oaFormWrapper}>
          <div className={styles.formTitle} data-aos="fade-down" data-aos-delay={100}>
            Saba University Students Documents
          </div>
          <div className={styles.oaForm}>
            <div data-aos="fade-right" data-aos-delay={100}>
              <MaterialInput
                label={"Student ID *"}
                placeholder={"ID *"}
                id="id"
                className={styles.input}
                />
            </div>
            <div className={styles.oaButton} data-aos="fade-up" data-aos-delay={1400}>
              <button>
                Search
              </button>
            </div>
          </div>
          <div className={styles.documents}>
            <div className={styles.letter}>
              <a href="#">DOCUMENT - Third Semester</a>
            </div>
            <div className={styles.letter}>
              <a href="#">DOCUMENT - Letter Of Appreciation</a>
            </div>
            <div className={styles.letter}>
              <a href="#">DOCUMENT - Fourth Semester</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 



export default StudentsVerification;