import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import Hero from './Hero'
import News from "./News";

const Home = (props) =>
{

  return (
    <div className={styles.home}>
      <Hero />
      <News />
    </div>
  )
}



export default Home