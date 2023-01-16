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

const OnlineAdmission = (props) =>
{

  const isRTL = (languages.getLanguage() === 'ps');

  let results = [
    {id: "19290", fullName: 'Ahmadullah', fatherName: "Abdullah", province: "Kandahar", faculty: "Computer Sciences", marks: "888", status: "PASS"},
    {id: "18310", fullName: 'Mohammad Mosa', fatherName: "Mohammad Agha", province: "Kandahar", faculty: "Computer Sciences", marks: "999", status: "FAIL"},
  ];

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
          <div className={styles.tableContainer}>
            <div className={styles.logo}>
              <img src={logo} alt="LOGO"/>
            </div>
            <div className={styles.tableTitle}>
              <p>
                Result Table
              </p>
            </div>
            <div className={styles.table}>
              <div className={styles.thead}>
                <div className={styles.tr}>
                  <div className={styles.th}>ID</div>
                  <div className={styles.th}>Name</div>
                  <div className={styles.th}>F/Name</div>
                  <div className={styles.th}>Province</div>
                  <div className={styles.th}>Faculty</div>
                  <div className={styles.th}>Marks</div>
                  <div className={styles.th}>Status</div>
                </div>
              </div>
              <div className={styles.tbody}>
              {results.map((result, index) => (
                <div className={styles.tr} key={result.id + " " + index}>
                  <div className={styles.td}>{result.id}</div>
                  <div className={styles.td}>{result.fullName}</div>
                  <div className={styles.td}>{result.fatherName}</div>
                  <div className={styles.td}>{result.province}</div>
                  <div className={styles.td}>{result.faculty}</div>
                  <div className={styles.td}>{result.marks}</div>
                  <div className={styles.td}>{result.status}</div>
                </div>
              ))}
              </div>
            </div>
            <div className={styles.mTble}>
              {results.map((result, index) => (
                <div className={styles.mTbody} key={result.id + " " + index}>
                  <div className={styles.mTr}>
                    <div className={styles.mTh}>ID</div>
                    <div className={styles.mTd}>{result.id}</div>
                  </div>
                  <div className={styles.mTr}>
                    <div className={styles.mTh}>Name</div>
                    <div className={styles.mTd}>{result.fullName}</div>
                  </div>
                  <div className={styles.mTr}>
                    <div className={styles.mTh}>F/Name</div>
                    <div className={styles.mTd}>{result.fatherName}</div>
                  </div>
                  <div className={styles.mTr}>
                    <div className={styles.mTh}>Province</div>
                    <div className={styles.mTd}>{result.province}</div>
                  </div>
                  <div className={styles.mTr}>
                    <div className={styles.mTh}>Faculty</div>
                    <div className={styles.mTd}>{result.faculty}</div>
                  </div>
                  <div className={styles.mTr}>
                    <div className={styles.mTh}>Marks</div>
                    <div className={styles.mTd}>{result.marks}</div>
                  </div>
                  <div className={styles.mTr}>
                    <div className={styles.mTh}>Status</div>
                    <div className={styles.mTd}>{result.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 



export default OnlineAdmission;