import React, { useContext } from 'react';
import styles from './WhatIdo.module.scss';
import { DarkModeContext } from '../../context/ThemeContext';

const WhatIdo = ({ sectionsRef }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      ref={(ref) => (sectionsRef.current['section2'] = ref)}
      className={darkMode ? styles.whatDark : styles.whatLight}>
      <div>
        <img
          alt="highlight"
          className={styles.highlight}
          src={darkMode ? '/whatDark.svg' : '/whatLight.svg'}
        />
      </div>
      <br />
      <p className={styles.description}>
        Goal-oriented <strong>Frontend Engineer</strong> with 2+ years of experience in web development. 
        Specializing in <strong>Angular</strong>{' '}
        and <strong>React</strong> with a strong proficiency in <strong>JavaScript</strong>,{' '}
        <strong>TypeScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and{' '}
        <strong>SCSS</strong> to create high-quality user interfaces. 
        <br />
        <br />
        Skilled at <strong>refactoring legacy code</strong> to improving maintainability and{' '}
        <strong>optimizing performance</strong>. quick to learn new tools and frameworks, 
        with experience following <strong>agile corporate processes</strong> and <strong>collaborating with international clients.</strong>
        <br />
        <br />
        Fast and flexible in transitioning between tools and technology stacks, I actively
        investigate and research new frameworks, services, and tools. I’m constantly seeking new
        opportunities for growth.
      </p>
    </div>
  );
};

export default WhatIdo;
