import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { client, urlFor } from "@/lib/clinet";
import { useStateContext } from "@/context/page";
import getStripe from "@/lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div ref={cartRef}>
      <div className="cart-main">
        <div className="cart__container">
          <div className="cart-flex">
            <button
              type="button"
              className="cart-button"
              onClick={() => setShowCart(false)}
            >
              <AiOutlineLeft className="item-button" />
              <span className="your-cart">Your Cart</span>
              <span className="your-item">({totalQuantities})Item</span>
            </button>
            {cartItems.length < 1 && (
              <div className="cart-products">
                <AiOutlineShopping className="shop-bag" size={110} />
                <h3 className="shopping-bag">Your Shopping Bag is Empty</h3>
                <Link href={"/"}>
                  <button
                    type="button"
                    onClick={() => setShowCart(false)}
                    className="cart-btn"
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}
            <div className="cart-container-1">
              {cartItems.length >= 1 &&
                cartItems.map((item) => (
                  <div className="cart-product-2">
                    <div className="img-cart">
                      <img
                        src={urlFor(item?.image[0])}
                        className="cart-2-img"
                        alt=""
                      />
                    </div>
                    <div className="flex-cart">
                      <div className="item-desc">
                        <div className="pricing">
                          <h5 className="item-name">{item.name}</h5>
                          <h5 className="item-price">${item.price}</h5>
                        </div>
                        <div className="flex-bottom">
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num gap" onClick="">
                            {item.quantity}
                          </span>
                          <span
                            className="plus mr"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, "inc")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item)}
                      className="remove-item"
                    >
                      <TiDeleteOutline className="remove-icon" />
                    </button>
                  </div>
                ))}
            </div>
            {cartItems.length >= 1 && (
              <div className="cart-stripe">
                <div className="cart-total">
                  <h3>Subtotal:</h3>
                  <h3>${totalPrice}</h3>
                </div>
                <div className="cart-stripe-btn">
                  <button
                    type="button"
                    className="stripe-buy"
                    onClick={handleCheckout}
                  >
                    Pay With Stripe
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
