import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <main>
        <h2 className="text-[4.2rem] text-center font-semibold my-[3.6rem]">
          CUSTOM CANDLES
        </h2>
        <section>
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="w-full">
              <img
                src="/custom-1.png"
                alt="Candle Image"
                className="block w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between w-full bg-[#9fb6c4] p-[3rem]">
              <h3 className="text-[7rem] mb-[48px] font-medium">
                MAKE IT <br /> YOUR OWN!
              </h3>
              <p className="text-[2.6rem] text-justify font-medium">
                Our custom candles are the <b>PERFECT</b> addition to any
                celebration! Whether it be a wedding, corporate gifting, product
                launch or any other occasion, our candles are sure to impress.
                Choose our candles to make your event even more special! We also
                offer white label candles for businesses, allowing them to have
                their <b>OWN EXCLUSIVE PRODUCT!</b>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="flex flex-col justify-between w-full bg-[#9fb6c4] p-[3rem]">
              <h3 className="text-[7rem] mb-[48px] font-medium">
                HOW IT <br /> WORKS?
              </h3>
              <div>
                <h4 className="text-[4.6rem] font-bold">STEP 1</h4>
                <p className="text-[2.6rem] text-justify font-medium">
                  Fill in your personal information.
                </p>
                <h4 className="text-[4.6rem] font-bold mt-[8px]">STEP 2</h4>
                <p className="text-[2.6rem] text-justify font-medium">
                  Fill in the number of candle, the date you need your candles
                  by and your desires scent.
                </p>
                <h4 className="text-[4.6rem] font-bold mt-[8px]">STEP 3</h4>
                <p className="text-[2.6rem] text-justify font-medium">
                  Wait for a response from our team.
                </p>
                <h4 className="text-[4.6rem] font-bold mt-[8px]">STEP 4</h4>
                <p className="text-[2.6rem] text-justify font-medium">
                  Receive your custom candles and enjoy!
                </p>
              </div>
            </div>
            <div className="w-full">
              <img
                src="/custom-2.png"
                alt="Candle Image"
                className="block w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center py-[40px]">
          <div className="w-full max-w-[650px] p-8 rounded-lg">
            <h1 className="text-[4.8rem] font-medium text-center mb-[3.8rem] tracking-wide">
              TELL US YOUR IDEAS!
            </h1>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-[1.8rem] font-medium mb-1">
                  NAME{" "}
                  <span className="text-[1.2rem] text-gray-600">
                    (FIRST & LAST)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full text-[1.8rem] p-[1rem] rounded-[6px] bg-[#9fb6c4] placeholder:text-[#333]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[1.8rem] font-medium mb-1">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full text-[1.8rem] p-[1rem] rounded-[6px] bg-[#9fb6c4]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[1.8rem] font-medium mb-1">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  className="w-full text-[1.8rem] p-[1rem] rounded-[6px] bg-[#9fb6c4]"
                />
              </div>

              {/* Candles */}
              <div>
                <label className="block text-[1.8rem] font-medium mb-1">
                  HOW MANY CANDLES DO YOU NEED?{" "}
                  <span className="text-[1.2rem] text-gray-600">(MIN 50)</span>
                </label>
                <input
                  type="number"
                  min="50"
                  className="w-full text-[1.8rem] p-[1rem] rounded-[6px] bg-[#9fb6c4]"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-[1.8rem] font-medium mb-1">
                  DATE YOU NEED YOUR CANDLE BY{" "}
                  <span className="text-[1.2rem] text-gray-600">
                    (DD/MM/YYYY)
                  </span>
                </label>
                <input
                  type="date"
                  className="w-full text-[1.8rem] p-[1rem] rounded-[6px] bg-[#9fb6c4]"
                />
              </div>

              {/* Scent */}
              <div>
                <label className="block text-[1.8rem] font-medium mb-3">
                  WHAT IS YOUR DESIRED SCENT?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
                  {[
                    "Anis & Eucalyptus",
                    "Anis & Peppermint",
                    "Lavender & Eucalyptus",
                    "Lemon & Orange",
                    "Rosemary & Pine",
                    "Aloe Vera, Rose & Pine",
                    "Apple, Caramel & Vanilla",
                    "Bergamot, Jasmine & Sandalwood",
                    "Carnation, Jasmine & Sandalwood",
                    "Lemon, Jasmine & Vanilla",
                  ].map((scent, i) => (
                    <label
                      key={i}
                      className="flex items-center text-[1.6rem] gap-2"
                    >
                      <input type="radio" name="scent" className="scale-125" />
                      {scent}
                    </label>
                  ))}
                </div>
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-[1.8rem] font-medium mb-[6px]">
                  WHAT IS THIS SCENT CANDLE FOR?
                </label>
                <input
                  type="text"
                  className="w-full text-[1.8rem] p-[1rem] rounded-[6px] bg-[#9fb6c4]"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="w-[280px] text-[2rem] py-[6px] rounded-[8px] bg-[#7e747f] text-white font-medium tracking-wide hover:opacity-90 transition"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
