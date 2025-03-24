import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import {useNavigate, useParams} from 'react-router-dom';
import ImagesViewer from "../../Components/ImagesViewer";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import SweetAlert from "../../Components/SweetAlert";
import Loader from "../../Components/Loader";
import Pagination from "../../Components/Pagination";
const LibraryInfos  = (props) =>
{
  const {id} = useParams();
  const [globalState, dispatch] = useStore(false);
  const [isLoading, setIsLoading] = useState(false);

  const {heros, libraryinfos} = globalState;
  const [libraryInfo, setLibraryInfo] = useState(libraryinfos.filter(perField => perField.type.toLowerCase() === id));

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "libraryinfos")?.imagePath || "")).href;
  const [pagination, setPagination] = useState({
    min: 1,
    max: 1,
    value: 1,
    show: 8,
  });


  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/multipleimgs/libraryinfos/${id}`);
  }

  useEffect(() => {
    
    (async() => {
      try {
        if(libraryinfos.length <= 0)
        {
          setIsLoading(true);
            const response = await fetch(serverPath('/libraryinfo'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              setLibraryInfo(data.filter(perField => perField.type.toLowerCase() === id));
              dispatch('setData', {type: "libraryinfos", data: data})
            }

          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()
  }, [id]);

  useEffect(() => {
    setPagination(prev => ({
      ...prev,
      max: Math.ceil(libraryInfo.length / pagination.show),
      value: 1
    }))
  }, [libraryInfo, id]);

  return (
    <div className={styles.cb}>
      <SmallHero title={language.library} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {libraryInfo.length > 0 ? 
            <>
            <Title 
              title={language.library}
              className={styles.title}
            />
            <div className={styles.wrapper}>
              <div className={styles.cards}>
              {libraryInfo.slice((pagination.value * pagination.show) - pagination.show, (pagination.value * pagination.show)).map(perField => (
                  <div className={styles.card} key={perField._id} onClick={() => clickHandler(perField._id)}>
                    <ImagesViewer 
                      images={perField.images.map(building => (serverPath(building.imagePath)))} 
                      className={styles.img}
                    />
                    <div className={styles.textContent}>
                      <Text 
                          className={styles.text}
                          >
                        {perField[isRTL ? "pTitle": "title"]}
                      </Text>
                      <div className={styles.line}></div>
                      <p>
                          {new Date(perField.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                  </div>
                ))}
              </div>
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
          <p className="msg" style={{padding: "20px 0"}}>{language.nothing_to_show}</p>  
          }
        </div>
        }
      </div>
    </div>
  )
} 



export default LibraryInfos;