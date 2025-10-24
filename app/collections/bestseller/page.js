import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import ProductCard from "@/component/ProductCard";
import products from "@/data/products.json";
import React from "react";

const page = () => {
  const bestSeller = products.filter(
    (product) => product.tag.toLowerCase() === "best sellers"
  );
  return (
    <>
      <NavBar />
      <section>
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[4.2rem] font-semibold mt-[42px] mb-[18px] text-center">
            OUR COLLECTIONS
          </h2>
          <p className="text-[2.8rem] font-medium mb-[42px] text-center">
            BEST SELLERS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px] p-[16px] mb-[42px]">
            {bestSeller.map((product) => (
              <ProductCard
                key={product.id}
                url={`/product/${product.id}`}
                title={product.title}
                price={product.price}
                img={product.img}
                tag={product.tag}
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
