import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import Hero from './Hero'
import News from "./News";
import Feature from "./Features";

const Home = (props) =>
{

  return (
    <div className={styles.home}>
      <Hero />
      <News />
      <Feature />
    </div>
  )
}



export default Home