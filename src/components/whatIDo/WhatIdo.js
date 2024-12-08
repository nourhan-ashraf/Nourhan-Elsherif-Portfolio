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
        Goal-oriented <strong>Junior Frontend Engineer</strong> with over 1 year of experience
        building dynamic and responsive web applications. Specializing in <strong>Angular</strong>{' '}
        and <strong>React</strong> with a strong proficiency in <strong>JavaScript</strong>,{' '}
        <strong>TypeScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and{' '}
        <strong>SCSS</strong> to create high-quality user interfaces. I also have a solid background
        in <strong>data structures</strong> and <strong>algorithms</strong> and basic backend
        knowledge of Node JS.
        <br />
        <br />
        Skilled in <strong>refactoring legacy code</strong> to improve maintainability and{' '}
        <strong>enhance performance</strong>. Familiar with tools like{' '}
        <strong>Clarity, Highlight, GCP, AWS, and Git</strong> for seamless project development and
        deployment. I have experience <strong>automating workflows</strong> to streamline
        development processes, increase efficiency, and reduce manual errors. Focused on delivering
        clean, efficient code while continuously improving processes.
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
