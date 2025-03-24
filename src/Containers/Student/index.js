import React, { useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from "../../Components/SmallHero";
import language from '../../localization';
import { useParams, useNavigate } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import FacultyImage from '../../Assets/sound.jpg'
import Card from "../../Components/Card";
import ProgramTabs from "../../Components/ProgramTabs";
import CollapseSection from "../../Components/CollapseSection";
const Student = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');
  
  const [globalState, dispatch] = useStore(false);
  
    const {
      vissions, 
      missions, 
      avissionmissionimages, 
      strategicplanes, 
      stratigicaims, 
      values, 
      academiccalendars,
      tajils,
      depriveds,
      chances,
      reenrollments,
      eresticates,
      transformations,
      repeats,
      policiesandprocedures,
      graduatedstudentsstatistics,
      employedstudents,
      counselingcenters
    } = globalState;
    const [strategicplane, setStrategicplane] = useState({})
    const [stratigicaim, setStratigicaim] = useState([])
    const [valueData, setValueData] = useState([]);
    const [academiccalendar, setAcademiccalendar] = useState({});

    
    const [visMis, setVisMis] = useState({
      vission: {},
      mission: {},
      img: {}
    });

    
    const navigate = useNavigate();
    const {id} = useParams();
    

  const allowTypes = {
    statistics: "students_statistic",
    alumni_support_services: "alumni_support_services"
  }

  
  const pathURLs = {
    alumni_support_services: [
      {title: language.economic_alumni, desc: language.it_information, navigate:`/student/${id}/alumni/eco`},
      {title: language.computer_science_alumni, desc: language.it_information, navigate:`/student/${id}/alumni/cs`},
      {title: language.job_opportunity, desc: language.it_information, navigate:`/student/${id}/job_opportunity`},
    ],
    
  }

    useEffect(() => {
        if(!id || !(allowTypes[id]))
          return navigate("/", {replace: true});

        let vis = vissions.find(v => v.type === id);
        let mis = missions.find(m => m.type === id);
        setVisMis(prev => ({
          vission: vis || {},
          mission: mis || {},
          img: avissionmissionimages[0]
        }));


      setStrategicplane(strategicplanes.find(per => per.type === id));
      setStratigicaim(stratigicaims.filter(per => per.type === id));
      setValueData(values.filter(per => per.type === id));
      setAcademiccalendar(academiccalendars.find(per => per.type === id));


    }, [id])


  return (
    <div className={styles.post} >
      <SmallHero title={language[allowTypes[id]]} image={FacultyImage} isRTL={isRTL} bgAnimation={false} style={{height: 200}}/>
      <div className={[styles.postWrapper, "w-controller"].join(" ")}>

        <div className={[styles.mainPost].join(" ")}>
          <div className={[styles.cards]}>
            {pathURLs[id]?.map(per => (
              <Card
                title={per.title}
                desc={per.desc}
                navigate={per.navigate}
                isrtl={language.textDirection}
                key={per.title}
              />
            ))}

            {academiccalendar?.description && 
              <Card 
              title={language.academic_calendar}
              desc={academiccalendar[isRTL ? "pDescription": "description"]}
              navigate={strategicplane.filePath}
              isrtl={language.textDirection}
              isdownloadable="academiccalendar.pdf"

              
            />}
            {strategicplane?.filePath &&
              <Card 
                title={language.strategic_plane}
                desc={strategicplane[isRTL ? "pDescription": "description"]}
                navigate={strategicplane.filePath}
                isdownloadable="stategicpalne.pdf"
                isrtl={language.textDirection}
                
              />
            }
            {((id === "statistics") && tajils[0]?.filePath) &&
              <Card 
                title={language.tajil}
                desc={tajils[0][isRTL ? "pDescription": "description"]}
                navigate={tajils[0]?.filePath}
                isdownloadable="tajil.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "statistics") && depriveds[0]?.filePath) &&
              <Card 
                title={language.deprived}
                desc={depriveds[0][isRTL ? "pDescription": "description"]}
                navigate={depriveds[0]?.filePath}
                isdownloadable="depriveds.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "statistics") && chances[0]?.filePath) &&
              <Card 
                title={language.chance}
                desc={chances[0][isRTL ? "pDescription": "description"]}
                navigate={chances[0]?.filePath}
                isdownloadable="chances.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "statistics") && reenrollments[0]?.filePath) &&
              <Card 
                title={language.re_enrollment}
                desc={reenrollments[0][isRTL ? "pDescription": "description"]}
                navigate={reenrollments[0]?.filePath}
                isdownloadable="tajil.reenrollments"
                isrtl={language.textDirection}
              />
            }
            {((id === "statistics") && eresticates[0]?.filePath) &&
              <Card 
                title={language.eresticate}
                desc={eresticates[0][isRTL ? "pDescription": "description"]}
                navigate={eresticates[0]?.filePath}
                isdownloadable="eresticates.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "statistics") && transformations[0]?.filePath) &&
              <Card 
                title={language.transformation}
                desc={transformations[0][isRTL ? "pDescription": "description"]}
                navigate={transformations[0]?.filePath}
                isdownloadable="tajil.transformations"
                isrtl={language.textDirection}
              />
            }
            {((id === "statistics") && repeats[0]?.filePath) &&
              <Card 
                title={language.repeat}
                desc={repeats[0][isRTL ? "pDescription": "description"]}
                navigate={repeats[0]?.filePath}
                isdownloadable="repeats.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "alumni_support_services") && policiesandprocedures[0]?.filePath) &&
              <Card 
                title={language.policies_and_procedures}
                desc={policiesandprocedures[0][isRTL ? "pDescription": "description"]}
                navigate={policiesandprocedures[0]?.filePath}
                isdownloadable="policiesandprocedures.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "alumni_support_services") && graduatedstudentsstatistics[0]?.filePath) &&
              <Card 
                title={language.graduated_students_statistic}
                desc={graduatedstudentsstatistics[0][isRTL ? "pDescription": "description"]}
                navigate={graduatedstudentsstatistics[0]?.filePath}
                isdownloadable="graduatedstudentsstatistics.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "alumni_support_services") && employedstudents[0]?.filePath) &&
              <Card 
                title={language.employed_student}
                desc={employedstudents[0][isRTL ? "pDescription": "description"]}
                navigate={employedstudents[0]?.filePath}
                isdownloadable="employedstudentsts.pdf"
                isrtl={language.textDirection}
              />
            }

          </div>
          { (id === "alumni_support_services") &&
          <ProgramTabs 
            activeTab={"counselingcenters"}
            tabs={[
              { id: "counselingcenters", label: language.counseling_center },
            ]}
            content={{
              counselingcenters: (
                <div dangerouslySetInnerHTML={{__html:counselingcenters[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
            }}
          /> 
          }

        </div>
      </div>
    </div>
  )
} 



export default Student;