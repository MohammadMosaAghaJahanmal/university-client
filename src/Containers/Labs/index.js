import React, { useEffect, useState }  from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import { useNavigate, useParams } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Pagination from "../../Components/Pagination";
const Labs = (props) =>
{
  const {id} = useParams();

  const [globalState] = useStore();

  const {heros, labs} = globalState;
  const [filterLabs, setFilterLabs] = useState(labs.filter(per => per.type.toLowerCase() === id))
  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "labs")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 9,
  });

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/labs/${id}`);
  }

  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(filterLabs.length / pagination.show),
      value: 1
    }))
  }, []);

  return (
    <div className={styles.labs}>
      <SmallHero title={language.labs} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {filterLabs.length > 0 ?
          <>
            <Title 
              title={language.labs}
            />
            <div className={styles.cards}>
              {filterLabs.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(perLab => (
              <div className={styles.card} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler(perLab._id)} key={perLab._id}>
                <div className={styles.img}>
                  <img src={serverPath(perLab.thumbnail)} alt="Labs Image" />
                </div>
                <div className={styles.textContent}>
                  <Title className={styles.title}>
                    {perLab[isRTL ? "pTitle" : "title"]}
                  </Title>
                  <p>
                    {new Date(perLab.createdAt).toLocaleDateString()}
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



export default Labs;