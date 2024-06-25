import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div
      className={[styles.clydeThomasJkk6kjymdpkUnsplParent, className].join(
        " "
      )}
    >
                <div className={styles.heroBackground} />

      <img
        className={styles.clydeThomasJkk6kjymdpkUnsplIcon}
        loading="lazy"
        alt=""
        src="clyde-thomas-jKK6kjyMdpk-unsplash.png"
      />
      <div className={styles.heroContent}>
        <div className={styles.heroTitle}>
          <h1 className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consec
          </h1>
          <div className={styles.heroDescription}>
            <div className={styles.aliquamEuMalesuada}>
              Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique
              erat in ligula consequat malesuada. Praesent posuere vestibulum
              neque ac posuere. 
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
    </div>
  );
};

export default GroupComponent;
