import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/mesg.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import Text from "../../Components/Text";
import {IoCheckmarkCircleOutline as CheckBox} from 'react-icons/io5'
const HistoryAchievements = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  return (
    <div className={styles.historyAchievements}>
      <SmallHero title={language.history_and_achievements} image={HeroImage} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.haw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <div className={styles.history}>
            <Title 
              title="History Of Saba University"
              className={[styles.chTitle, styles.title].join(" ")}
              />
            <Text className={styles.text}>
              <div className={styles.textData}>
                <p>Saba University was established in 2011 to provide quality higher education that Respond to the needs of society and the labor market. Since then, we have produced More than 3200 graduates collectively from journalism, civil engineering, economics, Sharia, law, and political sciences.</p>
                <p>The university currently enrolls approximately 3000 students where they not only acquire necessary knowledge but are trained with the required skills mandatory for professionals in the respective fields of study.</p>
                <p>Saba University welcomes prospective students for choosing this University for their brighter future. You will find the environment convenient, facilities and learning opportunities available, grooming and growing organizational culture, committed faculty and staff, relevant laws enforced, student satisfaction is valued and where you will connect with a diverse group of individuals who work as a team for ensuring the rights of students are protected, teaching quality is maintained, skills of students are improved and finally, the graduates are ready for getting relevant jobs in the market.</p>
                <p>Afghanistan is a war-torn country with a history of decades in war and conflicts. Although Afghans had suffered the most in almost all walks of their life including higher education, remarkable developments took place in the last 20 years. Currently, there are more than 135 private universities around the country. Coupled with 34 public universities, these institutions of higher learning are heading towards offering higher education services that meet national and regional needs of the labor market. The quality of services is improving at an exponential pace and the prospects for standardization are visible.</p>
                <p>Saba University will remain committed to ensuring quality, enforcement of relevant laws, capacity building of staff, professional training of students, providing state of the art facilities, and implementing the updated curriculum.</p>
              </div>
            </Text>
          <div className={styles.br}></div>
          </div>
          <div className={styles.achive}>
            <Title 
                title="Achievements"
                className={[styles.chTitle, styles.title].join(" ")}
                />
            <Text className={styles.text}>
              <div className={styles.textData}>
                <p>Saba University was established in 2011 to provide quality higher education that Respond to the needs of society and the labor market. Since then, we have produced More than 3200 graduates collectively from journalism, civil engineering, economics, Sharia, law, and political sciences.</p>
              </div>
            </Text>
            <div className={styles.ach}>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality</span>
              </div>
              <div className={[styles.item].join(" ")}>
                <i className={[styles.icon, (isRTL && styles.rtl)].join(" ")}><CheckBox /></i>
                <span className={styles.itemText}>Saba University will remain committed to ensuring quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 



export default HistoryAchievements;