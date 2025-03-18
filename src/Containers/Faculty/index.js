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
  
    const {vissions, missions, avissionmissionimages, strategicplanes, stratigicaims, structures, values, academiccalendars} = globalState;
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

      setStrategicplane(strategicplanes.find(per => per.type === id))
      setStratigicaim(stratigicaims.filter(per => per.type === id))
      setStructure(structures.find(per => per.type === id))
      setValueData(values.filter(per => per.type === id))
      setAcademiccalendar(academiccalendars.find(per => per.type === id))


    }, [id])
    console.log(valueData)



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

          </div>
          <ProgramTabs 
            activeTab="vision"
            tabs={[
              { id: "vision", label: language.our_vission_and_mission },
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
              fee: "The fee structure varies based on the number of credits taken per semester. Scholarships and financial aid options are available for eligible students.",
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



export default Faculty;