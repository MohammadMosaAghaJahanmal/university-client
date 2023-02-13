import React, { useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from "../../Components/SmallHero";
import language from '../../localization';
import { useParams, useNavigate } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import SweetAlert from "../../Components/SweetAlert";
const Post = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');
  
  const [globalState, dispatch] = useStore(false);
  
  
  
  const navigate = useNavigate();
  const {type, id} = useParams();

  const allowTypes = ['aggrements', 'news'];

  const [isLoading, setIsLoading] = useState(false);

  const {heros, news, aggrements} = globalState;
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === type)?.imagePath || "")).href;

  const [mainPost, setMainPost] = useState({});
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    (async() => {

      if(id.length !== 24 || (allowTypes.findIndex(allow => allow === type) < 0))
        return navigate("/", {replace: true});

      try {
        if(type === 'aggrements')
        {
          if(aggrements.length <= 0)
          {
            setIsLoading(true);
            const response = await fetch(serverPath('/aggrement'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              if(data.length <= 0)
                return navigate('/', {replace: true})

              dispatch('setData', {type: "aggrements", data: data})
              placingPosts(data);
            }
            setIsLoading(false);
          }
          if(aggrements.length > 0)
            return placingPosts(aggrements);
        }

        if(type === 'news' && news.length <= 0)
          return navigate('/', {replace: true})

        if(type === 'news' && news.length > 0)
          return placingPosts(news);

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
      <SmallHero title={language[type]} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.postWrapper, "w-controller"].join(" ")}>
      {isLoading ? 
        <Loader message="Please Wait..." />
      :
      mainPost.title &&
      (
        <>
          <div className={styles.postTitle}>
            <p>
              {mainPost[isRTL ? "pTitle" : "title"]}
            </p>
          </div>
          <div className={styles.postDate}>
            {new Date(mainPost.createdAt).toLocaleDateString()}
          </div>
          <div className={styles.postContent}>
            <div className={styles.mainPost}>
              <div className={styles.postImage}>
                <img src={serverPath(mainPost.imagePath)} alt="post image"/>
              </div>
              <div className={styles.postDesc} dangerouslySetInnerHTML={{__html: mainPost[isRTL ? "pDescription" : "description"]}}></div>
            </div>
            <div className={styles.latestPost}>
            {latestPosts.length > 0 ?
              latestPosts.map(latest => (
              <div className={styles.latestPostCard} key={latest._id} onClick={() => navigate(`/posts/${type}/${latest._id}`)}>
                <div className={styles.latestPostImage}>
                  <img src={serverPath(latest.thumbnail)} alt="post image"/>
                </div>
                <div className={styles.latestPostTitle}>
                  <p>
                    {latest[isRTL ? "pTitle" : "title"]}
                  </p>
                </div>
              </div>
              ))
              :
              <p className="msg">{language.nothing_to_show}</p>
            }
            </div>
          </div>
        </>
        )
      }
      </div>
    </div>
  )
} 



export default Post;