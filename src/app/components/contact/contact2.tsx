import Image from "next/image";
import contactlogo from "@/app/public/contact/Vector (4).svg"
import locationlogo from "@/app/public/contact/Vector (5).svg"
import messagelogo from "@/app/public/contact/Vector (6).svg"

export default function Contact2 () {
    return(
        <div className="text-[#252b42] font-bold w-[1000px] mt-10 h-auto ml-[130px] sm:ml-16">
            <h1 className="text-xs ml-[90px] sm:ml-0 sm:text-center">VISIT OUR OFFICE</h1>
            <p className="block md:hidden text-3xl ml-[40px]">We help small <br />
               <span className="ml-3"> businesses</span>  <br />
                  with big ideas</p>
            <p className="hidden md:block text-center">We help small businesses <br />
            <span className=""> with big ideas </span></p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-start sm:gap-1 ">
                {/* 1st div */}
                <div className="flex flex-col items-start  w-[270px] mt-12 sm:mt-[75px] sm:ml-[70px] gap-5">
                    <Image src={contactlogo} alt="vector 4" className="ml-[105px] mt-5" />
                    <div className="ml-[45px]"><p className="text-sm">georgia.young@example.com</p>
                    <p className="text-sm ml-[17px]">georgia.young@ple.com</p></div>
                    <p className="text-xl ml-[79px]">Get Support</p>
                    <button className="flex ml-[66px] items-center justify-center mb-16 py-4 px-3  border-2 border-[#23A6F0] text-[#23A6F0] ">Submit Request</button>
                </div>
                {/* 2nd div */}
                <div className="flex flex-col bg-[#252b42] w-[270px] sm:w-[300px] text-white items-start mt-12  gap-5">
                    <Image src={locationlogo} alt="vector 4" className="ml-[115px] sm:ml-[125px] mt-5 sm:mt-14" />
                    <div className="ml-[45px] sm:ml-[55px]"><p className="text-sm">georgia.young@example.com</p>
                    <p className="text-sm ml-[17px]">georgia.young@ple.com</p></div>
                    <p className="text-xl ml-[79px] sm:ml-[93px]">Get Support</p>
                    <button className="flex ml-[66px] items-center sm:ml-[78px] justify-center mb-16 py-4 px-3  border-2 border-[#23A6F0] text-[#23A6F0] ">Submit Request</button>
                </div>
                {/* 3rd div */}
                <div className="flex flex-col items-start mt-12 gap-5 w-[270px] sm:mt-[75px]">
                    <Image src={messagelogo} alt="vector 4" className="ml-[105px] mt-5" />
                    <div className="ml-[45px]"><p className="text-sm">georgia.young@example.com</p>
                    <p className="text-sm ml-[17px]">georgia.young@ple.com</p></div>
                    <p className="text-xl ml-[79px]">Get Support</p>
                    <button className="flex ml-[66px] items-center justify-center mb-16 py-4 px-3  border-2 border-[#23A6F0] text-[#23A6F0] ">Submit Request</button>
                </div>
            </div>
        </div>
    )
}