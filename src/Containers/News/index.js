import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/news2.jpg';
import HeroImage2 from '../../Assets/agg2.jpg';
import HeroImage1 from '../../Assets/man.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";

const News = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.news}>
      <SmallHero title={language.news} image={HeroImage} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={language.news}
          />
          <div className={styles.cards}>
            <div className={styles.card} data-aos="fade-right" data-aos-delay={300}>
              <div className={styles.img}>
                <img src={HeroImage} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  className={styles.title}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Title>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={styles.card} data-aos="fade-right" data-aos-delay={300}>
              <div className={styles.img}>
                <img src={HeroImage2} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  className={styles.title}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Title>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={styles.card} data-aos="fade-right" data-aos-delay={300}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  className={styles.title}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Title>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={styles.card} data-aos="fade-right" data-aos-delay={300}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  className={styles.title}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Title>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={styles.card} data-aos="fade-right" data-aos-delay={300}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  className={styles.title}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Title>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={styles.card} data-aos="fade-right" data-aos-delay={300}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  className={styles.title}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Title>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={styles.card} data-aos="fade-right" data-aos-delay={300}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  className={styles.title}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Title>
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



export default News;