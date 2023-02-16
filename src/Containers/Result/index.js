import React, { useState } from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from "../../localization";
import MaterialInput from "../../Components/MaterialInput";
import logo from '../../Assets/logo.png'
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";

const OnlineAdmission = (props) =>
{
  
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, students} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "result")?.imagePath || "")).href;

  const [results, setResults] = useState([]);
  const [studentID, setStudentID] = useState('');

  const onFindResults = async () => {
    if(isLoading || (studentID === results[0]?.id))
      return;

    if(studentID.length <= 0)
      return SweetAlert('info', "Please Enter Student id!");

    if(studentID.length > 15)
      return SweetAlert('info', "Please Enter Valid student id!");


    try {
      if(students.length <= 0)
      {
        setIsLoading(true);
        const response = await fetch(serverPath(`/student/${studentID}`));
        const objData = await response.json();
        if(objData.status === "failure")
          SweetAlert("error", objData.message);

        if(objData.status === "success")
        {
          const data = objData.data;
          setResults(data);
          console.log(data);
        }
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      return SweetAlert('error', err.message);
    }
  }

  return (
    <div className={styles.oa}>
      <SmallHero title={language.result} image={myHero} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        {
          isLoading &&
          <Loader message="Finding Results..." className={styles.loader} />
        }
        <div className={styles.oaFormWrapper}>
          <div className={styles.formTitle} data-aos="fade-down" data-aos-delay={100}>
            Find Your Kankor Result
          </div>
          <div className={styles.oaForm}>
            <div data-aos="fade-right" data-aos-delay={100}>
              <MaterialInput
                label={"Student ID *"}
                placeholder={"ID *"}
                id="id"
                className={styles.input}
                onChange={(e) => setStudentID(e.target.value)}
                value={studentID}
                />
            </div>
            <div className={styles.oaButton} data-aos="fade-up" data-aos-delay={1400}>
              <button onClick={onFindResults} disabled={isLoading}>
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
                  <div className={styles.td}>{result?.facultyId?.name}</div>
                  <div className={styles.td}>{result.marks}</div>
                  <div className={styles.td}>{result.kankorStatus}</div>
                </div>
              ))}
              {results.length <= 0 && (
                <div className={styles.tr} style={{textAlign: "center"}}>
                  <div className={styles.td} style={{gridColumnStart: 1, gridColumnEnd: -1, padding: 40}}>{language.nothing_to_show}</div>
                </div>
              )}
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
                    <div className={styles.mTd}>{result.kankorStatus}</div>
                  </div>
                </div>
              ))}
              {results.length <= 0 && (
                <div className={styles.mTr} style={{textAlign: "center"}}>
                  <div className={styles.mTd} style={{gridColumnStart: 1, gridColumnEnd: -1, padding: 40}}>{language.nothing_to_show}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 



export default OnlineAdmission;