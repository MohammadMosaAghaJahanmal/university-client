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
import Text from "../../Components/Text";
import Title from "../../Components/Title";
const Faculty = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');
  
  const [globalState, dispatch] = useStore(false);
  
    const {
      vissions, 
      missions, 
      avissionmissionimages, 
      strategicplanes, 
      stratigicaims, 
      structures, 
      values, 
      academiccalendars,
      annualprofessionaldevelopmentplans,
      researchpapers,
      researchguides,
      scientificandresearchmagazines,
      policiesandprocedures,
      researchsupports,
      completedresearches,
      underprocessresearches,
      planedresearches,
      accreditations,
      selfassesments,
      periodicprogramreviews,
      studystatistics,
      procedures,
      progressiveplans,
      offlineenrollmentrequirements,
      kankorguides,
      kankorregistrationdates,
      enrolled,
      generals,
      academicprograms,
    } = globalState;
    const [strategicplane, setStrategicplane] = useState({})
    const [stratigicaim, setStratigicaim] = useState([])
    const [structure, setStructure] = useState({});
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
    cs: "cs",
    eco: "a_bba_economics",
    pdc: "training_about_pdc",
    research: "activities_resources",
    quality_accreditation: "quality_accreditation",
    achievements_progress: "achievements_progress",
    enrollment_guidance: "enrollment_guidance",
    seb: "saba_economical_board",
    about: "who_we_are",
  }

  
  const pathURLs = {
    cs: [
      {title: language.informational_technology, desc: language.it_information, navigate:`/faculty/${id}/it`},
      {title: language.software_engineering, desc: language.se_information, navigate:`/faculty/${id}/se`},
      {title: language.information_system, desc: language.is_information, navigate:`/faculty/${id}/is`},
    ],
    eco: [
      {title: language.national_economics, desc: language.neco_economics, navigate:`/faculty/${id}/neco`},
      {title: language.banking, desc: language.beco_economics, navigate:`/faculty/${id}/beco`},
      {title: language.business_administration, desc: language.baeco_economics, navigate:`/faculty/${id}/baeco`},
    ],
    pdc: [
      {title: language.teacher, desc: language.neco_economics, navigate:`/academic/${id}/training_about_pdc/teacher`},
      {title: language.administrative_staff, desc: language.beco_economics, navigate:`/academic/${id}/training_about_pdc/administrative_staff`},
      {title: language.pdc_student, desc: language.baeco_economics, navigate:`/academic/${id}/training_about_pdc/pdc_student`},
      {title: language.society, desc: language.baeco_economics, navigate:`/academic/${id}/training_about_pdc/society`},
    ],
    research: [
      {title: language.published_researche, desc: language.neco_economics, navigate:`/research/activities_resources/published_researche`},
    ],
    quality_accreditation: [
      {title: language.internal_accreditation, desc: language.neco_economics, navigate:`/quality/${id}/internal/accreditation`},
      {title: language.national_accreditation, desc: language.neco_economics, navigate:`/quality/${id}/national/accreditation`},
      {title: language.international_accreditation, desc: language.neco_economics, navigate:`/quality/${id}/international/accreditation`},
    ],
    achievements_progress: [
      {title: language.internal_accreditation, desc: language.neco_economics, navigate:`/library/${id}/achievements`},
    ],
    seb: [
      {title: language.activity, desc: language.neco_economics, navigate:`/institutions/${id}/activity`},
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
      setStructure(structures.find(per => per.type === id));
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
            {((id === "pdc") && annualprofessionaldevelopmentplans[0]?.filePath) &&
              <Card 
                title={language.annual_professional_development_plan}
                desc={annualprofessionaldevelopmentplans[0][isRTL ? "pDescription": "description"]}
                navigate={annualprofessionaldevelopmentplans[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "research") && researchpapers[0]?.filePath) &&
              <Card 
                title={language.research_paper}
                desc={researchpapers[0][isRTL ? "pDescription": "description"]}
                navigate={researchpapers[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "research") && researchguides[0]?.filePath) &&
              <Card 
                title={language.research_guide}
                desc={researchguides[0][isRTL ? "pDescription": "description"]}
                navigate={researchguides[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "research") && scientificandresearchmagazines[0]?.filePath) &&
              <Card 
                title={language.scientific_and_research_magazine}
                desc={scientificandresearchmagazines[0][isRTL ? "pDescription": "description"]}
                navigate={scientificandresearchmagazines[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "research") && policiesandprocedures[0]?.filePath) &&
              <Card 
                title={language.policies_and_procedures}
                desc={policiesandprocedures[0][isRTL ? "pDescription": "description"]}
                navigate={policiesandprocedures[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "achievements_progress") && procedures[0]?.filePath) &&
              <Card 
                title={language.procedure}
                desc={procedures[0][isRTL ? "pDescription": "description"]}
                navigate={procedures[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "achievements_progress") && progressiveplans[0]?.filePath) &&
              <Card 
                title={language.progressive_plan}
                desc={progressiveplans[0][isRTL ? "pDescription": "description"]}
                navigate={progressiveplans[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "enrollment_guidance") && offlineenrollmentrequirements[0]?.filePath) &&
              <Card 
                title={language.offline_enrollment_requirement}
                desc={offlineenrollmentrequirements[0][isRTL ? "pDescription": "description"]}
                navigate={offlineenrollmentrequirements[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }
            {((id === "enrollment_guidance") && kankorguides[0]?.filePath) &&
              <Card 
                title={language.kankor_guide}
                desc={kankorguides[0][isRTL ? "pDescription": "description"]}
                navigate={kankorguides[0]?.filePath}
                isdownloadable="plans.pdf"
                isrtl={language.textDirection}
              />
            }

          </div>
          {id === "research" &&
            <ProgramTabs 
              tabsStyle={'researchtabs'}
              activeTab="aims"
              tabs={[
                { id: "aims", label: language.strategic_aims },
                { id: "support", label: language.research_support },
                { id: "completed", label: language.completed_researche },
                { id: "underprocess", label: language.under_process_researche },
                { id: "planed", label: language.planed_researche },
                // { id: "fee", label: "Fee Structure" },
              ]}
              content={{
                aims: stratigicaim.map((per, index) => <CollapseSection key={per._id} title={per[isRTL ? "pTitle": "title"] || language.a_aims} description={per[isRTL ? "pDescription": "description"]} active={index <= 0 ? true : false}  />),
                support: (
                  <div dangerouslySetInnerHTML={{__html:researchsupports[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
                ),
                completed: (
                  <div dangerouslySetInnerHTML={{__html:completedresearches[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
                ),
                underprocess: (
                  <div dangerouslySetInnerHTML={{__html:underprocessresearches[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
                ),
                planed: (
                  <div dangerouslySetInnerHTML={{__html:planedresearches[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
                ),
              }}
            />
          }
          { (id === "cs" || id === "eco" || id === "pdc") &&
          <ProgramTabs
            activeTab={"vision"}
            tabsStyle={styles[id+"tabs"]}
            tabs={[
              { id: "vision", label: language.vission_mission },
              { id: "aims", label: language.strategic_aims },
              { id: "values", label: language.values },
              // { id: "fee", label: "Fee Structure" },
            ]}
            content={{
              vision: (
                <>
                  <div>
                    <h4>{language.vission}</h4>
                    <p dangerouslySetInnerHTML={{__html: visMis.vission[isRTL ? "pDescription": "description"]}}></p>
                  </div>
                  <div>
                    <h4>{language.mission}</h4>
                    <p dangerouslySetInnerHTML={{__html: visMis.mission[isRTL ? "pDescription": "description"]}}></p>
                  </div>
                </>
              ),
              aims: stratigicaim.map((per, index) => <CollapseSection key={per._id} title={per[isRTL ? "pTitle": "title"] || language.a_aims} description={per[isRTL ? "pDescription": "description"]} active={index <= 0 ? true : false}  />),
              values: (valueData.map((per, index) => (
                  <div key={per._id}>
                    <h4>{per[isRTL ? "pTitle": "title"] || language.a_aims}</h4>
                    <div dangerouslySetInnerHTML={{__html: per[isRTL ? "pValue": "value"]}}></div>
                  </div>
              ))),
            }}
          /> 
          }

          { id === "quality_accreditation" &&
          <ProgramTabs 
            activeTab={"accreditations"}
            tabsStyle={styles[id+"tabs"]}
            tabs={[
              { id: "accreditations", label: language.accreditation },
              { id: "selfassesments", label: language.a_self_assesment },
              { id: "periodicprogramreviews", label: language.periodic_program_review },
              // { id: "fee", label: "Fee Structure" },
            ]}
            content={{
              accreditations: (
                <div dangerouslySetInnerHTML={{__html:accreditations[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
              selfassesments: (
                <div dangerouslySetInnerHTML={{__html:selfassesments[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
              periodicprogramreviews: (
                <div dangerouslySetInnerHTML={{__html:periodicprogramreviews[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
            }}
          /> 
          }

          { id === "seb" &&
          <ProgramTabs 
            activeTab={"aims"}
            tabsStyle={styles[id+"tabs"]}
            tabs={[
              { id: "aims", label: language.strategic_aims },
              // { id: "fee", label: "Fee Structure" },
            ]}
            content={{
              aims: stratigicaim.map((per, index) => <CollapseSection key={per._id} title={per[isRTL ? "pTitle": "title"] || language.a_aims} description={per[isRTL ? "pDescription": "description"]} active={index <= 0 ? true : false}  />),
            }}
          /> 
          }

          { id === "achievements_progress" &&
          <ProgramTabs 
            activeTab={"studystatistics"}
            tabsStyle={styles[id+"tabs"]}
            tabs={[
              { id: "studystatistics", label: language.study_statistic },
              // { id: "fee", label: "Fee Structure" },
            ]}
            content={{
              studystatistics: (
                <div dangerouslySetInnerHTML={{__html:studystatistics[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
            }}
          /> 
          }

          { id === "enrollment_guidance" &&
          <ProgramTabs 
            activeTab={"kankorregistrationdates"}
            tabsStyle={styles[id+"tabs"]}
            tabs={[
              { id: "kankorregistrationdates", label: language.kankor_registration_date },
              { id: "enrolled", label: language.enrolled },
              { id: "generals", label: language.general },
              // { id: "fee", label: "Fee Structure" },
            ]}
            content={{
              kankorregistrationdates: (
                <div dangerouslySetInnerHTML={{__html:kankorregistrationdates[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
              enrolled: (
                <div dangerouslySetInnerHTML={{__html:enrolled[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
              generals: (
                <div dangerouslySetInnerHTML={{__html:generals[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
            }}
          /> 
          }

          { id === "about" &&
          <ProgramTabs
            activeTab={"vision"}
            tabsStyle={styles[id+"tabs"]}
            tabs={[
              { id: "vision", label: language.vission_mission },
              { id: "academic_programs", label: language.academic_programs },
              { id: "values", label: language.values },
              // { id: "fee", label: "Fee Structure" },
            ]}
            content={{
              vision: (
                <>
                  <div>
                    <h4>{language.vission}</h4>
                    <p dangerouslySetInnerHTML={{__html: visMis.vission[isRTL ? "pDescription": "description"]}}></p>
                  </div>
                  <div>
                    <h4>{language.mission}</h4>
                    <p dangerouslySetInnerHTML={{__html: visMis.mission[isRTL ? "pDescription": "description"]}}></p>
                  </div>
                </>
              ),
              academic_programs: (
                <div dangerouslySetInnerHTML={{__html:academicprograms[0]?.[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>
              ),
              values: (valueData.map((per, index) => (
                  <div key={per._id}>
                    <h4>{per[isRTL ? "pTitle": "title"] || language.a_aims}</h4>
                    <div dangerouslySetInnerHTML={{__html: per[isRTL ? "pValue": "value"]}}></div>
                  </div>
              ))),
            }}
          /> 
          }



        </div>
        {structure?.title &&
          <>
            <div className={styles.contentWrapper}>
              <div className={styles.history}>
                <Title
                  title={structure[isRTL ? "pTitle": "title"]}
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
                <Text className={styles.text}>
                  <div className={styles.textData} dangerouslySetInnerHTML={{__html: structure[isRTL ? "pDescription": "description"]}}></div>
                </Text>
                <div className={styles.br}></div>
              </div>
            </div>
            <div className={styles.orgImage}>
              <img src={serverPath(structure?.imagePath)} alt={"Structure"}/>
            </div>
          </>
          }
      </div>
    </div>
  )
} 



export default Faculty;