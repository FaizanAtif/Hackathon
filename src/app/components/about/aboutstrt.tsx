import Image from "next/image"
import pic from "@/app/public/about/45eb1f33b39fa1e1f6b0ddf5bb703345.png"

export default function Aboutstrt () {
    return(
        <div className="ml-[10px] sm:ml-0 flex flex-col h-auto w-[1500px] sm:w-[1500px] items-start sm:flex-row sm:justify-start sm:gap-[80px]">
        {/* 1st div */}
        <div className="flex flex-col  items-start font-bold gap-5 ml-[150px] sm:ml-[40px] sm:gap-14 sm:mt-[100px]">
                <h1 className="text-[#252B42] sm:ml-3 text-sm hidden md:block">ABOUT COMPANY</h1>
                <h5 className=" font-extrabold text-xl ml-[50px]  sm:ml-0 sm:text-4xl text-[#252B42]">
                    ABOUT US
                </h5>
                <p className="hidden md:block text-[#737373] w-[250px] sm:w-[300px]">We know how large 
                objects will act, but things 
                on a small scale just do 
                not act that way.</p>
                <p className="text-[#737373] text-sm block md:hidden w-[250px] sm:w-[300px]">
                We know how large objects will <br /> 
                <span className="ml-[3px]">act, but things on a small scale</span> <br />
                <span className="ml-[25px]">just do not act that way.</span></p>
                <button className="py-4 px-4 bg-[#23A6F0] text-[#ffff] ml-[20px] w-[180px] ">Get Quote Now</button>
                </div>
            {/* 2nd div */}
            <div className="flex justify-start w-[1000]">
                <h1 className="p-1 bg-violet-400 w-3 h-3 rounded-lg absolute top-[780px] left-[140px] sm:top-[400px] sm:left-[580px] "></h1>
                <Image src={pic} alt="pic" className="h-[350px] w-[450px]  object-scale-down sm:h-[450px] sm:w-[750px] ml-[20px] sm:ml-0" />
                <h1 className="p-1 bg-violet-400 w-3 h-3 rounded-lg  absolute top-[680px] left-[350px] sm:top-[180px]  sm:left-[950px] "></h1>
            </div>
        </div>
        
    )
}