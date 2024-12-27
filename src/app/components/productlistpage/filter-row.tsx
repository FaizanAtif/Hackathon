import Image from "next/image"
import square4 from "@/app/public/productpage/Vector.svg"
import list from "@/app/public/productpage/Vector (1).svg"
import V from "@/app/public/productpage/Vector (2).svg"
export default function Filter (){
    return(
        <div className="text-[#737373] h-auto w-full mt-10 text- sm:text-start flex sm:flex-row sm:items-start sm:gap-4 flex-col gap-10">
            <h1 className="ml-[200px] sm:ml-24 text-xl sm:text-base w-full">showing all 12 results</h1>
            <div className="flex items-center justify-between gap-14 sm:gap-14 sm:ml-0 ml-[37px] sm:mr-[60px]">
                <h1 className="ml-[170px] sm:ml-[10px]">Views:</h1>
               <Image src={square4} alt="squar4" />
               <Image src={list} alt="list" />
            </div>
            <div className="flex justify-between items-center gap-5 ml-[170px] w-full sm:mr-[40px]">
            <div className="flex gap-2 ml-[4px] sm:ml-[100px] ">
            <h1>popularity</h1> 
            <Image src={V} alt="V" /> 
            </div>
            <button className="py-3 px-10 bg-[#23A6F0] text-white">Filter</button>
        </div>
        </div>
    )
}