import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";

const page = () => {
  return (
    <>
      <NavBar />
      <main>
        <h2 className="text-[4.2rem] text-center font-bold mb-[32px]">
          OUR STORY
        </h2>
        <section className="bg-[url('/about-bg-2.png')] bg-cover bg-center w-full h-screen flex items-center justify-end p-[16px]">
          <div className="flex flex-col justify-between items-center w-[50rem] min-h-[50rem] max-h-[auto] bg-[#f3efe4b7] md:mr-[100px] ml-[50px] rounded-tl-full rounded-tr-full p-[3rem]">
            <div>
              <h3 className="text-[4.2rem] text-center mt-[18px] mb-[48px] font-medium">
                WHO IS <br /> SCENTOPIA?
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[1.8rem] text-justify font-medium">
                SCENTOPIA is an amazing fragrance studio that specializes in
                crafting premium soy candles and home fragrance goods using
                handmade craftsmanship and quality materials! The studio was
                established in 2018 and is located in beautiful and sunny
                Kelantan.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center bg-[#9fb6c4] w-full">
            <img src="./strap.svg" alt="Strap" />
          </div>
        </section>
        <section className="bg-[url('/about-bg-3.png')] bg-cover bg-center w-full h-screen flex items-center justify-end p-[16px]">
          <div className="flex flex-col justify-between items-center w-[50rem] min-h-[50rem] max-h-[auto] bg-[#f3efe4b7] md:mr-[100px] ml-[50px] rounded-tl-full rounded-tr-full p-[3rem]">
            <div>
              <h3 className="text-[4.2rem] text-center mt-[18px] mb-[4.8rem] font-medium">
                KIND TO <br /> OUR EARTH
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[1.8rem] text-justify font-medium">
                Our main ideas are fine craftsmanship, premium materials, and
                environmentally friendly, sustainable business methods. Our
                reasonably priced, eco-friendly goods are made with premium
                ingredients and presented in eye-catching packaging, reflecting
                our appreciation for simplicity, design, and functionality.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center bg-[#9fb6c4] w-full h-[79px]">
            <img src="./strap.svg" alt="Strap" />
          </div>
        </section>
        <section className="bg-[url('/about-bg-4.png')] bg-cover bg-center w-full h-screen flex items-center justify-end p-[16px]">
          <div className="flex flex-col justify-between items-center w-[50rem] min-h-[50rem] max-h-[auto] bg-[#f3efe4b7] md:mr-[100px] ml-[50px] rounded-tl-full rounded-tr-full p-[3rem]">
            <div>
              <h3 className="text-[4.2rem] text-center mt-[18px] mb-[48px] font-medium">
                MAKE YOUR <br /> DAY GOOD
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[1.8rem] text-justify font-medium">
                We take great pleasure in producing a custom line of fragrances
                that have been chosen and tested to have the best possible
                formulation of natural extracts, essential oils, and fine
                fragrance oils that are phthalate-free and manufactured in
                accordance with IFRA standards. Our soy candles and home scents
                are intended to brighten your day, add coziness to any setting,
                and complement your home décor.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center bg-[#9fb6c4] w-full h-[79px]">
            <img src="./strap.svg" alt="Strap" />
          </div>
        </section>

        <section>
          <div className="max-w-[1300px] mx-auto">
            <h2 className="text-[4.2rem] font-medium my-[4.2rem] text-center">
              MEET THE TEAM BEHIND SCENTOPIA!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[4.2rem] mx-[36px] mb-[100px]">
              <div>
                <img src="/member-1.png" alt="Member Image" />
                <h3 className="text-[2.4rem] pl-[8px] font-medium pt-[1.2rem]">
                  Amanda (She/Her)
                </h3>
                <p className="text-[1.8rem] pl-[8px]">Founder</p>
              </div>
              <div>
                <img src="/member-2.png" alt="Member Image" />
                <h3 className="text-[2.4rem] font-medium pl-[8px] pt-[1.2rem]">
                  Peterson (He/Him)
                </h3>
                <p className="text-[1.8rem] pl-[8px]">Marketing Manager</p>
              </div>
              <div>
                <img src="/member-3.png" alt="Member Image" />
                <h3 className="text-[2.4rem] font-medium pl-[8px] pt-[1.2rem]">
                  Lauren (She/Her)
                </h3>
                <p className="text-[1.8rem] pl-[8px]">Production & Retail</p>
              </div>
              <div>
                <img src="/member-4.png" alt="Member Image" />
                <h3 className="text-[2.4rem] pl-[8px] font-medium pt-[1.2rem]">
                  Erica (She/Her)
                </h3>
                <p className="text-[1.8rem] pl-[8px]">
                  Graphic Design & Marketing
                </p>
              </div>
              <div>
                <img src="/member-5.png" alt="Member Image" />
                <h3 className="text-[2.4rem] pl-[8px] font-medium pt-[1.2rem]">
                  Kloee (He/Him)
                </h3>
                <p className="text-[1.8rem] pl-[8px]">Wholesale Manager</p>
              </div>
              <div>
                <img src="/member-6.png" alt="Member Image" />
                <h3 className="text-[2.4rem] pl-[8px] font-medium pt-[1.2rem]">
                  Andrew (He/Him)
                </h3>
                <p className="text-[1.8rem] pl-[8px]">
                  Client Service & Community Service
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-[16px]">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-col justify-center items-center gap-[3.2rem] mb-[4.2rem]">
              <h1 className="text-[4.2rem] font-bold">FAQ</h1>
              <img className="" src="/about-bg-1.png" alt="Image" />
            </div>
            <div>
              <h2 className="text-[4.2rem] font-bold underline underline-offset-4">
                ABOUT PRODUCTS
              </h2>
              <h3 className="text-[1.8rem] font-[650] py-[18px]">
                1. Are your candles made with safe ingredients?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                Yes, all our candles are made with premium soy wax, which is
                biodegradable, Eco-friendly and less likely to cause allergies.
                We use a combination of fragrance and essential oils that are
                phthalate-free and comply with IFRA (International Fragrance
                Association) standards. Our fragrance and wax are non-toxic,
                vegan, and cruelty-free. Pregnant women should use their own
                discretion.
              </p>
              <h3 className="text-[1.8rem] font-bold py-[18px]">
                2. Do your products meet vegan standards?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                Soy wax is an excellent vegan alternative because most paraffin
                candles can be harmful to your health and the environment.
              </p>
              <h3 className="text-[1.8rem] font-bold py-[18px]">
                3. Are your products halal / contain alcohol?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                Our candles are made from Eco-friendly soy wax and a blend of
                essential and fragrance oils. We do not use alcohol or alcoholic
                beverages in the production of our candles. Our products are not
                halal certified.
              </p>
              <h3 className="text-[1.8rem] font-bold py-[18px]">
                4. Where do you obtain your materials from?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                We obtain them from suppliers overseas to ensure that our soy
                candles meet the required standards.
              </p>
            </div>
            <div>
              <h2 className="text-[4.2rem] font-bold underline underline-offset-4 pt-[42px]">
                ABOUT CUSTOMIZATION
              </h2>
              <h3 className="text-[1.8rem] font-[650] py-[18px]">
                1. Do you offer custom scents?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                Yes, we do. We can create custom scents with advance notice. It
                typically takes up to 6 months to create a custom scent, and a
                minimum quantity is required. For more information, please email
                scentopiaco.com.
              </p>
              <h3 className="text-[1.8rem] font-bold py-[18px]">
                2. Do you offer sponsorship / sponsor candles for events?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                As a small company, we are only able to donate maximum of 200
                candles for events. If you would like to purchase our candles at
                bulk prices, please email us at scenttopiaco.com.
              </p>
            </div>
            <div>
              <h2 className="text-[4.2rem] font-bold underline underline-offset-4 pt-[42px]">
                ABOUT PAYMENT
              </h2>
              <h3 className="text-[1.8rem] font-[650] py-[18px]">
                1. What are your payment options?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                Currently we are accepting payments through online banking and
                Touch & Go. All orders unpaid will be canceled within 24 hours.
              </p>
              <h3 className="text-[1.8rem] font-bold py-[18px]">
                2. I could not find your banking details upon checkout.
              </h3>
              <p className="text-[1.6rem] font-medium">
                Bank: CIMB Bank <br />
                Account Name: Scentopia Candle Co <br />
                Account Number: 56810-58934
              </p>
            </div>
            <div>
              <h2 className="text-[4.2rem] font-bold underline underline-offset-4 pt-[42px]">
                ABOUT SHIPPING
              </h2>
              <h3 className="text-[1.8rem] font-[650] py-[18px]">
                1. How soon can i expect my order?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                After placing an order, please allow 1-2 business days for
                shipping. Our candles are hand-poured, bottled, labeled, and
                shipped with care, which may result in a slightly longer
                production time compared to mass-production candles. We take
                pride in crafting each candle with love to ensure a fresh and
                indulgent olfactory experience for you.
              </p>
              <h3 className="text-[1.8rem] font-bold py-[18px]">
                2. Do you provide a gift wrapping service?
              </h3>
              <p className="text-[1.6rem] text-justify font-medium">
                We do not offer gift wrapping as we aim to be an Eco-conscious
                company and reduce waste.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default page;
  