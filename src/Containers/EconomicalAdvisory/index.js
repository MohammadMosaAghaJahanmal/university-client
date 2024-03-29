import React, {memo, useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import { useNavigate } from "react-router-dom";
import ImagesViewer from "../../Components/ImagesViewer";
import Loader from '../../Components/Loader';
import useStore from '../../store/store';
import serverPath from '../../utils/serverPath';
import SweetAlert from '../../Components/SweetAlert';
import TextEditor from "../../Components/TextEditor";
import Pagination from "../../Components/Pagination";

const EconomicalAdvisory = (props) =>
{
  const [globaState, dispatch] = useStore();
  const isRTL = (language.getLanguage() === 'ps');
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 4,
  });

  
  const {boardinfos, boardmembers, boardposts, heros} = globaState;
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "economical_advisory")?.imagePath || "")).href;
  const navigate = useNavigate();
  const clickHandler = (id) =>
  {
    navigate(`/multipleimgs/economical_advisory/${id}`);
  }

  
  useEffect(() => {
    
    (async() => {
      try {
        if(boardinfos.length <= 0 || boardmembers.length <= 0 || boardposts.length <= 0)
        {
          setIsLoading(true);
          if(boardinfos.length <= 0)
          {
            const response = await fetch(serverPath('/boardinfo'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const infoData = objData.data;
              dispatch('setData', {type: "boardinfos", data: infoData})
            }
          }
          if(boardmembers.length <= 0)
          {
            const response = await fetch(serverPath('/board_member'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const infoData = objData.data;
              dispatch('setData', {type: "boardmembers", data: infoData})
            }
          }
          if(boardposts.length <= 0)
          {
            const response = await fetch(serverPath('/boardpost'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const infoData = objData.data;
              dispatch('setData', {type: "boardposts", data: infoData})
            }
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
      max: Math.ceil(boardposts.length / pagination.show),
      value: 1
    }))
  }, [boardposts]);

  return (
    <div className={styles.container}>
      <SmallHero title={isRTL ? language.economical_advisory : "Saba Economical Advisory Board"} image={myHero} style={{color: "white", textShadow: "0 0 5px black"}} bgPosition={{backgroundPosition: "bottom"}} bgAnimation={false}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
          <div className={styles.contentWrapper}>
          {
            boardinfos[0] && boardmembers.length > 0 ?
          <>
            <Title 
              title={boardinfos[0][isRTL ? "pTitle" : "title"]}
              className={styles.mainTitle}
            />
            <div className={styles.wrapper}>
              <div className={styles.mainBoard}>
                <div className={styles.profileCards}>
                  {boardmembers.map((member) => (
                    <div className={styles.profileCard} key={member._id}>
                      <div className={styles.pImg}>
                        <img 
                          src={serverPath(member.imagePath)}
                          alt="Member Image"
                          />
                      </div>
                      <div className={styles.pName}>
                        {member[isRTL ? "pName" : "name"]}
                      </div>
                      <div className={styles.pJob}>
                        {member[isRTL ? "pJob" : "job"]}
                      </div>
                    </div>
                  ))}
                </div>
                <Text className={styles.text}>
                  <div className={styles.textData} dangerouslySetInnerHTML={{__html: boardinfos[0][isRTL ? "pDescription" : "description"]}}></div>
                </Text>
              </div>
              <div className={styles.br}></div>
              <Title 
                title={language.posts}
                className={styles.mainTitle}
              />
              {
              boardposts.length > 0 ?
              <>
              <div className={styles.cards}>
                {boardposts.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(post => (
                  <div className={styles.card} onClick={() => clickHandler(post._id)} key={post._id}>
                    <ImagesViewer 
                      images={post.images.slice(0, 4).map(image => serverPath(image.imagePath))} 
                      className={styles.cardImg}
                    />
                    <div className={styles.textContent}>
                      <Text 
                          className={styles.cardText}
                          >
                            {post[isRTL ? "pTitle" : "title"]}
                      </Text>
                      <div className={styles.line}></div>
                      <p>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{width: 200, margin: "0 auto", marginTop: 30}}>
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
              </div>
              </>
              :
              <p className={"msg"}>{language.no_posts}</p>
              }
            </div>
          </>
          :
          <p className={"msg"}>{language.nothing_to_show}</p>
          }
        </div>
        }
      </div>
    </div>
  )
} 



export default memo(EconomicalAdvisory);