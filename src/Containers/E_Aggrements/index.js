import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/polic.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import SideBar from "../../Components/SidaBar";

const E_Aggrements = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');
  return (
    <div className={styles.container}>
      <SmallHero title={language.a_aggrements} image={HeroImage} style={{color: "#0080d6", textShadow: "0 0 2px white"}}  bgAnimation={true}/>
      <div className={[styles.cw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div>
                <Title
                    title="Title From Backend And Multiple Images"
                    className={[styles.chTitle].join(" ")}
                    />
                <Text className={styles.text}>
                  <div className={styles.textData}>
                    <p>Saba University was established in 2011 to provide quality higher education that Respond to the needs of society and the labor market. Since then, we have produced More than 3200 graduates collectively from journalism, civil engineering, economics, Sharia, law, and political sciences.</p>
                    <p>Saba University was established in 2011 to provide quality higher education that Respond to the needs of society and the labor market. Since then, we have produced More than 3200 graduates collectively from journalism, civil engineering, economics, Sharia, law, and political sciences.</p>
                  </div>
                </Text>
                <div className={styles.imgs}>
                  <div>
                    <img src={HeroImage} alt={"AGGREMENTS"} />
                  </div>
                  <div>
                    <img src={HeroImage} alt={"AGGREMENTS"} />
                  </div>
                </div>
              </div>
            </div>
            <SideBar
              links={[
                {name: language.a_vission_mission, link: "/academic/e_vission_mission"},
                {name: language.a_curriculum, link: "/academic/e_curriculum"},
                {name: language.a_organizational_structure, link: "/academic/e_organizational_structure"},
                {name: language.a_aggrements, link: "/academic/e_aggrements"},
              ]}
              />
          </div>
        </div>
      </div>
    </div>
  )
} 



export default E_Aggrements;