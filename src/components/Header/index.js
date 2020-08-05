import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function Header() {
    return (
        <div>
        <section className="my-5">
            <img src={coverImage} className="my-2" style={{ width: "50%", height: "250px" }} alt="cover" />
            <img src={coverImage} className="my-2" style={{ width: "50%", height: "250px" }} alt="cover" />
        </section>
        </div>
      );
}

export default Header;