import React, {useContext, useEffect, useState} from "react";
import styles from './style.module.css';
import A from '../../Assets/news2.jpg';
import B from '../../Assets/news.jpg';
import C from '../../Assets/b.jpg';
import D from '../../Assets/a.jpg';
import SmallHero from "../../Components/SmallHero";
import HeroImage from '../../Assets/newspaper.jpg';
import language from '../../localization';
import {AuthContext} from '../../authContext';
import { useParams } from "react-router-dom";
import SideBar from "../../Components/SidaBar";
import Title from "../../Components/Title";
const ResearchPost = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  const {type, id} = useParams();

  

  return (
    <div className={styles.post} >
      <SmallHero title={language[type]} image={HeroImage} isRTL={isRTL} bgAnimation={false}/>
      <div className={[styles.postWrapper, "w-controller"].join(" ")}>
        <div className={styles.postContent}>
          <div className={styles.mainPost}>
            <div className={styles.postImage}>
              <img src={D} alt="image about post"/>
            </div>
            <div className={styles.postTextContent}>
              <Title
                  className={styles.title}
                >
                <span className={styles.key}>Author: </span>
                <span className={styles.titleName}>Ahmadullah</span>
              </Title>
              <Title 
                  className={styles.title}
                >
                <span className={styles.key}>Page: </span>
                <span className={styles.titleName}>#100</span>
              </Title>
              <Title 
                  className={styles.title}
                >
                <span className={styles.key}>Date: </span>
                <span className={styles.titleName}>12/1/2022</span>
              </Title>
            </div>
            <div className={styles.postTitle}>
              <p>
                High-Level Delegation from MoHE of Islamic Emirate of Afghanistan visits Saba University
              </p>
            </div>
            <div className={styles.postDesc}>
              On January 3, 2022, Saba University hosted a high-level delegation of the Ministry of Higher Education and the Association of Private Universities and Institutions of Higher Education (APUIHE). The delegation comprised of Honorable Sheikh Shakirullah Wahdat and respected Mawlawi Shah Mohammad, members of the Advisory Board of MoHE, Professor Ataullah Kamran, Head of Public Oversight over Private Institutes of Higher Education, and other members of APUIHE and MoHE. <br />
              The delegation held two separate open discussion sessions with the university students as well as the faculty and staff. They explained some of the changes that the new leadership at MoHE has considered for public and private higher education institutions and also responded to a wide range of questions and concerns from both students and faculty members at the university. <br />
              In his opening remarks, Saba University’s Chancellor, Dr. Ahmad Khalid Hatam reiterated the University’s commitment to continue supporting the country’s young generation through the provision of world-class higher education. He highlighted the importance of aligning higher education with the economic, social, and infrastructural needs of the country for better administration of different public and private sectors. <br />
              He said, “keeping these needs in mind, we have proposed several new graduate programs to MoHE’s previous administrators, which we hope will be seriously considered by the current MoHE leadership”. “We plan to organize a national conference on review and revisions needed in the existing regulations regarding higher education” Dr. Hatam added. <br />
              On the question of charging higher fees posed by a student, Dr. Hatam clarified that Saba University’s course fees reflect the higher quality of services offered as well as the international affiliations that benefit Saba University’s graduates overseas. “However, we offer a wide range of discount packages to ensure no student is left out of higher education merely for financial reasons. We have Afs. 77 million currently outstanding with our students, but no student is prevented from continuing their education here” he said.
              While talking to the students, Professor Kamran assured students of Islamic Emirate’s full support for their positive initiatives. He said, “we are working to bridge the gap between the public and private sector institutions as well as between the students and MoHE. We want Afghan degrees to be respected worldwide”. <br />
              The delegation late held a separate meeting with the university leadership, staff, and faculty members where they noted different suggestions from faculty members and responded to their questions and concerns. <br />
              Answering a faculty member’s question about the imbalance of opportunities available to lecturers in public institutions, Mr. Kamran acknowledged the fact and reiterated the need for unifying not only services offered by both sectors but also the benefits like scholarships, retirement, and academic rankings for professors etc. <br />
            </div>
          </div>
          <SideBar
                links={[
                  {name: language.capacity_building, link: "/research/capacity_building"},
                  {name: language.r_vission_mission, link: "/research/vission_mission"},
                  {name: language.manual_policies, link: "/research/manual_policies"},
                  {name: language.saba_magazine, link: "/research/saba_magazine"},
                  {name: language.research_publications, link: "/research/research_publications"}
                ]}
              />
        </div>
        <div>
          <p className={styles.latestTitle}>
            Latest Posts
          </p>
        <div className={styles.latestPost}>
            <div className={styles.latestPostCard}>
              <div className={styles.latestPostImage}>
                <img src={C} alt="image about post"/>
              </div>
              <div className={styles.latestPostTitle}>
                <p>
                  High-Level Delegation from MoHE of Islamic Emirate of Afghanistan visits Saba University
                </p>
              </div>
            </div>
            <div className={styles.latestPostCard}>
              <div className={styles.latestPostImage}>
                <img src={B} alt="image about post"/>
              </div>
              <div className={styles.latestPostTitle}>
                <p>
                  High-Level Delegation from MoHE of Islamic Emirate of Afghanistan visits Saba University
                </p>
              </div>
            </div>
            <div className={styles.latestPostCard}>
              <div className={styles.latestPostImage}>
                <img src={A} alt="image about post"/>
              </div>
              <div className={styles.latestPostTitle}>
                <p>
                  High-Level Delegation from MoHE of Islamic Emirate of Afghanistan visits Saba University
                </p>
              </div>
            </div>
            <div className={styles.latestPostCard}>
              <div className={styles.latestPostImage}>
                <img src={A} alt="image about post"/>
              </div>
              <div className={styles.latestPostTitle}>
                <p>
                  High-Level Delegation from MoHE of Islamic Emirate of Afghanistan visits Saba University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 



export default ResearchPost;