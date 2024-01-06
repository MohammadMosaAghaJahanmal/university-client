import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import { useParams } from "react-router-dom";
import SweetAlert from "../../Components/SweetAlert";
import Loader from "../../Components/Loader";

const StratigicAim = (props) =>
{
  const {id} = useParams()
  const [globalState, dispatch] = useStore();

  const {heros, stratigicaims} = globalState;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "stratigicaims")?.imagePath || "")).href;

  useEffect(() => {
    (async() => {
      try {
        if(stratigicaims?.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/strategic_aim'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            setData(data.filter(perField => perField.type == id))
            dispatch('setData', {type: "stratigicaims", data: data})
          }
          setIsLoading(false);
        }else
        {
          setData(stratigicaims.filter(perField => perField.type == id))
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()
  }, [id])

  return (
    <div className={styles.container}>
      <SmallHero title={language.strategic_aims} image={myHero}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
      {
          isLoading ? 
          <Loader message="Loading Data..." />
          :
        <div className={styles.contentWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
            {data?.length > 0 ?
                data.map((stratigicaim, index) => (

                  <Text className={styles.text} key={index}>
                    <div className={styles.textData} dangerouslySetInnerHTML={{__html: stratigicaim[isRTL ? "pDescription" : "description"]}}></div>
                  </Text>
              ))
              :
              <p className="msg">{language.nothing_to_show}</p>
              }
            </div>
          </div>
        </div>
      }
      </div>
    </div>
  )
} 



export default StratigicAim;