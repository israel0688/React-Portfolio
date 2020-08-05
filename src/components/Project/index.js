import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/projectPics/workoutworkers.png";
import Footer from "../Footer";

function Project(props) {

  const currentCategory = {
        name: "Portfolio",
        description:
          "Projects I have done through out the boot camp",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
        <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
        <Footer></Footer>
      </div>
    </section>
  );
}
export default Project;