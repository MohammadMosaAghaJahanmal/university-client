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
const StrategicAim = (props) =>
{

  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, stratigicaims} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "stratigic_aim")?.imagePath || "")).href;

  useEffect(() => {
    
    (async() => {
      try {
          setIsLoading(true);
          if(stratigicaims.length <= 0)
          {
            const response = await fetch(serverPath('/stratigic_aim'));
            const objData = await response.json();
            if(objData.status === "success")
            {
              const data = objData.data;
              dispatch('setData', {type: "stratigicaims", data: data})
            }
          }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [])

  return (
    <div className={styles.strategicAim}>
      <SmallHero title={language.stratigic_aim} image={myHero} isRTL={isRTL}/>
      <div className={[styles.saw, "w-controller"].join(" ")}>
        {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
          {stratigicaims.length > 0 ?
          stratigicaims.map(straAim => (
            <div className={styles.stratigic}>
              <Title 
                  title={straAim[isRTL ? "pTitle": "title"]}
                  className={[styles.chTitle, styles.title].join(" ")}
                  />
              <div className={styles.ach}>
              {straAim?.aims?.map(aim => (
                <div className={[styles.item].join(" ")}>
                  <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                  <span className={styles.itemText}>{aim[isRTL ? "pAim": "aim"]}</span>
                </div>
              ))}
              </div>
            </div>
          ))
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
        }
      </div>
    </div>
  )
} 



export default StrategicAim;