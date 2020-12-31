import React from "react";
import Project from "./components/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>HI! I AM PEDRO</h1>
        <p>
          I am a frontend developer and I am always looking for adventures,
          wilderness, inspirational stories and for the best waves to surf.
        </p>
      </header>
      <main>
        <article>
          <h2>Nice to meet you 😄</h2>
          <p>
            I have been building my skills around Javascript, focusing mainly in
            React, Redux, Typescript, Bootstrap and Sass.
          </p>
        </article>

        <section className="d-flex flex-wrap">
          <Project />
        </section>
      </main>
    </div>
  );
}

export default App;
