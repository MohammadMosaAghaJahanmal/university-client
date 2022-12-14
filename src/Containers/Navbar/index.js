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
  }, []);

  const menus = [
    {
      name: "About", 
      mainLink: "/about", 
      nested: false 
    },
    {
      name: "Qec", 
      mainLink: undefined, 
      links: [{name: "Some Text", link: "#"}, {name: "Some Two", link: "#"}, {name: "Some Text", link: "#"}, {name: "Some Text", link: "#"}],
      nested: false 
    },
    {
      name: "Programs", 
      mainLink: undefined, 
      links: [{name: "Some Text", link: "#"}, {name: "Some Two", link: "#"}, {name: "Some Text", link: "#"}, {name: "Some Text", link: "#"}],
      nested: false 
    },
    {
      name: "Admission", 
      mainLink: undefined, 
      links: [{name: "Some Text", link: "#"}, {name: "Some Two", link: "#"}, {name: "Some Text", link: "#"}, {name: "Some Text", link: "#"}],
      nested: false 
    },
    {
      name: "R&D", 
      mainLink: undefined, 
      links: [{name: "Some Text", link: "#"}, {name: "Some Two", link: "#"}, {name: "Some Text", link: "#"}, {name: "Some Text", link: "#"}],
      nested: false 
    },
    {
      name: "Events", 
      mainLink: undefined, 
      links: [{name: "Some Text", link: "#"}, {name: "Some Two", link: "#"}, {name: "Some Text", link: "#"}, {name: "Some Text", link: "#"}],
      nested: false 
    },
    {
      name: "News", 
      mainLink: undefined, 
      links: [{name: "Some Text", link: "/firstNews"}, {name: "Some Two", link: "#"}, {name: "Some Text", link: "#"}, {name: "Some Text", link: "#"}],
      nested: false 
    },
    {
      name: "Contact", 
      mainLink: "#", 
      nested: false 
    },
    {
      name: "OneOther", 
      mainLink: "#", 
      nested: false 
    },
    {
      name: "OtherToo", 
      mainLink: "#", 
      nested: false 
    },
  ]

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
        </div>
        <div className={[styles.navMenu, "w-controller"].join(" ")}>
          <div className={styles.logo} data-aos="fade-down-right" data-aos-delay={500}>
            <img src={LOGO} ref={logo} alt="Page logo"/>
          </div>
          <div className={styles.menuItems}>
          {menus.map((menu, index) => (menu.mainLink) ? 
          (
            <NavLink data-aos="fade-down-left" data-aos-delay={(index + 1) * 200} className={styles.menuItem} key={(menu.name + index)} to={menu.mainLink}>
              <span className={styles.menuText}>{menu.name}</span>
              <span className={styles.shaper}></span>
            </NavLink>
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
                  <NavLink className={styles.dropDownLink} key={(link.name + ndx)}><span>{link.name}</span></NavLink>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </nav>
    </>
  )
}



export default Navbar