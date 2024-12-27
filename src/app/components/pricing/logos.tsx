import Image from "next/image"
import logo1 from "@/app/public/productpage/col-md-3.svg"
import logo2 from "@/app/public/productpage/col-md-3 (1).svg"
import logo3 from "@/app/public/productpage/col-md-3 (2).svg"
import logo4 from "@/app/public/productpage/fa-brands_stripe.svg"
import logo5 from "@/app/public/productpage/col-md-3 (3).svg"
import logo6 from "@/app/public/productpage/col-md-3 (4).svg"

export default function Logos2 (){
    return(
        <div className="ml-[150px] h-auto w-full sm:ml-0 font-bold">
            <p className="block md:hidden text-[#737373]  mt-12 ml-[70px] "><span>Trusted By Over 4000</span> <br /><span className="ml-6"> Big Companies</span></p>
            <p className="hidden md:block text-[#737373]  mt-12 ml-[450px]  ">Trusted By Over 4000 Big Companies</p>
        <div className=" flex sm:flex-row sm:gap-10 sm:ml-[140px] sm:items-center flex-col items-start gap-32 ml-[70px] mt-4 mb-20">
            <Image src={logo1} alt="1" className="sm:w-[130px] mt-12"/>
            <Image src={logo2} alt="2" className="sm:w-[100px] mt-12"/>
            <Image src={logo3} alt="3" className="sm:w-[130px]"/>
            <Image src={logo4} alt="4" className="sm:w-[100px] mt-12"/>
            <Image src={logo5} alt="5" className="sm:w-[100px] mt-12"/>
            <Image src={logo6} alt="6" className="sm:w-[100px] mt-12"/>
        </div>
        </div>
    )
}