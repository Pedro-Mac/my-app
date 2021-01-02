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
      </main>
    </div>
  );
}

export default App;
