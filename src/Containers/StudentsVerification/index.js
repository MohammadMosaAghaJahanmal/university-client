import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import languages from "../../localization";
import MaterialInput from "../../Components/MaterialInput";
import SideBar from "../../Components/SidaBar";
import SweetAlert from '../../Components/SweetAlert';
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
const StudentsVerification = (props) =>
{
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros} = globalState;

  const isRTL = (languages.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "students_verification")?.imagePath || "")).href;

  const [studentId, setStudentId] = useState('');
  const [results, setResults] = useState([]);

  const searchHandler = async () => {
    if(isLoading || (studentId === results[0]?.student?.id))
      return;
    if(studentId.length <= 0)
      return SweetAlert("info", "ID input not allowed to by empty!")
    if(studentId.length > 15)
      return SweetAlert('info', "Please Enter Valid student id!");

      try {
        setIsLoading(true);
        const response = await fetch(serverPath(`/student_doc/${studentId}`));
        const objData = await response.json();
        if(objData.status === "failure")
          SweetAlert("error", objData.message);

        if(objData.status === "success")
        {
          const data = objData.data;
          setResults(data);
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
  }

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
              <div className={styles.documents}>
              {
                results.length > 0 ?
                results.map(result => (
                  <div className={styles.letter} key={result._id}>
                    <a href={serverPath(result.filePath)} download={result.title + ".pdf"} className={styles.docLink}>
                      <span>DOCUMENT - {result[isRTL ? "pTitle" : "title"]}</span>
                      <span>{new Date(result.createdAt).toLocaleDateString()}</span>
                    </a>
                  </div>
                ))
                :
                <p className="msg" style={{marginTop: "20px", color: "dodgerblue"}}>{languages.nothing_to_show}</p>
              }
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