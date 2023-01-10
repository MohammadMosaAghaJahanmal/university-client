import React, { PureComponent, Suspense, lazy } from 'react';
import {Route, Routes} from 'react-router-dom';
import { AuthContext } from '../../authContext';
import Loader from '../../Components/Loader';
import styles from './style.css';

const Navbar = lazy(() => import('../Navbar'));
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
const Result = lazy(() => import('../Result'));
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
        {screen: '/kankor/admission', Component: OnlineAdmission},
        {screen: '/kankor/result', Component: Result},
      ]
    
  const direction = ((this.context.languageCode === "ps") && {style: {direction: "rtl"}})
    return (
      <div className={styles.mainContainer}>
        <Suspense fallback={<Loader />}>
            <Navbar />
        </Suspense>
        <main {...direction}>
          <Routes>
            {
              screens.map((per, index) => {
              return (
                <Route path={`${per.screen}`} key={index} element={<Suspense fallback={<Loader />}>
                    <per.Component />
              </Suspense>} />
              )})
            }
            <Route path="*"  element={ <Suspense fallback={<Loader />}>
                    <PageNotFound />
                </Suspense>} />
          </Routes>
        </main>
        <Suspense fallback={<Loader />}>
            <Footer {...direction}/>
        </Suspense>
      </div>

    )
  }
}


export default Layout;