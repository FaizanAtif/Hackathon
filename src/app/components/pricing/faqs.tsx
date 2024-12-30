import Image from "next/image";
import arrow from "@/app/public/pricing/Vector (2).svg";

export default function Faqs() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 sm:px-8 py-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl text-[#252b42] font-extrabold text-center">
        Pricing FAQs
      </h1>

      {/* For Mobile Description */}
      <p className="block md:hidden text-base sm:text-xl text-[#737373] mt-6 text-center">
        <span className="ml-[10px]">We focus on ergonomics and meeting</span>
        <br />
        <span className="ml-[20px]">you where you work. It's only</span>
        <br />
        <span className="ml-[40px]">a keystroke away.</span>
      </p>

      {/* For Desktop Description */}
      <p className="hidden md:block text-lg sm:text-xl text-[#737373] mt-6 text-center">
        Problems trying to resolve the conflict between
        <br />
        <span className="ml-[30px]">the two major realms of Classical physics</span>
      </p>

      {/* FAQ Sections */}
      <div className="mt-10 space-y-8 sm:space-y-12">
        {/* Use of for...of loop */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-6">
            {/* Question */}
            <div className="flex items-center justify-center gap-3">
              <Image src={arrow} alt="arrow" />
              <h1 className="text-[#252b42] text-xl sm:text-2xl font-semibold">
                {`FAQ ${index + 1}: Lorem ipsum dolor sit?`}
              </h1>
            </div>

            {/* Answer (Mobile Version) */}
            <p className="block md:hidden text-base text-[#737373] ml-8">
              Met minim Mollie non desert
              <br />
              Alamo est sit cliquey dolor do met sent.
              <br />
              RELIT official consequent door ENIM RELIT Mollie.
            </p>

            {/* Answer (Desktop Version) */}
            <p className="hidden md:block text-lg sm:text-xl text-[#737373] ml-8">
              Met minim Mollie non desert Alamo est sit cliquey
              <br />
              dolor do met sent. RELIT official consequent door ENIM RELIT
              <br />
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        ))}
      </div>

      {/* Support Contact */}
      <div className="mt-12 text-center">
        <p className="block md:hidden text-lg text-[#737373]">
          Haven’t got your answer?
          <br />
          <span className="text-[#252b42] font-bold">Contact our support</span>
        </p>
        <p className="hidden md:block text-lg text-[#737373]">
          Haven’t got your answer?{" "}
          <span className="text-[#252b42] font-bold">Contact our support</span>
        </p>
      </div>
    </div>
  );
}
