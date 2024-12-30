import Image from "next/image";
import pic from "@/app/public/about/2eeaef7ecedd3954687aefbdb6236bb6.jpg";

export default function Testimonial() {
  return (
    <div className="h-auto w-full px-4 sm:px-8 font-bold flex flex-col items-center sm:items-start sm:flex-row sm:justify-start gap-6 ml-44 sm:gap-8">
      {/* Left Column - Text */}
      <div className="bg-[#2A7CC7] text-white w-full sm:w-[690px] sm:h-[450px] flex flex-col items-center sm:items-start gap-6 p-6 sm:p-10">
        <h1 className="text-xs text-center sm:text-left mt-10 sm:mt-[150px]">
          WORK WITH US
        </h1>
        <h1 className="text-2xl text-center block md:hidden">
          <span>Now Let’s </span>
          <br />
          <span>grow Yours</span>
        </h1>
        <h1 className="text-2xl text-center hidden md:block">
          <span>Now Let’s </span>
          <span>grow Yours</span>
        </h1>
        <p className="text-xs block md:hidden mt-4">
          <span className="ml-[8px]">The gradual accumulation of</span> <br />
          <span className="ml-[4px]">information about atomic and</span>
          <br />
          <span className="ml-[1px]">small-scale behavior during the</span>
          <br />
          <span className="ml-[7px]">first quarter of the 20th</span>
        </p>
        <p className="text-xs hidden md:block ml-[150px] mt-4">
          <span>The gradual accumulation of</span>
          <span> information about atomic and</span>
          <br />
          <span>small-scale behavior during the</span>
          <span> first quarter of the 20th</span>
        </p>
        <button className="bg-[#2A7CC7] border-white border py-3 px-7 mt-6 sm:ml-[150px] text-xs">
          Button
        </button>
      </div>

      {/* Right Column - Image */}
      <div className="w-full sm:w-[400px] sm:h-[490px]">
        <Image
          src={pic}
          alt="Testimonial Image"
          className="h-auto w-full sm:w-[400px] sm:h-[490px]"
        />
      </div>
    </div>
  );
}
