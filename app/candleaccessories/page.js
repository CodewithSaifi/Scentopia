import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import ProductCard from "@/component/ProductCard";
import products from "@/data/products.json";
import React from "react";

const page = () => {
  const candleAccessories = products.filter(
    (product) => product.category.toLowerCase() === "candle accessories"
  );
  return (
    <>
      <NavBar />
      <section>
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[4.2rem] font-semibold mt-[42px] mb-[3.8rem] text-center">
            CANDLE ACCESSORIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px] p-[16px] mb-[42px]">
            {candleAccessories.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                img={product.img}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
