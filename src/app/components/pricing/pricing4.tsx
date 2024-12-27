import Image from "next/image"
import tickmark1 from "@/app/public/pricing/icn-circle circle-xs secondary-color-1.svg"
import tickmark2 from "@/app/public/pricing/icn-circle circle-xs mute.svg"

export default function Pricing4 () {
    return (
        <div className="ml-[125px] w-[1000px] h-auto mt-16 font-bold flex flex-col items-start gap-10 sm:flex-row sm:justify-start sm:gap-[1px] sm:ml-[70px]">
         {/* 1st div */}
         <div className="flex flex-col items-start gap-8 border-[3px]  w-[320px] ml-2 sm:mt-10  border-[#23A6F0] sm:rounded-2xl">
            <h1 className="text-2xl ml-[125px] font-extrabold text-[#252B42] mt-16">FREE</h1>
            <p className=" ml-[85px] text-[#737373]">
            <span>Organize across all</span> <br /> 
            <span className="ml-[25px]">apps by hand</span>
            </p>
            <div className="text-[#23A6F0] flex flex-row justify-start gap-3 ml-[100px]">
                <h1 className="font-extrabold text-4xl">0</h1>
                <div>
                    <h1 className="text-sm">$</h1>
                    <h1 className="text-[#8EC2F2] text-sm ">per month</h1>
                </div>
            </div>
            <div className="flex  flex-col items-start gap-5 ml-[30px]">
                {/* 1st div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="text-[#252b42]">Unlimited product updates</p>
                </div>
                {/* 2nd div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="text-[#252b42]">Unlimited product updates</p>
                </div>
                {/* 3rd div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="text-[#252b42]">Unlimited product updates</p>
                </div>
                {/* 4th div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark2} alt="tickgrey" />
                    <p className="text-[#252b42] ">1GB  Cloud storage</p>
                </div>
                {/* 5th div child */}
                <div className=" flex flex-row items-center  justify-center gap-5">
                    <Image src={tickmark2} alt="tickgrey" />
                    <p className="text-[#252b42] w-[200px] ">Email and community support</p>
                </div>
            </div>
            <button className="flex items-center justify-center mb-16 py-4 px-20 ml-[35px] bg-[#23A6F0]">Try for free</button>
         </div>
         {/* 2nd div */}
         <div className="flex flex-col items-start gap-8 border-[3px]  w-[335px] bg-[#252B42] sm:rounded-2xl  border-[#23A6F0]">
            <h1 className="text-2xl ml-[95px] font-extrabold text- mt-16">STANDARD</h1>
            <p className=" ml-[92px] text-white">
            <span>Organize across all</span> <br /> 
            <span className="ml-[25px]">apps by hand</span>
            </p>
            <div className="text-[#23A6F0] flex flex-row justify-start gap-3 ml-[80px]">
                <h1 className="font-extrabold text-4xl">9.99</h1>
                <div>
                    <h1 className="text-sm">$</h1>
                    <h1 className="text-[#8EC2F2] text-sm ">per month</h1>
                </div>
            </div>
            <div className="flex  flex-col items-start text-white gap-5 ml-[30px]">
                {/* 1st div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="">Unlimited product updates</p>
                </div>
                {/* 2nd div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="">Unlimited product updates</p>
                </div>
                {/* 3rd div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="">Unlimited product updates</p>
                </div>
                {/* 4th div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark2} alt="tickgrey" />
                    <p className=" ">1GB  Cloud storage</p>
                </div>
                {/* 5th div child */}
                <div className=" flex flex-row items-center  justify-center gap-5">
                    <Image src={tickmark2} alt="tickgrey" />
                    <p className=" w-[200px] ">Email and community support</p>
                </div>
            </div>
            <button className="flex items-center justify-center mb-16 py-4 px-20 sm:mb-[104px] ml-[35px] bg-[#23A6F0]">Try for free</button>
         </div>
         {/* 3rd div */}
         <div className="flex flex-col items-start gap-8 border-[3px]  w-[320px]   sm:mt-10 ml-2 sm:ml-0 sm:rounded-2xl border-[#23A6F0]">
            <h1 className="text-2xl ml-[85px] font-extrabold text-[#252B42] mt-16">PREMIUM</h1>
            <p className=" ml-[72px] text-[#737373]">
            <span>Organize across all</span> <br /> 
            <span className="ml-[25px]">apps by hand</span>
            </p>
            <div className="text-[#23A6F0] flex flex-row justify-start gap-3 ml-[65px]">
                <h1 className="font-extrabold text-4xl">19.99</h1>
                <div>
                    <h1 className="text-sm">$</h1>
                    <h1 className="text-[#8EC2F2]  text-sm ">per month</h1>
                </div>
            </div>
            <div className="flex  flex-col items-start gap-5 ml-[30px]">
                {/* 2nd div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="text-[#252b42]">Unlimited product updates</p>
                </div>
                {/* 2nd div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="text-[#252b42]">Unlimited product updates</p>
                </div>
                {/* 3rd div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark1} alt="tickgreen" />
                    <p className="text-[#252b42]">Unlimited product updates</p>
                </div>
                {/* 4th div child */}
                <div className=" flex flex-row items-center justify-center gap-5">
                    <Image src={tickmark2} alt="tickgrey" />
                    <p className="text-[#252b42] ">1GB  Cloud storage</p>
                </div>
                {/* 5th div child */}
                <div className=" flex flex-row items-center  justify-center gap-5">
                    <Image src={tickmark2} alt="tickgrey" />
                    <p className="text-[#252b42] w-[200px] ">Email and community support</p>
                </div>
            </div>
            <button className="flex items-center justify-center mb-16 py-4 px-20 ml-[35px] bg-[#23A6F0]">Try for free</button>
         </div>
        </div>
    )
}