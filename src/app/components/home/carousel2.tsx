import pic from "@/app/public/homepage/shop-hero-2-png-picture-1.svg"
import Image from "next/image"

export default function Caro2() {
    return (
    <div className="text-black h-[714px] w-[1440px] bg-[#23856D]">
      <div className="bg-[#1cb9d400] mt-12  py-28 w-full h-auto ml-52 flex justify-between">
            <div className="text-white flex flex-col items-start gap-10 ">
            <h6 className="pt-11 text-white font-bold">SUMMER 2024</h6>
            <h1 className="text-7xl font-bold">Vita Classic <br /> Product</h1>
            <p className="text-xl font-normal">We know how large objects will act, 
            but things <br />on a small scale.We know how large <br /> objects will act</p>
            <div className="flex items-center justify-between gap-20">
              <h4 className="font-bold text-2xl">$16.48</h4>
            <button className="bg-[#2DC071] py-4 px-10 text-2xl font-bold">SHOP NOW</button>
            </div>
            </div>
            <div>
             <Image src={pic} alt="pic"/>
            </div>
        </div>
    </div>
    )
  }