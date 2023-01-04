import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/magazine.jpg';
import HeroImage2 from '../../Assets/agg2.jpg';
import HeroImage1 from '../../Assets/man.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import { useNavigate } from "react-router-dom";

const ResearchPublications = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/news/${id}`);
  }

  return (
    <div className={styles.news}>
      <SmallHero title={language.research_publications} image={HeroImage} bgPosition={{backgroundPosition: "top"}} bgAnimation={true}/>
      <div className={[styles.nw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={language.research_publications}
            className={styles.mainTitle}
          />
          <div className={styles.cards}>
            <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler("id")}>
              <div className={styles.img}>
                <img src={HeroImage} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  title={"Khalid Ahmad"}
                  className={styles.title}
                />
                <Text 
                  className={styles.text}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={600} onClick={()=>clickHandler("id")}>
              <div className={styles.img}>
                <img src={HeroImage2} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  title={"Khalid Ahmad"}
                  className={styles.title}
                />
                <Text 
                  className={styles.text}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={900} onClick={()=>clickHandler("id")}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  title={"Khalid Ahmad"}
                  className={styles.title}
                />
                <Text 
                  className={styles.text}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler("id")}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  title={"Khalid Ahmad"}
                  className={styles.title}
                />
                <Text 
                  className={styles.text}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={600} onClick={()=>clickHandler("id")}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  title={"Khalid Ahmad"}
                  className={styles.title}
                />
                <Text 
                  className={styles.text}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={900} onClick={()=>clickHandler("id")}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  title={"Khalid Ahmad"}
                  className={styles.title}
                />
                <Text 
                  className={styles.text}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
                <p>
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={[styles.card, (isRTL && styles.rtl)].join(" ")} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler("id")}>
              <div className={styles.img}>
                <img src={HeroImage1} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  title={"Khalid Ahmad"}
                  className={styles.title}
                />
                <Text 
                  className={styles.text}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti
                </Text>
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



export default ResearchPublications;