"use client"

import { useState } from "react"
import Image from "next/image"
import pic1 from "@/app/public/productpage1/d885dbe3ab31e6f0c95ec64b26599246.jpg"
import pic2 from "@/app/public/productpage1/0767f5620ba9dda5365be14f4ce71741.jpg"
import heart from "@/app/public/productpage1/like.png"
import basket from "@/app/public/productpage1/basket.svg"
import more from "@/app/public/productpage1/more.svg"


export default function Product42 () {

  const images=[pic1,pic2]
  const [currentindex,setcurrentindex] = useState<number>(0)
  
  const handlenext = () => {
    setcurrentindex((prev:number)=>(prev === images.length -1 ? 0 : prev + 1 ))
  }
  
  const handleprev = () => {
    setcurrentindex((prev:number)=>(prev === 0 ? images.length -1 : prev - 1 ))
  }

  return(
    <div className="h-auto w-[1500px] ml-[180px] sm:ml-[40px] text-black flex flex-col font-bold sm:flex-row sm:justify-start sm:gap-[110px] items-start gap-5">
    <div className="mt-10">
      <Image src={images[currentindex]} alt="shuffle" height={5000} width={5100} className="w-[220px] sm:w-[530px] sm:h-[350px] h-[180px] object-cover transition-all duration-500 "/>
      {/* Left side arrow */}
      <button 
      onClick={handleprev}
      className="absolute top-[1040px]  sm:top-[410px]  transform   bg-black bg-opacity-0 text-white p-1 text-2xl rounded-full">
      {/* &#8592; */}
      &lt;

      </button>
      <button 
      onClick={handlenext}
      className="absolute top-[1040px] sm:top-[400px] right-[-113px] sm:right-[568px] transform  bg-black bg-opacity-0 text-white text-2xl p-1 rounded-full">
      {/* &#8594; */}
      &gt;

      </button>
      <div className=" flex justify-start gap-3 mt-5">
      <Image src={pic2} alt="pic2" className="h-[50px] w-[50px]"/>
      <Image src={pic1} alt="pic1" className="h-[50px] w-[50px]"/>
    </div>
    </div>
    
    <div className="sm:text- sm:mt-14 ml-[20px] sm:ml-0 ">
      <h1>Floating Phone</h1>
      <header className=" text-yellow-400 flex justify-start gap-3 ">
        <p className="">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
        <p className="text-[#737373]">10 Reviews</p>
      </header>
      <h1 className="mt-2">$1,139.33</h1>
      <header className="flex justify-start gap-3 ">
        <p className="text-[#737373]">Availability</p>
        <p className="text-[#737373]">:</p>
        <p className="text-[#23A6F0]">in stock</p>
      </header>
      <p className="text-xs text-[#858585] mt-5 flex-wrap hidden md:block">
        Met minim Mollie non desert 
        Alamo est sit cliquey dolor do 
        met sent. <br /> RELIT official  consequent 
        door ENIM RELIT Mollie. <br /> Excitation 
        venial consequent sent nostrum met.</p>
        <p className="text-xs text-[#858585] mt-5 flex-wrap block md:hidden">
        Met minim Mollie non desert <br />
        Alamo est sit cliquey dolor do <br />
        met sent.  RELIT official  consequent <br />
        door ENIM RELIT Mollie.  Excitation <br />
        venial consequent sent nostrum met.</p>
        <div className="flex justify-start gap-2 mt-14">
          <p className="p-2 bg-[#23A6F0] h-[15px] w-[15px] rounded-full"></p>
          <p className="p-2 bg-[#2DC071] h-[15px] w-[15px] rounded-full"></p>
          <p className="p-2 bg-[#E77C40] h-[15px] w-[15px] rounded-full"></p>
          <p className="p-2 bg-[#252B42] h-[15px] w-[15px] rounded-full"></p>
        </div>
        <div className="flex justify-start items-center  mt-14">
          <button className="bg-[#23A6F0] py-3 px-3 text-white rounded-lg text-xs ">Select Options</button>
          <Image src={heart} alt="heart" />
          <Image src={basket} alt="basket" />
          <Image src={more} alt="more" />
        </div>
    </div>
    </div>
  )
};