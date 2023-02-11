import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import {useNavigate} from 'react-router-dom';
import ImagesViewer from "../../Components/ImagesViewer";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import SweetAlert from "../../Components/SweetAlert";
import Loader from "../../Components/Loader";
import Pagination from "../../Components/Pagination";
const CapacityBuilding = (props) =>
{
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, capacitybuildings} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "capacity_building")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 8,
  });


  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/multipleimgs/capacity_building/${id}`);
  }

  useEffect(() => {
    
    (async() => {
      try {
        if(capacitybuildings.length <= 0)
        {
          setIsLoading(true);
            const response = await fetch(serverPath('/capacity_building'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "capacitybuildings", data: data})
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
      max: Math.ceil(capacitybuildings.length / pagination.show),
      value: 1
    }))
  }, [capacitybuildings]);

  return (
    <div className={styles.cb}>
      <SmallHero title={language.capacity_building} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {capacitybuildings.length > 0 ? 
            <>
            <Title 
              title={language.capacity_building}
              className={styles.title}
            />
            <div className={styles.wrapper}>
              <div className={styles.cards}>
              {capacitybuildings.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(buildings => (
                  <div className={styles.card} key={buildings._id} onClick={() => clickHandler(buildings._id)}>
                    <ImagesViewer 
                      images={buildings.images.map(building => (serverPath(building.imagePath)))} 
                      className={styles.img}
                    />
                    <div className={styles.textContent}>
                      <Text 
                          className={styles.text}
                          >
                        {buildings[isRTL ? "pTitle": "title"]}
                      </Text>
                      <div className={styles.line}></div>
                      <p>
                          {new Date(buildings.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                  </div>
                ))}
              </div>
              <SideBar
                    links={[
                      {name: language.capacity_building, link: "/research/capacity_building"},
                      {name: language.r_vission_mission, link: "/research/vission_mission"},
                      {name: language.manual_policies, link: "/research/manual_policies"},
                      {name: language.saba_magazine, link: "/research/saba_magazine"},
                      {name: language.research_publications, link: "/research/research_publications"}
                    ]}
                  />
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



export default CapacityBuilding;