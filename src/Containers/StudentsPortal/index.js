import React, {useEffect, useState, useContext} from "react";
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
import {IoMdCloseCircleOutline as Close} from 'react-icons/io'
const StudentsPortal = (props) =>
{
  const [globalState] = useStore();
  const authContext = useContext(AuthContext)
  const {
    authLoading, 
    studetnDocs, 
    SA_TOKEN, 
    student,
    login, 
    setAuth
  } = authContext;

  const {heros} = globalState;

  const isRTL = (languages.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "students_portal")?.imagePath || "")).href;

  const initFiledsState = {
    id: "",
    password: "",
    type: "student"
  }

  const [fields, setFields] = useState({...initFiledsState})

  const [showModal, setShowModal] = useState(false);

  const onChange = (type, value) => setFields(prev => ({...prev, [type]: value}));
  const onLogout = () => {
    setAuth(prev => ({
      ...prev, 
      token: "", 
      student: null, 
      studetnDocs: [], 
      authLoading: false, 
      login: false
    }));
    localStorage.removeItem(SA_TOKEN);
  }
  const searchHandler = async () => {

    if(authLoading)
      return;
    if(fields.id.length <= 0)
      return SweetAlert("info", "ID input not allowed to by empty!")
    if(fields.id.length > 15)
      return SweetAlert('info', "Please Enter Valid student id!");

      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
          const value = fields[field];
          if(value.length <= 0)
            return SweetAlert("info", field.toUpperCase()+" input is not allowed to by empty!");
          if(field === 'id' && value.length > 15)
            return SweetAlert('info', "Please Enter Valid student id!");
        }
      }
      try {
        setAuth(prev => ({...prev, authLoading: true}));
        const response = await fetch(serverPath(`/login`), {
          method: "POST",
          headers: {
            "Content-Type": "Application/json"
          },
          body: JSON.stringify(fields)
        });
        const objData = await response.json();
        if(objData.status === "failure")
          SweetAlert("error", objData.message);

        if(objData.status === "success")
        {
          const {token, user} = objData;
          localStorage.setItem(SA_TOKEN, token);
          const docs = await fetch(serverPath(`/student_doc/find`), {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
              "Authorization": `bearer ${token}`,
            },
            body: JSON.stringify({studentId: user?.id})
          });
          const docsObj = await docs.json();
          let studetnDOCS = [];
          if(docsObj.status === "success")
              studetnDOCS = docsObj.data;

          setAuth(prev => ({
            ...prev, 
            token: token, 
            student: user, 
            studetnDocs: studetnDOCS, 
            authLoading: false, 
            login: true
          }));
        }
        setAuth(prev => ({...prev, authLoading: false}));
        setShowModal(false);
        setFields({...initFiledsState})
      } catch (err) {
        setAuth(prev => ({...prev, authLoading: false}));
        setShowModal(false);
        setFields({...initFiledsState})
        return SweetAlert('error', err.message);
      }
  }

  return (
    <div className={styles.oa}>
      <SmallHero title={languages.student_portal} image={myHero} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        {
          authLoading &&
          <Loader message="Finding Results..." className={styles.loader} />
        }
        <div className={styles.oaFormWrapper}>
          { (login && student) &&
            <div className={styles.formTitle} data-aos="fade-down" data-aos-delay={100}>
              {languages.sabaStudentsPortal}
            </div>
          }
          <div className={styles.wrapper}>
            <div className={styles.formContent}>
              {
                login ? 
                <div className={styles.oaButton} style={{margin: "10px 0" }} data-aos="fade-up" data-aos-delay={800}>
                  <button onClick={onLogout} style={{marginLeft: "auto"}}>
                    {languages.logOut}
                  </button>
                </div>
                :
              <>
              {showModal && 
                <div className={styles.modal}>
                  <div className={styles.oaForm} data-aos="fade-right" data-aos-delay={100}>
                    <button className={styles.closeButton} onClick={() => setShowModal(prev => (!prev))}>
                      <Close size={25} />
                    </button>
                    <p className={styles.loginMessage}>Login To Student Portal</p>
                    <div data-aos="fade-right" data-aos-delay={100}>
                      <MaterialInput
                        label={"Student ID*"}
                        placeholder={"Enter ID *"}
                        id="id"
                        className={styles.input}
                        onChange={(e) => onChange("id", e.target.value)}
                        value={fields.id}
                        />
                    </div>
                    <div data-aos="fade-right" data-aos-delay={100}>
                      <MaterialInput
                        type="password"
                        label={"Student Password*"}
                        placeholder={"Enter Password *"}
                        id="password"
                        className={styles.input}
                        onChange={(e) => onChange("password", e.target.value)}
                        value={fields.password}
                        />
                    </div>
                    <div className={styles.oaButton} data-aos="fade-up" data-aos-delay={800}>
                      <button onClick={searchHandler}>
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              }
              {
                !showModal && (
                  <>
                  <div data-aos="fade-down" data-aos-delay={300} className={styles.welcomeTitle}>Welcome To Students Portal</div>
                  <div className={styles.oaButton} data-aos="fade-up" data-aos-delay={500}>
                    <button onClick={() => setShowModal(prev => (!prev))} style={{width: "280px",}}>
                      Login
                    </button>
                  </div>
                </>
                )
              }

              </>
              }
              {
              (login && student) && (
              <>
                <div className={styles.studentProfile}>
                  {student?.imagePath && 
                  <div className={styles.studentImage}>
                    <img src={serverPath(student.thumbnail)} alt="Student image" className={styles.img} />
                  </div>
                  }
                  <div className={styles.studentDetails}>
                    <div className={styles.group}>
                      <p className={styles.groupTitle}>{languages.id}: </p>
                      <p className={styles.groupValue}>{student?.id}</p>
                    </div>
                    <div className={styles.group}>
                      <p className={styles.groupTitle}>{languages.fullName}: </p>
                      <p className={styles.groupValue}>{student[isRTL ? "pFullName" : "fullName"]}</p>
                    </div>
                    <div className={styles.group}>
                      <p className={styles.groupTitle}>{languages.fatherName}: </p>
                      <p className={styles.groupValue}>{student[isRTL ? "pFatherName" : "fatherName"]}</p>
                    </div>
                    <div className={styles.group}>
                      <p className={styles.groupTitle}>{languages.faculty}: </p>
                      <p className={styles.groupValue}>{student?.facultyId && student?.facultyId[isRTL ? "pName" : "name"]}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.documents}>
                  <div className={styles.documentLetter}>
                    {languages.yourDocuments}
                  </div>
                {
                  studetnDocs.length > 0 ?
                  studetnDocs.map(result => (
                    <div className={styles.letter} key={result._id}>
                      <a href={serverPath(result.filePath)} download={result.title + ".pdf"} className={styles.docLink}>
                        <span>{languages.document.toUpperCase()} - {result[isRTL ? "pTitle" : "title"]}</span>
                        <span>{new Date(result.createdAt).toLocaleDateString()}</span>
                      </a>
                    </div>
                  ))
                  :
                  <p className="msg" style={{marginTop: "20px", color: "dodgerblue"}}>{languages.nothing_to_show}</p>
                }
                </div>
              </>
            )}
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



export default StudentsPortal;