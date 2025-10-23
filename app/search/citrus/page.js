import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import ProductCard from "@/component/ProductCard";
import products from "@/data/products.json";
import React from "react";

const page = () => {
  const citrus = products.filter(
    (product) => product.category.toLowerCase() === "citrus"
  );
  return (
    <>
      <NavBar />
      <section>
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[4.2rem] font-semibold mt-[42px] mb-[18px] text-center">
            CATEGORIES
          </h2>
          <p className="text-[2.8rem] font-semibold mb-[42px] text-center">
            CITRUS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px] p-[16px] mb-[42px]">
            {citrus.map((product) => (
              <ProductCard
                key={product.id}
                url={`/product/${product.id}`}
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
