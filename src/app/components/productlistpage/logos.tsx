import Image from "next/image";
import logo1 from "@/app/public/productpage/col-md-3.svg";
import logo2 from "@/app/public/productpage/col-md-3 (1).svg";
import logo3 from "@/app/public/productpage/col-md-3 (2).svg";
import logo4 from "@/app/public/productpage/fa-brands_stripe.svg";
import logo5 from "@/app/public/productpage/col-md-3 (3).svg";
import logo6 from "@/app/public/productpage/col-md-3 (4).svg";

export default function Logos() {
  return (
    <div className="h-auto w-full flex justify-center items-center flex-wrap gap-8 mx-auto mt-8 mb-8 max-w-screen-xl px-4">
      <Image src={logo1} alt="1" className="sm:w-[100px] w-[100px]" />
      <Image src={logo2} alt="2" className="sm:w-[100px] w-[100px]" />
      <Image src={logo3} alt="3" className="sm:w-[100px] w-[100px]" />
      <Image src={logo4} alt="4" className="sm:w-[100px] w-[100px]" />
      <Image src={logo5} alt="5" className="sm:w-[100px] w-[100px]" />
      <Image src={logo6} alt="6" className="sm:w-[100px] w-[100px]" />
    </div>
  );
}
