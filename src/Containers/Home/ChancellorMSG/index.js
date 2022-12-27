import React, {useEffect, useState} from "react";
import Title from "../../../Components/Title";
import styles from './style.module.css';
import A from '../../../Assets/man.jpg';
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button";
const ChancellorMSG = (props) =>
{
  // data-aos="fade-up" data-aos-delay={300}
  const navigate = useNavigate();
  const chancellorNavigator = (id) => navigate(`/about/chancellor_message`);

  return (
      <div className={styles.cmsg}>
        <div className={[styles.cmsgw, "w-controller"].join(' ')}>
          <div className={styles.contentW}>
            <div className={styles.textContent}>
              <Title title="Message From Chancellor" className={[styles.title].join(" ")} />
              <Title title="- Ahmadullah Jan" className={[styles.title, styles.name].join(" ")} />
              <Button 
                label="Read More"
                className={styles.button}
                onClick={chancellorNavigator}
              />
            </div>
            <div className={styles.ch}>
              <img src={A} alt="chancellor photo" />
            </div>
          </div>
        </div>
      </div>
  )
}



export default ChancellorMSG