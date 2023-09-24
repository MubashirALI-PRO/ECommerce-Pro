import HeroBanner from "@/components/header/page";
import React from "react";
import { client } from "../lib/clinet";
import Product from "@/components/product/page";
import FooterBanner from "@/components/footerbanner/page";
import Footer from "@/components/footer/page";
const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="product-width">
        <h1 className="product-title">Product</h1>
        <div className="product-index">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
      </div>
      <footer>
        <Footer footer={bannerData.length && bannerData[0]} />
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
