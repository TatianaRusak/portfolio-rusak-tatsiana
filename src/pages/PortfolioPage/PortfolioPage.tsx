import React from 'react';
import './PortfolioPage.scss';

import { projects } from '../../utils/projects';

import 'react-multi-carousel/lib/styles.css';
import { nanoid } from 'nanoid';

const PortfolioPage = () => {
  const designAdditionalText = (str: string) => {
    const addTextIndex = str.indexOf('(');
    if (addTextIndex > 0) {
      const addText = str.substring(addTextIndex);
      const newstr = str.replace(addText, `<span>${addText}</span>`);
      return newstr;
    }
    return str;
  };

  const myProjects = projects.map((project) => {
    return (
      <div key={nanoid()} className="portfolio__project-item">
        <div className="portfolio__project-deploy">
          <a href={project.delpoyLink} target="_blank" rel="noreferrer">
            <img
              className="portfolio__project-image"
              src={`./images/screenshots/${project.img}.jpg`}
              alt={project.img}
            />
          </a>
        </div>
        <div className="portfolio__project-descr">
          <div
            className="portfolio__project-name"
            dangerouslySetInnerHTML={{ __html: designAdditionalText(project.name) }}
          />
          <div className="portfolio__project-link">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              GitHub&nbsp;Link
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="portfolio">
      <h2 className="portfolio__subtitle subtitle">here you can see</h2>
      <h1 className="portfolio__title title">my projects</h1>

      <div className="portfolio__wrapper">{myProjects}</div>
    </div>
  );
};

export default PortfolioPage;
