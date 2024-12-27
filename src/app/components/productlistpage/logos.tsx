import Image from "next/image"
import logo1 from "@/app/public/productpage/col-md-3.svg"
import logo2 from "@/app/public/productpage/col-md-3 (1).svg"
import logo3 from "@/app/public/productpage/col-md-3 (2).svg"
import logo4 from "@/app/public/productpage/fa-brands_stripe.svg"
import logo5 from "@/app/public/productpage/col-md-3 (3).svg"
import logo6 from "@/app/public/productpage/col-md-3 (4).svg"

export default function Logos (){
    return(
        <div className="h-auto w-full flex sm:flex-row sm:gap-10 sm:ml-[60px] sm:items-center flex-col items-start gap-32 ml-[190px] mt-10 mb-20">
            <Image src={logo1} alt="1" className="sm:w-[140px]"/>
            <Image src={logo2} alt="2" className="sm:w-[140px]"/>
            <Image src={logo3} alt="3" className="sm:w-[140px]"/>
            <Image src={logo4} alt="4" className="sm:w-[140px]"/>
            <Image src={logo5} alt="5" className="sm:w-[140px]"/>
            <Image src={logo6} alt="6" className="sm:w-[130px]"/>
        </div>
    )
}