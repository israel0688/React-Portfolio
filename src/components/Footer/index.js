import React from 'react';
import githubLogo from "../../assets/GitHub-Logos/GitHub_Logo_White.png";
import linkedinLogo from "../../assets/LinkedIn-Logos/LI-Logo.png"

function Footer() {
    return (
        <footer className="my-5">
            <a href="https://www.github.com/israel0688" target="_blank">
            <img src={githubLogo} className="my-2" style={{ width: "5%", height: "5%" }} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/israel-berlanga-6734421a3" target="_blank">
            <img src={linkedinLogo} className="my-2" style={{ width: "5%", height: "5%" }} alt="github" />
            </a>
        </footer>
      );
}

export default Footer;