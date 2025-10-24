"use client";
import NavBar from "@/component/NavBar";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const handleEmptyCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    } catch (error) {
      console.error("Invalid cart data, resetting...", error);
      localStorage.removeItem("cart");
      setCart([]);
    }
  }, []);

  if (cart.length === 0) {
    return (
      <>
        <NavBar />
        <section className="max-w-[1300px] mx-auto flex flex-col items-center justify-center px-[16px]">
          <h2 className="text-[4.8rem] font-semibold mt-[3.2rem] mb-[8rem] text-center">
            CART
          </h2>
          <img src="/cart.svg" alt="Cart Image" />
          <h3 className="text-[2.4rem] font-bold mt-[4rem] mb-[2rem]">
            Your cart is empty
          </h3>
          <p className="text-[2.4rem] text-gray-600 font-medium mb-[8rem]">
            Have an account? Sign in to see your cart.
          </p>
          <a
            href="/account/login"
            className="text-[1.8rem] font-medium py-[6px] px-[50px] rounded-[8px] hover:opacity-90 cursor-pointer text-white bg-[#7e747f]"
          >
            LOGIN
          </a>
        </section>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <section className="max-w-[1300px] mx-auto px-[16px]">
        <h2 className="text-[4.8rem] font-semibold mt-[3.2rem] mb-[4rem] text-center">
          CART
        </h2>
        <div className="flex items-center justify-between font-medium py-[1.2rem] pl-[1.2rem] sm:pr-[1.2rem] pr-[2.8rem]">
          <p className="text-[2rem] w-[54vw] items-center">PRODUCT</p>
          <p className="text-[2rem]">QUANTITY</p>
          <p className="text-[2rem] w-[8vw]">PRICE</p>
        </div>
        <div className="flex flex-col">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-[1.2rem] pl-[1.2rem] sm:pr-[1.2rem] pr-[2.8rem] border"
            >
              <div className="flex gap-[1.8rem] w-[54vw] items-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[10rem] h-[10rem] object-cover"
                />
                <h3 className="text-[2.4rem] font-medium">{item.title}</h3>
              </div>
              <p className="text-[2.4rem] text-center font-medium">
                {item.quantity}
              </p>
              <p className="text-[2.4rem] w-[8vw] font-medium">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="text-end py-[3.8rem] pr-[.8rem]">
          <h2 className="text-[2.4rem] font-medium">TOTAL PRICE</h2>
          <p className="text-[4.2rem] font-medium mb-[1.8rem]">₹{totalPrice.toLocaleString()}</p>
          <button
            onClick={handleEmptyCart}
            className="text-[2rem] mr-[2.8rem] bg-[#7e747f] text-white py-[5px] px-[20px] rounded-[9px] text"
          >
            EMPTY CART
          </button>
          <button className="text-[2rem] bg-[#7e747f] text-white py-[5px] px-[20px] rounded-[9px] text">
            CHECKOUT
          </button>
        </div>
      </section>
    </>
  );
};

export default CartPage;
