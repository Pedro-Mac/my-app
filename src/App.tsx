import React from "react";

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Project from "./components/Project";

import linkedinLogo from "./images/svg/linkedin-brands.svg";

import projects from "./projects.json";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />

        <section className="d-flex flex-wrap">
          {projects.map((item, index) => (
            <Project key={index} project={item} />
          ))}
        </section>

        <section className="wrapper contacts-container">
          <div className="d-flex ">
            <h4 className="w-25 text-start">Phone</h4>
            <p>+48 514 279 063</p>
          </div>
          <div className="d-flex ">
            <h4 className="w-25 text-start">Email</h4>
            <p>macpedrot@gmail.com</p>
          </div>
          <div className="d-flex ">
            <h4 className="w-25 text-start">Social</h4>
            <ul className="d-flex justify-content-around">
              <li>
                <a href="https://www.linkedin.com/in/pedrotmachado/">Linkind</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pedrotmachado/">Github</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
