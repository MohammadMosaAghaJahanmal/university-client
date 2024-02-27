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
import Pagination from "../../Components/Pagination";

const PDC = (props) =>
{

  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 6,
  });
  const {heros, pdcposts, pdcstaticks} = globalState;
  let pdcstatick = pdcstaticks[0] || {};
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
          if(pdcposts.length <= 0)
          {
            setIsLoading(true);
            const response = await fetch(serverPath('/pdc_post'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "pdcposts", data: data})
            }
            setIsLoading(false);
          }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()
  }, []);
  
  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(pdcposts.length / pagination.show),
      value: 1
    }))
  }, [pdcposts]);


  console.log(pdcstatick)


  return (
    <div className={styles.cb}>
      <SmallHero title={language.a_pdc} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
        {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {pdcposts.length > 0 ? 
          <>
            <Title 
              title={language.a_pdc}
              className={styles.title}
            />

            {
              pdcstatick.imagePath &&
            <div className={styles.sImg}>
              <img src={serverPath(pdcstatick.imagePath)} />
            </div>
            }

            <div className={styles.cards}>
              {
                pdcposts.length <= 0 ?
                <p>{language.no_posts}</p>
                :
                pdcposts.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(pdcPost => (
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
            { pagination.max > 1 &&
              <Pagination
                min={pagination.min}
                max={pagination.max}
                value={pagination.value}
                onChange={(value) => setPagination(prev => ({
                  ...prev,
                  value: value
                }))}
              />
            }
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