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
      order: 1,
      name: language.about, 
      mainLink: undefined, 
      links: [
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
      order: 2,
      name: language.academics_programs, 
      mainLink: undefined, 
      links: [
        {name: language.a_bcs_computer_science, isTitle: true, subLinks: [
          {name: language.our_vission_and_mission, link: "cs/vission_mission"},
          {name: language.strategic_aims, link: "cs/strategic_aim"},
          {name: language.strategic_plane, link: "cs/strategic_plane"},
          {name: language.values, link: "cs/values"},
          {name: language.academic_calendar, link: "cs/academic_calendar"},
          {name: language.structure, link: "cs/structure"},
          {name: language.informational_technology, isTitle: true, subLinks: [
            {name: language.our_vission_and_mission, link: "it/vission_mission"},
            {name: language.strategic_aims, link: "it/strategic_aim"},
            {name: language.strategic_plane, link: "it/strategic_plane"},
            {name: language.values, link: "it/values"},
            {name: language.curriculum, link: "it/curriculum"},
            {name: language.academic_calendar, link: "it/academic_calendar"},
            {name: language.structure, link: "it/structure"},
            {name: language.councils_and_committees, link: "it/councils_and_committees"}, 
            {name: language.labs, link: "it/labs"}, 
            {name: language.library, link: "it/libraryinfos"}, 
            {name: language.achievements, link: "it/achievements"}, 
            {name: language.aggrements, link: "it/aggrements"}, 
            {name: language.semester_fee, link: "it/semester_fee"},
          ]},
          {name: language.software_engineering, isTitle: true, subLinks: [
            {name: language.our_vission_and_mission, link: "se/vission_mission"},
            {name: language.strategic_aims, link: "se/strategic_aim"},
            {name: language.strategic_plane, link: "se/strategic_plane"},
            {name: language.values, link: "se/values"},
            {name: language.curriculum, link: "se/curriculum"},
            {name: language.academic_calendar, link: "se/academic_calendar"},
            {name: language.structure, link: "se/structure"},
            {name: language.councils_and_committees, link: "se/councils_and_committees"}, 
            {name: language.labs, link: "se/labs"}, 
            {name: language.library, link: "se/libraryinfos"}, 
            {name: language.achievements, link: "se/achievements"}, 
            {name: language.aggrements, link: "se/aggrements"}, 
            {name: language.semester_fee, link: "se/semester_fee"},
          ]},
          {name: language.information_system, isTitle: true, subLinks: [
            {name: language.our_vission_and_mission, link: "is/vission_mission"},
            {name: language.strategic_aims, link: "is/strategic_aim"},
            {name: language.strategic_plane, link: "is/strategic_plane"},
            {name: language.values, link: "is/values"},
            {name: language.curriculum, link: "is/curriculum"},
            {name: language.academic_calendar, link: "is/academic_calendar"},
            {name: language.structure, link: "is/structure"},
            {name: language.councils_and_committees, link: "is/councils_and_committees"}, 
            {name: language.labs, link: "is/labs"}, 
            {name: language.library, link: "is/libraryinfos"}, 
            {name: language.achievements, link: "is/achievements"}, 
            {name: language.aggrements, link: "is/aggrements"}, 
            {name: language.semester_fee, link: "is/semester_fee"},
          ]},
        ]},
        {name: language.a_bba_economics, isTitle: true, subLinks: [
          {name: language.our_vission_and_mission, link: "eco/vission_mission"},
          {name: language.strategic_aims, link: "eco/strategic_aim"},
          {name: language.strategic_plane, link: "eco/strategic_plane"},
          {name: language.values, link: "eco/values"},
          {name: language.academic_calendar, link: "eco/academic_calendar"},
          {name: language.structure, link: "eco/structure"},
          {name: language.national_economics, isTitle: true, subLinks: [
            {name: language.our_vission_and_mission, link: "neco/vission_mission"},
            {name: language.strategic_aims, link: "neco/strategic_aim"},
            {name: language.strategic_plane, link: "neco/strategic_plane"},
            {name: language.values, link: "neco/values"},
            {name: language.curriculum, link: "neco/curriculum"},
            {name: language.academic_calendar, link: "neco/academic_calendar"},
            {name: language.structure, link: "neco/structure"},
            {name: language.councils_and_committees, link: "neco/councils_and_committees"}, 
            {name: language.labs, link: "neco/labs"}, 
            {name: language.library, link: "neco/libraryinfos"}, 
            {name: language.achievements, link: "neco/achievements"}, 
            {name: language.aggrements, link: "neco/aggrements"}, 
            {name: language.semester_fee, link: "neco/semester_fee"},
          ]},
          {name: language.banking, isTitle: true, subLinks: [
            {name: language.our_vission_and_mission, link: "beco/vission_mission"},
            {name: language.strategic_aims, link: "beco/strategic_aim"},
            {name: language.strategic_plane, link: "beco/strategic_plane"},
            {name: language.values, link: "beco/values"},
            {name: language.curriculum, link: "beco/curriculum"},
            {name: language.academic_calendar, link: "beco/academic_calendar"},
            {name: language.structure, link: "beco/structure"},
            {name: language.councils_and_committees, link: "beco/councils_and_committees"}, 
            {name: language.labs, link: "beco/labs"}, 
            {name: language.library, link: "beco/libraryinfos"}, 
            {name: language.achievements, link: "beco/achievements"}, 
            {name: language.aggrements, link: "beco/aggrements"}, 
            {name: language.semester_fee, link: "beco/semester_fee"},
          ]},
          {name: language.business_administration , isTitle: true, subLinks: [
            {name: language.our_vission_and_mission, link: "baeco/vission_mission"},
            {name: language.strategic_aims, link: "baeco/strategic_aim"},
            {name: language.strategic_plane, link: "baeco/strategic_plane"},
            {name: language.values, link: "baeco/values"},
            {name: language.curriculum, link: "baeco/curriculum"},
            {name: language.academic_calendar, link: "baeco/academic_calendar"},
            {name: language.structure, link: "baeco/structure"},
            {name: language.councils_and_committees, link: "baeco/councils_and_committees"}, 
            {name: language.labs, link: "baeco/labs"}, 
            {name: language.library, link: "baeco/libraryinfos"}, 
            {name: language.achievements, link: "baeco/achievements"}, 
            {name: language.aggrements, link: "baeco/aggrements"}, 
            {name: language.semester_fee, link: "baeco/semester_fee"},
          ]},
        ]},
      ],
    },
    {
      order: 3,
      name: language.research, 
      mainLink: undefined, 
      links: [
        {name: language.strategic_aims, link: "/research/strategic_aim"},
        {name: language.strategic_plane, link: "/research/strategic_plane"},
        {name: language.research_activities, isTitle: true, subLinks: [
          {name: language.planed_researche, link: "research/planed_researche"},
          {name: language.under_process_researche, link: "research/under_process_researche"},
          {name: language.completed_researche, link: "research/completed_researche"},
          {name: language.published_researche, link: "research/published_researche"},
        ]},
        {name: language.research_support, link: "/research/research_support"},
        {name: language.research_trainings, link: "/research/research_trainings"},
        {name: language.policies_and_procedures, link: "/research/policies_and_procedure"},
        {name: language.research_papers_and_publications, link: "/research/research_papers_and_publication"},
        {name: language.scientific_and_research_magazine, link: "/research/scientific_and_research_magazine"},
        {name: language.research_guide, link: "/research/research_guide"},
        {name: language.research_paper, link: "/research/research_paper"},
        {name: language.aggrements, link: "/research/aggrements"},
        {name: language.your_opinion, link: "/research/your_opinion"},
        // {name: language.manual_policies, link: "/research/manual_policies"},
        // {name: language.saba_magazine, link: "/research/saba_magazine"},
        // {name: language.research_publications, link: "/research/research_publications"}
      ],
    },
    {
      order: 4,
      name: language.a_pdc, 
      links: [
        {name: language.our_vission_and_mission, link: "/pdc/vission_mission"},
        {name: language.structure, link: "/pdc/structure"},
        {name: language.strategic_aims, link: "/pdc/strategic_aim"},
        {name: language.values, link: "/pdc/values"},
        {name: language.a_pdc_b, link: "/pdc/a_pdc_b"},
        {name: language.annual_professional_development_plan, link: "/pdc/annual_professional_development_plan"},
        {name: language.seminars_courses_workshop, isTitle: true, subLinks: [
          {name: language.teacher, link: "/pdc/teacher"},
          {name: language.administrative_staff, link: "/pdc/administrative_staff"},
          {name: language.student, link: "/pdc/pdc_student"},
          {name: language.society, link: "/pdc/society"},
        ]},
        // {name: language.seminars_courses_workshop, link: "/pdc/seminars_courses_workshop"},
        {name: language.aggrements, link: "/pdc/aggrements"},
        {name: language.your_opinion, link: "/pdc/your_opinion"},

        // {name: language.a_aims, link: "/pdc/aims"},
      ],
    }, 
    {
      order: 5,
      name: language.a_quality_assurance, 
      mainLink: undefined, 
      links: [
        {name: language.a_self_assesment, link: "/assurance/self_assesment"},
        {name: language.periodic_program_review, link: "/assurance/periodic_program_review"},
        {name: language.accreditation, link: "/assurance/accreditation"},
        {name: language.internal_accreditation, link: "/internal/accreditation"},
        {name: language.national_accreditation, link: "/national/accreditation"},
        {name: language.international_accreditation, link: "/international/accreditation"},
        {name: language.your_opinion, link: "/assurance/your_opinion"},
        // {name: language.a_annual_program_monitoring, link: "academic/a_annual_program_monitoring"},
        // {name: language.a_councils_committees, link: "academic/a_councils_committees"},
        // {name: language.a_manual_policies, link: "acrademic/a_manual_policies"},
        // {name: language.a_capacity_building, link: "academic/a_capacity_building"},
      ]
    }, 
    {
      order: 6,
      name: language.kankor, 
      mainLink: undefined, 
      links: [
        {name: language.offline_enrollment_requirement, link: "/kankor/offline_enrollment_requirement"}, 
        {name: language.kankor_registration_date, link: "/kankor/kankor_registration_date"}, 
        {name: language.kankor_guide, link: "/kankor/kankor_guide"}, 
        {name: language.enrolled, link: "/kankor/enrolled"}, 
        {name: language.general, link: "/kankor/general"}, 
        // {name: language.online_admission, link: "/kankor/admission"}, 
        // {name: language.result, link: "/kankor/result"}
      ],
    },
    {
      order: 7,
      name: language.student, 
      mainLink: undefined, 
      links: [
        {name: language.students_engagement, link: "/students/students_engagement"}, 
        {name: language.students_experience, link: "/students/students_experience"}, 
        {name: language.tours_of_student, link: "/students/tours_of_student"}, 
        {name: language.students_statistic, isTitle: true, subLinks: [
          {name: language.tajil, link: "/students/tajil"},
          {name: language.deprived, link: "/students/deprived"},
          {name: language.chance, link: "/students/chance"},
          {name: language.re_enrollment, link: "/students/re_enrollment"},
          {name: language.eresticate, link: "/students/eresticate"},
          {name: language.transformation, link: "/students/transformation"},
          {name: language.repeat, link: "/students/repeat"},
        ]},
        {name: language.policies_and_procedures, link: "/students/policies_and_procedure"},
        {name: language.graduate, link: "/students/graduate"}, 
        {name: language.graduated_students_statistic, link: "/students/graduated_students_statistic"}, 
        {name: language.employed_student, link: "/students/employed_student"}, 
        {name: language.job_opportunity, link: "/job_opportunity"},
        {name: language.counseling_center, link: "/students/counseling_center"}, 
        {name: language.your_opinion, link: "/students/your_opinion"},
        // {name: language.eligibility_criteria, link: "/students/eligibility_criteria"}, 
        // {name: language.scholarships_financing, link: "/students/scholarships_financing"}, 
        // {name: language.migration_policy, link: "/students/migration_policy"}, 
        // {name: language.semester_promotion_rules, link: "/students/semester_promotion_rules"}, 
        // {name: language.students_verification, link: "/students/students_verification"}, 
        // {name: language.penalties, link: "/students/penalties"}, 
      ],
    },
    {
      order: 8,
      name: language.saba_economical_board, 
      mainLink: undefined,
      links: [
        {name: language.a_aims, link: "/seb/strategic_aim"},
        {name: language.structure, link: "/seb/structure"},
        {name: language.strategic_plane, link: "/seb/strategic_plane"},
        {name: language.activity, link: "/seb/activity"},
        {name: language.your_opinion, link: "/seb/your_opinion"},
      ],
    },
    {
      order: 9,
      name: language.saba_library, 
      mainLink: undefined,       
      links: [
        {name: language.online_library, link: "/library/online_library"},
        {name: language.offline_library, link: "/library/offline_library"},
        {name: language.procedure, link: "/library/procedure"},
        {name: language.study_statistic, link: "/library/study_statistic"},
        {name: language.progressive_plan, link: "/library/progressive_plan"},
        {name: language.achievements, link: "/library/achievements"},
        {name: language.your_opinion, link: "/library/your_opinion"},
      ],
    },
    {
      order: 10,
      name: language.news, 
      mainLink: '/news', 
    },
    {
      order: 11,
      name: language.saba_foundation, 
      mainLink: "foundation"
    }, 
  ]

  const {setLanguage} = useContext(AuthContext);
  const lang = language.getLanguage();
  const logo = useRef()
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
                    <p>{language.menu}</p>
                </div>
                {menus.sort((a, b) => (a.order - b.order)).map((menu, index) => (menu.mainLink) ? 
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
                    <input type={"checkbox"} id={(menu.name + (index + " "))}  style={{display: "none"}} className={styles.chekcBox}/>
                    <label className={styles.mobileLink} htmlFor={(menu.name + (index + " "))}>
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
                          <input type={"checkbox"} id={"mobilemenu"+ndx} name={'nestedMenu'} style={{display: "none"}}/>
                          <label className={[styles.nestedTitle, styles.mobileNestedTitle].join(" ")} htmlFor={"mobilemenu"+ndx}>
                            {link.name}
                            <span>
                              <ArrowDown size={20} color={"rgba(0, 157, 255, 0.5)"}/>
                            </span>
                          </label>
                          <div className={styles.mobileNestedLinks}>
                            {link.subLinks.map((subLink, indx) => !subLink.subLinks ? (
                              <NavLink className={({isActive}) => [styles.mobileNestedLink, (isActive ? styles.active : null)].join(" ")} key={(subLink.name + indx)} to={subLink.link}><span>{subLink.name}</span></NavLink>
                            ) :
                            <div className={styles.mobileItem} key={(subLink.name + index)}>
                              <input type={"checkbox"} id={(subLink.name + index)}  style={{display: "none"}} className={styles.chekcBox}/>
                              <label className={[styles.mobileLink, styles.fullNested].join(" ")} htmlFor={(subLink.name + index)}>
                                {subLink.name}
                                <span className={styles.mobileLinkShape} style={{animationDuration: ((index + 1) * 10) + "s"}}></span>
                                <span className={[styles.icon].join(' ')}>
                                  <ArrowDown size={20} color={"rgba(0, 157, 255, 0.5)"}/>
                                  <ArrowDown size={0} color={"rgba(0, 157, 255, 0.5)"}/>
                                </span>
                              </label>
                              <div className={styles.mobileNestedMenu}>
                              {subLink.subLinks?.map((link, ndx )=> (
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
                            )}
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