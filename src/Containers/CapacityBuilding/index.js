import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/workshop.jpg';
import HeroImage2 from '../../Assets/agg2.jpg';
import HeroImage1 from '../../Assets/man.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import {useNavigate} from 'react-router-dom';
import ImagesViewer from "../../Components/ImagesViewer";
import SideBar from "../../Components/SidaBar";
const CapacityBuilding = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/aggrements/${id}`);
  }

  return (
    <div className={styles.cb}>
      <SmallHero title={language.capacity_building} image={HeroImage} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={language.capacity_building}
            className={styles.title}
          />
          <div className={styles.wrapper}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <ImagesViewer 
                  images={[HeroImage, HeroImage1, HeroImage2, HeroImage1]} 
                  className={styles.img}
                />
                <div className={styles.textContent}>
                  <Text 
                      className={styles.text}
                      >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                  </Text>
                  <div className={styles.line}></div>
                  <p>
                      {new Date().toLocaleDateString()}
                    </p>
                </div>
              </div>
              <div className={styles.card}>
                <ImagesViewer 
                  images={[HeroImage, HeroImage1, HeroImage2, HeroImage1]} 
                  className={styles.img}
                />
                <div className={styles.textContent}>
                  <Text 
                      className={styles.text}
                      >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                  </Text>
                  <div className={styles.line}></div>
                  <p>
                      {new Date().toLocaleDateString()}
                    </p>
                </div>
              </div>
              <div className={styles.card}>
                <ImagesViewer 
                  images={[HeroImage, HeroImage1, HeroImage2, HeroImage1]} 
                  className={styles.img}
                />
                <div className={styles.textContent}>
                  <Text 
                      className={styles.text}
                      >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                  </Text>
                  <div className={styles.line}></div>
                  <p>
                      {new Date().toLocaleDateString()}
                    </p>
                </div>
              </div>
            </div>
            <SideBar
                  links={[
                    {name: language.capacity_building, link: "/research/capacity_building"},
                    {name: language.r_vission_mission, link: "/research/vission_mission"},
                    {name: language.manual_policies, link: "/research/manual_policies"},
                    {name: language.saba_magazine, link: "/research/saba_magazine"},
                    {name: language.research_publications, link: "/research/research_publications"}
                  ]}
                />
          </div>
        </div>
      </div>
    </div>
  )
} 



export default CapacityBuilding;