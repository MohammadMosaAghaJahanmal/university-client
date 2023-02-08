import React from "react";
import Title from "../../../Components/Title";
import styles from './style.module.css';
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button";
import serverPath from "../../../utils/serverPath";
import useStore from "../../../store/store";
import language from '../../../localization';
const ChancellorMSG = (props) =>
{
  // data-aos="fade-up" data-aos-delay={300}
  const navigate = useNavigate();
  const chancellorNavigator = (id) => navigate(`/about/chancellor_message`);

    const [globalState] = useStore();
  
    const {chancellormessages} = globalState;
  
    const chanMsg = chancellormessages[0];
    const isRTL = (language.getLanguage() === 'ps');
  return (
      <div className={styles.cmsg}>
        {chanMsg?.message ?
        <div className={[styles.cmsgw, "w-controller"].join(' ')}>
          <div className={styles.contentW}>
            <div className={styles.textContent}>
              <Title title="Message From Chancellor" className={[styles.title].join(" ")} />
              <Title title={`- ${chanMsg[isRTL ? "pChancellorName": "chancellorName"]}`} style={isRTL ? {fontStyle: "unset", fontSize: "17px"} : {}} className={[styles.title, styles.name].join(" ")} />
              <Button 
                label="Read More"
                className={styles.button}
                onClick={chancellorNavigator}
              />
            </div>
            <div className={styles.ch}>
              <img src={serverPath(chanMsg?.imagePath)}  alt="Chancellor Image"/>
            </div>
          </div>
        </div>
          :
          <p className="msg">{language.nothing_to_show}</p>
        }
      </div>
  )
}



export default ChancellorMSG