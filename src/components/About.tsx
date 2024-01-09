import React from 'react';
import s from './styles/About.module.css';

const About: React.FC = () => {
  return (
    <div className={s.aboutContainer}>
      <div className={s.aboutContent}>
        <h1 className={s.aboutHeader}>John Doe</h1>
        <div className={s.aboutDescription}>
          <p>
            Hello! I'm a passionate coder with experience in web development. I love building
            interactive and user-friendly websites that deliver exceptional experiences to users.
          </p>
          <p>
            Throughout my career, I have worked on various projects using technologies such as
            HTML, CSS, JavaScript, and React. I strive for clean and maintainable code, and I am
            constantly learning and exploring new technologies to expand my skill set.
          </p>
          <p>
            When I'm not coding, you can find me exploring the outdoors, playing guitar, or reading
            up on the latest tech trends. Feel free to reach out to me for any inquiries or
            collaboration opportunities!
          </p>
        </div>
      </div>
      <div className={s.aboutImage}></div>
    </div>
  );
};

export default About;