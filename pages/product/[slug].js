import Product from "@/components/product/page";
import { useStateContext } from "@/context/page";
import { client, urlFor } from "@/lib/clinet";
import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div className="main-slug">
      <div className="slug-detail-container">
        <div className="slug-flex">
          <div className="slug-flex-right">
            <div>
              <img src={urlFor(image && image[0])} className="slug-img" />
            </div>
            <div className="slug-images-container">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-img selected-image" : "small-img"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="slug-flex-left">
            <div className="slug-details-desc">
              <h1 className="slug-name">{name}</h1>
              <div className="reviews">
                <div>
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiOutlineStar className="stars" />
                </div>
                <p>(20)</p>
              </div>
              <div className="details-slug">
                <h4>Details:</h4>
                <p>{details}</p>
              </div>
              <p className="slug-price">${price}</p>
              <div className="slug-quantity">
                <div className="quan">
                  <h3>Quantitiy:</h3>
                </div>
                <div className="numbers">
                  <span className="minus" onClick={decQty}>
                    <AiOutlineMinus className="number-icon f-icon" />
                  </span>
                  <span className="num">{qty}</span>
                  <span className="plus" onClick={incQty}>
                    <AiOutlinePlus className="number-icon f-icon" />
                  </span>
                </div>
              </div>
              <div className="slug-buttons">
                <button
                  type="button"
                  className="add-to-cart"
                  onClick={() => onAdd(product, qty)}
                >
                  Add To Cart
                </button>
                <button
                  type="button"
                  className="buy-now"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slug-like-product">
        <h2 className="also-like">You May Also like</h2>
        <div className="slug-quee">
          <div className="slug-product-container">
            {products.map((item) => (
              <Product key={item._id} product={item} className='slug-cart-img' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
