import CategoryCard from "@/component/CategoryCard";
import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <section className="px-[16px]">
        <div className="max-w-[1300px] mx-auto mb-[48px]">
          <h2 className="text-[4.8rem] font-semibold text-center mb-[4.8rem]">
            CATEGORIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[38px]">
            <CategoryCard
              url={"/search/citrus"}
              img="./cat-1.png"
              text="CITRUS"
            />
            <CategoryCard
              url={"/search/floral"}
              img="./cat-2.png"
              text="FLORAL"
            />
            <CategoryCard
              url={"/search/fruity"}
              img="./cat-3.png"
              text="FRUITY"
            />
            <CategoryCard
              url={"/search/woody"}
              img="./cat-4.png"
              text="WOODY"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
