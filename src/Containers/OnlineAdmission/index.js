import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/admission.jpg';
import Input from '../../Components/Input';
import Button from "../../Components/Button";
import { FaFacebookF, FaMapMarkedAlt, FaYoutube } from "react-icons/fa";
import languages from "../../localization";
import MaterialInput from "../../Components/MaterialInput";
import { provinces } from '../../Constants'

const OnlineAdmission = (props) =>
{

  const isRTL = (languages.getLanguage() === 'ps');

  const currentYear = (new Date().getFullYear() - 621);

  let prevYears = (currentYear - 30);

  let years = [];

  for (;prevYears <= currentYear; prevYears++) {
    years.unshift(prevYears)
  }

  return (
    <div className={styles.oa}>
      <SmallHero title={languages.online_admission} image={HeroImage} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        <div className={styles.oaFormWrapper}>
          <div className={styles.formTitle} data-aos="fade-down" data-aos-delay={100}>
            Fill The Inputs For Online Admissions.
          </div>
          <div className={styles.oaForm}>
            <div data-aos="fade-right" data-aos-delay={100}>
                <MaterialInput
                  label={"Full Name *"}
                  placeholder={"Name *"}
                  id="fullname"
                  onChange={(e) => {}}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={200}>
                <MaterialInput
                  label={"Father Name *"}
                  placeholder={"F/Name *"}
                  id="fname"
                  onChange={(e) => {}}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={400}>
                <MaterialInput
                  label={"Graduation Year *"}
                  placeholder={"G/Year"}
                  id="gyear"
                  type="select"
                  options={years}
                  select={currentYear}
                  onChange={(e) => {}}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={600}>
                <MaterialInput
                  label={"High School Name *"}
                  placeholder={"School Name *"}
                  id="sname"
                  onChange={(e) => {}}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={800}>
                <MaterialInput
                  label={"Phone Number *"}
                  placeholder={"P/Number *"}
                  id="pname"
                  onChange={(e) => {}}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={1000}>
                <MaterialInput
                  label={"Province *"}
                  placeholder={"Province *"}
                  id="province"
                  type="select"
                  options={provinces}
                  select={"Kandahar"}
                  onChange={(e) => {}}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={1200}>
                <MaterialInput
                  label={"Email Address"}
                  placeholder={"Email"}
                  id="email"
                  onChange={(e) => {}}
                  />
              </div>
            <div className={styles.oaButton} data-aos="fade-up" data-aos-delay={1400}>
              <button>
                Register
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 



export default OnlineAdmission;