import React, {useEffect, useState} from "react";
import Title from "../../../Components/Title";
import styles from './style.module.css';
import A from '../../../Assets/a.jpg'
import { useNavigate } from "react-router-dom";
const News = (props) =>
{

  const navigate = useNavigate();
  const newsCardHandler = (id) => navigate(`/news/${id}`);

  return (
      <div className={styles.news}>
        <div className={[styles.newsWrapper, "w-controller"].join(' ')}>
          <Title title="Latest News" className={styles.title}  />
          <div className={styles.newsCards}>
            <div data-aos="fade-up" data-aos-delay={300}>
              <div className={styles.newsCard} onClick={() => newsCardHandler("12345677891230123")}>
                <div className={styles.newsImage}>
                  <img src={A}  alt="news image"/>
                  <div className={styles.date}>
                    <p>MAR</p>
                    <p>20</p>
                  </div>
                </div>
                <div className={styles.newsContent}>
                  <p className={styles.newsTitle}>Lorem ipsum dolor sit amet.</p>
                  <p className={styles.newsDesc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti repudiandae odit enim repellat incidunt, natus dignissimos nemo aperiam voluptate reprehenderit!
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" data-aos-delay={600}>              
              <div className={styles.newsCard} onClick={() => newsCardHandler("12345677891230123")}>
                <div className={styles.newsImage}>
                  <img src={A}  alt="news image"/>
                  <div className={styles.date}>
                    <p>MAR</p>
                    <p>20</p>
                  </div>
                </div>
                <div className={styles.newsContent}>
                  <p className={styles.newsTitle}>Lorem ipsum dolor sit amet.</p>
                  <p className={styles.newsDesc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti repudiandae odit enim repellat incidunt, natus dignissimos nemo aperiam voluptate reprehenderit!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay={900}>
              <div className={styles.newsCard} onClick={() => newsCardHandler("12345677891230123")}>
                <div className={styles.newsImage}>
                  <img src={A}  alt="news image"/>
                  <div className={styles.date}>
                    <p>MAR</p>
                    <p>20</p>
                  </div>
                </div>
                <div className={styles.newsContent}>
                  <p className={styles.newsTitle}>Lorem ipsum dolor sit amet.</p>
                  <p className={styles.newsDesc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti repudiandae odit enim repellat incidunt, natus dignissimos nemo aperiam voluptate reprehenderit!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay={1200}>              
              <div className={styles.newsCard} onClick={() => newsCardHandler("12345677891230123")}>
                <div className={styles.newsImage}>
                  <img src={A}  alt="news image"/>
                  <div className={styles.date}>
                    <p>MAR</p>
                    <p>20</p>
                  </div>
                </div>
                <div className={styles.newsContent}>
                  <p className={styles.newsTitle}>Lorem ipsum dolor sit amet.</p>
                  <p className={styles.newsDesc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas rerum reprehenderit temporibus? Officiis maiores mollitia minus omnis excepturi deleniti repudiandae odit enim repellat incidunt, natus dignissimos nemo aperiam voluptate reprehenderit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}



export default News