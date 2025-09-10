import React from "react";
// General'ın bulunduğu klasörden bir üst klasöre (components) çıkıp
// sonra Contact klasörüne giriyoruz.
import Contact from "../Contact/Contact";
import Comments from "../Comments/Comments";
import "./General.css";

const General = () => {
  return (
    <div className="general-container">
      <div className="general-content">
        <Contact />
        <Comments />
      </div>
    </div>
  );
};

export default General;
