import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";

function App() {

  const [categories] = useState([
    {
      name: "Portfolio",
      description:
        "Projects I have done through out the boot camp",
    },
    { name: "Resume", description: "Resume Work" },
  ]);

  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Project></Project>
        <About></About>
      </main>
    </div>
  );
}

export default App;
