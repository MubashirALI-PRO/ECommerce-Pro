import { urlFor } from "@/lib/clinet";
import Link from "next/link";
import React from "react";

const HeroBanner = ({
  heroBanner: {
    buttonText,
    smallText,
    midText,
    largeText1,
    largeText2,
    discount,
    saleTime,
    desc,
    image,
  },
}) => {
  return (
    <div id="header">
      <div className="hero-container">
        <div className="hero-flex">
          <div className="hero__left">
            <h4 className="hero-desc">{desc}</h4>
            <h1 className="hero-name">{smallText}</h1>
            <h4 className="mid-text">{midText}</h4>
            <h4 className="discount">{discount}</h4>
            <Link href={`/product/headphone`}>
              <button className="hero-btn">{buttonText}</button>
            </Link>
          </div>
          <div className="hero__right">
            <img className="hero-img" src={urlFor(image)} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
