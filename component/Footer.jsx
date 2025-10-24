const Footer = () => {
  return (
    <>
      <footer className="p-[16px]">
        <div className="grid justify-center items-center gap-[16px] max-w-[1300px] mx-auto my-[3.8rem] py-[3.2rem] border border-black">
          <h3 className="text-[2.8rem] font-medium">FOLLOW US</h3>
          <div className="flex justify-center items-center gap-[16px]">
            <a href="#">
              <img
                className="w-[32px]"
                src="/insta-logo.svg"
                alt="Instagram icon"
              />
            </a>
            <a href="#">
              <img
                className="w-[32px]"
                src="/fb-logo.svg"
                alt="Facebook icon"
              />
            </a>
            <a href="#">
              <img className="w-[32px]" src="/yt-logo.svg" alt="Youtube icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
