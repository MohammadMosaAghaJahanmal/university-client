import React, { useEffect, useState }  from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import { useNavigate } from "react-router-dom";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Pagination from "../../Components/Pagination";
import Loader from "../../Components/Loader";
const PDCStudent = (props) =>
{

  const [globalState, dispatch] = useStore();

  const {heros, pdcstudents} = globalState;
  const [isLoading, setIsLoading] = useState(false);

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "pdc_student")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 9,
  });


  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/pdcstudents/${id}`);
  }

  useEffect(() => {
    (async() => {
      try {
        if(pdcstudents.length <= 0 && !isLoading)
        {
          setIsLoading(true);
          const response = await fetch(serverPath(`/pdc_student`));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            dispatch('setData', {type: 'pdcstudents', data: data});
          }
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    })()
  }, []);

  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(pdcstudents.length / pagination.show),
      value: 1
    }))
  }, [pdcstudents]);

  return (
    <div className={styles.news}>
      <SmallHero title={language.student} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {isLoading ? <Loader /> : pdcstudents.length > 0 ?
          <>
            <Title 
              title={language.student}
            />
            <div className={styles.cards}>
              {pdcstudents.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(perStudent => (
              <div className={styles.card} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler(perStudent._id)} key={perStudent._id}>
                <div className={styles.img}>
                  <img src={serverPath(perStudent.thumbnail)} alt="Student Image" />
                </div>
                <div className={styles.textContent}>
                  <Title className={styles.title}>
                    {perStudent[isRTL ? "pTitle" : "title"]}
                  </Title>
                  <p>
                    {new Date(perStudent.createdAt).toLocaleDateString()}
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



export default PDCStudent;