import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import HeroImage from '../../Assets/contact1.jpg';
import Input from '../../Components/Input';
import Button from "../../Components/Button";
import { FaFacebookF, FaMapMarkedAlt, FaYoutube } from "react-icons/fa";
const Contact = (props) =>
{

  return (
    <div className={styles.contact}>
      <SmallHero title="Contact Us" image={HeroImage}/>
      <div className={[styles.contactWrapper, "w-controller"].join(" ")}>
        <div className={styles.contactFormWrapper}>
          <div className={styles.formTitle}>
            Let us know more about you !
          </div>
          <div className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <Input type="text" placeholder="Full Name" onChange={()=> {}}/>
            </div>
            <div className={styles.inputGroup}>
              <Input type="text" placeholder="Email" onChange={()=> {}}/>
            </div>
            <div className={styles.inputGroup}>
              <Input type="text" placeholder="Subject" onChange={()=> {}}/>
            </div>
            <div className={styles.inputGroup}>
              <Input type="text" placeholder="Phone" onChange={()=> {}}/>
            </div>
            <div className={[styles.inputGroup, styles.textarea].join(' ')}>
              <Input type="textarea" placeholder="Message" onChange={()=> {}}/>
            </div>
          </div>
          <div className={styles.contactButton}>
            <Button 
              label="Submit"
            />
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.formTitle}>
            Contact Information
          </div>
          <div className={[styles.contactAddress, styles.addresses].join(" ")}>
            <p>Address: </p>
            <p className={styles.addressValue}>
              Kandahar, Afghanistan Dand chawk District #4
            </p>
          </div>
          <div className={[styles.contactEmail, styles.addresses].join(" ")}>
            <p>Email: </p>
            <p className={styles.addressValue}>
              info@saba.edu.af
            </p>
          </div>
          <div className={[styles.contactPhone, styles.addresses].join(" ")}>
            <p>Phone: </p>
            <p className={styles.addressValue}>+93700001231</p>
            </div>
          <div className={[styles.contactOpen, styles.addresses].join(" ")}>
            We are open from Saturday to Thursday <br/> 05.00 AM - 08.00 PM </div>
          <div className={[styles.follow, styles.addresses].join(" ")}>
          <div className={styles.links} data-aos="fade-right" data-aos-delay={500}>
            <div className={styles.footerIcon}>
              <span className={styles.facebook}>
                <FaFacebookF size={16} />
              </span>
            </div>
            <div className={styles.footerIcon}>
              <span className={styles.youtube}>
                <FaYoutube size={16} />
              </span>
            </div>
            <div className={styles.footerIcon}>
              <span className={styles.map}>
                <FaMapMarkedAlt size={16} />
              </span>
            </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 



export default Contact;