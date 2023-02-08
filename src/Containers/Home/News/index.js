import React, {useEffect, useState} from "react";
import Title from "../../../Components/Title";
import styles from './style.module.css';
import { useNavigate } from "react-router-dom";
import useStore from "../../../store/store";
import serverPath from "../../../utils/serverPath";
import { months } from "../../../Constants";
import languages from "../../../localization";
const News = (props) =>
{
  const [globalState] = useStore();
  const {news} = globalState;
  const [latestNews, setLatestNews] = useState([]);

  const navigate = useNavigate();
  
  const newsCardHandler = (id) => navigate(`/posts/news/${id}`);
  const isRTL = (languages.getLanguage() === 'ps');
  useEffect(() => {
    
    const latestData = ([...news].reverse()).slice(0, 4);
    setLatestNews(latestData);
  }, [])

  return (
      <div className={styles.news}>
        <div className={[styles.newsWrapper, "w-controller"].join(' ')}>
          <Title title="Latest News" className={styles.title}  />
          <div className={styles.newsCards}>
            {latestNews.map(perNews => (
            <div data-aos="fade-up" data-aos-delay={300} key={perNews._id}>
              <div className={styles.newsCard} onClick={() => newsCardHandler(perNews._id)}>
                <div className={styles.newsImage}>
                  <img src={serverPath(perNews.thumbnail)}  alt="news image"/>
                  <div className={styles.date}>
                    <p>{months[(new Date(perNews.createdAt)).getMonth()]}</p>
                    <p>{(new Date(perNews.createdAt)).getDate()}</p>
                  </div>
                </div>
                <div className={styles.newsContent}>
                  <p className={styles.newsTitle}>{perNews[isRTL ? "pTitle" : "title"]}</p>
                  <p className={styles.newsDesc}>
                    {perNews[isRTL ? "pDescription" : "description"].slice(0,  250)}  
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
  )
}



export default News