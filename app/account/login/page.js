// import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <section className="p-[16px] min-h-[60vh]">
        <h1 className="text-[4.2rem] font-bold text-center mb-6 tracking-wide">
          LOGIN
        </h1>
        <p className="text-center text-[1.8rem] mb-8 text-gray-600">
          Don’t have an account?{" "}
          <a href="/account/signup" className="text-[#7e747f] underline">
            Sign in here!
          </a>
        </p>
        <form className="max-w-[58rem] mx-auto px-[16px] flex flex-col gap-[8px]">
          <label className="text-[2rem] font-medium">EMAIL</label>
          <input
            type="email"
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[1rem] rounded-[8px]"
          />
          <label className="text-[2rem] font-medium">PASSWORD</label>
          <input
            type="password"
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[2.4rem] rounded-[8px]"
          />
          <div className="text-center">
            <button
              type="submit"
              className="text-[2rem] font-medium py-[6px] px-[50px] rounded-[8px] hover:opacity-90 cursor-pointer text-white bg-[#7e747f]"
            >
              LOGIN
            </button>
          </div>
        </form>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default page;
