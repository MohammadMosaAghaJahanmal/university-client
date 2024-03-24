import React, { useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from "../../Components/SmallHero";
import language from '../../localization';
import { useParams, useNavigate } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import SweetAlert from "../../Components/SweetAlert";
const AlumniPost = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');
  
  const [globalState, dispatch] = useStore(false);
  
  
  
  const navigate = useNavigate();
  const {type, id} = useParams();


  const allowTypes = {
    alumni: "alumni",
  }

  const [isLoading, setIsLoading] = useState(false);

  const {heros, news} = globalState;
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === type)?.imagePath || "")).href;

  const [mainPost, setMainPost] = useState({});
  useEffect(() => {
    (async() => {

      if(id.length !== 24 || !(allowTypes[type]))
        return navigate("/", {replace: true});

      if(globalState[type].length > 0)
        return placingPosts(globalState[type]);

        try {
        for (const key in allowTypes) {
          const perType = allowTypes[key];

          if(type === key)
          {
            if(globalState[key].length <= 0)
            {
              setIsLoading(true);
              const response = await fetch(serverPath(`/${perType}`));
              const objData = await response.json();
              if(objData.status === "success")
              {
                const data = objData.data;
                if(data.length <= 0)
                  return navigate('/', {replace: true})

                dispatch('setData', {type: key, data: data});
                placingPosts(data);
              }
              setIsLoading(false);
            }
            break;
          }
        }


      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()
  }, [id, type]);


  function placingPosts(data) {
    let mainPost = data.find(perPost => perPost._id === id);
    if(mainPost)
      setMainPost(mainPost);

    if(!mainPost)
      return navigate('/', {replace: true});

  }

  return (
    <div className={styles.post} >
      <SmallHero title={language.graduate} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.postWrapper, "w-controller"].join(" ")}>
      {isLoading ? 
        <Loader message="Please Wait..." />
      :
      mainPost.pFullName &&
      (
        <>
          <div className={styles.postContent}>
            <div className={styles.mainPost}>
              <div className={styles.postImage}>
                <img src={serverPath(mainPost.imagePath)} alt="alumni photo"/>
              </div>
              <div className={styles.postFields}>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.id}</p>
                  <div className={styles.fieldValue}> : {mainPost.registerId}</div>
                </div>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.fullName}</p>
                  <div className={styles.fieldValue}> : {mainPost[isRTL ? "pFullName" : "fullName"]}</div>
                </div>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.fatherName}</p>
                  <div className={styles.fieldValue}> : {mainPost[isRTL ? "pFatherName" : "fathername"]}</div>
                </div>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.faculty}</p>
                  <div className={styles.fieldValue}> : {language[mainPost.type]}</div>
                </div>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.phone}</p>
                  <div className={styles.fieldValue}> : {mainPost.phone}</div>
                </div>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.email}</p>
                  <div className={styles.fieldValue}> : {mainPost.email}</div>
                </div>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.job}</p>
                  <div className={styles.fieldValue}> : {mainPost.workingAt}</div>
                </div>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.startDate}</p>
                  <div className={styles.fieldValue}> : {(new Date(mainPost.startDate)).toLocaleDateString()}</div>
                </div>
                <div className={styles.field}>
                  <p className={styles.fieldKey}>{language.endDate}</p>
                  <div className={styles.fieldValue}> : {(new Date(mainPost.endDate)).toLocaleDateString()}</div>
                </div>
              </div>
                <div className={styles.postDesc} dangerouslySetInnerHTML={{__html: mainPost[isRTL ? "pDescription" : "description"]}}
                style={{display: "grid", rowGap: "10px"}}
                ></div>
            </div>
          </div>
        </>
        )
      }
      </div>
    </div>
  )
} 



export default AlumniPost;