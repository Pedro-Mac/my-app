import React from "react";

interface projectProps {
  project: { title: string; link: string; text: string };
  index: number;
}

const Project: React.FC<projectProps> = ({ project, index }) => {
  return (
    <article key={index} className="col-12 col-md-6">
      <header>
        <h3>
          <a href={project.link}>{project.title.toUpperCase()}</a>
        </h3>
      </header>
      <a href={project.link}>
        <img src="" alt="" />
      </a>
      {project.text.split("(break)").map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </article>
  );
};

export default Project;
