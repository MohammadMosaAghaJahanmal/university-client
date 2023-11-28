import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import { useParams } from "react-router-dom";
import languages from "../../localization";
import SideBar from "../../Components/SidaBar";
const AcademicCalendar = (props) =>
{
  const {id} = useParams();
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, academiccalendars} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = serverPath((heros?.find(hero => hero.type === "academic_calendar")?.imagePath) || "");

  useEffect(() => {
    (async() => {
      try {
        if(academiccalendars.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/academic_calendar'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            dispatch('setData', {type: "academiccalendars", data: data})
          }
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [id])

  return (
    <div className={styles.strategicAim}>
      <SmallHero title={language.academic_calendar} image={myHero} isRTL={isRTL}/>
      <div className={[styles.saw, "w-controller"].join(" ")}>
        <div className={styles.wrapper}>
          {
          isLoading ? 
          <Loader message="Loading Data..." />
          :
          <div className={styles.contentWrapper}>
            <Title 
              text={language.academic_calendar}
            />
            {academiccalendars.length > 0 ?
            academiccalendars.map(perField => perField.type === id && (
              <div className={styles.stratigic} key={perField._id}>
                <div dangerouslySetInnerHTML={{__html: perField[isRTL ? "pDescription" : 'description']}} className={styles.ach}></div>
                <a href={serverPath(perField.filePath)} download={id + "_academiccalendars.pdf"} target="_blank" className={styles.fileLink}>{languages.downloadPlanFile}</a>
              </div>
            ))
            :
            <p className="msg">{language.nothing_to_show}</p>
            }
          </div>
          }
          <SideBar
            links={[
              {name: language.our_vission_and_mission, link: "/about/vission_mission"}, 
              {name: language.values, link: "/about/values"},
              {name: language.years_plane, link: "/about/academic_calendar"}, 
              {name: language.councils_and_committees, link: "/about/councils_and_committees"}, 
              {name: language.academic_programs, link: "/about/academic_programs"}, 
              {name: language.your_opinion, link: "/about/your_opinion"},
              {name: language.contact, link: "/contact", },
            ]}
          />
        </div>
      </div>
    </div>
  )
} 



export default AcademicCalendar;