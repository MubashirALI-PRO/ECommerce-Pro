import { urlFor } from "@/lib/clinet";
import React from "react";

const FooterBanner = ({
  footerBanner: {
    image,
    discount,
    buttonText,
    desc,
    smallText,
    midText,
    largeText1,
    largeText2,
  },
}) => {
  return (
    <div>
      <div className="footerbanner__container">
        <div className="footerbanner-flex">
          <div className="footerbanner__left">
            <h3 className="footerbanner__desc">{desc}</h3>
            <h3 className="footerbanner__name">{smallText}</h3>
            <h3 className="footerbanner__title">{midText}</h3>
          </div>
          <div className="footerbanner__mid">
            <img src={urlFor(image)} className="footerbanner-img" alt="" />
          </div>
          <div className="footerbanner__right">
            <h3 className="footerbanner__1">{largeText1}</h3>
            <h3 className="footerbanner__2">{largeText2}</h3>
            <h3 className="hero-btn footerbanner__3">{buttonText}</h3>
            <h3 className="footerbanner__4">{discount}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
