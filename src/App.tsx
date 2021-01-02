import React from "react";

import Header from "./components/Header";
import Project from "./components/Project";

import projects from "./projects.json";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <article className="about-me-container wrapper">
          <h2 className="secondary-title mb-4">NICE TO MEET YOU 😄</h2>
          <p className="description-highlight">
            I have been building my skills around Javascript, focusing mainly in
            React, Redux, Typescript, Bootstrap and Sass.
          </p>
        </article>

        <section className="d-flex flex-wrap">
          {projects.map((item, index) => (
            <Project project={item} index={index} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
