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
const Alumni = (props) =>
{

  const {id} = useParams()
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, alumni} = globalState;
  const [almn, setAggrs] = useState(alumni.filter(perField => perField.type?.toLowerCase() === id?.toLowerCase()));
  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "alumni")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 12,
  });

  useEffect(() => {
    
    (async() => {
      try {
        if(alumni.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/alumni'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            setAggrs(data.filter(perField => perField.type?.toLowerCase() === id));
            dispatch('setData', {type: "alumni", data: data})
          }
          setIsLoading(false);
        }
        if(alumni.length > 0)
        {
          setAggrs(alumni.filter(perField => perField.type?.toLowerCase() === id));
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [id])
  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(almn.length / pagination.show),
      value: 1
    }))
  }, [almn, id]);

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/students/alumni/${id}`);
  }

  return (
    <div className={styles.news}>
      <SmallHero title={language[id+"_graduate"]} image={myHero} isRTL={isRTL} bgAnimation={false}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {almn.length > 0 ?
          <>
            <Title 
              title={language[id+"_graduate"]}
            />
            <div className={styles.cards}>
            {almn.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(almny => (
              <div className={styles.card} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler(almny._id)} key={almny._id}>
                <div className={styles.img}>
                  <img src={serverPath(almny.thumbnail)} alt="almny image" />
                </div>
                <div className={styles.textContent}>
                  <Title className={styles.title}>
                    ID: {almny.registerId}
                  </Title>
                  <p>
                    Name:<br /> {almny[isRTL ? "pFullName" : "fullName"]}
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



export default Alumni;