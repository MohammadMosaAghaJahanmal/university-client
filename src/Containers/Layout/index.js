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
const Structure = lazy(() => import('../Structure'));
const Curriculum = lazy(() => import('../Curriculum'));
const Labs = lazy(() => import('../Labs'));
const Achievements = lazy(() => import('../Achievements'));
const LibraryInfos = lazy(() => import('../LibraryInfos'));
const SemesterFee = lazy(() => import('../SemesterFee'));
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
const Values = lazy(() => import('../Values'));
const StrategicPlane = lazy(() => import('../StrategicPlane'));
const CouncilsAndCommittees = lazy(() => import('../CouncilsAndCommittees'));
const AcademicPrograms = lazy(() => import('../AcademicPrograms'));
const YourOpinion = lazy(() => import('../YourOpinion'));
const ResearchSupport = lazy(() => import('../ResearchSupport'));
const ResearchTrainings = lazy(() => import('../ResearchTrainings'));
const ResearchPaper = lazy(() => import('../ResearchPaper'));
const ResearchGuide = lazy(() => import('../ResearchGuide'));
const PoliciesAndProcedures = lazy(() => import('../PoliciesAndProcedures'));
const ResearchPapersAndPublications = lazy(() => import('../ResearchPapersAndPublications'));
const ScientificAndResearchMagazine = lazy(() => import('../ScientificAndResearchMagazine'));
const PlanedResearche = lazy(() => import('../PlanedResearche'));
const UnderProcessResearche = lazy(() => import('../UnderProcessResearche'));
const CompletedResearche = lazy(() => import('../CompletedResearche'));
const PublishedResearche = lazy(() => import('../PublishedResearche'));
const OfflineEnrollmentRequirement = lazy(() => import('../OfflineEnrollmentRequirement'));
const KankorGuide = lazy(() => import('../KankorGuide'));
const KankorRegistrationDate = lazy(() => import('../KankorRegistrationDate'));
const Enrolled = lazy(() => import('../Enrolled'));
const General = lazy(() => import('../General'));
const Activity = lazy(() => import('../Activity'));
const StudyStatistic = lazy(() => import('../StudyStatistic'));
const Procedure = lazy(() => import('../Procedure'));
const ProgressivePlan = lazy(() => import('../ProgressivePlan'));
const OfflineLibrary = lazy(() => import('../OfflineLibrary'));
const StudentsEngagement = lazy(() => import('../StudentsEngagement'));
const StudentsExperience = lazy(() => import('../StudentsExperience'));
const ToursOfStudent = lazy(() => import('../ToursOfStudent'));
const Tajil = lazy(() => import('../Tajil'));
const Deprived = lazy(() => import('../Deprived'));
const Chance = lazy(() => import('../Chance'));
const ReEnrollment = lazy(() => import('../ReEnrollment'));
const Eresticate = lazy(() => import('../Eresticate'));
const Transformation = lazy(() => import('../Transformation'));
const Repeat = lazy(() => import('../Repeat'));
const Graduate = lazy(() => import('../Graduate'));
const EmployedStudent = lazy(() => import('../EmployedStudent'));
const GraduatedStudentsStatistic = lazy(() => import('../GraduatedStudentsStatistic'));
const CounselingCenter = lazy(() => import('../CounselingCenter'));

const CapacityBuildingPost = lazy(() => import('../CapacityBuildingPost'));


const PDC = lazy(() => import('../PDC'));
const AnnualProfessionalDevelopmentPlan = lazy(() => import('../AnnualProfessionalDevelopmentPlan'));
const SeminarsCoursesWorkshop = lazy(() => import('../SeminarsCoursesWorkshop'));
const Teacher = lazy(() => import('../Teacher'));
const AdministrativeStaff = lazy(() => import('../AdministrativeStaff'));
const PDCStudent = lazy(() => import('../PDCStudent'));
const PDC_VissionMission = lazy(() => import('../PDC_VissionMission'));
const PDC_Structure = lazy(() => import('../PDC_Structure'));
const PDC_Aims = lazy(() => import('../PDC_Aims'));
const Alumni = lazy(() => import('../Alumni'));
const AlumniPost = lazy(() => import('../AlumniPost'));

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
const PeriodicProgramReview = lazy(() => import('../PeriodicProgramReview'));
const Accr = lazy(() => import('../Accr'));
const A_ManualPolicies = lazy(() => import('../A_ManualPolicies'));
const A_BuildingCapacity = lazy(() => import('../A_BuildingCapacity'));
const Accreditation = lazy(() => import('../Accreditation'));

const SabaFoundation = lazy(() => import('../SabaFoundation'));
const Society = lazy(() => import('../Society'));
const Faculty = lazy(() => import('../Faculty'));
const SubFaculty = lazy(() => import('../SubFaculty'));
const Student = lazy(() => import('../Student'));


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
        {screen: '/library/online_library', Component: Library},
        {screen: '/library/study_statistic', Component: StudyStatistic},
        {screen: '/library/procedure', Component: Procedure},
        {screen: '/library/offline_library', Component: OfflineLibrary},
        {screen: '/library/progressive_plan', Component: ProgressivePlan},
        {screen: '/news', Component: News},
        {screen: '/job_opportunity', Component: JobOpportunity},
        {screen: '/economical_advisory', Component: EconomicalAdvisory},
        {screen: '/institutions/seb/activity', Component: Activity},
        {screen: '/about/chancellor_message', Component: ChancellorMessage},
        {screen: '/about/history_and_achievements', Component: HistoryAchievements},
        {screen: '/about/organizational_structure', Component: OrgStructure},
        {screen: '/faculty/:id', Component: Faculty},
        {screen: '/academic/:id/training_about_pdc', Component: Faculty},
        {screen: '/:id/activities_resources', Component: Faculty},
        {screen: '/quality/:id', Component: Faculty},
        {screen: '/library/:id', Component: Faculty},
        {screen: '/kankor/:id', Component: Faculty},
        {screen: '/institutions/:id', Component: Faculty},
        {screen: '/:id/who_we_are', Component: Faculty},
        {screen: '/faculty/:id/:subtype', Component: SubFaculty},
        {screen: '/student/:id', Component: Student},
        // {screen: '/about/stratigic_aim', Component: StrategicAim},
        // {screen: '/about/academic_calendar', Component: AcademicCalendar},
        // {screen: '/about/aggrements', Component: Aggrements},
        {screen: '/about/academic_programs', Component: AcademicPrograms},
        {screen: '/:id/vission_mission', Component: VissionMission},
        {screen: '/:id/values', Component: Values},
        {screen: '/:id/strategic_plane', Component: StrategicPlane},
        {screen: '/:id/strategic_aim', Component: StrategicAim},
        {screen: '/:id/councils_and_committees', Component: CouncilsAndCommittees},
        {screen: '/faculty/:faculty/:id/councils_and_committees', Component: CouncilsAndCommittees},
        {screen: '/:id/your_opinion', Component: YourOpinion},
        {screen: '/:id/stratigic_aim', Component: StrategicAim},
        {screen: '/:id/academic_calendar', Component: AcademicCalendar},
        {screen: '/:id/structure', Component: Structure},
        {screen: '/:id/curriculum', Component: Curriculum},
        {screen: '/:id/labs', Component: Labs},
        {screen: '/faculty/:faculty/:id/labs', Component: Labs},

        {screen: '/:id/achievements', Component: Achievements},
        {screen: '/:id/achievements_progress/achievements', Component: Achievements},
        {screen: '/faculty/:faculty/:id/achievements', Component: Achievements},
        {screen: '/:id/aggrements', Component: Aggrements},
        {screen: '/faculty/:faculty/:id/aggrements', Component: Aggrements},
        {screen: '/student/alumni_support_services/alumni/:id', Component: Alumni},
        {screen: '/student/alumni_support_services/job_opportunity', Component: JobOpportunity},
        {screen: '/students/alumni_support_services/:type/:id', Component: AlumniPost},
        {screen: '/students/:type/:id', Component: AlumniPost},
        {screen: '/:id/libraryinfos', Component: LibraryInfos},
        {screen: '/faculty/:faculty/:id/libraryinfos', Component: LibraryInfos},
        {screen: '/:id/semester_fee', Component: SemesterFee},
        {screen: '/:id/policies_and_procedure', Component: PoliciesAndProcedures},
        {screen: '/quality/quality_accreditation/:id/accreditation', Component: Accr},
        {screen: '/research/research_papers_and_publication', Component: ResearchPapersAndPublications},
        {screen: '/research/scientific_and_research_magazine', Component: ScientificAndResearchMagazine},
        {screen: '/research/research_paper', Component: ResearchPaper},
        {screen: '/research/research_guide', Component: ResearchGuide},
        {screen: '/research/research_support', Component: ResearchSupport},
        {screen: '/research/research_trainings', Component: ResearchTrainings},
        {screen: '/research/planed_researche', Component: PlanedResearche},
        {screen: '/research/under_process_researche', Component: UnderProcessResearche},
        {screen: '/research/completed_researche', Component: CompletedResearche},
        {screen: '/research/published_researche', Component: PublishedResearche},
        {screen: '/research/activities_resources/published_researche', Component: PublishedResearche},
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
        {screen: '/kankor/offline_enrollment_requirement', Component: OfflineEnrollmentRequirement},
        {screen: '/kankor/kankor_registration_date', Component: KankorRegistrationDate},
        {screen: '/kankor/kankor_guide', Component: KankorGuide},
        {screen: '/kankor/enrolled', Component: Enrolled},
        {screen: '/kankor/general', Component: General},
        {screen: '/kankor/admission', Component: OnlineAdmission},
        {screen: '/kankor/result', Component: Result},


        {screen: '/multipleimgs/:type/:id', Component: CapacityBuildingPost},

        {screen: '/assurance/self_assesment', Component: SelfAssesment},
        {screen: '/assurance/periodic_program_review', Component: PeriodicProgramReview},
        {screen: '/assurance/accreditation', Component: Accreditation},

        {screen: '/pdc/a_pdc_b', Component: PDC},
        {screen: '/pdc/annual_professional_development_plan', Component: AnnualProfessionalDevelopmentPlan},
        {screen: '/pdc/seminars_courses_workshop', Component: SeminarsCoursesWorkshop},
        {screen: '/academic/pdc/training_about_pdc/teacher', Component: Teacher},
        {screen: '/academic/pdc/training_about_pdc/administrative_staff', Component: AdministrativeStaff},
        {screen: '/academic/pdc/training_about_pdc/pdc_student', Component: PDCStudent},
        {screen: '/academic/pdc/training_about_pdc/society', Component: Society},
        // {screen: '/pdc/aims', Component: PDC_Aims},
        // {screen: '/pdc/structure', Component: PDC_Structure},

        {screen: '/students/students_engagement', Component: StudentsEngagement},
        {screen: '/students/students_experience', Component: StudentsExperience},
        {screen: '/students/tours_of_student', Component: ToursOfStudent},
        {screen: '/students/tajil', Component: Tajil},
        {screen: '/students/deprived', Component: Deprived},
        {screen: '/students/chance', Component: Chance},
        {screen: '/students/re_enrollment', Component: ReEnrollment},
        {screen: '/students/eresticate', Component: Eresticate},
        {screen: '/students/transformation', Component: Transformation},
        {screen: '/students/repeat', Component: Repeat},
        {screen: '/students/graduate', Component: Graduate},
        {screen: '/students/employed_student', Component: EmployedStudent},
        {screen: '/students/graduated_students_statistic', Component: GraduatedStudentsStatistic},
        {screen: '/students/counseling_center', Component: CounselingCenter},
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