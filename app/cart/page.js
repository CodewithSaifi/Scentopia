// import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <section className="max-w-[1300px] mx-auto flex flex-col items-center justify-center px-[16px]">
        <h2 className="text-[4.8rem] font-bold mt-[3.2rem] mb-[8rem] text-center">
          CART
        </h2>
        <img src="/cart.svg" alt="Cart Image" />
        <h3 className="text-[2.4rem] font-bold mt-[4rem] mb-[2rem]">
          Your cart is empty
        </h3>
        <p className="text-[2.4rem] text-gray-600 font-medium mb-[8rem]">
          Have an account? Sign in to see your cart.
        </p>
        <a href="/account/login" className="text-[1.8rem] font-medium py-[6px] px-[50px] rounded-[8px] hover:opacity-90 cursor-pointer text-white bg-[#7e747f]">
          LOGIN
        </a>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default page;
