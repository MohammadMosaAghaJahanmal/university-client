import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/admission.jpg';
import Input from '../../Components/Input';
import Button from "../../Components/Button";
import { FaFacebookF, FaMapMarkedAlt, FaYoutube } from "react-icons/fa";
import languages from "../../localization";
import MaterialInput from "../../Components/MaterialInput";

const OnlineAdmission = (props) =>
{

  const isRTL = (languages.getLanguage() === 'ps')

  return (
    <div className={styles.oa}>
      <SmallHero title={languages.result} image={HeroImage} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        <div className={styles.oaFormWrapper}>
          <div className={styles.formTitle} data-aos="fade-down" data-aos-delay={100}>
            Find Your Result
          </div>
          <div className={styles.oaForm}>
            <div data-aos="fade-right" data-aos-delay={100}>
                <MaterialInput
                  label={"Full Name *"}
                  placeholder={"Name *"}
                  id="fullname"
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={200}>
                <MaterialInput
                  label={"Father Name *"}
                  placeholder={"F/Name *"}
                  id="fname"
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={400}>
                <MaterialInput
                  label={"Graduation Year"}
                  placeholder={"G/Year"}
                  id="gyear"
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={600}>
                <MaterialInput
                  label={"High School Name *"}
                  placeholder={"School Name *"}
                  id="sname"
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={800}>
                <MaterialInput
                  label={"Phone Number *"}
                  placeholder={"P/Number *"}
                  id="pname"
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={1000}>
                <MaterialInput
                  label={"Province *"}
                  placeholder={"Province *"}
                  id="province"
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={1200}>
                <MaterialInput
                  label={"Email Address"}
                  placeholder={"Email"}
                  id="email"
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