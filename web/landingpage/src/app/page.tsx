"use client";
import type { NextPage } from "next";
import GroupComponent from "./components/group-component";
import Benefits from "./components/benefits";
import FeatureContent from "./components/feature-content";
import styles from "./page.module.css";
import Image from 'next/image';
import { useState } from 'react';



const Homepage: NextPage = () => {
  console.log('Homepage component is rendering...');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const response = await fetch('http://localhost/wordpress/wp-json/InasAlKamachy/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('There was an error submitting the form.');
      }

      setFormStatus('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('There was an error submitting the form. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const imageClick = () => {
    console.log('click')
  }
  
  return (
    <div className={styles.homepage}>
        <GroupComponent />
      <section className={styles.frameParent}>
        <div className={styles.contentContainerParent}>
          <div className={styles.contentContainer}>
            <div className={styles.contentInnerContainer}>
              <div className={styles.benefitGridContainerParent}>
                <div className={styles.benefitGridContainer}>
                  <div className={styles.gridItemContentParent}>
                    <div className={styles.gridItemContent}>
                


                      <Image
                        className={styles.gridItemContentChild}
                        loading="lazy"
                        alt=""
                        src="/Group 433.svg"
                        width={343}
                        height={40}
                      />

                    </div>
                    <h1 className={styles.aeneanVulputateQuis}>
                      Aenean vulputate quis est et pulvinar.
                    </h1>
                  </div>
                </div>
                <div className={styles.maecenasDapibusTurpis}>
                  Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec rutrum. Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec rutrum. Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec.
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.btn}>
                  <div className={styles.btnChild} />
                  <b className={styles.aboutUs}>About us</b>
                </div>
              </div>
            </div>
          </div>
          <video   className={styles.wrapper} controls>
            <source src="/Group 395.svg" type="video/mp4" />
          </video>
        </div>
      </section>
      <Benefits animation={animation} />
      <div className={styles.homepageChild} />
      <div className={styles.homepageItem} />
      <section className={styles.featureGridParent}>
        <div className={styles.featureGrid}>
          <div className={styles.featureGridItem} />
          <div className={styles.featureContentContainer}>
            <div className={styles.featureIcon} />
            <div className={styles.featureIconBackground}>
              <div className={styles.featureIconBorder} />
            </div>
          </div>
        </div>
        <div className={styles.featureGrid1}>
          <div className={styles.featureGridChild} />
          <div className={styles.featureGridInner} />
        </div>
        <FeatureContent setAnimation={setAnimation} />
      </section>
      <section  className={styles.sectioninput} >
         
        {/* <img
          
          alt=""
          src="/image 24.png"
          width={343}
          height={300}
        />  */}
          
        <form className={styles.forminputclass} onSubmit={handleSubmit}>
          <p>Any questions?</p>
          <h1>Let’s talk today!</h1>
          <div className={styles.forminputclassinput}>
         
          <input
            className={styles.inputForm}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            className={styles.inputForm}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <textarea
            className={styles.textareaForm}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
          />
                       <button className={styles.buttonForm} type="submit">Submit</button>

             </div>
        </form>

        
      </section>
      {/* <section className={styles.shapeContainer}>
        <div className={styles.shapeBackgroundParent}>
          <div className={styles.shapeBackground} />
          <div className={styles.shapeBackground1} />
        </div>
      </section> */}
    </div>
  );
};

export default Homepage;
