import Image from "next/image"
import card  from "@/app/public/about/08dd0c5a04f10121bc68f6cb9ff0d63d.jpg"
import pause  from "@/app/public/about/Vector copy.svg"

export default function Card1 () {
    return(
        <div className="h-auto w-[1500px] ml-[170px] sm:ml-[230px]">
            <Image src={card} alt="card" className="h-[210px] rounded-xl w-[210px] sm:h-[400px] sm:w-[700px]"/>
            <div className=" ">
            <h1 className="absolute top-[1725px] left-[255px] sm:top-[970px] sm:left-[545px] flex flex-row items-center justify-center :p-2 h-[40px] w-[40px] sm:p-4 sm:h-[60px] sm:w-[60px] rounded-full bg-[#23A6F0]"><Image src={pause} alt="pause" /></h1>
            
        </div>
        </div>
    )
}