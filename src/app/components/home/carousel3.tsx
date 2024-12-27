import pic from "@/app/public/homepage/asian-woman-man-with-winter-clothes 1 (1).svg"
import Image from "next/image"

export default function Caro2() {
    return (
    <div className="text-black h-[850px] w-[520px] font-bold sm:ml-0 ml-[170px] sm:h-auto sm:w-full bg-[#ffff]">
      <div className="bg-[#1cb9d400]  sm:w-[1044px] sm:h-[651px]  flex sm:flex-row flex-col items-start gap-5 sm:justify-between   sm:gap-32">
            <div>
             <Image src={pic} alt="pic" height={774} width={725} className="hidden md:block h-[674px] w-[700px]" />
            </div>
            <div className="flex flex-col items-start gap-5 sm:gap-10 ">
            <h6 className="pt-11 text-[#BDBDBD] font-bold text-xs sm:text-base mt-12 sm:mt-28 sm:ml-0 ml-[95px]">SUMMER 2024</h6>
            <h1 className="hidden md:block text-4xl font-extrabold text-[#252B42]">Part of the Neural 
            <br />Universe</h1>
            <h1 className="block md:hidden text-2xl font-extrabold ml-[70px] text-[#252B42]">Part of the <br />
            <span  className="ml-[25px]">Neural</span> <br />
            <span className="ml-[13px]">Universe</span>
            </h1>
            <p className="hidden md:block text-xl font-normal text-[#737373]">We know how large objects will act, <br />
            but things on a small scale.We know how large </p>
            <p className="block md:hidden text-sm font-normal ml-[70px] text-[#737373]">
            <span className="ml-[8px]">We know how large</span> <br />
            <span className="ml-[10px]">objects will act, but</span> <br />
            things on a small scale. </p>
            <div className="flex flex-col gap-5 sm:items-center  sm:flex-row sm:justify-between sm:gap-1">
            <button className=" sm:bg-[#2DC071] bg-[#23A6F0] border-[#23A6F0] py-3 px-5 sm:ml-0 ml-[80px]  sm:py-5  sm:px-8 text-xs sm:text-sm sm:font-bold sm:border-[#2dc071] border text-white transition-colors duration-300 hover:bg-white hover:text-[#23A6F0] sm:hover:text-[#2DC071]">
              BUY NOW
            </button>
            <button className="border border-[#23A6F0] sm:border-[#2DC071] py-3 px-5 sm:ml-0 ml-[80px] sm:mb-0 mb-3 sm:py-5 sm:px-8  text-xs sm:text-sm sm:font-bold text-[#23A6F0] sm:text-[#2DC071] transition-colors duration-300 hover:bg-black hover:bg-opacity-80 hover:border-black hover:text-white">
              READ MORE
            </button>
</div>
            </div>
            <Image src={pic} alt="pic" height={774} width={725} className="block md:hidden h-[400] w-[250px] " />

        </div>
    </div>
    )
  }
