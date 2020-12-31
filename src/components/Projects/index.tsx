import React from "react";

import text from "../../projects.json";

const Projects: React.FC = () => {
  return (
    <>
      {text.map((item, index) => {
        return (
          <article key={index} className="col-12 col-md-6">
            <header>
              <h3>
                <a href={item.link}>{item.title.toUpperCase()}</a>
              </h3>
            </header>
            <a href={item.link}>
              <img src="" alt="" />
            </a>
            {item.text.split("(break)").map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </article>
        );
      })}
    </>
  );
};

export default Projects;
