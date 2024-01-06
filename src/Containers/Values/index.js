import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import {FaPiedPiperHat as CheckBox} from 'react-icons/fa';
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import { useParams } from "react-router-dom";
import SideBar from "../../Components/SidaBar";
const Values = (props) =>
{
  const {id} = useParams();
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);
  
  const {heros, values} = globalState;
  const [valueData, setValueData] = useState([]);

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = serverPath((heros?.find(hero => hero.type === "value")?.imagePath) || "");

  useEffect(() => {
    (async() => {
      try {
        if(values?.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/value'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            setValueData(data.filter(perField => perField.type == id))
            dispatch('setData', {type: "values", data: data})
          }
          setIsLoading(false);
        }else
        {
          setValueData(values.filter(perField => perField.type == id))
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()
  }, [id])

  return (
    <div className={styles.strategicAim}>
      <SmallHero title={language.values} image={myHero} isRTL={isRTL}/>
      <div className={[styles.saw, "w-controller"].join(" ")}>
        <div className={styles.wrapper}>
          {
          isLoading ? 
          <Loader message="Loading Data..." />
          :
          <div className={styles.contentWrapper}>
            {valueData.length > 0 ?
            valueData.map(value => value.type === id && (
              <div className={styles.stratigic} key={value._id}>
                <Title 
                    title={value[isRTL ? "pTitle": "title"]}
                    className={[styles.chTitle, styles.title].join(" ")}
                    />
                <div dangerouslySetInnerHTML={{__html: value[isRTL ? "pValue" : 'value']}} className={styles.ach}></div>
              </div>
            ))
            :
            <p className="msg">{language.nothing_to_show}</p>
            }
          </div>
          }
        </div>
      </div>
    </div>
  )
} 



export default Values;