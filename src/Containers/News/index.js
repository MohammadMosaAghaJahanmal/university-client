import React, { useEffect, useState }  from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import { useNavigate } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Pagination from "../../Components/Pagination";
const News = (props) =>
{

  console.log(useNavigate)
  
  const [globalState] = useStore();

  const {heros, news} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "news")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 9,
  });


  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/news/${id}`);
  }

  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(news.length / pagination.show),
      value: 1
    }))
  }, []);

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
              {news.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(perNews => (
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
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default News;