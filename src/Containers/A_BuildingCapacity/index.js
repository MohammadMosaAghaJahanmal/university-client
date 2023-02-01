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
const A_BuildingCapacity = (props) =>
{

  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, acapacitybuildings} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "a_capacity_building")?.imagePath || "")).href;

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/aggrements/${id}`);
  }

  useEffect(() => {
    
    (async() => {
      try {
        if(acapacitybuildings.length <= 0)
        {
          setIsLoading(true);
            const response = await fetch(serverPath('/a_capacity_building'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "acapacitybuildings", data: data})
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
      <SmallHero title={language.a_capacity_building} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {acapacitybuildings.length > 0 ? 
          <>
            <Title 
              title={language.a_capacity_building}
              className={styles.title}
            />
            <div className={styles.wrapper}>
              <div className={styles.cards}>
              {acapacitybuildings.map(buildings => (
                <div className={styles.card} key={buildings._id}>
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
                      {name: language.a_aims, link: "/academic/a_aims"}, 
                      {name: language.a_self_assesment, link: "/academic/a_self_assesment"},
                      {name: language.a_annual_program_monitoring, link: "/academic/a_annual_program_monitoring"},
                      {name: language.a_councils_committees, link: "/academic/a_councils_committees"},
                      {name: language.a_manual_policies, link: "/academic/a_manual_policies"},
                      {name: language.a_capacity_building, link: "/academic/a_capacity_building"},
                      {name: language.accreditation, link: "/academic/accreditation"},
                    ]}
                  />
            </div>
          </>
          :
          <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>  
          }
        </div>
        }
      </div>
    </div>
  )
} 



export default A_BuildingCapacity;