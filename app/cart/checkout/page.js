import NavBar from "@/component/NavBar";

const page = () => {
  return (
    <>
      <NavBar />
      <section className="p-[16px] sm:h-screen">
        <h1 className="text-[4.2rem] font-bold text-center mb-6 tracking-wide">
          CHECK OUT
        </h1>
        <form className="max-w-[58rem] mx-auto px-[16px] flex flex-col gap-[8px]">
          <label className="text-[2rem] font-medium">Your Name</label>
          <input
            type="text"
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[1rem] rounded-[8px]"
          />
          <label className="text-[2rem] font-medium">Address</label>
          <input
            type="text"
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[2.4rem] rounded-[8px]"
          />
          <div className="flex gap-[8px]">
            <div>
              <label className="text-[2rem] font-medium">Pin Code</label>
              <input
                type="number"
                className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[2.4rem] rounded-[8px]"
              />
            </div>
            <div>
              <label className="text-[2rem] font-medium">City</label>
              <input
                type="text"
                className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[2.4rem] rounded-[8px]"
              />
            </div>
          </div>
          <label className="text-[2rem] font-medium">Phone No</label>
          <input
            type="tel"
            className="text-[2rem] p-[8px] bg-[#9fb6c4] mb-[1rem] rounded-[8px]"
          />
          <div className="text-center mb-[2rem]">
            <button
              type="submit"
              className="text-[2rem] font-medium py-[6px] px-[50px] rounded-[8px] hover:opacity-90 cursor-pointer text-white bg-[#7e747f]"
            >
              PAY NOW
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default page;
