import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import SweetAlert from "../../Components/SweetAlert";

const Repeat = (props) =>
{
  const [globalState, dispatch] = useStore();

  const {heros, repeats} = globalState;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async() => {
      try {

        if(repeats.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/repeat'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            dispatch('setData', {type: "repeats", data: data})
          }
          setIsLoading(false);
        }

      } catch (error) {
        setIsLoading(false);
        return SweetAlert('error', error.message);
      }
    })()
  }, [])
  
  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "repeat")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.repeat} image={myHero}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
      {
         isLoading ? 
         <Loader message="Loading Data..." />
         :
        <div className={styles.contentWrapper}>
        {repeats?.length > 0 ?
            repeats.map((per, index) => (
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Text className={styles.text}>
                <div className={styles.textData} dangerouslySetInnerHTML={{__html: per[isRTL ? "pDescription" : "description"]}}></div>
              </Text>
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



export default Repeat;