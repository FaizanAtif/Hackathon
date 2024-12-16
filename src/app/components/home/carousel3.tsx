import pic from "@/app/public/homepage/asian-woman-man-with-winter-clothes 1 (1).svg"
import Image from "next/image"

export default function Caro2() {
    return (
    <div className="text-black h-auto w-full bg-[#ffff]">
      <div className="bg-[#1cb9d400]  w-[1044px] h-[651px] ml-52 flex justify-between gap-32">
            <div>
             <Image src={pic} alt="pic" height={774} width={725} />
            </div>
            <div className="flex flex-col items-start gap-10 ">
            <h6 className="pt-11 text-[#BDBDBD] font-bold mt-28">SUMMER 2024</h6>
            <h1 className="text-4xl font-bold text-[#252B42]">Part of the Neural 
            <br />Universe</h1>
            <p className="text-xl font-normal text-[#737373]">We know how large objects will act, 
            but things <br />on a small scale.We know how large <br /> objects will act</p>
            <div className="flex items-center justify-between gap-1">
            <button className="bg-[#2DC071] py-5 px-10 text-sm font-bold border-[#2dc071] border text-white transition-colors duration-300 hover:bg-white hover:text-[#2DC071]">
              SHOP NOW
            </button>
            <button className="border border-[#2DC071] py-5 px-8 text-sm font-bold text-[#2DC071] transition-colors duration-300 hover:bg-black hover:bg-opacity-80 hover:border-black hover:text-white">
              READ MORE
            </button>
</div>
            </div>
        </div>
    </div>
    )
  }
