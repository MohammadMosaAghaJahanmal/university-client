import React, { PureComponent, Suspense, lazy } from 'react';
import {Route, Routes} from 'react-router-dom';
import { AuthContext } from '../../authContext';
import Loader from '../../Components/Loader';


import styles from './style.css';

// Navbar
const Navbar = lazy(() => import('../Navbar'));

// Footer
const Footer = lazy(() => import('../Footer'));

const EconomicalAdvisory = lazy(() => import('../EconomicalAdvisory'));
const Home = lazy(() => import('../Home'));
const Post = lazy(() => import('../Post'));
const Contact = lazy(() => import('../Contact'));
const Library = lazy(() => import('../Library'));
const News = lazy(() => import('../News'));
const VissionMission = lazy(() => import('../VissionMission'));
const ChancellorMessage = lazy(() => import('../ChancellorMessage'));
const HistoryAchievements = lazy(() => import('../HistoryAchievements'));
const OrgStructure = lazy(() => import('../OrgStructure'));
const StrategicAim = lazy(() => import('../StrategicAim'));
const Aggrements = lazy(() => import('../Aggrements'));
const AcademicCalendar = lazy(() => import('../AcademicCalendar'));
const OnlineAdmission = lazy(() => import('../OnlineAdmission'));
const JobOpportunity = lazy(() => import('../JobOpportunity'));
const R_VissionMission = lazy(() => import('../R_VissionMission'));
const CapacityBuilding = lazy(() => import('../CapacityBuilding'));
const SabaMagazine = lazy(() => import('../SabaMagazine'));
const ResearchPublications = lazy(() => import('../ResearchPublications'));
const ResearchPost = lazy(() => import('../ResearchPost'));
const ManualPolicies = lazy(() => import('../ManualPolicies'));
const EligibilityCriteria = lazy(() => import('../EligibilityCriteria'));
const MigrationPolicy = lazy(() => import('../MigrationPolicy'));
const ScholarshipsFinancing = lazy(() => import('../ScholarshipsFinancing'));
const SemesterPromotionRules = lazy(() => import('../SemesterPromotionRules'));
const StudentsVerification = lazy(() => import('../StudentsVerification'));
const StudentsPortal = lazy(() => import('../StudentsPortal'));
const Penalties = lazy(() => import('../Penalties'));
const Result = lazy(() => import('../Result'));

const CapacityBuildingPost = lazy(() => import('../CapacityBuildingPost'));


const PDC = lazy(() => import('../PDC'));
const PDC_VissionMission = lazy(() => import('../PDC_VissionMission'));
const PDC_Structure = lazy(() => import('../PDC_Structure'));
const PDC_Aims = lazy(() => import('../PDC_Aims'));

// ComputerScience In Academics Menu
const C_Curriculum = lazy(() => import('../C_Curriculum'));
const C_OrgStructure = lazy(() => import('../C_OrgStructure'));
const C_Aggrements = lazy(() => import('../C_Aggrements'));
const C_VissionMission = lazy(() => import('../C_VissionMission'));

// Economics In Academics Menu 
const E_Curriculum = lazy(() => import('../E_Curriculum'));
const E_OrgStructure = lazy(() => import('../E_OrgStructure'));
const E_Aggrements = lazy(() => import('../E_Aggrements'));
const E_VissionMission = lazy(() => import('../E_VissionMission'));

// Quality Assurance In Academics Menu  
const Aims = lazy(() => import('../Aims'));
const AnnualPrograms = lazy(() => import('../AnnualPrograms'));
const CouncilCommittees = lazy(() => import('../CouncilCommittees'));
const SelfAssesment = lazy(() => import('../SelfAssesment'));
const A_ManualPolicies = lazy(() => import('../A_ManualPolicies'));
const A_BuildingCapacity = lazy(() => import('../A_BuildingCapacity'));
const Accreditation = lazy(() => import('../Accreditation'));

const SabaFoundation = lazy(() => import('../SabaFoundation'));


const PageNotFound = lazy(() => import('../404'));



class Layout extends PureComponent
{

  static contextType = AuthContext;
  render()
  {
    const screens = [
        {screen: '/', Component: Home},
        {screen: '/posts/:type/:id', Component: Post},
        {screen: '/contact', Component: Contact},
        {screen: '/library', Component: Library},
        {screen: '/news', Component: News},
        {screen: '/job_opportunity', Component: JobOpportunity},
        {screen: '/economical_advisory', Component: EconomicalAdvisory},
        {screen: '/about/vission_mission', Component: VissionMission},
        {screen: '/about/chancellor_message', Component: ChancellorMessage},
        {screen: '/about/history_and_achievements', Component: HistoryAchievements},
        {screen: '/about/organizational_structure', Component: OrgStructure},
        {screen: '/about/stratigic_aim', Component: StrategicAim},
        {screen: '/about/academic_calendar', Component: AcademicCalendar},
        {screen: '/about/aggrements', Component: Aggrements},
        {screen: '/research/capacity_building', Component: CapacityBuilding},
        {screen: '/research/vission_mission', Component: R_VissionMission},
        {screen: '/research/manual_policies', Component: ManualPolicies},
        {screen: '/research/saba_magazine', Component: SabaMagazine},
        {screen: '/research/research_publications', Component: ResearchPublications},
        {screen: '/research/post/:type/:id', Component: ResearchPost},
        {screen: '/students/eligibility_criteria', Component: EligibilityCriteria},
        {screen: '/students/migration_policy', Component: MigrationPolicy},
        {screen: '/students/scholarships_financing', Component: ScholarshipsFinancing},
        {screen: '/students/semester_promotion_rules', Component: SemesterPromotionRules},
        {screen: '/students/penalties', Component: Penalties},
        {screen: '/students/students_verification', Component: StudentsVerification},
        {screen: '/students/student_portal', Component: StudentsPortal},
        {screen: '/kankor/admission', Component: OnlineAdmission},
        {screen: '/kankor/result', Component: Result},


        {screen: '/multipleimgs/:type/:id', Component: CapacityBuildingPost},

        {screen: '/academic/a_aims', Component: Aims},
        {screen: '/academic/a_self_assesment', Component: SelfAssesment},
        {screen: '/academic/a_annual_program_monitoring', Component: AnnualPrograms},
        {screen: '/academic/a_councils_committees', Component: CouncilCommittees},
        {screen: '/academic/a_manual_policies', Component: A_ManualPolicies},
        {screen: '/academic/a_capacity_building', Component: A_BuildingCapacity},
        {screen: '/academic/accreditation', Component: Accreditation},

        {screen: '/pdc/a_pdc_b', Component: PDC},
        {screen: '/pdc/aims', Component: PDC_Aims},
        {screen: '/pdc/vission_mission', Component: PDC_VissionMission},
        {screen: '/pdc/structure', Component: PDC_Structure},

        {screen: '/academic/c_curriculum', Component: C_Curriculum},
        {screen: '/academic/c_organizational_structure', Component: C_OrgStructure},
        {screen: '/academic/c_aggrements', Component: C_Aggrements},
        {screen: '/academic/c_vission_mission', Component: C_VissionMission},

        {screen: '/academic/e_curriculum', Component: E_Curriculum},
        {screen: '/academic/e_organizational_structure', Component: E_OrgStructure},
        {screen: '/academic/e_aggrements', Component: E_Aggrements},
        {screen: '/academic/e_vission_mission', Component: E_VissionMission},

        {screen: '/foundation', Component: SabaFoundation},
      ]
    
  const direction = ((this.context.languageCode === "ps") && {style: {direction: "rtl"}})
    return (
      <div className={styles.mainContainer}>
        <Suspense fallback={<Loader message="Loading Navbar..."/>}>
            <Navbar />
        </Suspense>
        <main {...direction}>
          <Routes>
            {
              screens.map((per, index) => {
              return (
                <Route path={`${per.screen}`} key={index} element={<Suspense fallback={<Loader message="Loading Data..." />}>
                    <per.Component />
              </Suspense>} />
              )})
            }
            <Route path="*"  element={ <Suspense fallback={<Loader />}>
                    <PageNotFound />
                </Suspense>} />
          </Routes>
        </main>
        <Suspense fallback={<Loader message="Loading Footer..." />}>
            <Footer {...direction}/>
        </Suspense>
      </div>

    )
  }
}


export default Layout;