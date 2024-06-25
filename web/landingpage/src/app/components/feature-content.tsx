"use client";

import { useState } from 'react';
import { NextPage } from 'next';
import styles from './feature-content.module.css';

type FeatureContentType = {
  setAnimation: any,
  className?: string
};

const FeatureContent: NextPage<FeatureContentType> = ({ setAnimation, className="" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
    setAnimation((prev : boolean) => !prev)
  };

  return (
    <div className={[styles.featureContent, className].join(" ")}>
      {!isPlaying ? (
        <>
          <div className={styles.featureImage} />
          <iframe
          className={styles.videoFrame}
          src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
           
<img
            src="Group 395.svg"
            className={styles.playButton}
            onClick={handlePlayButtonClick}
            alt="Play Video"
          />
        </>
      ) : (
        <iframe
          className={styles.videoFrame}
          src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src="image 1.png"
      />
      <div>
      
      <h1 className={styles.usceArcuTurpis}>
        Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula.
      </h1>
      <div className={styles.featureDescriptionContainer}>
        <b
          className={styles.proinPharetraLectus}
        >{`Proin pharetra lectus non felis vulputate, nec commodo quam mattis. Donec fermentum diam eget sem placerat vestibulum. Donec consectetur ut leo quis feugiat. `}</b>
        <div
          className={styles.phasellusQuisDignissim}
        >{`Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in vestibulum eu, condimentum sit amet lacus. Fusce ex augue, facilisis ut ligula vitae, fringilla dictum sem. Donec tempus blandit nulla vel auctor. Donec non vestibulum tellus, sit amet condimentum felis. Maecenas scelerisque elit a lectus consequat tincidunt. `}</div>
      </div>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.readAboutOperations}>Read about operations</b>
      </button>
     
      </div>
            </div>

  );
};

export default FeatureContent;