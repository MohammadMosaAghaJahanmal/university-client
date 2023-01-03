import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/job.jpg';
import language from '../../localization';
import Title from '../../Components/Title';
import {useNavigate} from 'react-router-dom';
import Text from "../../Components/Text";
const JobOpportunity = (props) =>
{

  const isRTL = (language.getLanguage() === 'ps');

  const navigate = useNavigate();

  const clickHandler = (id) =>
  {
    navigate(`/posts/jobOpportunity/${id}`);
  }

  return (
    <div className={styles.jobOpportunity}>
      <SmallHero title={language.job_opportunity} image={HeroImage} isRTL={isRTL} bgAnimation={false}/>
      <div className={[styles.agw, "w-controller"].join(" ")}>
        <div className={styles.contentWrapper}>
          <Title 
            title={language.job_opportunity}
          />
          <div className={styles.cards}>
            <div className={styles.card} data-aos="fade-right" data-aos-delay={300} onClick={()=>clickHandler("ID")}>
              <div className={styles.img}>
                <img src={HeroImage} alt="aggrement image" />
              </div>
              <div className={styles.textContent}>
                <Title 
                  className={styles.title}
                  title="Electronic Engineer"
                />
                <Text className={styles.text}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quod ducimus, beatae dolor id, non ratione quia velit quidem praesentium voluptatem corrupti magni impedit in harum, est nulla tempore quo.
                    Porro voluptates cumque veniam eveniet facilis. Vitae, accusantium, aliquam excepturi harum nemo neque amet hic numquam fuga aliquid veniam eligendi omnis minus dolore saepe corporis voluptate reprehenderit dicta, perferendis itaque!
                    Sunt nihil voluptate veniam quaerat accusamus quisquam dolorem nemo dignissimos? Sunt, quam? Maxime libero odio deserunt enim ea animi sapiente suscipit, modi et ipsa accusamus asperiores incidunt error sed temporibus!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quod ducimus, beatae dolor id, non ratione quia velit quidem praesentium voluptatem corrupti magni impedit in harum, est nulla tempore quo.
                    Porro voluptates cumque veniam eveniet facilis. Vitae, accusantium, aliquam excepturi harum nemo neque amet hic numquam fuga aliquid veniam eligendi omnis minus dolore saepe corporis voluptate reprehenderit dicta, perferendis itaque!
                    Sunt nihil voluptate veniam quaerat accusamus quisquam dolorem nemo dignissimos? Sunt, quam? Maxime libero odio deserunt enim ea animi sapiente suscipit, modi et ipsa accusamus asperiores incidunt error sed temporibus!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quod ducimus, beatae dolor id, non ratione quia velit quidem praesentium voluptatem corrupti magni impedit in harum, est nulla tempore quo.
                    Porro voluptates cumque veniam eveniet facilis. Vitae, accusantium, aliquam excepturi harum nemo neque amet hic numquam fuga aliquid veniam eligendi omnis minus dolore saepe corporis voluptate reprehenderit dicta, perferendis itaque!
                    Sunt nihil voluptate veniam quaerat accusamus quisquam dolorem nemo dignissimos? Sunt, quam? Maxime libero odio deserunt enim ea animi sapiente suscipit, modi et ipsa accusamus asperiores incidunt error sed temporibus!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quod ducimus, beatae dolor id, non ratione quia velit quidem praesentium voluptatem corrupti magni impedit in harum, est nulla tempore quo.
                    Porro voluptates cumque veniam eveniet facilis. Vitae, accusantium, aliquam excepturi harum nemo neque amet hic numquam fuga aliquid veniam eligendi omnis minus dolore saepe corporis voluptate reprehenderit dicta, perferendis itaque!
                    Sunt nihil voluptate veniam quaerat accusamus quisquam dolorem nemo dignissimos? Sunt, quam? Maxime libero odio deserunt enim ea animi sapiente suscipit, modi et ipsa accusamus asperiores incidunt error sed temporibus!
                  </p>
                </Text>
                <p className={styles.expire}>
                  Expiring On {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 



export default JobOpportunity;