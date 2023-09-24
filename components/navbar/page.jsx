import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Cart from "../cart/page";
import { useStateContext } from "@/context/page";
import { AiOutlineShopping } from "react-icons/ai";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const buttonClick = () => {
    setMenu(!menu);
  };
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="main-navbar">
      <div className="navbar">
        <div className="flex">
          <nav>
            <Link className="logo" href={"/"}>
              E-Commerce-Pro
            </Link>
            <ul className="ul-lg">
              <li>
                <Link className="white" href={"#header"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="white" href={"#product"}>
                  Product
                </Link>
              </li>
              <li>
                <Link className="white" href={"#footer"}>
                  Contact
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="cart-icons-shop"
              onClick={() => setShowCart(true)}
            >
              <div className="cart-img-01">
                <AiOutlineShopping className="shpping-01" />
              </div>
              <span className="cart-qty">{totalQuantities}</span>
            </button>
            {showCart && <Cart />}

            <button className="menu-btn" onClick={buttonClick}>
              {menu ? (
                <FaTimes className="menu-icon" />
              ) : (
                <FaBars className="menu-icon" />
              )}
            </button>
          </nav>
        </div>
        <div className="sm-menu">
          {menu && (
            <div>
              <nav className="sm-nav">
                <ul className="sm-ul">
                  <Link className="sm-li" href={"#header"}>
                    <span className="white-sm">Home</span>
                  </Link>
                  <Link className="sm-li" href={"#product"}>
                    <span className="white-sm">Product</span>
                  </Link>
                  <Link className="sm-li" href={"#footer"}>
                    <span className="white-sm">Contact</span>
                  </Link>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
