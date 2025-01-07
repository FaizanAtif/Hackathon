import Image from "next/image";
import contactlogo from "@/app/public/contact/Vector (4).svg";
import locationlogo from "@/app/public/contact/Vector (5).svg";
import messagelogo from "@/app/public/contact/Vector (6).svg";

export default function Contact2() {
  return (
    <div className="text-[#252b42] font-bold w-full max-w-[1000px] mt-10 mx-auto px-4 sm:px-8">
      <h1 className="text-xs text-center sm:text-left">VISIT OUR OFFICE</h1>

      <p className="block md:hidden text-3xl text-center">
        We help small <br />
        <span className="ml-3">businesses</span> <br />
        with big ideas
      </p>

      <p className="hidden md:block text-center sm:text-left">
        We help small businesses <br />
        <span className="">with big ideas</span>
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 mt-12">
        {/* 1st div (Card) */}
        <div className="flex flex-col items-start w-full sm:w-[270px] gap-5 mb-8 sm:mb-0 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src={contactlogo}
            alt="contact logo"
            className="mx-auto sm:mx-0"
          />
          <div className="text-center sm:text-left">
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm">georgia.young@ple.com</p>
          </div>
          <p className="text-xl text-center sm:text-left">Get Support</p>
          <button className="flex items-center justify-center py-4 px-6 border-2 border-[#23A6F0] text-[#23A6F0] mx-auto sm:mx-0 hover:bg-[#23A6F0] hover:text-white transition-colors duration-300">
            Submit Request
          </button>
        </div>

        {/* 2nd div (Card) */}
        <div className="flex flex-col bg-[#252b42] w-full sm:w-[270px] text-white items-start gap-5 mb-8 sm:mb-0 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src={locationlogo}
            alt="location logo"
            className="mx-auto sm:mx-0"
          />
          <div className="text-center sm:text-left">
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm">georgia.young@ple.com</p>
          </div>
          <p className="text-xl text-center sm:text-left">Get Support</p>
          <button className="flex items-center justify-center py-4 px-6 border-2 border-[#23A6F0] text-[#23A6F0] mx-auto sm:mx-0 hover:bg-[#23A6F0] hover:text-white transition-colors duration-300">
            Submit Request
          </button>
        </div>

        {/* 3rd div (Card) */}
        <div className="flex flex-col items-start w-full sm:w-[270px] gap-5 mb-8 sm:mb-0 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <Image
            src={messagelogo}
            alt="message logo"
            className="mx-auto sm:mx-0"
          />
          <div className="text-center sm:text-left">
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm">georgia.young@ple.com</p>
          </div>
          <p className="text-xl text-center sm:text-left">Get Support</p>
          <button className="flex items-center justify-center py-4 px-6 border-2 border-[#23A6F0] text-[#23A6F0] mx-auto sm:mx-0 hover:bg-[#23A6F0] hover:text-white transition-colors duration-300">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
