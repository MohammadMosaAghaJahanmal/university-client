import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import { useNavigate } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const News = (props) =>
{

  
  const [globalState] = useStore();

  const {heros, news} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "news")?.imagePath || "")).href;

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/news/${id}`);
  }

  return (
    <div className={styles.news}>
      <SmallHero title={language.news} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {news.length > 0 ?
          <>
            <Title 
              title={language.news}
            />
            <div className={styles.cards}>
              {news.map(perNews => (
              <div className={styles.card} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler(perNews._id)} key={perNews._id}>
                <div className={styles.img}>
                  <img src={serverPath(perNews.thumbnail)} alt="News Image" />
                </div>
                <div className={styles.textContent}>
                  <Title className={styles.title}>
                    {perNews[isRTL ? "pTitle" : "title"]}
                  </Title>
                  <p>
                    {new Date(perNews.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </>
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default News;