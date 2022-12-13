import React, { useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from './style.module.css';
import {
  FaPhoneAlt as Phone, 
  FaBookOpen as Book, 
  FaLaptop as Laptop, 
  FaRegKeyboard, 
  FaDatabase, 
  FaPen, 
  FaUserGraduate, 
  FaRegClipboard, 
  FaUniversity,
  FaTrophy,
  FaChartLine,
  FaChevronDown as ArrowDown,
} from 'react-icons/fa';
import {IoMailUnreadSharp as Mail} from 'react-icons/io5';
import AFG_FLAG from '../../Assets/af-flag.png';
import US_FLAG from '../../Assets/us-flag.png';
import LOGO from '../../Assets/logo.png';
import language from '../../utils/localization';
const Navbar = (props) =>
{

  const lang = language.getLanguage();
  const logo = useRef()
  useEffect(() =>
  {
    window.onscroll = (e) =>
    {
      if(window.scrollY > 18)   
      {
        logo.current.style.height = "100%"
        logo.current.style.top = "0"
        return
      }

      if(logo.current.hasAttribute("style"))
        logo.current.removeAttribute("style");
      
    } 
  }, [])

  return (
    <>
      <div className={styles.upperMenuContainer}>
        <div className={[styles.upperMenu].join(" ")} data-aos="fade-down" data-aos-delay={500}>
          <div className={styles.menuLeft}>
            <a href="tel:+93744488816" data-aos="fade-left" data-aos-delay={700} >
              <i>
                <Phone size={18} color="#0080d6" /> 
              </i>
              <span><address>+93744488816</address></span>
            </a>
            <a href="mailto:iamceayber@gmail.com" data-aos="fade-left" data-aos-delay={900} >
              <i>
                <Mail size={20} color="#0080d6" /> 
              </i>
              <span><address>iamceayber@gmail.com</address></span>
            </a>
          </div>
          <div className={styles.menuRight}>
            <button className={[styles.lang, (lang === "af" && styles.active)].join(" ")}>
              <img src={AFG_FLAG} className={styles.flags}/>
              <span>PS</span>
            </button>
            <button className={[styles.lang, (lang === "en" && styles.active)].join(" ")}>
              <img src={US_FLAG} className={styles.flags}/>
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
      <nav className={styles.nav} data-aos="fade-down">
        <div className={styles.navShaper}>
          <span>
            <Book size={30} color={"#009dff"} />
          </span>
          <span>
            <Laptop size={30} color={"#009dff"} />
          </span>
          <span>
            <FaRegKeyboard size={30} color={"#009dff"} />
          </span>
          <span>
            <FaDatabase size={30} color={"#009dff"} />
          </span>
          <span>
            <FaPen size={30} color={"#009dff"} />
          </span>
          <span>
            <FaUserGraduate size={30} color={"#009dff"} />
          </span>
          <span>
            <FaRegClipboard size={30} color={"#009dff"} />
          </span>
          <span>
            <FaUniversity size={30} color={"#009dff"} />
          </span>
          <span>
            <FaTrophy size={30} color={"#009dff"} />
          </span>
          <span>
            <FaChartLine size={30} color={"#009dff"} />
          </span>
        </div>
        <div className={[styles.navMenu, "w-controller"].join(" ")}>
          <div className={styles.logo} data-aos="fade-down-right" data-aos-delay={500}>
            <img src={LOGO} ref={logo}/>
          </div>
          <div className={styles.menuItems}>
            <div data-aos="fade-down-left" data-aos-delay={200}>
              <span className={styles.menuText}>About</span>
              <span className={styles.shaper}></span>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={400}>
              <span className={styles.menuText}>QEC</span>
              <span className={styles.shaper}></span>
              <span className={styles.menuHintIcon}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <div className={styles.dropDown}>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
              </div>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={600}>
              <span className={styles.menuText}>Programs</span>
              <span className={styles.shaper}></span>
              <span className={styles.menuHintIcon}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <div className={styles.dropDown}>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
              </div>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={800}>
              <span className={styles.menuText}>Admission</span>
              <span className={styles.shaper}></span>
              <span className={styles.menuHintIcon}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <div className={styles.dropDown}>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
              </div>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={1000}>
              <span className={styles.menuText}>R&D</span>
              <span className={styles.shaper}></span>
              <span className={styles.menuHintIcon}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <div className={styles.dropDown}>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
              </div>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={1200}>
              <span className={styles.menuText}>Events</span>
              <span className={styles.shaper}></span>
              <span className={styles.menuHintIcon}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <div className={styles.dropDown}>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
              </div>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={1400}>
              <span className={styles.menuText}>News</span>
              <span className={styles.shaper}></span>
              <span className={styles.menuHintIcon}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <div className={styles.dropDown}>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
              </div>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={1600}>
              <span className={styles.menuText}>Contact</span>
              <span className={styles.shaper}></span>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={1800}>
              <span className={styles.menuText}>OneOther</span>
              <span className={styles.shaper}></span>
              <span className={styles.menuHintIcon}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                <ArrowDown  size={20} color={"#25CCF7"}/>
              </span>
              <div className={styles.dropDown}>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
                <a href="#" className={styles.dropDownLink}><span>One</span></a>
                <a href="#" className={styles.dropDownLink}><span>Two</span></a>
                <a href="#" className={styles.dropDownLink}><span>Three</span></a>
              </div>
            </div>
            <div data-aos="fade-down-left" data-aos-delay={2000}>
              <span className={styles.menuText}>OtherTwo</span>
              <span className={styles.shaper}></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}



export default Navbar