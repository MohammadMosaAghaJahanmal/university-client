import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import {useNavigate, useParams} from 'react-router-dom';
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import Pagination from "../../Components/Pagination";
const Aggrements = (props) =>
{

  const {id} = useParams()
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, aggrements} = globalState;
  const [aggrs, setAggrs] = useState(aggrements.filter(perField => perField.type?.toLowerCase() === id));
  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "aggrements")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 6,
  });

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
            setAggrs(data.filter(perField => perField.type?.toLowerCase() === id));
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
  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(aggrs.length / pagination.show),
      value: 1
    }))
  }, [aggrs]);

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
          {aggrs.length > 0 ?
          <>
            <Title 
              title={language.aggrements}
            />
            <div className={styles.cards}>
            {aggrs.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(aggrement => (
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



export default Aggrements;