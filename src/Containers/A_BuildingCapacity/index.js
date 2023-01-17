import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/capacity.jpg';
import HeroImage2 from '../../Assets/agg2.jpg';
import HeroImage1 from '../../Assets/man.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from '../../Components/Text';
import {useNavigate} from 'react-router-dom';
import ImagesViewer from "../../Components/ImagesViewer";
import SideBar from "../../Components/SidaBar";
const A_BuildingCapacity = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/aggrements/${id}`);
  }

  return (
    <div className={styles.cb}>
      <SmallHero title={language.a_capacity_building} image={HeroImage} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.cbw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={language.a_capacity_building}
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
                    {name: language.a_aims, link: "academic/a_aims"}, 
                    {name: language.a_self_assesment, link: "academic/a_self_assesment"},
                    {name: language.a_annual_program_monitoring, link: "academic/a_annual_program_monitoring"},
                    {name: language.a_councils_committees, link: "academic/a_councils_committees"},
                    {name: language.a_manual_policies, link: "academic/a_manual_policies"},
                    {name: language.a_capacity_building, link: "academic/a_capacity_building"},
                    {name: language.accreditation, link: "academic/accreditation"},
                  ]}
                />
          </div>
        </div>
      </div>
    </div>
  )
} 



export default A_BuildingCapacity;