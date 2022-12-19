import React, {useEffect, useState} from "react";
import Title from "../../../Components/Title";
import styles from './style.module.css';
import A from '../../../Assets/a.jpg'
const News = (props) =>
{

  return (
      <div className={styles.news}>
        <div className={[styles.newsWrapper, "w-controller"].join(' ')}>
          <Title text="NEWS" className={styles.title}  />
          <div className={styles.newsCards}>
            <div className={styles.newsCard}>
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
            <div className={styles.newsCard}>
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
            <div className={styles.newsCard}>
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
            <div className={styles.newsCard}>
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
  )
}



export default News