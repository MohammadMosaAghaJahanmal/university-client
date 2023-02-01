import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import {useNavigate} from 'react-router-dom';
import ImagesViewer from "../../Components/ImagesViewer";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import SweetAlert from "../../Components/SweetAlert";

const PDC = (props) =>
{

  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, pdcstaticks, pdcposts} = globalState;
  const pdcStat = pdcstaticks[0]
  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "a_pdc")?.imagePath || "")).href;
  const navigate = useNavigate();

  const postHandler = (type, id) =>
  {
    navigate(`/multipleimgs/${type}/${id}`);
  }

  useEffect(() => {
    
    (async() => {
      try {
        if(pdcstaticks.length <= 0 || pdcposts.length <= 0)
        {
          setIsLoading(true);
          if(pdcstaticks.length <= 0)
          {
            const response = await fetch(serverPath('/pdc_statick'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "pdcstaticks", data: data})
            }
          }

          if(pdcposts.length <= 0)
          {
            const response = await fetch(serverPath('/pdc_post'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "pdcposts", data: data})
            }
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
    <div className={styles.cb}>
      <SmallHero title={language.a_pdc} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
        {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {pdcstaticks.length > 0 ? 
          <>
            <Title 
              title={language.a_pdc}
              className={styles.title}
            />
            <div className={styles.sImg}>
              <img src={serverPath(pdcStat?.imagePath)} alt="PDC IMAGE"/>
            </div>
            <div className={styles.bulletContainer}>
              <Text className={[styles.text, styles.bulletText].join(" ")}>
                {pdcStat[isRTL ? "pAnnualPlan" : "annualPlan"]}
              </Text>
            </div>
            <Title 
              title={"PDC Posts"}
              className={styles.title}
            />
            <div className={styles.cards}>
              {
                pdcposts.length <= 0 ?
                <p>{language.no_posts}</p>
                :
                pdcposts.map(pdcPost => (
                <div className={styles.card} onClick={()=> postHandler("a_pdc", pdcPost._id)} key={pdcPost._id}>
                  <ImagesViewer 
                    images={pdcPost.images.map(pdcImage => (serverPath(pdcImage.imagePath)))} 
                    className={styles.img}
                  />
                  <div className={styles.textContent}>
                    <Text className={styles.text}>
                      {pdcPost[isRTL ? "pTitle": "title"]}
                    </Text>
                    <div className={styles.line}></div>
                    <p>
                        {new Date(pdcPost.createdAt).toLocaleDateString()}
                      </p>
                  </div>
                </div>
                ))

              }
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



export default PDC;