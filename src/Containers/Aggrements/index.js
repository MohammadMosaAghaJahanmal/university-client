import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/agg.jpg';
import HeroImage2 from '../../Assets/agg2.jpg';
import HeroImage1 from '../../Assets/man.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";

const Aggrements = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.aggrements}>
      <SmallHero title={language.aggrements} image={HeroImage} isRTL={isRTL} bgAnimation={false}/>
      <div className={[styles.agw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={language.aggrements}
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
          </div>
        </div>
      </div>
    </div>
  )
} 



export default Aggrements;