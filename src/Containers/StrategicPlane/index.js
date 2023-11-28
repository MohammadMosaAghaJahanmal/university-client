import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import { useParams } from "react-router-dom";
import languages from "../../localization";
import SideBar from "../../Components/SidaBar";
const StrategicPlane = (props) =>
{
  const {id} = useParams();
  const [globalState, dispatch] = useStore();
  const [isLoading, setIsLoading] = useState(false);

  const {heros, strategicplanes} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const myHero = serverPath((heros?.find(hero => hero.type === "strategic_plane")?.imagePath) || "");

  useEffect(() => {
    (async() => {
      try {
        if(strategicplanes.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/strategic_plane'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            dispatch('setData', {type: "strategicplanes", data: data})
          }
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()


  }, [id])

  return (
    <div className={styles.strategicAim}>
      <SmallHero title={language.strategic_plane} image={myHero} isRTL={isRTL}/>
      <div className={[styles.saw, "w-controller"].join(" ")}>
        <div className={styles.wrapper}>
          {
          isLoading ? 
          <Loader message="Loading Data..." />
          :
          <div className={styles.contentWrapper}>
            <Title 
              text={language.strategic_plane}
            />
            {strategicplanes.length > 0 ?
            strategicplanes.map(perField => perField.type === id && (
              <div className={styles.stratigic} key={perField._id}>
                <div dangerouslySetInnerHTML={{__html: perField[isRTL ? "pDescription" : 'description']}} className={styles.ach}></div>
                <a href={serverPath(perField.filePath)} download={"strategicplanes.pdf"} target="_blank" className={styles.fileLink}>{languages.downloadPlanFile}</a>
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



export default StrategicPlane;