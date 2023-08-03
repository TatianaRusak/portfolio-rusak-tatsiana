import React from 'react';
import './SkillsPage.scss';

import { skills } from '../../utils/skills';
import { nanoid } from 'nanoid';

const SkillsPage = () => {
  const mySkills = skills.map((skill) => {
    return (
      <li key={nanoid()} className="skills__item">
        <div className="skills__img-wrapper">
          <img
            src={`./images/skills/${skill.img}.png`}
            alt={`${skill.name}-logo`}
            className="skills__img"
          />
        </div>
        <p className="skills__name">{skill.name}</p>
      </li>
    );
  });

  return (
    <div className="skills">
      <h2 className="skills__subheader subheader">you can find out about</h2>
      <h1 className="skills__header header">my skills</h1>

      <ul className="skills__hard-list">{mySkills}</ul>

      <ul className="skills__soft-list">
        <li>Adaptability</li>
        <li>Teamwork</li>
        <li>Communication</li>
        <li>Willingness to learn</li>
        <li>Time management</li>
        <li>Patience</li>
      </ul>
    </div>
  );
};

export default SkillsPage;
