import React, {useContext, useEffect, useState} from "react";
import styles from './style.module.css';
import A from '../../Assets/news2.jpg';
import B from '../../Assets/news.jpg';
import C from '../../Assets/b.jpg';
import D from '../../Assets/a.jpg';
import SmallHero from "../../Components/SmallHero";
import HeroImage from '../../Assets/newspaper.jpg';
import language from '../../localization';
import {AuthContext} from '../../authContext';
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../../Components/SidaBar";
import Title from "../../Components/Title";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
const ResearchPost = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');
  
  const [globalState, dispatch] = useStore(false);
  
  
  
  const navigate = useNavigate();
  const {type, id} = useParams();

  const allowTypes = ['saba_magazine', 'research_publications'];

  const [isLoading, setIsLoading] = useState(false);

  const {heros, researchpublications, magazines} = globalState;
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === type)?.imagePath || "")).href;

  const [mainPost, setMainPost] = useState({});
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    (async() => {

      if(id.length !== 24 || (allowTypes.findIndex(allow => allow === type) < 0))
        return navigate("/", {replace: true});

      try {
        if(type === 'saba_magazine')
        {
          if(magazines.length <= 0)
          {
            setIsLoading(true);
            const response = await fetch(serverPath('/magazine'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              if(data.length <= 0)
                return navigate('/', {replace: true})

              dispatch('setData', {type: "magazines", data: data})
              placingPosts(data);
            }
            setIsLoading(false);
          }
          if(magazines.length > 0)
            return placingPosts(magazines);
        }
        if(type === 'research_publications')
        {
          if(researchpublications.length <= 0)
          {
            setIsLoading(true);
            const response = await fetch(serverPath('/rp'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              if(data.length <= 0)
                return navigate('/', {replace: true})

              dispatch('setData', {type: "researchpublications", data: data})
              placingPosts(data);
            }
            setIsLoading(false);
          }
          if(researchpublications.length > 0)
            return placingPosts(researchpublications);
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
          <div className={styles.postContent}>
            <div className={styles.mainPost}>
              <div className={styles.postImage}>
                <img src={serverPath(mainPost.imagePath)} alt="post image"/>
              </div>
              <div className={styles.postTextContent}>
                <Title
                    className={styles.title}
                  >
                  <span className={styles.key}>Author: </span>
                  <span className={styles.titleName}>{mainPost[isRTL ? "pAuthor" : "author"]}</span>
                </Title>
                { mainPost?.page &&
                <Title 
                  className={styles.title}
                >
                  <span className={styles.key}>Page: </span>
                  <span className={styles.titleName}>{mainPost['page']}</span>
                </Title>
                }
                <Title 
                    className={styles.title}
                  >
                  <span className={styles.key}>Date: </span>
                  <span className={styles.titleName}>{new Date(mainPost.createdAt).toLocaleDateString()}</span>
                </Title>
              </div>
              <div className={styles.postTitle}>
                <p>
                {mainPost[isRTL ? "pTitle" : "title"]}
                </p>
              </div>
              <div className={styles.postDesc}>
              {mainPost[isRTL ? "pDescription" : "description"]}
              </div>
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
          <div>
            <p className={styles.latestTitle}>
              Latest Posts
            </p>
            <div className={styles.latestPost}>
            {(latestPosts.length > 0) &&
              latestPosts.map(latest => (
              <div className={styles.latestPostCard} key={latest._id} onClick={() => navigate(`/research/post/${type}/${latest._id}`)}>
                <div className={styles.latestPostImage}>
                  <img src={serverPath(latest.thumbnail)} alt="post image"/>
                </div>
                <div className={styles.latestPostTitle}>
                  <p>
                    {latest[isRTL ? "pTitle" : "title"]}
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



export default ResearchPost;