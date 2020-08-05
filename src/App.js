import React, { useState } from 'react';
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Header from "./components/Header";

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "Portfolio",
      description:
        "Projects I have done through out the boot camp",
    },
  ]);

  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <Header></Header>
      <main>
      {!contactSelected ? (
       <>
          <Project currentCategory={currentCategory}></Project>
          <About></About>
       </>
    ) : (
    <ContactForm></ContactForm>
  )}
      </main>
    </div>
  );
}

export default App;
