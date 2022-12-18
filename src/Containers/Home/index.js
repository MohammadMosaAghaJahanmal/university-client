import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import Hero from './Hero'

const Home = (props) =>
{

  return (
    <div className={styles.home}>
      <Hero />
    </div>
  )
}



export default Home