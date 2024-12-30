import Image from "next/image";
import fb from "@/app/public/about/ant-design_facebook-filled.svg";
import insta from "@/app/public/about/instagram.svg";
import twitter from "@/app/public/about/twitter.svg";
import linkedin from "@/app/public/pricing/Vector (3).svg";

export default function Cta() {
  return (
    <div className="mx-auto w-full max-w-[1200px] font-bold px-6 sm:px-8 py-12">
      {/* For Mobile Title */}
      <h1 className="block md:hidden text-3xl font-extrabold text-[#252b42] text-center">
        <span className="block sm:inline">Start your</span> <br />
        <span>14 days free trial</span>
      </h1>

      {/* For Desktop Title */}
      <h1 className="hidden md:block text-3xl font-extrabold text-[#252b42] text-center">
        Start your 14 days free trial
      </h1>

      {/* For Mobile Description */}
      <p className="block md:hidden text-[#737373] text-xs mt-6 text-center">
        <span className="ml-[10px]">Met minim Mollie non desert Alamo est sit</span> <br />
        <span className="ml-[20px]">cliquey dolor do met sent. RELIT official</span> <br />
        <span className="ml-[50px]">consequent.</span>
      </p>

      {/* For Desktop Description */}
      <p className="hidden md:block text-[#737373] text-xs mt-6 text-center">
        Met minim Mollie non desert Alamo est sitcliquey dolor <br />
        <span className="ml-[40px]">do met sent. RELIT official consequent.</span>
      </p>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-8">
        <button className="py-4 px-10 bg-[#23A6F0] text-white font-semibold rounded-lg hover:bg-[#1a94d5] transition-colors">
          Try for free
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-5 mt-6">
        <Image
          src={twitter}
          alt="Twitter"
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
        />
        <Image
          src={fb}
          alt="Facebook"
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
        />
        <Image
          src={insta}
          alt="Instagram"
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
        />
        <Image
          src={linkedin}
          alt="LinkedIn"
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
        />
      </div>
    </div>
  );
}
