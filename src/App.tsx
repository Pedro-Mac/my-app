import React from "react";

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Project from "./components/Project";

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

        <section className="contacts-container ">
          <div className="d-flex p-4">
            <h4 className="w-25 text-start">Phone</h4>
            <p>+48 514 279 063</p>
          </div>
          <div className="d-flex p-4">
            <h4 className="w-25 text-start">Email</h4>
            <p>macpedrot@gmail.com</p>
          </div>
          <div className="d-flex p-4">
            <h4 className="w-25 text-start">Social</h4>
            <ul className="media-container">
              <li className="media-item mr-4">
                <a
                  href="https://www.linkedin.com/in/pedrotmachado/"
                  className="media-link"
                >
                  Linkedin
                </a>
              </li>
              <li className="media-item">
                <a
                  href="https://www.linkedin.com/in/pedrotmachado/"
                  className="media-link"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <p className="fw-bolder m-0 text-uppercase ">
          &copy; Pedro Machado 2021
        </p>
      </footer>
    </div>
  );
}

export default App;
