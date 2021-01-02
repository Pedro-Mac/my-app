import React from "react";

import "./project.scss";

interface projectProps {
  project: { title: string; link: string; text: string; image: string };
}

const Project: React.FC<projectProps> = ({ project }) => {
  return (
    <article className="project-container wrapper col-12 col-md-6">
      <header>
        <h3 className="text-title mb-4">
          <a className="text-uppercase text-link" href={project.link}>
            {project.title}
          </a>
        </h3>
      </header>
      <a className="link-image" href={project.link}>
        <img className="mb-5" src={project.image} alt={project.title} />
      </a>
      {project.text.split("(break)").map((value, index) => (
        <p key={index} className="text-descriptive description-highlight">
          {value}
        </p>
      ))}
    </article>
  );
};

export default Project;
