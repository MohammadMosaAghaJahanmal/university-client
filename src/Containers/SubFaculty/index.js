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
const SubFaculty = (props) =>
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
      curriculums,
      semesterfees
    } = globalState;
    const [strategicplane, setStrategicplane] = useState({})
    const [stratigicaim, setStratigicaim] = useState([])
    const [structure, setStructure] = useState({});
    const [valueData, setValueData] = useState([]);
    const [academiccalendar, setAcademiccalendar] = useState({});
    const [curriculum, setCurriculum] = useState({});
    const [semesterfee, setSemesterfee] = useState({});

    
    const [visMis, setVisMis] = useState({
      vission: {},
      mission: {},
      img: {}
    });

    
    const navigate = useNavigate();
    const {id, subtype} = useParams();
    
  const allowTypes = {
    cs: "cs",
    eco: "a_bba_economics",
  }

  const allowSubTypes = {
    it: "informational_technology",
    se: "software_engineering",
    is: "information_system",
    neco: "national_economics",
    beco: "banking",
    baeco: "business_administration",
  }

  
  const pathURLs = {
    it: [
      {title: language.councils_and_committees, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/councils_and_committees`},
      {title: language.labs, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/labs`},
      {title: language.libraryinfos, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/libraryinfos`},
      {title: language.achievements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/achievements`},
      {title: language.aggrements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/aggrements`},
    ],
    se: [
      {title: language.councils_and_committees, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/councils_and_committees`},
      {title: language.labs, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/labs`},
      {title: language.libraryinfos, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/libraryinfos`},
      {title: language.achievements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/achievements`},
      {title: language.aggrements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/aggrements`},
    ],
    is: [
      {title: language.councils_and_committees, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/councils_and_committees`},
      {title: language.labs, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/labs`},
      {title: language.libraryinfos, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/libraryinfos`},
      {title: language.achievements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/achievements`},
      {title: language.aggrements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/aggrements`},
    ],
    neco: [
      {title: language.councils_and_committees, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/councils_and_committees`},
      {title: language.labs, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/labs`},
      {title: language.libraryinfos, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/libraryinfos`},
      {title: language.achievements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/achievements`},
      {title: language.aggrements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/aggrements`},
    ],
    beco: [
      {title: language.councils_and_committees, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/councils_and_committees`},
      {title: language.labs, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/labs`},
      {title: language.libraryinfos, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/libraryinfos`},
      {title: language.achievements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/achievements`},
      {title: language.aggrements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/aggrements`},
    ],
    baeco: [
      {title: language.councils_and_committees, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/councils_and_committees`},
      {title: language.labs, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/labs`},
      {title: language.libraryinfos, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/libraryinfos`},
      {title: language.achievements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/achievements`},
      {title: language.aggrements, desc: language.it_information, navigate:`/faculty/${id}/${subtype}/aggrements`},
    ],
  }

    useEffect(() => {
        if(!id || !(allowTypes[id]) || !(allowSubTypes[subtype]))
          return navigate("/", {replace: true});

        let vis = vissions.find(v => v.type === subtype);
        let mis = missions.find(m => m.type === subtype);
        setVisMis(prev => ({
          vission: vis || {},
          mission: mis || {},
          img: avissionmissionimages[0]
        }));

      setStrategicplane(strategicplanes.find(per => per.type === subtype))
      setStratigicaim(stratigicaims.filter(per => per.type === subtype))
      setStructure(structures.find(per => per.type === subtype))
      setValueData(values.filter(per => per.type === subtype))
      setAcademiccalendar(academiccalendars.find(per => per.type === subtype))
      setCurriculum(curriculums.find(per => per.type === subtype))
      setSemesterfee(semesterfees.find(per => per.type === subtype))


    }, [id, subtype])


  return (
    <div className={styles.post} >
      <SmallHero title={language[allowSubTypes[subtype]]} image={FacultyImage} isRTL={isRTL} bgAnimation={false} style={{height: 200}}/>
      <div className={[styles.postWrapper, "w-controller"].join(" ")}>

        <div className={[styles.mainPost].join(" ")}>
          <div className={[styles.cards]}>
            {pathURLs[subtype]?.map(per => (
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

          </div>
          <ProgramTabs
            tabsStyle={styles.tabs}
            activeTab="vision"
            tabs={[
              { id: "vision", label: language.our_vission_and_mission },
              { id: "aims", label: language.strategic_aims },
              { id: "values", label: language.values },
              { id: "curriculum", label: language.curriculum },
              { id: "fee", label: language.semester_fee },
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
              curriculum: <div dangerouslySetInnerHTML={{__html:curriculum[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>,
              fee: <div dangerouslySetInnerHTML={{__html:semesterfee[isRTL ? "pDescription": "description"]}} className={"custom-content-style"}></div>,
            }}
          />

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



export default SubFaculty;