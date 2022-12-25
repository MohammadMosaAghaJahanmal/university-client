import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/book2.jpg';
import Input from '../../Components/Input';
import Button from "../../Components/Button";
import language from '../../localization';
import FREQ from '../../Assets/freq.jpg';
import {IoCloudDownload as Download} from 'react-icons/io5';
const Library = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  console.log(isRTL)

  return (
    <div className={styles.library}>
      <SmallHero title={language.online_library} image={HeroImage} style={{backgroundPosition: "bottom", textShadow: "1px 1px 3px black"}} bgAnimation={true}/>
      <div className={[styles.libraryWrapper, "w-controller"].join(" ")}>
        <div className={styles.libraryTitle}>
          <p>You can search Book by it's name or id</p>
        </div>
        <div className={styles.libraryContent}>
          <div className={styles.libraryInputs}>
            <div className={styles.inputGroup}>
              <label >
                Search By
              </label>
              <Input type="text" placeholder="Search By" list="type" />
              <datalist id="type">
                <option value={"Book Name"} />
                <option value={"Book Id"} />
              </datalist>
            </div>
            <div className={styles.inputGroup}>
              <label>
                Search
              </label>
              <Input type="text" placeholder="Search Book" />
            </div>
            <div className={styles.inputGroupBtn}>
              <Button label="Search" />
            </div>
          </div>
          <div className={styles.booksList}>
            <div className={[styles.book, (isRTL && styles.rtlBook)].join(" ")}>
              <div className={styles.bookImage}>
                <img src={FREQ} alt="book image" />
              </div>
              <div className={styles.bookContent}>
                <div className={styles.bookId}>
                  <p>ID: </p>
                  <p>#109234</p>
                </div>
                <div className={styles.bookName}>
                  <p>Book Name: </p>
                  <p>Frequntly Ask Quetions</p>
                </div>
                <div className={styles.bookAuthor}>
                  <p>Author: </p>
                  <p>Mohammadullah Jahani</p>
                </div>
              </div>
              <div className={[styles.downloadLink, (isRTL && styles.rtlLink)].join(' ')}>
                <div className={styles.linkContent}>
                  <p><Download /></p>
                  <p>Download</p>
                </div>
              </div>
            </div>
            <div className={[styles.book, (isRTL && styles.rtlBook)].join(" ")}>
              <div className={styles.bookImage}>
                <img src={FREQ} alt="book image" />
              </div>
              <div className={styles.bookContent}>
                <div className={styles.bookId}>
                  <p>ID: </p>
                  <p>#109234</p>
                </div>
                <div className={styles.bookName}>
                  <p>Book Name: </p>
                  <p>Frequntly Ask Quetions</p>
                </div>
                <div className={styles.bookAuthor}>
                  <p>Author: </p>
                  <p>Mohammadullah Jahani</p>
                </div>
              </div>
              <div className={[styles.downloadLink, (isRTL && styles.rtlLink)].join(' ')}>
                <div className={styles.linkContent}>
                  <p><Download /></p>
                  <p>Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 



export default Library;