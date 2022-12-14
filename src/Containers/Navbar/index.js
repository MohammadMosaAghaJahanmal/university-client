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
import {menus} from '../../Constants'
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
  }, []);


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
              <img src={AFG_FLAG} className={styles.flags} alt="Afg Flag"/>
              <span>PS</span>
            </button>
            <button className={[styles.lang, (lang === "en" && styles.active)].join(" ")}>
              <img src={US_FLAG} className={styles.flags} alt="Usa Flag"/>
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
          <div className={styles.mobileShaperRight}></div>
          <div className={styles.mobileShaperLeft}></div>
        </div>
        <div className={[styles.navMenu, "w-controller"].join(" ")}>
          <div className={styles.logo} data-aos="fade-down-right" data-aos-delay={500}>
            <img src={LOGO} ref={logo} alt="Page logo"/>
          </div>
          <div className={styles.menuItems}>
            {menus.map((menu, index) => (menu.mainLink) ? 
            (
              <div data-aos="fade-down-left" data-aos-delay={(index + 1) * 200} key={(menu.name + index)}>
                <NavLink  className={({isActive}) => [styles.menuItem, isActive ? styles.active : null].join(" ")}  to={menu.mainLink || "#"}>
                  <span className={styles.menuText}>{menu.name}</span>
                  <span className={styles.shaper}></span>
                </NavLink>
              </div>

            ):(
              <div data-aos="fade-down-left" data-aos-delay={(index + 1) * 200} className={styles.menuItem} key={(menu.name + index)}>
                <span className={styles.menuText}>{menu.name}</span>
                <span className={styles.shaper}></span>
                <span className={styles.menuHintIcon}>
                  <ArrowDown  size={20} color={"#25CCF7"}/>
                </span>
                <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                  <ArrowDown  size={20} color={"#25CCF7"}/>
                </span>
                <div className={styles.dropDown}>
                  {menu.links?.map((link, ndx )=> (
                    <NavLink className={({isActive}) => [styles.dropDownLink, (isActive ? styles.active : null)].join(" ")} key={(link.name + ndx)} to={link.link}><span>{link.name}</span></NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.mobileMenu}>
              <input type={'checkbox'} style={{display: "none"}} className={styles.input} id="menuToggler" />
              <label htmlFor="menuToggler" className={styles.menuToggler}>
                <span className={[styles.togglerItem, styles.hide].join(" ")}></span>
                <span className={[styles.togglerItem, styles.cross, styles.cross1].join(" ")}></span>
                <span className={[styles.togglerItem, styles.hide].join(" ")}></span>
                <span className={styles.togglerItem}></span>
                <span className={[styles.togglerItem, styles.hide].join(" ")}></span>
                <span className={[styles.togglerItem, styles.center].join(' ')}></span>
                <span className={[[styles.togglerItem, styles.cross, styles.cross2].join(" ")].join(" ")}></span>
                <span className={styles.togglerItem}></span>
                <span className={[styles.togglerItem, styles.hide].join(" ")}></span>
              </label>
              <div className={styles.mobileDropDown}>
                <div className={styles.menuTitle}>
                    <p>MENU</p>
                </div>
                <div className={styles.mobileItem}>
                  <label className={styles.mobileLink}>
                    LABEL ONE
                    <span className={styles.mobileLinkShape} style={{animationDuration: "10s"}}></span>
                  </label>
                </div>
                <div className={styles.mobileItem}>
                  <label className={styles.mobileLink}>
                    LABEL ONE
                    <span className={styles.mobileLinkShape} style={{animationDuration: "20s"}}></span>
                  </label>
                </div>
                <div className={styles.mobileItem}>
                  <label className={styles.mobileLink}>
                    LABEL ONE
                    <span className={styles.mobileLinkShape} style={{animationDuration: "15s"}}></span>
                  </label>
                </div>
                <div className={styles.mobileLangs}>
                <button className={[styles.mobileLang, (lang === "af" && styles.mobileActive)].join(" ")}>
                  <img src={AFG_FLAG} className={styles.flags} alt="Afg Flag"/>
                  <span>PS</span>
                </button>
                <button className={[styles.mobileLang, (lang === "en" && styles.mobileActive)].join(" ")}>
                  <img src={US_FLAG} className={styles.flags} alt="Usa Flag"/>
                  <span>EN</span>
                </button>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </>
  )
}



export default Navbar