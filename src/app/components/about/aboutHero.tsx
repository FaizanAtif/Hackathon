import Image from "next/image";
import pic from "@/app/public/about/45eb1f33b39fa1e1f6b0ddf5bb703345.png";

export default function Aboutstrt() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-10 max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left font-bold gap-6 sm:gap-16 mt-10 sm:mt-[100px] sm:w-[45%]">
        <h1 className="hidden md:block text-[#252B42] text-lg">ABOUT COMPANY</h1>
        <h5 className="font-extrabold text-2xl sm:text-5xl text-[#252B42]">ABOUT US</h5>
        <p className="hidden md:block text-[#737373] text-lg max-w-[400px]">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <p className="text-[#737373] text-base block md:hidden max-w-[350px]">
          We know how large objects will <br />
          act, but things on a small scale <br />
          just do not act that way.
        </p>
        <button className="py-5 px-8 bg-[#23A6F0] text-white rounded-md text-lg">
          Get Quote Now
        </button>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center items-center mt-10 sm:mt-0 s">
        <span className="absolute top-[70%] sm:top-[50%] left-[10%] sm:left-[20%] bg-violet-400 w-4 h-4 rounded-full"></span>
        <div className="w-800 max-w-[800px] sm:max-w-[800px]">
          <Image
            src={pic}
            alt="About us illustration"
            className="w-800 bject-contain"
          />
        </div>
        <span className="absolute bottom-[10%] sm:bottom-[20%] right-[10%] sm:right-[10%] bg-violet-400 w-4 h-4 rounded-full"></span>
      </div>
    </div>
  );
}