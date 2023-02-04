import React from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const ScholarshipsFinancing = (props) =>
{
  const [globalState] = useStore();

  const {heros, scholarshipsfinancings : scos} = globalState;


  const isRTL = (language.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "scholarships_financing")?.imagePath || "")).href;

  return (
    <div className={styles.container}>
      <SmallHero title={language.scholarships_financing} image={myHero} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.haw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
        {scos?.length > 0 ?
          <div className={styles.wrapper}>
            <div className={styles.achive}>
            {scos.map(sco => (
              <div key={sco._id}>
                <Title 
                    title={sco[isRTL ? "pTitle" : "title"]}
                    className={[styles.chTitle].join(" ")}
                    />
                <Text className={styles.text}>
                  <div className={styles.textData}>
                    {sco[isRTL ? "pDescription" : "description"]}
                  </div>
                </Text>
              </div>
              ))}
            </div>
            <SideBar
              links={[
                {name: language.student_portal, link: "/students/student_portal"}, 
                {name: language.eligibility_criteria, link: "/students/eligibility_criteria"}, 
                {name: language.scholarships_financing, link: "/students/scholarships_financing"}, 
                {name: language.migration_policy, link: "/students/migration_policy"}, 
                {name: language.semester_promotion_rules, link: "/students/semester_promotion_rules"}, 
                {name: language.students_verification, link: "/students/students_verification"}, 
                {name: language.penalties, link: "/students/penalties"}, 
              ]}
              />
          </div>
          :
          <p className="msg">{language.nothing_to_show}</p>
          }
        </div>
      </div>
    </div>
  )
} 



export default ScholarshipsFinancing;