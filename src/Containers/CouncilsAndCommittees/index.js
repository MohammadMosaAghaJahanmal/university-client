import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import {useNavigate, useParams} from 'react-router-dom';
import ImagesViewer from "../../Components/ImagesViewer";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import SweetAlert from "../../Components/SweetAlert";
import Loader from "../../Components/Loader";
import Pagination from "../../Components/Pagination";
const CouncilsAndCommittees = (props) =>
{
  const {id} = useParams();
  const [globalState, dispatch] = useStore(false);
  const [isLoading, setIsLoading] = useState(false);

  const {heros, councilsandcommittees} = globalState;

  const [committees, setCommittees] = useState(councilsandcommittees.filter(perField => perField.type.toLowerCase() === id));

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "councils_and_committee")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 8,
  });


  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/multipleimgs/councils_and_committees/${id}`);
  }

  useEffect(() => {
    
    (async() => {
      try {
        if(councilsandcommittees.length <= 0)
        {
          setIsLoading(true);
            const response = await fetch(serverPath('/councils_and_committee'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              setCommittees(data.filter(perField => perField.type.toLowerCase() === id));
              dispatch('setData', {type: "councilsandcommittees", data: data})
            }

          setIsLoading(false);
        }else
        {
          setCommittees(councilsandcommittees.filter(perField => perField.type.toLowerCase() === id));
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()
  }, [id]);

  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(committees.length / pagination.show),
      value: 1
    }))
  }, [committees, id]);

  return (
    <div className={styles.cb}>
      <SmallHero title={language.councils_and_committees} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {committees.length > 0 ? 
            <>
            <Title 
              title={language.councils_and_committees}
              className={styles.title}
            />
            <div className={styles.wrapper}>
              <div className={styles.cards}>
              {committees.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(perField => (
                  <div className={styles.card} key={perField._id} onClick={() => clickHandler(perField._id)}>
                    <ImagesViewer 
                      images={perField.images.map(building => (serverPath(building.imagePath)))} 
                      className={styles.img}
                    />
                    <div className={styles.textContent}>
                      <Text 
                          className={styles.text}
                          >
                        {perField[isRTL ? "pTitle": "title"]}
                      </Text>
                      <div className={styles.line}></div>
                      <p>
                          {new Date(perField.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                  </div>
                ))}
              </div>
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
          <p className="msg" style={{padding: "20px 0"}}>{language.nothing_to_show}</p>  
          }
        </div>
        }
      </div>
    </div>
  )
} 



export default CouncilsAndCommittees;