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
const SabaMagazine = (props) =>
{
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, magazines} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "saba_magazine")?.imagePath || "")).href;

  
  useEffect(() => {
    
    (async() => {
      try {
        if(magazines.length <= 0)
        {
          setIsLoading(true);
            const response = await fetch(serverPath('/magazine'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "magazines", data: data})
            }

          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [])

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/research/post/saba_magazine/${id}`);
  }

  return (
    <div className={styles.news}>
      <SmallHero title={language.saba_magazine} image={myHero} bgPosition={{backgroundPosition: "top"}} bgAnimation={true}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {
            magazines.length > 0 ? 
          <>
            <Title 
              title={language.saba_magazine}
              className={styles.mainTitle}
            />
            <div className={styles.mainContentWrapper}>
              <div className={styles.cards}>
              {magazines.map(post => (
                <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler(post._id)} key={post._id}>
                  <div className={styles.img}>
                    <img src={serverPath(post.thumbnail)} alt="Magazine image" />
                  </div>
                  <div className={styles.textContent}>
                    <Title 
                        className={styles.title}
                      >
                      <span className={styles.key}>{language.author}: </span>
                      <span className={styles.titleName}>{post[isRTL ? "pAuthor": "author"]}</span>
                    </Title>
                    <Title 
                        className={styles.title}
                      >
                      <span className={styles.key}>{language.page}: </span>
                      <span className={styles.titleName}>#{post.page}</span>
                    </Title>
                    <Text 
                      className={styles.text}
                    >
                      {post[isRTL ? "pTitle": "title"]}
                    </Text>
                    <p>
                      {new Date(post.createdAt).toLocaleDateString()}
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



export default SabaMagazine;