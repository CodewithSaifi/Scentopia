import CategoryCard from "@/component/CategoryCard";
import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="px-[16px] mb-[48px]">
          <div className="max-w-[1300px] mx-auto">
            <h2 className="text-[4.8rem] font-semibold text-center mb-[4.8rem]">
              OUR COLLECTIONS
            </h2>
            <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-[38px]">
              <CategoryCard
                url={"/collections/bestseller"}
                img="./fav-1.png"
                text="BEST SELLERS"
              />
              <CategoryCard
                url={"/collections/giftsets"}
                img="./fav-2.png"
                text="GIFT SETS"
              />
              <CategoryCard
                url={"/collections/onsale"}
                img="./fav-4.png"
                text="ON SALE"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
