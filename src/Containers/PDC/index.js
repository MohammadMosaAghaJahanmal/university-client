import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/capacity.jpg';
import HeroImage2 from '../../Assets/agg2.jpg';
import HeroImage1 from '../../Assets/man.jpg';
import LIB from '../../Assets/lib1.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import {useNavigate} from 'react-router-dom';
import ImagesViewer from "../../Components/ImagesViewer";
import SideBar from "../../Components/SidaBar";
const PDC = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  const navigate = useNavigate();

  const postHandler = (type, id) =>
  {
    navigate(`/multipleimgs/${type}/${id}`);
  }

  return (
    <div className={styles.cb}>
      <SmallHero title={language.a_pdc} image={HeroImage} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={language.a_pdc}
            className={styles.title}
          />
          <div className={styles.sImg}>
            <img src={LIB} />
          </div>
          <div className={styles.bulletContainer}>
            <Text className={[styles.text, styles.bulletText].join(" ")}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
            </Text>
          </div>
          <Title 
            title={"No Title From Backend"}
            className={styles.title}
          />
          <div className={styles.cards}>
            <div className={styles.card} onClick={()=> postHandler("a_pdc", "id")}>
              <ImagesViewer 
                images={[HeroImage, HeroImage1, HeroImage2, HeroImage1]} 
                className={styles.img}
              />
              <div className={styles.textContent}>
                <Text className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <div className={styles.line}></div>
                <p>
                    {new Date().toLocaleDateString()}
                  </p>
              </div>
            </div>
            <div className={styles.card} onClick={()=> postHandler("a_pdc", "id")}>
              <ImagesViewer 
                images={[HeroImage, HeroImage1, HeroImage2, HeroImage1]} 
                className={styles.img}
              />
              <div className={styles.textContent}>
                <Text className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <div className={styles.line}></div>
                <p>
                    {new Date().toLocaleDateString()}
                  </p>
              </div>
            </div>
            <div className={styles.card} onClick={()=> postHandler("a_pdc", "id")}>
              <ImagesViewer 
                images={[HeroImage, HeroImage1, HeroImage2, HeroImage1]} 
                className={styles.img}
              />
              <div className={styles.textContent}>
                <Text className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <div className={styles.line}></div>
                <p>
                    {new Date().toLocaleDateString()}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 



export default PDC;