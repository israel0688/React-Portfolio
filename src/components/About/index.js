import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
import Footer from "../Footer";

function About() {
    return (
        <div>
        <section className="my-5">
            <h1 id="about">About Me!</h1>
            <img src={coverImage} className="my-2" style={{ width: "50%", height: "50%" }} alt="cover" />
            <p>
            Hello, my name is Israel! I'm currently working as a banker for Bank of America but I am looking to make a career change to coding. I'm currently living in Houston but am willing to relocate. When I'm not helping people with their financial needs I spend my time fine tunning my coding. Want more information? Please take a look at my porfolio!
            </p>
        </section>
        <Footer></Footer>
        </div>
      );
}

export default About;