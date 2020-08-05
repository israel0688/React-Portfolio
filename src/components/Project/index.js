import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
//import photo from "../../assets/projectPics/workoutworkers.png";
import Footer from "../Footer";
import "./style.css"

function Project(props) {

  const currentCategory = {
        name: "Projects",
        description:
          "Projects I have done through out the boot camp",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <div class="flex-container">

<div className="flex-item3">
    <span><a href="https://israel0688.github.io/movie-ranker/" target="_blank">Flix-Facts</a></span>
  </div>
  <div className="flex-item4">
    <span><a href="https://murmuring-escarpment-27359.herokuapp.com/" target="_blank">Workout Workers</a></span>
  </div>  
<div className="flex-item1">
  <span><a href="https://israel0688.github.io/run-buddy/" target="_blank">Run Buddy</a></span>
</div>
<div className="flex-item2">
  <span><a href="https://israel0688.github.io/urban-octo-telegram-master-israel/Develop/index.html" target="_blank">Horiseon</a></span>
</div>
</div>
<div>
<Footer></Footer>
</div>
    </section>
  );
}
export default Project;