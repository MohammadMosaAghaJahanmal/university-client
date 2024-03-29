import React, {useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import Input from '../../Components/Input';
import Button from "../../Components/Button";
import { FaFacebookF, FaMapMarkedAlt, FaYoutube } from "react-icons/fa";
import languages from "../../localization";
import SweetAlert from '../../Components/SweetAlert';
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
const Contact = (props) =>
{
  const [globalState] = useStore();
  const {heros, contactinfos} = globalState;
  const contactinfo = contactinfos[0];
  const isRTL = (languages.getLanguage() === 'ps')
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "contact")?.imagePath || "")).href;

  const initialState = {
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };
  const [contact, setContact] = useState({...initialState});

  const onChange = (type, value) =>
    setContact(prev => ({...prev, [type]: value}))

  const submitHandler = async () =>
  {
    for (const fieldKey in contact) {
      if (Object.hasOwnProperty.call(contact, fieldKey)) {
        const value = contact[fieldKey];
        if(value.length <= 0)
          return SweetAlert("info", fieldKey.toUpperCase() + " is not allowed to by empty!");
      }
    }
    try {
      
      const {status, message, data} = await (await fetch(serverPath('/contact_us'), {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify(contact)
      })).json()
      if(status === "failure")
        return SweetAlert('error', message);

      SweetAlert("success", "Successfully registered!");
      setContact({...initialState});
      console.log(data)
    } catch (error) {
      return SweetAlert('error', error.message);
    }
  }

  return (
    <div className={styles.contact}>
      <SmallHero title={languages.contact} image={myHero} isRTL={isRTL} bgAnimation={true}/>
      <div className={[styles.contactWrapper, "w-controller"].join(" ")}>
        <div className={styles.contactFormWrapper}>
          <div className={styles.formTitle} data-aos="fade-up-right" data-aos-delay={100}>
            Let us know more about you !
          </div>
          <div className={styles.contactForm}>
            <div className={styles.inputGroup} data-aos="fade-up-right" data-aos-delay={300}>
              <Input type="text" placeholder="Full Name" value={contact.fullName} onChange={(e)=> onChange('fullName', e.target.value)}/>
            </div>
            <div className={styles.inputGroup} data-aos="fade-up-right" data-aos-delay={500}>
              <Input type="text" placeholder="Email" value={contact.email} onChange={(e)=> onChange('email', e.target.value)}/>
            </div>
            <div className={styles.inputGroup} data-aos="fade-up-right" data-aos-delay={700}> 
              <Input type="text" placeholder="Subject" value={contact.subject} onChange={(e)=> onChange('subject', e.target.value)}/>
            </div>
            <div className={styles.inputGroup} data-aos="fade-up-right" data-aos-delay={900}>
              <Input type="text" placeholder="Phone" value={contact.phone} onChange={(e)=> onChange('phone', e.target.value)}/>
            </div>
            <div className={[styles.inputGroup, styles.textarea].join(' ')} data-aos="fade-up-right" data-aos-delay={1100}>
              <Input type="textarea" placeholder="Message" value={contact.message} onChange={(e)=> onChange('message', e.target.value)}/>
            </div>
          </div>
          <div className={styles.contactButton} data-aos="fade-up-right" data-aos-delay={1100}>
            <Button 
              label="Submit"
              onClick={submitHandler}
            />
          </div>
        </div>

        <div className={styles.contactInfo}>
          {contactinfo &&
          <>
            <div className={styles.formTitle} data-aos="fade-up" data-aos-delay={100}>
              Contact Information
            </div>
            <div className={[styles.contactAddress, styles.addresses].join(" ")} data-aos="fade-up" data-aos-delay={300}>
              <p>Address: </p>
              <p className={styles.addressValue}>
                {contactinfo[isRTL ? "pAddress" : "address"]}
              </p>
            </div>
            <div className={[styles.contactEmail, styles.addresses].join(" ")} data-aos="fade-up" data-aos-delay={500}>
              <p>Email: </p>
              <p className={styles.addressValue}>
                {contactinfo.email}
              </p>
            </div>
            <div className={[styles.contactPhone, styles.addresses].join(" ")} data-aos="fade-up" data-aos-delay={700}>
              <p>Phone: </p>
              <p className={styles.addressValue}>
                {contactinfo.phone}
              </p>
              </div>
            <div className={[styles.contactOpen, styles.addresses].join(" ")} data-aos="fade-up" data-aos-delay={900}>
              We are open from Saturday to Thursday <br/> 05.00 AM - 08.00 PM </div>
            <div className={[styles.follow, styles.addresses].join(" ")}>
            <div className={styles.links} data-aos="fade-up" data-aos-delay={900}>
              <a href={contactinfo.facebook} target={"_blank"}>
                <div className={styles.footerIcon}>
                  <span className={styles.facebook}>
                    <FaFacebookF size={16} />
                  </span>
                </div>
              </a>
              <a href={contactinfo.youtube} target={"_blank"}>
                <div className={styles.footerIcon}>
                  <span className={styles.youtube}>
                    <FaYoutube size={16} />
                  </span>
                </div>
              </a>
              <a href={contactinfo.googleMap} target={"_blank"}>
                <div className={styles.footerIcon}>
                  <span className={styles.map}>
                    <FaMapMarkedAlt size={16} />
                  </span>
                </div>
              </a>
            </div>
            </div>
          </>
          }
        </div>
        
      </div>
    </div>
  )
} 



export default Contact;