import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/admission.jpg';
import languages from "../../localization";
import MaterialInput from "../../Components/MaterialInput";
import SideBar from "../../Components/SidaBar";


const StudentsVerification = (props) =>
{

  const isRTL = (languages.getLanguage() === 'ps');

  let results = [
    {id: "19290", fullName: 'Ahmadullah', fatherName: "Abdullah", province: "Kandahar", faculty: "Computer Sciences", marks: "888", pass: "true"},
    {id: "18310", fullName: 'Mohammad Mosa', fatherName: "Mohammad Agha", province: "Kandahar", faculty: "Computer Sciences", marks: "999", pass: "false"},
  ];

  return (
    <div className={styles.oa}>
      <SmallHero title={languages.students_verification} image={HeroImage} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        <div className={styles.oaFormWrapper}>
          <div className={styles.formTitle} data-aos="fade-down" data-aos-delay={100}>
            Saba University Students Documents
          </div>
          <div className={styles.wrapper}>
            <div className={styles.formContent}>
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
            <SideBar
              links={[
                {name: languages.student_portal, link: "/students/student_portal"}, 
                {name: languages.eligibility_criteria, link: "/students/eligibility_criteria"}, 
                {name: languages.scholarships_financing, link: "/students/scholarships_financing"}, 
                {name: languages.migration_policy, link: "/students/migration_policy"}, 
                {name: languages.semester_promotion_rules, link: "/students/semester_promotion_rules"}, 
                {name: languages.students_verification, link: "/students/students_verification"}, 
                {name: languages.penalties, link: "/students/penalties"}, 
              ]}
            />
          </div>
        </div>
        
      </div>
    </div>
  )
} 



export default StudentsVerification;