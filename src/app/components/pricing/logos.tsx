import Image from "next/image";
import logo1 from "@/app/public/productpage/col-md-3.svg";
import logo2 from "@/app/public/productpage/col-md-3 (1).svg";
import logo3 from "@/app/public/productpage/col-md-3 (2).svg";
import logo4 from "@/app/public/productpage/fa-brands_stripe.svg";
import logo5 from "@/app/public/productpage/col-md-3 (3).svg";
import logo6 from "@/app/public/productpage/col-md-3 (4).svg";

export default function Logos2() {
  return (
    <div className="p-16 mx-auto w-full max-w-screen-xl py-12 px-6">
      {/* Trusted By Section */}
      <div className="text-center sm:text-left mb-8">
        <p className="text-[#737373] text-lg sm:text-xl font-semibold mb-4">
          Trusted By Over <span className="text-[#23A6F0]">4000</span> Big Companies
        </p>
        <p className="hidden sm:block text-[#737373] text-base sm:text-lg font-semibold sm:text-right">
          Trusted By Over 4000 Big Companies
        </p>
      </div>

      {/* Logos Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12 mt-6">
        <div className="flex justify-center hover:scale-105 transition-transform">
          <Image src={logo1} alt="Logo 1" className="w-[120px] sm:w-[130px]" />
        </div>
        <div className="flex justify-center hover:scale-105 transition-transform">
          <Image src={logo2} alt="Logo 2" className="w-[100px] sm:w-[100px]" />
        </div>
        <div className="flex justify-center hover:scale-105 transition-transform">
          <Image src={logo3} alt="Logo 3" className="w-[120px] sm:w-[130px]" />
        </div>
        <div className="flex justify-center hover:scale-105 transition-transform">
          <Image src={logo4} alt="Logo 4" className="w-[100px] sm:w-[100px]" />
        </div>
        <div className="flex justify-center hover:scale-105 transition-transform">
          <Image src={logo5} alt="Logo 5" className="w-[100px] sm:w-[100px]" />
        </div>
        <div className="flex justify-center hover:scale-105 transition-transform">
          <Image src={logo6} alt="Logo 6" className="w-[100px] sm:w-[100px]" />
        </div>
      </div>
    </div>
  );
}
