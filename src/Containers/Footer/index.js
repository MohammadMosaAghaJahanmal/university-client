import React from 'react'
import styles from './style.module.css'
import {FaCopyright, FaEnvelope, FaFacebookF, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt, FaYoutube} from 'react-icons/fa';
const Footer = () =>
{
  return (
      <footer className={styles.footer}>
        <div className={[styles.footerContent, 'w-controller'].join(" ")}>
          <div className={styles.aboutUni}>
            <p className={styles.title} data-aos="fade-right" data-aos-delay={300}>Saba Institute of Higher Education</p>
            <p data-aos="fade-right" data-aos-delay={400}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Libero, quam laboriosam magnam eligendi totam magni consequuntur 
              temporibus quibusdam natus incidunt maiores, at culpa nostrum? 
            </p>
            <div className={styles.links} data-aos="fade-right" data-aos-delay={500}>
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
            <p className={styles.title} data-aos="fade-right" data-aos-delay={600}>Contact</p>
            <div data-aos="fade-right" data-aos-delay={700}>
              <FaMapMarkerAlt size={16}/> 
              <span>
                Kandahar, Afghanistan Dand chawk District #4
                <br />
                Saba Institute of Higher Education
              </span>
            </div>
            <div data-aos="fade-right" data-aos-delay={800}>
              <FaEnvelope size={16}/> 
              <span>
                info@saba.edu.af
              </span>
            </div>
            <div data-aos="fade-right" data-aos-delay={900}>
              <FaPhoneAlt size={16}/> 
              <span>
                +93700001231
              </span>
            </div>
            <div data-aos="fade-right" data-aos-delay={1000}>
              <FaCopyright size={18}/> 
              <span>
                Copyright © 2022 SIHE
              </span>
            </div>
          </div>
          <div className={styles.moreInfo}>
            <p className={styles.title} data-aos="fade-right" data-aos-delay={1100}>Contact</p>
            <div data-aos="fade-right" data-aos-delay={1200}>
              Kandahar, Afghanistan Dand chawk District #4
              <br />
              Saba Institute of Higher Education
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              info@saba.edu.af
            </div>
            <div data-aos="fade-right" data-aos-delay={1400}>
              +93700001231
            </div>
          </div>
        </div>
      </footer>
  )
}


export default Footer;