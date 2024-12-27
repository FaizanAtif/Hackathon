import Image from "next/image";
import arrow from "@/app/public/contact/Arrow 2@2x.svg"

export default function Cta3 () {
    return(
        <div className="text-[#252b42] flex flex-col items-start gap-5 mt-10 font-bold h-auto w-[1000px] ml-[150px] sm:ml-[430px]">
            <Image src={arrow} alt="arrow" className="ml-[85px]"/>
            <p className="text-sm ml-[30px]">WE Can't WAIT TO MEET YOU</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold ml-[50px]">Let’s Talk</h1>
            <button className="flex items-center justify-center mb-16 py-4 px-8 ml-[40px] text-white bg-[#23A6F0]">Try it free now</button>
        </div>
    )
}