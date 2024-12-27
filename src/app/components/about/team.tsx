import Image from "next/image"
import pic1  from "@/app/public/about/0fd1eeff9355b162a7e7c01605dd3c55.jpg"
import pic2  from "@/app/public/about/4ad0f612e9f8f311e9d1c6bbd31a03f3.jpg"
import pic3  from "@/app/public/about/efd1b9c2401fb0702dc41f18a42ed89c.jpg"
import fb  from "@/app/public/about/ant-design_facebook-filled.svg"
import insta  from "@/app/public/about/instagram.svg"
import twitter  from "@/app/public/about/twitter.svg"

export default function Team () {
    return (
        <div className="font-bold ml-[150px] mt-10 sm:mt-20 h-auto w-[1500px]">
            <h1 className="text-[#252B42] text-3xl font-extrabold w-[230px] sm:w-full ml-[45px] sm:ml-[315px]">Meet Our <span className="ml-[30px] sm:ml-0">
            Team </span></h1>
            <div className="text-[#737373] text-xs   mt-8 ml-[30px] block md:hidden" >
            <h1 className="flex flex-col sm:flex-wrap items-start gap-1">
                <span className="ml-[15px] sm:ml-0">Problems trying to resolve</span> 
              <span>the conflict between the two major </span>
              <span className="ml-[15px] sm:ml-0">realms of Classical physics: </span>
               <span className="ml-[30px] sm:ml-0"> Newtonian mechanics </span>
            </h1>
            </div>
            <h1 className="hidden md:block text-[#737373] text-xs  mt-8 sm:ml-[270px]">
             <span className="ml-[45px]">Problems trying to resolve the conflict between </span> <br />
             <span>the two major realms of Classical physics: Newtonian mechanics</span> 
            </h1>
            <div className="flex flex-col items-start ml-[20px] sm:flex-row sm:justify-start sm:gap-[50px] sm:ml-[15px] ">
            {/* 1st div */}
            <div className="mt-10 flex flex-col items-start gap-5">
                <Image src={pic1} alt="pic1" className="h-[210px] w-[210px] sm:h-[210px] sm:w-[240px]"/>
                <h1 className="text-[#252B42] ml-[62px] sm:ml-[76px]">Username</h1>
                <p className="text-[#737373] text-xs ml-[66px] sm:ml-[76px]">Profession</p>
                <div className="flex flex-row justify-start gap-[25px] ml-[35px] sm:ml-[45px]">
                <Image src={fb} alt="fb"/>
                <Image src={insta} alt="insta"/>
                <Image src={twitter} alt="twitter"/>
                </div>
            </div>
            {/* 2nd div */}
            <div className="mt-10 flex flex-col items-start gap-5">
                <Image src={pic2} alt="pic2" className="h-[210px] w-[210px] sm:h-[210px] sm:w-[240px]"/>
                <h1 className="text-[#252B42] ml-[62px] sm:ml-[76px]">Username</h1>
                <p className="text-[#737373] text-xs ml-[66px] sm:ml-[76px]">Profession</p>
                <div className="flex flex-row justify-start gap-[25px] ml-[35px] sm:ml-[45px]">
                <Image src={fb} alt="fb"/>
                <Image src={insta} alt="insta"/>
                <Image src={twitter} alt="twitter"/>
                </div>
            </div>
            {/* 3rd div */}
            <div className="mt-10 flex flex-col items-start gap-5">
                <Image src={pic3} alt="pic3" className="h-[210px] w-[210px] sm:h-[210px] sm:w-[240px]"/>
                <h1 className="text-[#252B42] ml-[62px] sm:ml-[76px]">Username</h1>
                <p className="text-[#737373] text-xs ml-[66px] sm:ml-[76px]">Profession</p>
                <div className="flex flex-row justify-start gap-[25px] ml-[35px] sm:ml-[45px]">
                <Image src={fb} alt="fb"/>
                <Image src={insta} alt="insta"/>
                <Image src={twitter} alt="twitter"/>
                </div>
            </div>
            </div>
        </div>
    )
}