import React from 'react'
import styles from './style.module.css'
import {FaCopyright, FaEnvelope, FaFacebookF, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt, FaYoutube} from 'react-icons/fa';
const Footer = () =>
{
  return (
      <footer className={styles.footer}>
        <div className={[styles.footerContent, 'w-controller'].join(" ")}>
          <div className={styles.aboutUni}>
            <p className={styles.title}>Saba Institute of Higher Education</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Libero, quam laboriosam magnam eligendi totam magni consequuntur 
              temporibus quibusdam natus incidunt maiores, at culpa nostrum? 
            </p>
            <div className={styles.links}>
              <div className={styles.footerIcon}>
                <span className={styles.facebook}>
                  <FaFacebookF size={16} />
                </span>
              </div>
              <div className={styles.footerIcon}>
                <span className={styles.youtube}>
                  <FaYoutube size={16} />
                </span>
              </div>
              <div className={styles.footerIcon}>
                <span className={styles.map}>
                  <FaMapMarkedAlt size={16} />
                </span>
              </div>
            </div>
          </div>
          <div className={[styles.moreInfo, styles.contact].join(" ")}>
            <p className={styles.title}>Contact</p>
            <div>
              <FaMapMarkerAlt size={16}/> 
              <span>
                Kandahar, Afghanistan Dand chawk District #4
                <br />
                Saba Institute of Higher Education
              </span>
            </div>
            <div>
              <FaEnvelope size={16}/> 
              <span>
                info@saba.edu.af
              </span>
            </div>
            <div>
              <FaPhoneAlt size={16}/> 
              <span>
                +93700001231
              </span>
            </div>
            <div>
              <FaCopyright size={20}/> Copyright © 2022 SIHE
            </div>
          </div>
          <div className={styles.moreInfo}>
            <p className={styles.title}>Contact</p>
            <div>
              Kandahar, Afghanistan Dand chawk District #4
              <br />
              Saba Institute of Higher Education
            </div>
            <div>
              info@saba.edu.af
            </div>
            <div>
              +93700001231
            </div>
          </div>
        </div>
      </footer>
  )
}


export default Footer;