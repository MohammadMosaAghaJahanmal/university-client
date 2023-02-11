import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import { useNavigate } from "react-router-dom";
import SideBar from "../../Components/SidaBar";
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import Loader from "../../Components/Loader";
import useStore from "../../store/store";
import Pagination from "../../Components/Pagination";

const ResearchPublications = (props) =>
{
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, researchpublications} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "research_publications")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 9,
  });

  
  useEffect(() => {
    
    (async() => {
      try {
        if(researchpublications.length <= 0)
        {
          setIsLoading(true);
            const response = await fetch(serverPath('/rp'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "researchpublications", data: data})
            }

          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [])
  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(researchpublications.length / pagination.show),
      value: 1
    }))
  }, [researchpublications]);

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/research/post/research_publications/${id}`);
  }

  return (
    <div className={styles.news}>
      <SmallHero title={language.research_publications} image={myHero} style={{color: "#0080d6", textShadow: "0 0 2px #0080d6"}} bgPosition={{backgroundPosition: "center"}} bgAnimation={false}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
        {
          researchpublications.length > 0 ? 
          <>
            <Title 
              title={language.research_publications}
              className={styles.mainTitle}
            />
            <div className={styles.wrapper}>
              <div className={styles.cards}>
              {researchpublications.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(pub => (
                <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler(pub._id)} key={pub._id}>
                  <div className={styles.img}>
                    <img src={serverPath(pub.thumbnail)} alt="ResearchPublication Image" />
                  </div>
                  <div className={styles.textContent}>
                    <Title 
                      title={pub[isRTL ? "pAuthor": "author"]}
                      className={styles.title}
                    />
                    <Text 
                      className={styles.text}
                    >
                      {pub[isRTL ? "pTitle": "title"]}
                    </Text>
                    <p>
                      {new Date(pub.createdAt).toLocaleDateString()}
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
          <p className="msg" style={{padding: "30px 0"}}>{language.nothing_to_show}</p>  
        }
        </div>
      }
      
      </div>
    </div>
  )
} 



export default ResearchPublications;