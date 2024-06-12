import React, {useContext, useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import languages from "../../localization";
import MaterialInput from "../../Components/MaterialInput";
import SideBar from "../../Components/SidaBar";
import SweetAlert from '../../Components/SweetAlert';
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import {AuthContext} from '../../authContext';

const StudentsVerification = (props) =>
{
  const authContext = useContext(AuthContext)
  const {
    student,
  } = authContext;
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros} = globalState;

  const isRTL = (languages.getLanguage() === 'ps');
  const myHero = serverPath(heros?.find(hero => hero.type === "students_verification")?.imagePath || "");
  const [studentId, setStudentId] = useState('');
  const [results, setResults] = useState([]);
  const result = results[0];
  const searchHandler = async () => {
    if(isLoading)
      return;
    if(studentId.length <= 0)
      return SweetAlert("info", "ID input not allowed to by empty!")
    if(studentId.length > 15)
      return SweetAlert('info', "Please Enter Valid student id!");

      try {
        setIsLoading(true);
        const response = await fetch(serverPath(`/student/${studentId}`));
        const objData = await response.json();
        if(objData.status === "failure")
          SweetAlert("info", objData.message);

        if(objData.status === "success")
        {
          const data = objData.data;
          if(data?.length <= 0 || !data[0]?.isGraduated)
          {
            SweetAlert('info', "There is no graduated Student by this id !");
          }
          if(data[0]?.isGraduated)
          {
            setResults(data);
          }

        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
  }

  console.log(serverPath(student?.thumbnail))

  return (
    <div className={styles.oa}>
      <SmallHero title={languages.students_verification} image={myHero} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        {
          isLoading &&
          <Loader message="Finding Results..." className={styles.loader} />
        }
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
                    onChange={(e) => setStudentId(e.target.value)}
                    value={studentId}
                    />
                </div>
                <div className={styles.oaButton} data-aos="fade-up" data-aos-delay={1400}>
                  <button onClick={searchHandler}>
                    Search
                  </button>
                </div>
              </div>
              {(result?.id && result?.isGraduated) &&
              <div className={styles.documents}>
                <div className={styles.sProfile}>
                  <div className={styles.pImg}>
                    <img src={serverPath(result?.thumbnail)} alt={'student image'} />
                  </div>
                  <div className={styles.letter}>
                    <div className={styles.group}>
                      <p className={styles.key}>{languages.id}:</p>
                      <p className={styles.value}>{result.id}</p>
                    </div>
                    <div className={styles.group}>
                      <p className={styles.key}>{languages.fullName}:</p>
                      <p className={styles.value}>{result[isRTL ? "pFullName" : "fullName"]}</p>
                    </div>
                    <div className={styles.group}>
                      <p className={styles.key}>{languages.fatherName}:</p>
                      <p className={styles.value}>{result[isRTL ? "pFatherName" : "fatherName"]}</p>
                    </div>
                    <div className={styles.group}>
                      <p className={styles.key}>{languages.faculty}:</p>
                      <p className={styles.value}>{result?.facultyId && result?.facultyId[isRTL ? "pName" : "name"]}</p>
                    </div>
                    <div className={styles.group}>
                      <p className={styles.key}>{languages.graduated_date}:</p>
                      <p className={styles.value}>{new Date(result.graduatedOn).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
              }
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