import Image from "next/image";
import arrow from "@/app/public/contact/Arrow 2@2x.svg";

export default function Cta3() {
  return (
    <div className="text-[#252b42] flex flex-col items-start gap-6 mt-16 font-bold w-full max-w-[1000px] mx-auto sm:px-8">
      {/* Arrow Image */}
      <Image src={arrow} alt="arrow" className="mx-auto sm:mx-0" />

      {/* Subtitle */}
      <p className="text-sm text-center sm:text-left sm:ml-[30px] text-[#737373]">
        WE CANT WAIT TO MEET YOU
      </p>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left sm:ml-[50px] text-[#252b42]">
        Lets Talk
      </h1>

      {/* Call-to-action Button */}
      <button className="flex items-center justify-center py-4 px-8 mx-auto sm:mx-0 text-white bg-[#23A6F0] rounded-lg shadow-lg hover:bg-[#1a8fbb] transition-all duration-300">
        Try it free now
      </button>
    </div>
  );
}
