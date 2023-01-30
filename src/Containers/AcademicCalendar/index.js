import React from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";

const AcademicCalendar = (props) =>
{

  const [globalState] = useStore();

  const {heros, academiccalendars} = globalState;

  const calendar = academiccalendars[0];

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "academic_calendar")?.imagePath || "")).href;
  return (
    <div className={styles.ac}>
      <SmallHero title={language.academic_calendar} image={myHero} isRTL={isRTL} className={[styles[isRTL + "Hero"], styles.hero].join(" ")}/>
      <div className={[styles.acw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {calendar?.description ?
          <>
            <Title 
              title={language.academic_calendar}
              className={styles.title}
            />
            <Text
              className={styles.text}
            >
              {calendar[isRTL ? "pDescription": "description"]}
            </Text>
            <Text
              className={styles.text}
            >
              {language.annual_two_semesters}
            </Text>
            <div className={styles.cards}>
            {calendar?.semesters?.map(semester => (
              <div className={styles.card}>
                <Title 
                  title="Semester"
                  className={styles.header}
                />
                <div className={styles.group}>
                  <p>Semester</p>
                  <p>{semester.semester}</p>
                </div>
                <div className={styles.group}>
                  <p>A.D</p>
                  <p>{semester.ad}</p>
                </div>
                <div className={styles.group}>
                  <p>L.Y</p>                  
                  <p>{semester.ly}</p>
                </div>
              </div>
            ))}
            </div>
          </>
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default AcademicCalendar;