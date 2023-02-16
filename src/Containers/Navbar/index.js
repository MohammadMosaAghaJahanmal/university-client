import React, { useContext, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  FaRegEye,
  FaRegEyeSlash,
} from 'react-icons/fa';
import {IoMailUnreadSharp as Mail} from 'react-icons/io5';
import AFG_FLAG from '../../Assets/af-flag.png';
import US_FLAG from '../../Assets/us-flag.png';
import LOGO from '../../Assets/logo.png';
import language from '../../localization';
import {AuthContext} from '../../authContext';
import useStore from "../../store/store";

const Navbar = (props) =>
{

  const [globalState] = useStore();
  const {contactinfos} = globalState;
  const contactinfo = contactinfos[0]
  const navigate = useNavigate();
  const menus = [
    {
      name: language.economical_advisory, 
      mainLink: "/economical_advisory", 
    },
    {
      name: language.about, 
      mainLink: undefined, 
      links: [
        {name: language.our_vission_and_mission, link: "about/vission_mission"}, 
        {name: language.chancellor_message, link: "about/chancellor_message"}, 
        {name: language.history_and_achievements, link: "about/history_and_achievements"}, 
        {name: language.organizational_structure, link: "about/organizational_structure"},
        {name: language.stratigic_aim, link: "about/stratigic_aim"},
        {name: language.academic_calendar, link: "about/academic_calendar"},
        {name: language.aggrements, link: "about/aggrements"},
      ], 
    },
    {
      name: language.academics, 
      mainLink: undefined, 
      links: [
        {name: language.a_pdc, link: "academic/a_pdc"}, 
        {name: language.a_bcs_computer_science, isTitle: true, subLinks: [
          {name: language.a_vission_mission, link: "academic/c_vission_mission"},
          {name: language.a_curriculum, link: "academic/c_curriculum"},
          {name: language.a_organizational_structure, link: "academic/c_organizational_structure"},
          {name: language.a_aggrements, link: "academic/c_aggrements"},
        ]},
        {name: language.a_bba_economics, isTitle: true, subLinks: [
          {name: language.a_vission_mission, link: "academic/e_vission_mission"},
          {name: language.a_curriculum, link: "academic/e_curriculum"},
          {name: language.a_organizational_structure, link: "academic/e_organizational_structure"},
          {name: language.a_aggrements, link: "academic/e_aggrements"},
        ]},
        {name: language.a_quality_assurance, isTitle: true, subLinks: [
          {name: language.a_aims, link: "academic/a_aims"}, 
          {name: language.a_self_assesment, link: "academic/a_self_assesment"},
          {name: language.a_annual_program_monitoring, link: "academic/a_annual_program_monitoring"},
          {name: language.a_councils_committees, link: "academic/a_councils_committees"},
          {name: language.a_manual_policies, link: "academic/a_manual_policies"},
          {name: language.a_capacity_building, link: "academic/a_capacity_building"},
          {name: language.accreditation, link: "academic/accreditation"},
        ]}, 
      ],
    },
    {
      name: language.research, 
      mainLink: undefined, 
      links: [
        {name: language.capacity_building, link: "/research/capacity_building"},
        {name: language.r_vission_mission, link: "/research/vission_mission"},
        {name: language.manual_policies, link: "/research/manual_policies"},
        {name: language.saba_magazine, link: "/research/saba_magazine"},
        {name: language.research_publications, link: "/research/research_publications"}
      ],
    },
    {
      name: language.students, 
      mainLink: undefined, 
      links: [
        {name: language.student_portal, link: "/students/student_portal"}, 
        {name: language.eligibility_criteria, link: "/students/eligibility_criteria"}, 
        {name: language.scholarships_financing, link: "/students/scholarships_financing"}, 
        {name: language.migration_policy, link: "/students/migration_policy"}, 
        {name: language.semester_promotion_rules, link: "/students/semester_promotion_rules"}, 
        {name: language.students_verification, link: "/students/students_verification"}, 
        {name: language.penalties, link: "/students/penalties"}, 
      ],
    },
    {
      name: language.online_library, 
      mainLink: '/library', 
    },
    {
      name: language.news, 
      mainLink: '/news', 
    },
    {
      name: language.job_opportunity, 
      mainLink: '/job_opportunity', 
    },
    {
      name: language.contact, 
      mainLink: "/contact", 
    },
    {
      name: language.kankor, 
      mainLink: undefined, 
      links: [{name: language.online_admission, link: "/kankor/admission"}, {name: language.result, link: "/kankor/result"}],
    },
  ]

  const {setLanguage} = useContext(AuthContext);
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

  console.log(contactinfos)
  return (
    <>
      <div className={[styles.upperMenuContainer].join(" ")}>
        <div className={[styles.upperMenu].join(" ")} data-aos="fade-down" data-aos-delay={500}>
          <div className={styles.menuLeft}>
            <a href={`tel:${contactinfo?.phone}`} data-aos="fade-left" data-aos-delay={700} >
              <i>
                <Phone size={18} color="#0080d6" /> 
              </i>
              <span><address>{contactinfo?.phone}</address></span>
            </a>
            <a href={`mailto:${contactinfo?.email}`} data-aos="fade-left" data-aos-delay={900} >
              <i>
                <Mail size={20} color="#0080d6" /> 
              </i>
              <span><address>{contactinfo?.email}</address></span>
            </a>
          </div>
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
          <div className={styles.logo} data-aos="fade-down-right" data-aos-delay={500} onClick={() => navigate("/")}>
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
                  <ArrowDown  size={20} color={"rgba(0, 157, 255, 0.5)"}/>
                </span>
                <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                  <ArrowDown  size={20} color={"rgba(0, 157, 255, 0.5)"}/>
                </span>
                <div className={styles.dropDown}>
                  {menu.links?.map((link, ndx )=> (
                    link.isTitle ?
                    <div key={(link.name + ndx)} className={styles.nestedContainer}>
                      <input type={"radio"} id={"menu"+ndx} name={'nestedMenu'} style={{display: "none"}}/>
                      <label className={styles.nestedTitle} htmlFor={"menu"+ndx}>
                        {link.name}
                        <span>
                          <ArrowDown size={20} color={"rgba(0, 157, 255, 0.5)"}/>
                        </span>
                      </label>
                      <div className={styles.nestedLinks}>
                        {link.subLinks.map((subLink, indx) => (
                          <NavLink className={({isActive}) => [styles.dropDownLink, (isActive ? styles.active : null)].join(" ")} key={(subLink.name + indx)} to={subLink.link}><span>{subLink.name}</span></NavLink>
                        ))}
                      </div>
                    </div>
                    :
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
                {menus.map((menu, index) => (menu.mainLink) ? 
                (
                  <div className={styles.mobileItem} key={(menu.name + index)}>
                    <input type={"checkbox"} id="one"  style={{display: "none"}} className={styles.chekcBox}/>
                    <NavLink className={({isActive}) => [styles.mobileLink, (isActive ? styles.active : null)].join(' ')} htmlFor="one"  to={menu.mainLink || "#"}>
                      {menu.name}
                      <span className={styles.mobileLinkShape} style={{animationDuration: ((index + 1) * 10) + "s"}}></span>
                    </NavLink>
                  </div>

                ):(
                  <div className={styles.mobileItem} key={(menu.name + index)}>
                    <input type={"checkbox"} id={(menu.name + index)}  style={{display: "none"}} className={styles.chekcBox}/>
                    <label className={styles.mobileLink} htmlFor={(menu.name + index)}>
                      {menu.name}
                      <span className={styles.mobileLinkShape} style={{animationDuration: ((index + 1) * 10) + "s"}}></span>
                      <span className={[styles.icon].join(' ')}>
                        <FaRegEye size={26} />
                        <FaRegEyeSlash size={26} />
                      </span>
                    </label>
                    <div className={styles.mobileNestedMenu}>
                    {menu.links?.map((link, ndx )=> (
                        link.isTitle ?
                        <div key={(link.name + ndx)} className={styles.mobileNestedContainer}>
                          <input type={"radio"} id={"mobilemenu"+ndx} name={'nestedMenu'} style={{display: "none"}}/>
                          <label className={[styles.nestedTitle, styles.mobileNestedTitle].join(" ")} htmlFor={"mobilemenu"+ndx}>
                            {link.name}
                            <span>
                              <ArrowDown size={20} color={"rgba(0, 157, 255, 0.5)"}/>
                            </span>
                          </label>
                          <div className={styles.mobileNestedLinks}>
                            {link.subLinks.map((subLink, indx) => (
                              <NavLink className={({isActive}) => [styles.mobileNestedLink, (isActive ? styles.active : null)].join(" ")} key={(subLink.name + indx)} to={subLink.link}><span>{subLink.name}</span></NavLink>
                            ))}
                          </div>
                        </div>
                        :
                        <NavLink className={({isActive}) => [styles.mobileNestedLink, (isActive ? styles.active : null)].join(" ")} key={(link.name + ndx)} to={link.link}><span>{link.name}</span></NavLink>
                      ))}
                    </div>
                  </div>
                ))}

                <div className={styles.mobileLangs}>
                <button className={[styles.mobileLang, (lang === "ps" && styles.mobileActive)].join(" ")} onClick={()=>setLanguage("ps")}>
                  <img src={AFG_FLAG} className={styles.flags} alt="Afg Flag"/>
                  <span>PS</span>
                </button>
                <button className={[styles.mobileLang, (lang === "en" && styles.mobileActive)].join(" ")} onClick={()=>setLanguage("en")}>
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