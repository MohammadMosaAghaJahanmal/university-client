import React, { useContext } from 'react'
import styles from './style.module.css'
import { FaEnvelope, FaFacebookF, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt, FaYoutube} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import languages from '../../localization';
import AFG_FLAG from '../../Assets/af-flag.png';
import US_FLAG from '../../Assets/us-flag.png';
import {AuthContext} from '../../authContext';
const Footer = (props) =>
{
  const {setLanguage} = useContext(AuthContext);
  const lang = languages.getLanguage();
  return (
      <footer className={styles.footer} {...props}>
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

          </div>
          <div className={styles.moreInfo}>
            <p className={styles.title} data-aos="fade-right" data-aos-delay={1100}>Links</p>
            <div data-aos="fade-right" data-aos-delay={1200}>
              <NavLink to={'/kankor/admission'} className={styles.link}>
                {languages.online_admission}
              </NavLink>
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <NavLink to={'/students/student_portal'} className={styles.link}>
                {languages.student_portal}
              </NavLink>
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <NavLink to={'/students/students_verification'} className={styles.link}>
                {languages.students_verification}
              </NavLink>
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <NavLink to={'/research/saba_magazine'} className={styles.link}>
                {languages.saba_magazine}
              </NavLink>
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <NavLink to={'/about/chancellor_message'} className={styles.link}>
                {languages.chancellor_message}
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>
          <span>
            Copyright © 2022 SIHE - by 
            <a href='https://jahanmal.com/' target={"_blank"} className={styles.developer}>
              Jahanmal Agha
            </a>
          </span>
        </div>
        <div className={[styles.upperMenu].join(" ")}>
          <div className={styles.menuRight}>
            <button className={[styles.lang, (lang === "ps" && styles.active)].join(" ")} onClick={()=>setLanguage("ps")}>
              <img src={AFG_FLAG} className={styles.flags} alt="Afg Flag"/>
              <span>PS</span>
            </button>
            <button className={[styles.lang, (lang === "en" && styles.active)].join(" ")} onClick={()=>setLanguage("en")}>
              <img src={US_FLAG} className={styles.flags} alt="Usa Flag"/>
              <span>EN</span>
            </button>
          </div>
        </div>
      </footer>
  )
}


export default Footer;