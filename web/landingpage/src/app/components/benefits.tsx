import type { NextPage } from "next";
import styles from "./benefits.module.css";
import { motion } from "framer-motion";
export type BenefitsType = {
  className?: string;
  animation: boolean;
};

const Benefits: NextPage<BenefitsType> = ({ className = "", animation }) => {
 
  return (
    <section 

    className={[styles.benefits, className].join(" ")}>
     
      <div className={styles.benefit}>
        <div className={styles.plusIconParent}>
        
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="31.5" stroke="white"/>
<rect x="30.5673" y="19.1045" width="1.91045" height="26.7463" fill="white"/>
<rect x="44.8956" y="31.5223" width="1.91045" height="26.7463" transform="rotate(90 44.8956 31.5223)" fill="white"/>
</svg>

          <h3 className={styles.alwaysChargedAt}>Financial statements</h3>
        </div>
      </div>
      
      <motion.div 
          initial={{ y : 0}}
          animate={{ y: animation ? -60 : 0}}
          transition={{duration: 1.5 , ease : "easeIn"}}
       className={styles.active}>
        <div className={styles.cover} />
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="31.5" fill="white" stroke="white"/>
<rect x="30.5672" y="19.1045" width="1.91045" height="26.7463" fill="black"/>
<rect x="44.8956" y="31.5223" width="1.91045" height="26.7463" transform="rotate(90 44.8956 31.5223)" fill="black"/>
</svg>

        <div className={styles.activeBenefitDescription}>
          <h3 className={styles.alwaysChargedAt1}>Press releases</h3>
          <div
            className={styles.youCanAlways}
          >{`Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec `}</div>
        </div>
        <img
          className={styles.hoverIcon}
          loading="lazy"
          alt=""
          src="hover.svg"
        />
      </motion.div>
      <div className={styles.benefit}>
        <div className={styles.plusIconParent}>
        
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="31.5" stroke="white"/>
<rect x="30.5673" y="19.1045" width="1.91045" height="26.7463" fill="white"/>
<rect x="44.8956" y="31.5223" width="1.91045" height="26.7463" transform="rotate(90 44.8956 31.5223)" fill="white"/>
</svg>

          <h3 className={styles.alwaysChargedAt}>Webcast linkss</h3>
        </div>
      </div>
        <div className={styles.benefit}>
        <div className={styles.plusIconParent}>
        
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="31.5" stroke="white"/>
<rect x="30.5673" y="19.1045" width="1.91045" height="26.7463" fill="white"/>
<rect x="44.8956" y="31.5223" width="1.91045" height="26.7463" transform="rotate(90 44.8956 31.5223)" fill="white"/>
</svg>

          <h3 className={styles.alwaysChargedAt}>Corporate governance</h3>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
