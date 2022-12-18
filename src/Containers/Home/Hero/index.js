import React, {useEffect, useState} from "react";
import styles from './style.module.css';

const Home = (props) =>
{

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.leftSider}>
            <p className={styles.headText} data-aos="fade-down-right" data-aos-delay={1000}>
              Higher Education with national
              <br />
              and regional standards
            </p>
            <p className={styles.desc} data-aos="fade-up-right" data-aos-delay={1000}>
              Saba University offers bachelor programs in
              <br />
              Computer Sciense Engineering, Business Administration
              <br />
              And Blah Blah 
            </p>
        </div>
      </div>
    </div>
  )
}



export default Home