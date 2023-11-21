import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import {FaPiedPiperHat as CheckBox} from 'react-icons/fa';
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import { useParams } from "react-router-dom";
import SideBar from "../../Components/SidaBar";
const AcademicPrograms = (props) =>
{
  const {id} = useParams();
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, academicprograms} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = serverPath((heros?.find(hero => hero.type === "value")?.imagePath) || "");

  useEffect(() => {
    (async() => {
      try {
        if(academicprograms.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/academic_program'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            dispatch('setData', {type: "academicprograms", data: data})
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
    <div className={styles.strategicAim}>
      <SmallHero title={language.academic_programs} image={myHero} isRTL={isRTL}/>
      <div className={[styles.saw, "w-controller"].join(" ")}>
        {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
         <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          {academicprograms.length > 0 ?
          academicprograms.map(value => value.type === id && (
            <div className={styles.stratigic} key={value._id}>
              <Title 
                  title={value[isRTL ? "pTitle": "title"]}
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
              <div dangerouslySetInnerHTML={{__html: value[isRTL ? "pDescription" : 'description']}} className={styles.ach}></div>
            </div>
          ))
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
        <SideBar
          links={[
            {name: language.our_vission_and_mission, link: "/about/vission_mission"}, 
            {name: language.values, link: "/about/values"},
            {name: language.years_plane, link: "/about/strategic_plane"}, 
            {name: language.councils_and_committees, link: "/about/councils_and_committees"}, 
            {name: language.academic_programs, link: "/about/academic_programs"}, 
            {name: language.your_opinion, link: "/about/your_opinion"},
            {name: language.contact, link: "/contact", },
          ]}
        />
        </div>
        }
      </div>
    </div>
  )
} 



export default AcademicPrograms;