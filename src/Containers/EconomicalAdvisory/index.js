import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/advisory.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import { NavLink, useNavigate } from "react-router-dom";
import ImagesViewer from "../../Components/ImagesViewer";

const EconomicalAdvisory = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/research/post/saba_magazine/${id}`);
  }

  return (
    <div className={styles.container}>
      <SmallHero title={isRTL ? language.economical_advisory : "Saba Economical Advisory Board"} image={HeroImage} style={{color: "white", textShadow: "0 0 5px black"}} bgPosition={{backgroundPosition: "bottom"}} bgAnimation={false}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={"TITLE"}
            className={styles.mainTitle}
          />
          <div className={styles.wrapper}>
            <div className={styles.mainBoard}>
              <div className={styles.profileCards}>
                <div className={styles.profileCard}>
                  <div className={styles.pImg}>
                    <img 
                      src={HeroImage}
                      alt="Some Text"
                      />
                  </div>
                  <div className={styles.pName}>
                    M.Mosa Agha Jahanmal
                  </div>
                  <div className={styles.pJob}>
                    Teacher
                  </div>
                </div>
                <div className={styles.profileCard}>
                  <div className={styles.pImg}>
                    <img 
                      src={HeroImage}
                      alt="Some Text"
                      />
                  </div>
                  <div className={styles.pName}>
                    Ahmadullah Khan
                  </div>
                  <div className={styles.pJob}>
                    Teacher
                  </div>
                </div>
              </div>
              <Text className={styles.text}>
                <div className={styles.textData}>
                  <p>
                    Kardan University’s academic structure is headed by the Academic Council chaired by the Chancellor or Vice Chancellor for Academic Affairs in his absence. The Academic Council has the ultimate authority for overseeing the academic priorities in teaching, research, and learning.
                  </p>
                  <p>
                    The Academic Council oversees the University’s curriculum, quality assurance, program design and management, national and international accreditation standards, and development of academic strategy, policy, and performance. The Academic Council draws membership from the University’s leadership, Faculty Deans, Coordinators, Faculty Representatives, and Academic Administrators.
                  </p>
                </div>
              </Text>
            </div>
            <div className={styles.br}></div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <ImagesViewer 
                  images={[HeroImage]} 
                  className={styles.cardImg}
                />
                <div className={styles.textContent}>
                  <Text 
                      className={styles.cardText}
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
                  images={[HeroImage]} 
                  className={styles.cardImg}
                />
                <div className={styles.textContent}>
                  <Text 
                      className={styles.cardText}
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
                  images={[HeroImage]} 
                  className={styles.cardImg}
                />
                <div className={styles.textContent}>
                  <Text 
                      className={styles.cardText}
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
          </div>
        </div>
      </div>
    </div>
  )
} 



export default EconomicalAdvisory;