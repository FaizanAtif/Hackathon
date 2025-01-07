import Image from "next/image";
import hero from "@/app/public/contact/none.png";
import twitter from "@/app/public/about/twitter.svg";
import fb from "@/app/public/about/ant-design_facebook-filled.svg";
import insta from "@/app/public/about/instagram.svg";
import Linkedin from "@/app/public/pricing/Vector (3).svg";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-16 text-[#252b42] font-bold w-full max-w-[1000px] mx-auto sm:px-8 mt-16">
      {/* Left Section */}
      <div className="flex flex-col items-start gap-6 sm:mt-0 mt-10 sm:w-[45%]">
        <h1 className="text-xs sm:text-sm text-center sm:text-left ml-8 sm:ml-0 font-semibold">CONTACT US</h1>
        <p className="block md:hidden text-2xl text-center sm:text-left">
          Get in touch <br />
          <span className="ml-[34px]">today!</span>
        </p>
        <p className="hidden md:block text-4xl font-extrabold text-center sm:text-left">
          Get in touch <br />
          today!
        </p>

        {/* Description Text */}
        <p className="block md:hidden ml-8 text-[#737373] text-xs">
          <span className="ml-2">We know how large</span> <br />
          <span>objects will act, but things </span> <br />
          <span className="ml-2">on a small scale just do</span> <br />
          <span className="ml-4">not act that way.</span> <br />
        </p>
        <p className="hidden md:block text-xs text-[#737373] text-center sm:text-left">
          We know how large objects will act, <br />
          but things on a small scale
        </p>

        {/* Contact Information */}
        <div className="flex justify-start gap-3 sm:gap-6 text-sm sm:text-base ml-8 sm:ml-0">
          <h1>Phone:</h1>
          <h1 className="font-medium">+451 215 215</h1>
        </div>
        <div className="flex justify-start gap-3 sm:gap-6 text-sm sm:text-base ml-8 sm:ml-0">
          <h1>Fax:</h1>
          <h1 className="font-medium">+451 215 215</h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start gap-5 ml-8 sm:ml-0 mt-6">
          <Image src={twitter} alt="twitter" className="w-8 h-8 cursor-pointer hover:scale-105 transition-transform" />
          <Image src={fb} alt="fb" className="w-8 h-8 cursor-pointer hover:scale-105 transition-transform" />
          <Image src={insta} alt="insta" className="w-8 h-8 cursor-pointer hover:scale-105 transition-transform" />
          <Image src={Linkedin} alt="linkedin" className="w-8 h-8 cursor-pointer hover:scale-105 transition-transform" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center sm:justify-start mt-10 sm:mt-0 sm:w-[45%]">
        <Image
          src={hero}
          alt="hero image"
          className="h-[250px] sm:h-[500px] w-[300px] sm:w-[550px] rounded-lg shadow-xl hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
}
