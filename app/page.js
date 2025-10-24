import CategoryCard from "@/component/CategoryCard";
import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="px-[16px]">
          <div className="max-w-[1300px] mx-auto relative flex flex-col items-center justify-center text-center h-[70rem] overflow-hidden">
            <img
              className="absolute hidden sm:block top-18 lg:left-[16%] md:left-[12%] sm:left-[6%] left-[2%]"
              src="./star.svg"
              alt="star"
            />
            <img
              className="absolute hidden sm:block top-18 lg:right-[16%] md:right-[12%] sm:right-[6%] right-[2%]"
              src="./star.svg"
              alt="star"
            />
            <img
              className="absolute top-6 z-10 w-[40rem]"
              src="./text.svg"
              alt="Main text"
            />

            <div className="absolute hidden md:block top-109 z-10 inset-0 border-2 border-black rounded-[50%] rotate-[-25deg] max-w-[108rem] h-[30rem] mx-auto"></div>
            <img
              className="w-[55rem] absolute top-36"
              src="./main-img.png"
              alt="Main image"
            />
          </div>
        </section>
        <section id="shop" className="mt-[4.8rem] mb-[3.8rem]">
          <div className="flex justify-center bg-[#9fb6c4] w-full md:h-auto h-[5rem]">
            <img src="./strap.svg" alt="Strap" />
          </div>
        </section>
        <section className="px-[16px]">
          <div className="max-w-[1300px] mx-auto mb-[48px]">
            <h2 className="text-[4.8rem] font-medium text-center mb-[4.8rem]">
              SHOP YOUR FAVORITE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[38px]">
              <CategoryCard
                url={"/shopall"}
                img="./fav-1.png"
                text="SHOP"
                txt={"ALL"}
              />
              <CategoryCard
                url={"collections"}
                img="./fav-2.png"
                text="OUR"
                txt={"COLLECTIONS"}
              />
              <CategoryCard
                url={"/candleaccessories"}
                img="./fav-3.png"
                text="CANDLE"
                txt={"ACCESSORIES"}
              />
              <CategoryCard
                url={"/customcandle"}
                img="./fav-4.png"
                text="CUSTOM"
                txt={"CANDLE"}
              />
            </div>
          </div>
        </section>
        <section className="bg-[url('/homepage-bg.png')] bg-cover bg-center w-full h-[74rem] flex items-center justify-end mb-[42px] p-[16px]">
          <div className="flex flex-col justify-between items-center w-[50rem] h-[50rem] bg-[#f3efe4b7] mr-[100px] rounded-[38px] p-[3rem]">
            <div>
              <h3 className="text-[4.8rem] font-medium">ABOUT US</h3>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[1.8rem] text-justify font-medium mb-[2.8rem]">
                SCENTOPIA is a brand that creates unique and personalized
                scented candles. We believe that scent has the power to evoke
                memories and emotions, and we want to help our customers create
                their own special moments with our candles.
              </p>
              <a
                className="bg-[#7e747f] text-white text-[1.8rem] px-[16px] py-[6px] rounded-[8px]"
                href="/about"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </section>
        <section className="mt-[48px] mb-[42px]">
          <div className="flex justify-center bg-[#9fb6c4] w-full md:h-auto h-[5rem]">
            <img src="./strap.svg" alt="Strap" />
          </div>
        </section>
        <section className="max-w-[1300px] mx-auto px-[16px]">
          <div className="mb-[4.8rem]">
            <h2 className="text-[4.8rem] font-medium text-center mb-[48px]">
              GET CONNECT WITH US
            </h2>
            <div className="relative flex flex-col items-center justify-center text-center h-[70rem] overflow-hidden">
              <div className="absolute hidden md:block top-74 z-11 inset-0 border-2 border-black rounded-[50%] rotate-[-25deg] max-w-[108rem] h-[30rem] mx-auto"></div>
              <img
                className="w-[55rem] absolute top-4"
                src="./fav-5.png"
                alt="Main image"
              />
              <a
                href="/connect"
                className="absolute bottom-48 bg-[#7e747f] text-white text-[18px] px-[16px] py-[6px] rounded-[8px]"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
