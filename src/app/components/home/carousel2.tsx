import pic from "@/app/public/homepage/shop-hero-2-png-picture-1.svg"
import Image from "next/image"

export default function Caro2() {
    return (
    <div className="text-[#252b42] sm:h-[640px] h-[400] w-[220px]   font-bold sm:w-[1140px] bg-[#23856D] sm:ml-0 ml-[200px]">
      <div className="bg-[#1cb9d400] sm:mt-12  sm:py-28  w-full h-auto  flex flex-col items-start  sm:flex-row  sm:justify-between">
            <div className="text-white flex flex-col items-start gap-5 sm:gap-16 sm:ml-[150px]">
            <h6 className="pt-11 text-white sm:ml-0 ml-[70px] font-bold sm:text-sm text-[10px]">SUMMER 2024</h6>
            <h1 className="sm:text-5xl font-bold text-2xl sm:ml-0 ml-[40px]">Vita Classic <br /> <span className="sm:ml-0 ml-[23px]">Product</span></h1>
            <p className=" block md:hidden font-normal text-[10px] ml-[45px]">We know how large objects <br />
            <span className="ml-[10px]">will act,but things on a </span><br />
            <span className="ml-[35px]">small scale</span></p>
            <p className="hidden md:block font-normal text-xs">We know how large objects will act, 
            We know <br /> how large  objects will act</p>
            <div className="flex flex-col items-start gap-3 sm:ml-0 ml-[45px] sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <h4 className="font-bold sm:text-2xl sm:ml-0 ml-[35px]">$16.48</h4>
            <button className="bg-[#2DC071]  sm:py-3 sm:px-10 py-2 px-3 text-sm sm:text-xl font-bold transform transition-transform duration-300 hover:scale-110">ADD TO CART</button>
            </div>
            </div>
            <div>
             <Image src={pic} alt="pic" className="sm:h-[520px]  h-[330px] w-[220px] sm:w-auto"/>
            </div>
        </div>
    </div>
    )
  }