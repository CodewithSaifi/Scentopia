import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import ProductCard from "@/component/ProductCard";
import products from "@/data/products.json";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <section>
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[4.2rem] font-semibold my-[42px] text-center">
            SHOP ALL
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px] p-[16px] mb-[42px]">
            {products.map((product) => (
              <ProductCard key={product.id} title={product.title} price={product.price} img={product.img} tag={product.tag}/>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
