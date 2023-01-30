import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/agg.jpg';
import HeroImage2 from '../../Assets/agg2.jpg';
import HeroImage1 from '../../Assets/man.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import {useNavigate} from 'react-router-dom';
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
const Aggrements = (props) =>
{

  
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, aggrements} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "aggrements")?.imagePath || "")).href;

  useEffect(() => {
    
    (async() => {
      try {
        if(aggrements.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/aggrement'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            dispatch('setData', {type: "aggrements", data: data})
          }
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [])

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/aggrements/${id}`);
  }

  return (
    <div className={styles.aggrements}>
      <SmallHero title={language.aggrements} image={myHero} isRTL={isRTL} bgAnimation={false}/>
      <div className={[styles.agw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {aggrements.length > 0 ?
          <>
            <Title 
              title={language.aggrements}
            />
            <div className={styles.cards}>
            {aggrements.map(aggrement => (
              <div className={styles.card} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler(aggrement._id)} key={aggrement._id}>
                <div className={styles.img}>
                  <img src={serverPath(aggrement.thumbnail)} alt="aggrement image" />
                </div>
                <div className={styles.textContent}>
                  <Title className={styles.title}>
                    {aggrement[isRTL ? "pTitle" : "title"]}
                  </Title>
                  <p>
                    {new Date(aggrement.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </>
          :
          <p>{language.nothing_to_show}</p>
          }
        </div>
      }
      </div>
    </div>
  )
} 



export default Aggrements;