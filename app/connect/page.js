import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <section className="flex items-center justify-center">
        <div className="w-full max-w-[650px] p-8 rounded-lg">
          <h1 className="text-[4.2rem] font-bold text-center mb-6 tracking-wide">
            FEEDBACK
          </h1>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-[2rem] font-medium mb-1">NAME</label>
              <input
                type="text"
                className="w-full text-[2rem] p-[8px] rounded-[8px] bg-[#9fb6c4]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[2rem] font-medium mb-1">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full text-[2rem] p-[8px] rounded-[8px] bg-[#9fb6c4]"
              />
            </div>

            {/* Opinion */}
            <div>
              <label className="block text-[2rem] font-medium mb-1">
                WHAT IS YOUR OPINION FOR OUR CANDLE?
              </label>
              <textarea
                rows="3"
                className="w-full text-[2rem] p-[8px] rounded-[8px] bg-[#9fb6c4] resize-none"
              ></textarea>
            </div>

            {/* Suggestion */}
            <div>
              <label className="block text-[2rem] font-medium mb-1">
                WHAT IS YOUR SUGGESTION TO IMPROVE OUR CANDLE?
              </label>
              <textarea
                rows="3"
                className="w-full text-[2rem] p-[8px] rounded-[8px] bg-[#9fb6c4] resize-none"
              ></textarea>
            </div>

            {/* Questions */}
            <div>
              <label className="block text-[2rem] font-medium mb-1">
                ANY QUESTIONS ABOUT OUR CANDLE?
              </label>
              <textarea
                rows="3"
                className="w-full text-[2rem] p-[8px] rounded-[8px] bg-[#9fb6c4] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="w-[280px] text-[2.2rem] py-[8px] rounded-[8px] bg-[#7e747f] text-white font-medium tracking-wide hover:opacity-90 transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
