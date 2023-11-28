import React, {useContext, useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from "../../Components/SmallHero";
import language from '../../localization';
import { useParams } from "react-router-dom";
import ImagesViewer from "../../Components/ImagesViewer";
import Text from "../../Components/Text";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
const CapacityBuildingPost = (props) =>
{
  
    const isRTL = (language.getLanguage() === 'ps');
    
    const [globalState, dispatch] = useStore(false);
    
    
    
    const navigate = useNavigate();
    const {type, id} = useParams();
  
    const allowTypes = [
      {type:'economical_advisory', storePath: "boardposts", route: "boardpost"},
      {type:'a_pdc', storePath: "pdcposts", route: "pdc_post"},
      {type:'a_capacity_building', storePath: "acapacitybuildings", route: "a_capacity_building"},
      {type:'capacity_building', storePath: "capacitybuildings", route: "capacity_building"},
      {type:'councils_and_committees', storePath: "councilsandcommittees", route: "councils_and_committees"},
      {type:'achievements', storePath: "achievements", route: "achievement"},
      {type:'agreements', storePath: "agreements", route: "agreement"},
      {type:'libraryinfos', storePath: "libraryinfos", route: "libraryinfo"},
  ];
  
    const [isLoading, setIsLoading] = useState(false);
  
    const {heros} = globalState;
    const myHero = new URL(serverPath(heros?.find(hero => hero.type === type)?.imagePath || "")).href;
  
    const [mainPost, setMainPost] = useState({});
    const [latestPosts, setLatestPosts] = useState([]);
  
    useEffect(() => {
      (async() => {
  
        if(id.length !== 24 || (allowTypes.findIndex(allow => allow.type === type) < 0))
          return navigate("/", {replace: true});
  
        try {
          for (const allowType of allowTypes) {
            if(allowType.type === type)
            {
              if(globalState[allowType.storePath].length <= 0)
              {
                setIsLoading(true);
                const response = await fetch(serverPath(`/${allowType.route}`));
                const objData = await response.json();
                if(objData.status === "success")
                {
                  const data = objData.data;
                  if(data.length <= 0)
                    return navigate('/', {replace: true})
    
                  dispatch('setData', {type: allowType.storePath, data: data})
                  placingPosts(data);
                }
                setIsLoading(false);
              }
              if(globalState[allowType.storePath].length > 0)
                return placingPosts(globalState[allowType.storePath]);
            }
          }
          
        } catch (err) {
          setIsLoading(false);
          return SweetAlert('error', err.message);
        }
      })()
    }, [id, type]);
  
  
    function placingPosts(data) {
      let mainPost = data.find(perPost => perPost._id === id);
      if(mainPost)
        setMainPost(mainPost);
  
      if(!mainPost)
        return navigate('/', {replace: true});
  
      const latestData = ([...data].reverse()).slice(0, 4);
      setLatestPosts(latestData.filter(latest => latest._id !== mainPost._id));
  
    }
  
  return (
    <div className={styles.post} >
      <SmallHero title={language[type]} image={myHero} isRTL={isRTL} bgAnimation={false}/>
      <div className={[styles.postWrapper, "w-controller"].join(" ")}>
      {isLoading ? 
        <Loader message="Please Wait..." />
      :
      mainPost.title &&
      (
        <>
          <div className={styles.mainPost}>
            <div className={styles.postTitle}>
              <p>
                {mainPost[isRTL ? "pTitle" : "title"]}
              </p>
            </div>
            <div className={styles.postImage}>
              <ImagesViewer
                  images={mainPost.images.map(img => serverPath(img.imagePath))} 
                  className={styles.imgs}
                />
            </div>
            <div 
            className={styles.postDesc} 
            dangerouslySetInnerHTML={{__html: mainPost[isRTL ? "pDescription" : "description"]}}
            style={{display: "grid", rowGap: "15px"}}

            ></div>
          </div>
          <div className={styles.latestPosts}>
            <p className={styles.latestTitle}>
              Latest Posts
            </p>
            <div className={styles.cards}> 
            {(latestPosts.length > 0) && 
              latestPosts.map(latest => (
                <div className={styles.card} key={latest._id} onClick={() => navigate(`/multipleimgs/${type}/${latest._id}`)}>
                  <ImagesViewer 
                    images={latest.images.map(img => serverPath(img.imagePath))} 
                    className={styles.img}
                  />
                  <div className={styles.textContent}>
                    <Text 
                        className={styles.text}
                        >
                      {latest[isRTL ? "pTitle": "title"]}
                    </Text>
                    <div className={styles.line}></div>
                    <p>
                        {new Date(latest.createdAt).toLocaleDateString()}
                      </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
        )
      }
      </div>
    </div>
  )
} 



export default CapacityBuildingPost;