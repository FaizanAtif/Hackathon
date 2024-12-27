import Image from "next/image";
import arrow from "@/app/public/pricing/Vector (2).svg"

export default function Faqs () {
    return (
        <div className="text-[#737373] h-auto w-[1000px] font-bold sm:ml-[0px] ml-[150px]">
                <h1 className="text-2xl sm:text-4xl ml-[65px] sm:ml-[470px] text-[#252b42] font-extrabold text-">Pricing FAQs</h1>
                {/* for mobile */}
                <p className="block md:hidden text-xs mt-5 ml-[45px]">
                <span className="ml-[]">We focus on ergonomics and meeting</span><br /> 
                <span className="ml-[23px]">you where you work. It's only </span><br />
                <span className="ml-[55px]">a keystroke away.</span><br />
                </p>
                {/* for desktop */}
                <p className="hidden md:block text-lg ml-[385px] mt-12">
                Problems trying to resolve the conflict between <br /> 
                <span className="ml-[30px]">the two major realms of Classical physics</span>
                </p>
                <div className="mt-10 flex flex-col items-start sm:ml-[80px] sm:flex-row sm:justify-start  w-[1000px] ">
                    {/* 1st div */}
                    <div className="flex flex-col items-start gap-[10px] w-full">
                    <div className="flex flex-row items-center gap-3 mb-6 sm:mb-3">
                        <Image src={arrow} alt="arrow" />
                        <h1 className="text-[#252b42] text-lg">Work better together</h1>
                    </div>
                    <p className="block md:hidden text-xs ml-[24px]">
                    Met minim Mollie non desert <br /> 
                    Alamo est sit cliquey dolor do met sent. <br /> 
                    RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent <br />
                    sent nostrum met. <br />
                    </p>
                    <p className="hidden md:block  ml-[24px] text-xs">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> 
                    dolor do met sent. RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent sent <br /> 
                    nostrum met. 
                    </p>
                    {/* 2nd div */}
                    <div className="flex flex-row items-center gap-3 mb-6 sm:mb-3">
                        <Image src={arrow} alt="arrow" />
                        <h1 className="text-[#252b42] text-lg sm:w-auto w-[250px]">
                        OpenType features and 
                        Variable fonts
                        </h1>
                    </div>
                    <p className="block md:hidden text-xs ml-[24px]">
                    Met minim Mollie non desert <br /> 
                    Alamo est sit cliquey dolor do met sent. <br /> 
                    RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent <br />
                    sent nostrum met. <br />
                    </p>
                    <p className="hidden md:block  ml-[24px] text-xs">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> 
                    dolor do met sent. RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent sent <br /> 
                    nostrum met.
                    </p>
                    {/* 3rd div */}
                    <div className="flex flex-row items-center gap-3 mb-6 sm:mb-3">
                        <Image src={arrow} alt="arrow" />
                        <h1 className="text-[#252b42] text-lg">Start working faster today</h1>
                    </div>
                    <p className="block md:hidden text-xs ml-[24px]">
                    Met minim Mollie non desert <br /> 
                    Alamo est sit cliquey dolor do met sent. <br /> 
                    RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent <br />
                    sent nostrum met. <br />
                    </p>
                    <p className="hidden md:block  ml-[24px] text-xs">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> 
                    dolor do met sent. RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent sent <br /> 
                    nostrum met.
                    </p>
                    </div>
                    {/* 4th div */}
                    <div className="flex flex-col items-start gap-[10px]">
                    <div className="flex flex-row items-center gap-3 mb-6 sm:mb-3">
                        <Image src={arrow} alt="arrow" />
                        <h1 className="text-[#252b42] text-lg">Work at the speed of thought.</h1>
                    </div>
                    <p className="block md:hidden text-xs ml-[24px]">
                    Met minim Mollie non desert <br /> 
                    Alamo est sit cliquey dolor do met sent. <br /> 
                    RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent <br />
                    sent nostrum met. <br />
                    </p>
                    <p className="hidden md:block  ml-[24px] text-xs">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> 
                    dolor do met sent. RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent sent <br /> 
                    nostrum met.
                    </p>
                    {/* 5th div */}
                    <div className="flex flex-row items-center gap-3 mb-6 sm:mb-3">
                        <Image src={arrow} alt="arrow" />
                        <h1 className="text-[#252b42] text-lg">The Fastest way to organize</h1>
                    </div>
                    <p className="block md:hidden text-xs ml-[24px]">
                    Met minim Mollie non desert <br /> 
                    Alamo est sit cliquey dolor do met sent. <br /> 
                    RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent <br />
                    sent nostrum met. <br />
                    </p>
                    <p className="hidden md:block  ml-[24px] text-xs">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> 
                    dolor do met sent. RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent sent <br /> 
                    nostrum met.
                    </p>
                    {/* 6th div */}
                    <div className="flex flex-row items-center gap-3 mb-6 sm:mb-3">
                        <Image src={arrow} alt="arrow" />
                        <h1 className="text-[#252b42] text-lg">The Fastest way to navigate</h1>
                    </div>
                    <p className="block md:hidden text-xs ml-[24px]">
                    Met minim Mollie non desert <br /> 
                    Alamo est sit cliquey dolor do met sent. <br /> 
                    RELIT official consequent door ENIM RELIT <br />
                    Mollie. Excitation venial consequent <br />
                    sent nostrum met. <br />
                    </p>
                    <p className="hidden md:block  ml-[24px] text-xs">
                    Met minim Mollie non desert Alamo est sit cliquey <br /> 
                    dolor do met sent. RELIT official consequent door ENIM RELIT 
                    Mollie. Excitation venial consequent sent <br /> 
                    nostrum met.
                    </p>
                    </div>
                </div>
                    <p className="block md:hidden text-base mt-10 ml-[50px] ">
                    Haven’t got your answer? <br />
                    <span className="ml-[20px]">Contact our support</span>
                    </p>
                    <p className="hidden md:block text-base mt-10 ml-[395px] ">
                    Haven’t got your answer? Contact our support
                    </p>
        </div>
    )
}