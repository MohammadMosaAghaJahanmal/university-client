import React, { useState }  from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import languages from "../../localization";
import MaterialInput from "../../Components/MaterialInput";
import { pProvinces, provinces } from '../../Constants'
import SweetAlert from '../../Components/SweetAlert';
import serverPath from "../../utils/serverPath";
import createValidForm from '../../utils/createValidForm';
import useStore from "../../store/store";
const OnlineAdmission = (props) =>
{
  const [globalState] = useStore();

  const {heros} = globalState;

  const isRTL = (languages.getLanguage() === 'ps');
  const myHero = new URL(serverPath(heros?.find(hero => hero.type === "admission")?.imagePath || "")).href;
  const currentYear = (new Date().getFullYear() - 621);

  let prevYears = (currentYear - 30);

  let years = [];

  for (;prevYears <= currentYear; prevYears++) {
    years.unshift(prevYears)
  };

  const initialState = {
    fullName: {value: "", required: true},
    pFullName: {value: "", required: true},
    fatherName: {value: "", required: true},
    pFatherName: {value: "", required: true},
    province: {value: "Kandahar", required: true},
    pProvince: {value: "کندهار", required: true},
    phone: {value: "", required: true},
    graduationYear: {value: years[0], required: true},
    highSchool: {value: "", required: true},
    pHighSchool: {value: "", required: true},
    email: {value: "", required: false},
    admissionType: {value: "online", required: false},
  };
  
  const [admission, setAdmission] = useState({...initialState});

  const onChange = (type, value) =>
  {
    setAdmission(prev => ({...prev, [type]: {...prev[type], value}}))
  }

  const submitHandler = async () =>
  {
    let formData = {};
    for (const fieldKey in admission) {
      if (Object.hasOwnProperty.call(admission, fieldKey)) {
        const value = admission[fieldKey];
        if(value.value.length <= 0 && value.required)
          return SweetAlert("error", fieldKey.toUpperCase() + " is not allowed to by empty!");
          formData[fieldKey] = value.value;
      }
    }
    const validForm = createValidForm(formData);
    try {
      
      const {status, message, data} = await (await fetch(serverPath('/student'), {
        method: "POST",
        body: validForm
      })).json()
      if(status === "failure")
        return SweetAlert('error', message);

      SweetAlert("success", "Successfully registered!");
      setAdmission({...initialState});
      console.log(data)
    } catch (error) {
      return SweetAlert('error', error.message);
    }
  }
  return (
    <div className={styles.oa}>
      <SmallHero title={languages.online_admission} image={myHero} isRTL={isRTL} style={{backgroundPosition: "bottom"}}/>
      <div className={[styles.oaWrapper, "w-controller"].join(" ")}>
        <div className={styles.oaFormWrapper}>
          <div className={styles.formTitle} data-aos="fade-down" data-aos-delay={100}>
            Fill The Inputs For Online Admissions.
          </div>
          <div className={styles.oaForm}>
            <div data-aos="fade-right" data-aos-delay={100}>
                <MaterialInput
                  label={"Full Name *"}
                  placeholder={"Name *"}
                  id="fullname"
                  onChange={(e) => {
                    onChange("fullName", e.target.value)
                    onChange("pFullName", e.target.value)
                  }}
                  value={admission.fullName.value}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={200}>
                <MaterialInput
                  label={"Father Name *"}
                  placeholder={"F/Name *"}
                  id="fname"
                  onChange={(e) => {
                    onChange("fatherName", e.target.value)
                    onChange("pFatherName", e.target.value)
                  }}
                  value={admission.fatherName.value}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={400}>
                <MaterialInput
                  label={"Graduation Year *"}
                  placeholder={"G/Year"}
                  id="gyear"
                  type="select"
                  options={years}
                  select={admission.graduationYear.value}
                  onChange={(e) => {
                    onChange("graduationYear", e.target.value)
                  }}
                  value={admission.graduationYear.value}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={600}>
                <MaterialInput
                  label={"High School Name *"}
                  placeholder={"School Name *"}
                  id="sname"
                  onChange={(e) => {
                    onChange("highSchool", e.target.value)
                    onChange("pHighSchool", e.target.value)
                  }}
                  value={admission.highSchool.value}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={800}>
                <MaterialInput
                  label={"Phone Number *"}
                  placeholder={"P/Number *"}
                  id="pname"
                  onChange={(e) => {
                    onChange("phone", e.target.value)
                  }}
                  value={admission.phone.value}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={1000}>
                <MaterialInput
                  label={"Province *"}
                  placeholder={"Province *"}
                  id="province"
                  type="select"
                  options={provinces}
                  select={admission.province.value}
                  onChange={(e) => {
                    onChange("province", e.target.value);
                    const index = provinces.findIndex(pro => pro === e.target.value);
                    onChange("pProvince", pProvinces[index])
                  }}
                  value={admission.province.value}
                  />
              </div>
              <div data-aos="fade-right" data-aos-delay={1200}>
                <MaterialInput
                  label={"Email Address"}
                  placeholder={"Email"}
                  id="email"
                  onChange={(e) => {
                    onChange("email", e.target.value)
                  }}
                  value={admission.email.value}
                  />
              </div>
            <div className={styles.oaButton} data-aos="fade-up" data-aos-delay={1400}>
              <button onClick={submitHandler}>
                Register
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 



export default OnlineAdmission;