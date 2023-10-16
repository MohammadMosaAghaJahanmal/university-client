import React, { useEffect, useState }  from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import { useNavigate } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Pagination from "../../Components/Pagination";
import SweetAlert from "../../Components/SweetAlert";
import Loader from "../../Components/Loader";
const SabaFoundation = (props) =>
{

  console.log(useNavigate)
  
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, foundation} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "foundation")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 9,
  });


  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/foundation/${id}`);
  }

  
  
  useEffect(() => {
    
    (async() => {
      try {
        if(foundation.length <= 0)
        {
          setIsLoading(true);
            const response = await fetch(serverPath('/foundation'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "foundation", data: data})
            }

          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [])

  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(foundation.length / pagination.show),
      value: 1
    }))
  }, []);

  return (
    <div className={styles.foundation}>
      <SmallHero title={language.saba_foundation} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
        {foundation.length > 0 ?
          <>
            <Title 
              title={language.saba_foundation}
            />
            <div className={styles.cards}>
              {foundation.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(perFoundation => (
              <div className={styles.card} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler(perFoundation._id)} key={perFoundation._id}>
                <div className={styles.img}>
                  <img src={serverPath(perFoundation.thumbnail)} alt="SabaFoundation Image" />
                </div>
                <div className={styles.textContent}>
                  <Title className={styles.title}>
                    {perFoundation[isRTL ? "pTitle" : "title"]}
                  </Title>
                  <p>
                    {new Date(perFoundation.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              ))}
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



export default SabaFoundation;