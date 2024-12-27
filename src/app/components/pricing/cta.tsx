import Image from "next/image"
import fb from "@/app/public/about/ant-design_facebook-filled.svg"
import insta from "@/app/public/about/instagram.svg"
import twitter from "@/app/public/about/twitter.svg"
import linkedin   from  "@/app/public/pricing/Vector (3).svg"

export default function Cta () {
    return(
        <div className=" ml-[150px] mt-10 sm:mt-16 h-auto w-[1000px] font-bold sm:ml-[0px]">
           {/* for mobile */}
            <h1 className="block md:hidden text-3xl font-extrabold text-[#252b42]">
          <span className="ml-[50px]">Start your</span> <br />
                14 days free trial
            </h1>
            {/* for desktop */}
            <h1 className="hidden md:block ml-[350px] text-3xl font-extrabold text-[#252b42]">
             Start your 14 days free trial
            </h1>
            {/* for mobile */}
            <p className="block md:hidden text-[#737373] text-xs mt-7 ml-[20px]">
            <span className="ml-[2px]">Met minim Mollie non desert Alamo est sit</span> <br />
            <span className="ml-[13px]">cliquey dolor do met sent. RELIT official</span> <br />
            <span className="ml-[90px]">consequent.</span>
            </p>
            {/* for desktop */}
            <p className="hidden md:block text-[#737373] text-xs mt-7 ml-[420px]">
            Met minim Mollie non desert Alamo est sitcliquey dolor <br /> 
            <span className="ml-[40px]">do met sent. RELIT official consequent.</span>
            </p>
            <button className="flex items-center mt-7 justify-center mb-5 py-4 px-20 sm:ml-[450px] ml-[25px] bg-[#23A6F0]">Try for free</button>
        <div className="flex items-start justify-start gap-5 sm:ml-[455px] ml-[30px]">
            <Image src={twitter} alt="twiter" className="w-10"/>
            <Image src={fb} alt="fb" className="w-10"/>
            <Image src={insta} alt="insta" className="w-10"/>
            <Image src={linkedin} alt="in" className="w-10 mb-10"/>
        </div>
        </div>
    )
}