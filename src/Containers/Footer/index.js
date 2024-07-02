import React, { useContext } from 'react'
import styles from './style.module.css'
import { FaEnvelope, FaFacebookF, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt, FaYoutube} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import languages from '../../localization';
import AFG_FLAG from '../../Assets/af-flag.png';
import US_FLAG from '../../Assets/us-flag.png';
import {AuthContext} from '../../authContext';
import useStore from "../../store/store";
const Footer = (props) =>
{
  const [globalState] = useStore();
  const {setLanguage} = useContext(AuthContext);
  const contactinfo = globalState.contactinfos[0];
  const isRTL = (languages.getLanguage() === 'ps')

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
            <a href={contactinfo?.facebook} target={"_blank"}>
                <div className={styles.footerIcon}>
                  <span className={styles.facebook}>
                    <FaFacebookF size={16} />
                  </span>
                </div>
              </a>
              <a href={contactinfo?.youtube} target={"_blank"}>
                <div className={styles.footerIcon}>
                  <span className={styles.youtube}>
                    <FaYoutube size={16} />
                  </span>
                </div>
              </a>
              <a href={contactinfo?.googleMap} target={"_blank"}>
                <div className={styles.footerIcon}>
                  <span className={styles.map}>
                    <FaMapMarkedAlt size={16} />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className={[styles.moreInfo, styles.contact].join(" ")}>
            <p className={styles.title} data-aos="fade-right" data-aos-delay={600}>Contact</p>
            <div data-aos="fade-right" data-aos-delay={700}>
              <FaMapMarkerAlt size={16}/> 
              <span>
                {contactinfo?.address && contactinfo[isRTL ? "pAddress" : "address"]}
              </span>
            </div>
            <div data-aos="fade-right" data-aos-delay={800}>
              <FaEnvelope size={16}/> 
              <span>
                {contactinfo?.email}
              </span>
            </div>
            <div data-aos="fade-right" data-aos-delay={900}>
              <FaPhoneAlt size={16}/> 
              <span>
                {contactinfo?.phone}
              </span>
            </div>

          </div>
          <div className={styles.moreInfo}>
            <p className={styles.title} data-aos="fade-right" data-aos-delay={1100}>Links</p>
            <div data-aos="fade-right" data-aos-delay={1200}>
              <NavLink to={'/job_opportunity'} className={styles.link}>
                {languages.job_opportunity}
              </NavLink>
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <NavLink to={'/library/online_library'} className={styles.link}>
                {languages.online_library}
              </NavLink>
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <NavLink to={'/news'} className={styles.link}>
                {languages.news}
              </NavLink>
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <NavLink to={'/research/scientific_and_research_magazine'} className={styles.link}>
                {languages.saba_magazine}
              </NavLink>
            </div>
            <div data-aos="fade-right" data-aos-delay={1300}>
              <NavLink to={'/contact'} className={styles.link}>
                {languages.contact}
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>
          <span>
            Copyright © 2022 SIHE - by 
            <a href='https://jahanmal.com/' target={"_blank"} className={styles.developer}>
              Jahanmal Team
            </a>
          </span>
        </div>
        <div className={[styles.upperMenu].join(" ")}>
          <div className={styles.menuRight}>
            <button className={[styles.lang, (isRTL && styles.active)].join(" ")} onClick={()=>setLanguage("ps")}>
              <img src={AFG_FLAG} className={styles.flags} alt="Afg Flag"/>
              <span>PS</span>
            </button>
            <button className={[styles.lang, (!isRTL && styles.active)].join(" ")} onClick={()=>setLanguage("en")}>
              <img src={US_FLAG} className={styles.flags} alt="Usa Flag"/>
              <span>EN</span>
            </button>
          </div>
        </div>
      </footer>
  )
}


export default Footer;