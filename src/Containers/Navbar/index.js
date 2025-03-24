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
      order: 1,
      name: language.home, 
      mainLink: "/",
    },
    {
      order: 2,
      name: language.about, 
      mainLink: undefined, 
      links: [
        {name: language.news, link: "/news" },
        {name: language.our_vission_and_mission, link: "about/vission_mission"}, 
        {name: language.values, link: "about/values"},
        {name: language.years_plane, link: "about/strategic_plane"}, 
        {name: language.councils_and_committees, link: "about/councils_and_committees"}, 
        {name: language.academic_programs, link: "about/academic_programs"}, 
        {name: language.your_opinion, link: "/about/your_opinion"},
        {name: language.contact, link: "/contact" },
        // {name: language.chancellor_message, link: "about/chancellor_message"}, 
      ], 
    },
    {
      order: 3,
      name: language.academics, 
      mainLink: undefined, 
      links: [
        {name: language.faculties, isTitle: true, subLinks: [
          {name: language.a_bcs_computer_science, link: "/faculty/cs"},
          {name: language.a_bba_economics, link: "/faculty/eco"},
        ]},
        {name: language.a_pdc, isTitle: true, subLinks: [
          {name: language.board, link: "/pdc/a_pdc_b"},
          {name: language.training_about_pdc, link: "/academic/pdc/training_about_pdc"},
          {name: language.aggrements, link: "/pdc/aggrements"},
          // {name: language.guidelines, link: ""},
        ]}
      ],
    },
    {
      order: 4,
      name: language.research_quality, 
      mainLink: undefined, 
      links: [
        {name: language.research, isTitle: true, subLinks: [
          {name: language.activities_resources, link: "/research/activities_resources"},
          {name: language.research_trainings, link: "/research/research_trainings"},
          {name: language.research_papers_and_publication, link: "/research/research_papers_and_publication"},
          {name: language.aggrements, link: "/research/aggrements"},
        ]},
        {name: language.quality, isTitle: true, subLinks: [
          {name: language.quality_accreditation, link: "/quality/quality_accreditation"},
        ]}
      ],
    },
    {
      order: 5,
      name: language.student_services, 
      mainLink: undefined, 
      links: [
        {name: language.student, isTitle: true, subLinks: [
          {name: language.students_engagement, link: "/students/students_engagement"},
          {name: language.students_experience, link: "/students/students_experience"},
          {name: language.tours_of_student, link: "/students/tours_of_student"},
          {name: language.students_statistic, link: ""},
          {name: language.graduate, link: ""},
          {name: language.job_opportunity, link: "/job_opportunity"},
          {name: language.support_services, link: ""},
        ]},
        {name: language.library, isTitle: true, subLinks: [
          {name: language.online_library, link: "/library/online_library"},
          {name: language.offline_library, link: "/library/offline_library"},
          {name: language.achievements_progress, link: "/library/achievements_progress"},
        ]},
        {name: language.kankor, isTitle: true, subLinks: [
          {name: language.enrollment_guidance, link: "/kankor/enrollment_guidance"},
          // {name: language.guidance_general, link: ""},
        ]},
      ],
    },
    {
      order: 6,
      name: language.institutions, 
      mainLink: undefined, 
      links: [
        {name: language.saba_economical_board, link: "institutions/seb"}, 
        {name: language.saba_foundation, link: "/foundation"}, 
      ], 
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
        <div className={[styles.navMenu, "w-controller", language.textDirection].join(" ")}>
          <div className={styles.logo} data-aos="fade-down-right" data-aos-delay={500} onClick={() => navigate("/")}>
            <img src={LOGO} ref={logo} alt="Page logo"/>
          </div>
          <div className={[styles.menuItems].join(" ")} style={{direction: language.textDirection}}>
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
                  <ArrowDown  size={20} color={"rgba(9, 89, 139, 0.5)"}/>
                </span>
                {/* <span className={[styles.menuHintIcon, styles.menuHintIcon2].join(" ")}>
                  <ArrowDown  size={20} color={"rgba(9, 89, 139, 0.5)"}/>
                </span> */}
                <div className={styles.dropDown}>
                  <p className={[styles.dropDownTitle].join(" ")}>{menu.name}</p>
                  <div className={styles.flexingMenus}>
                  {menu.links?.map((link, ndx )=> (
                    link.isTitle ?
                    <div key={(link.name + ndx)} className={styles.nestedContainer}>
                      <label className={styles.nestedTitle} htmlFor={"menu"+ndx}>
                        {link.name}
                      </label>
                      <div className={styles.nestedLinks}>
                        {link.subLinks.map((subLink, indx) => (
                          <NavLink className={({isActive}) => [styles.dropDownLink, (isActive ? styles.active : null)].join(" ")} key={(subLink.name + indx)} to={subLink.link}>
                            {/* <span dangerouslySetInnerHTML={{__html: subLink.name?.replace("&", " and -<p style='height:10px'></p>").replace("او", " او-<p style='height:10px'></p>")}}></span> */}
                            <span dangerouslySetInnerHTML={{__html: subLink.name?.replace("&", " and -<p style='height:10px'></p>")}}></span>
                            </NavLink>
                        ))}
                      </div>
                    </div>
                    :
                    null
                  ))}
                  </div>
                  {menu.links?.map((link, ndx )=> (
                    !link.isTitle ?
                    <NavLink className={({isActive}) => [styles.dropDownLinkSingle, styles.dropDownLink, (isActive ? styles.active : null)].join(" ")} key={(link.name + ndx)} to={link.link}><span>{link.name}</span></NavLink>
                    :
                    null
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
                    </NavLink>
                  </div>

                ):(
                  <div className={styles.mobileItem} key={(menu.name + index)}>
                    <input type={"checkbox"} id={(menu.name + index)}  style={{display: "none"}} className={styles.chekcBox}/>
                    <label className={styles.mobileLink} htmlFor={(menu.name + index)}>
                      {menu.name}
                      <span className={[styles.icon].join(' ')}>
                        <ArrowDown size={26} />
                        <ArrowDown size={26} />
                      </span>
                    </label>
                    <div className={styles.mobileNestedMenu}>
                      <div className={styles.flexingMenus}>
                      {menu.links?.map((link, ndx )=> (
                        link.isTitle ?
                        <div key={(link.name + ndx)} className={styles.nestedContainer}>
                          <p className={styles.nestedTitle} htmlFor={"menu"+ndx}>
                            {link.name}
                          </p>
                          <div className={styles.nestedLinks}>
                            {link.subLinks.map((subLink, indx) => (
                              <NavLink className={({isActive}) => [styles.dropDownLink, (isActive ? styles.active : null)].join(" ")} key={(subLink.name + indx)} to={subLink.link}><span>{subLink.name}</span></NavLink>
                            ))}
                          </div>
                        </div>
                        :
                        null
                      ))}
                      </div>
                      {menu.links?.map((link, ndx )=> (
                        !link.isTitle ?
                        <NavLink className={({isActive}) => [styles.dropDownLinkSingle, styles.dropDownLink, (isActive ? styles.active : null)].join(" ")} key={(link.name + ndx)} to={link.link}><span>{link.name}</span></NavLink>
                        :
                        null
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