import React, {useEffect, useState, useContext} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import languages from "../../localization";
import SideBar from "../../Components/SidaBar";
import SweetAlert from '../../Components/SweetAlert';
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from "../../Components/Loader";
import Text from "../../Components/Text";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useParams } from "react-router-dom";
const YourOpinion = (props) =>
{
  const {id} = useParams();
  const [globalState] = useStore();

  const {heros} = globalState;

  const isRTL = (languages.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "students_portal")?.imagePath || "")).href;

  const initFiledsState = {
    opinion: ""
  }

  const [loading, setIsLoading] = useState(false)
  const [fields, setFields] = useState({...initFiledsState})


  const onChange = (type, value) => setFields(prev => ({...prev, [type]: value}));

  const onSubmit = async (e) =>
  {
    e.preventDefault();
    if(fields.opinion.length < 30)
      return SweetAlert("warning", "Opinion Must Not Be Less Than 30 Characters")

    try {
      setIsLoading(true)
      const response = await fetch(serverPath('/opinion'), {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify({...fields, type: id})
      });

      const objData = await response.json();

      if(response.status === 'failure')
        SweetAlert("warning", objData.message);
      else
        SweetAlert("success", "Successfully Submitted!");
      
    } catch (error) {
     SweetAlert('warning', error.message) 
    }
    setFields({...initFiledsState});
    setIsLoading(false);
  }

  return (
    <div className={styles.oa}>
      <SmallHero title={languages.your_opinion} image={myHero} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        {
          loading &&
          <Loader message="Sending Your Opinion..."  />
        }
        <div className={styles.oaFormWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.formContent}>
              <form onSubmit={onSubmit}>
                <Input 
                  type="textarea" 
                  placeholder={languages.write_opinion} 
                  value={fields.opinion} 
                  onChange={({target}) => onChange('opinion', target.value)}
                  className={styles.opInput}
                  rows={10}
                  required={true}
                />
                <Button  label="Send" disabled={loading} />
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 



export default YourOpinion;