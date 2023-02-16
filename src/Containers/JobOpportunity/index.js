import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
const JobOpportunity = (props) =>
{
  
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, jobs} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "job_opportunity")?.imagePath || "")).href;

  useEffect(() => {
    
    (async() => {
      try {
        if(jobs.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/job'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            dispatch('setData', {type: "jobs", data: data})
          }
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()
  }, [])

  
  return (
    <div className={styles.jobOpportunity}>
      <SmallHero title={language.job_opportunity} image={myHero} isRTL={isRTL} bgAnimation={false}/>
      <div className={[styles.agw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {jobs.length > 0 ?
          <>
            <Title 
              title={language.job_opportunity}
            />
            <div className={styles.cards}>
            {jobs.map(job => (
              <div className={styles.card} data-aos="fade-right" data-aos-delay={300} key={job._id}>
                <div className={styles.img}>
                  <img src={serverPath(job.imagePath)} alt="job image" />
                </div>
                <div className={styles.textContent}>
                  <Title 
                    className={styles.title}
                    title={job[isRTL ? "pTitle" : "title"]}
                  />
                  <Text 
                    className={styles.text} 
                    dangerouslySetInnerHTML={{__html: job[isRTL ? "pDescription": "description"]}}
                    style={{display: "grid", rowGap: "15px"}}
                  ></Text>
                  <p className={styles.expire}>
                    Expiring On {new Date(job.expireDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </>
          :
          <p className="msg">{language.nothing_to_show}</p>
        }
        </div>
      }
      </div>
    </div>
  )
} 



export default JobOpportunity;