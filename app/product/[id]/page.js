"use client";
import React, { useState } from "react";
import products from "@/data/products.json";
import NavBar from "@/component/NavBar";
import Footer from "@/component/Footer";

const ProductDetail = ({ params }) => {
  const [quantity, setQuantity] = useState(1);

  const { id } = params;
  // ✅ find product by id
  const product = products.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div className="text-center text-[2.6rem] mt-[38vh]">
        Product not found 😔
      </div>
    );
  }

  const handleQuantityIncrement = () => setQuantity(quantity + 1);
  const handleQuantityDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity === 0) return; // prevent adding 0 items

    // Get current cart from localStorage or empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Update quantity
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Add new product
      cart.push({ ...product, quantity });
    }

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${quantity} ${product.title} added to cart!`);
    setQuantity(1); // reset quantity after adding
  };

  return (
    <>
      <NavBar />
      <section className="max-w-[1300px] mx-auto px-[16px]">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#f3efe4] p-6 rounded-xl">
            <img
              src={product.img}
              alt={product.title}
              className="w-[58rem] rounded-lg object-cover"
            />
          </div>

          <div className="py-[18px]">
            <h1 className="text-[4.2rem] font-semibold">{product.title}</h1>
            <p className="text-[2rem] text-gray-600 my-[px]">
              Category : {product.category}
            </p>
            <p className="text-[3.2rem] font-semibold">₹{product.price}</p>

            <div className="flex items-center gap-[18px] text-[2rem] font-semibold mt-[20px] mb-[28px]">
              <p>Quantity :</p>
              <div className="flex gap-[14px]">
                <button
                  onClick={handleQuantityDecrement}
                  className="flex justify-center items-center w-[3rem] h-[3rem] bg-[#d9d9d9] rounded-full cursor-pointer"
                >
                  <img
                    className="w-[2rem] h-[2rem] mr-[.2rem]"
                    src="../left-q.svg"
                    alt="Left"
                  />
                </button>
                <p>{quantity}</p>
                <button
                  onClick={handleQuantityIncrement}
                  className="flex justify-center items-center w-[3rem] h-[3rem] bg-[#d9d9d9] rounded-full cursor-pointer"
                >
                  <img
                    className="w-[2rem] h-[2rem] ml-[.5rem]"
                    src="../right-q.svg"
                    alt="Left"
                  />
                </button>
              </div>
            </div>

            <button
            onClick={handleAddToCart}
            className="bg-[#7e747f] text-white w-[42rem] py-[8px] rounded-[12px] text-[2rem] hover:bg-[#7e747fb2] transition duration-300 cursor-pointer">
              ADD TO CART
            </button>
            <div className="px-[4px]">
              <h2 className="text-[3.2rem] font-semibold py-[24px]">Details</h2>
              <div className="text-[2.4rem]">
                <span className="font-semibold">Top :</span>{" "}
                <span>{product.details.top}</span>
              </div>
              <div className="text-[2.4rem] py-[4px]">
                <span className="font-semibold">Mid :</span>{" "}
                <span>{product.details.mid}</span>
              </div>
              <div className="text-[2.4rem]">
                <span className="font-semibold">Bottom :</span>{" "}
                <span>{product.details.bottom}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
