import { urlFor } from "@/lib/clinet";
import Link from "next/link";
import React from "react";

const Product = ({ product: { image, slug, price, details, name } }) => {
  return (
    <div className="product-container" id="product">
      <div className="product-flex">
        <Link href={`/product/${slug.current}`}>
          <div className="product-list">
            <div className="product-img">
              <img
                src={urlFor(image && image[0])}
                className="product-images"
                alt=""
              />
            </div>
            <div className="prodcut-desc">
              <h3 className="product-name">{name}</h3>
              <h3 className="product-details">{details}</h3>
              <h3 className="product-price">${price}</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
