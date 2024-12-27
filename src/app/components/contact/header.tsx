import Image from "next/image";
import hero from "@/app/public/contact/none.png"
import twitter from "@/app/public/about/twitter.svg"
import fb from "@/app/public/about/ant-design_facebook-filled.svg"
import insta from "@/app/public/about/instagram.svg"
import Linkedin from "@/app/public/pricing/Vector (3).svg"

export default function Header () {
    return (
        <div className="flex text-[#252b42] font-bold h-auto w-[1000px] ml-[130px] sm:ml-[60px] flex-col items-start gap-4 sm:flex-row sm:justify-start sm:gap-[100px] " >
            <div className="flex flex-col items-start gap-5 mt-20">
                <h1 className="sm:text-sm text-xs sm:ml-0 ml-[95px]">CONTACT US</h1>
                <p className="block md:hidden text-2xl ml-[73px]">Get in touch <br /> <span className="ml-[34px]">today!</span></p>
                <p className="hidden md:block text-4xl font-extrabold">Get in touch <br /> today!</p>
                <p className="block md:hidden ml-[65px] text-[#737373] text-xs">
                <span className="ml-[18px]">We know how large</span> <br />
                <span>objects will act, but things </span> <br />
                <span className="ml-[8px]">on a small scale just do</span> <br /> 
                <span className="ml-[28px]">not act that way.</span> <br />
                </p>
                <p className="hidden md:block text-xs text-[#737373]">We know how large objects will act, <br />
                but things on a small scale</p>
                <div className="flex justify-start gap-2 sm:gap-6 text-sm ml-[70px] sm:ml-0 sm:text-base "><h1>Phone :</h1> <h1>+451 215 215</h1></div>
                <div className="flex justify-start gap-2 sm:gap-6 text-sm ml-[73px] sm:ml-0 sm:text-base "><h1>Fax :</h1> <h1>+451 215 215</h1></div>
                <div className="flex justify-start gap-5 ml-[60px] sm:ml-0 ">
            <Image src={twitter} alt="twitter" />
            <Image src={fb} alt="fb" />
            <Image src={insta} alt="insta" />
            <Image src={Linkedin} alt="linkedin" />
                </div>
            </div>
            <Image src={hero} alt="hero1" className="sm:h-[500px] h-[250px] w-[300px] mt-10 sm:w-[550px] sm:ml-[108px]" />
        </div>
    )
}