import Layout from "@/components/layout/page";
import { Toaster } from 'react-hot-toast';
import "@/styles/globals.css";
import "@/styles/footerbanner.css";
import "@/styles/hero.css";
import "@/styles/footer.css";
import "@/styles/product.css";
import "@/styles/cart.css";
import "@/styles/slug.css";
import "@/styles/success.css";

import React from "react";
import { StateContext } from "@/context/page";
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
