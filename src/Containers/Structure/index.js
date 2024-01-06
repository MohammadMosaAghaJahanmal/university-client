import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import { useParams } from "react-router-dom";
import SweetAlert from "../../Components/SweetAlert";
import Loader from "../../Components/Loader";
const Structure = (props) =>
{
  const {id} = useParams();
  const [globalState, dispatch] = useStore();

  const {heros, structures} = globalState;

  const [structure, setStructure] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async() => {
      try {
        if(structures?.length <= 0)
        {
          setIsLoading(true);
          const response = await fetch(serverPath('/structure'));
          const objData = await response.json();
          if(objData.status === "success")
          {
            const data = objData.data;
            setStructure(data.find(per => per.type === id))
            dispatch('setData', {type: "structures", data: data})
          }
          setIsLoading(false);
        }else
        {
          setStructure(structures.find(per => per.type === id))
        }
      } catch (err) {
        setIsLoading(false);
        return SweetAlert('error', err.message);
      }
    })()
  }, [id])


  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "structure")?.imagePath || "")).href;
  return (
    <div className={styles.structure}>
      <SmallHero title={language.structure} image={myHero} isRTL={isRTL}/>
      <div className={[styles.osw, "w-controller"].join(" ")}>
        {
          isLoading ? 
          <Loader message="Loading Data..." />
          :
          structure?.title ?
        <>
          <div className={styles.contentWrapper}>
            <div className={styles.history}>
              <Title 
                title={structure[isRTL ? "pTitle": "title"]}
                className={[styles.chTitle, styles.title].join(" ")}
                />
              <Text className={styles.text}>
                <div className={styles.textData} dangerouslySetInnerHTML={{__html: structure[isRTL ? "pDescription": "description"]}}></div>
              </Text>
              <div className={styles.br}></div>
            </div>
          </div>
          <div className={styles.orgImage}>
            <img src={serverPath(structure?.imagePath)} alt={"Structure Image"}/>
          </div>
        </>
        :
        <p className="msg" style={{padding: "50px 0"}}>{language.nothing_to_show}</p>
        }
      </div>
    </div>
  )
} 



export default Structure;