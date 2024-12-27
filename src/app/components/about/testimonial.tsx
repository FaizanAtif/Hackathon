import Image from "next/image"
import pic from "@/app/public/about/2eeaef7ecedd3954687aefbdb6236bb6.jpg"

export default function Testimonial () {
    return (
        <div className="h-auto w-[1500px] ml-[150px] sm:ml-0 font-bold flex flex-col items-start gap-4 sm:flex-row sm:justify-start sm:gap-[30px]">
             <div className="bg-[#2A7CC7] text-white sm:mt-11  h-auto w-[250px] sm:h-[450px] sm:ml-[0px]  sm:w-[690px] flex flex-col items-center sm:items-start sm:gap-6 gap-6">
                  <h1 className="text-xs sm:ml-[150px] mt-10 sm:mt-[150px] ">WORK WITH US</h1>  
                  <h1 className="text-2xl text-center block md:hidden">
                    <span >Now Let’s </span> <br />
                    <span>grow Yours</span>
                    </h1> 
                  <h1 className="text-2xl text-center ml-[150px] hidden md:block">
                    <span >Now Let’s </span> 
                    <span>grow Yours</span>
                    </h1> 
                  <p className="text-xs block md:hidden ">
                      <span className="ml-[8px]">The gradual accumulation of</span> <br />
                      <span className="ml-[4px]">information about atomic and</span><br />
                      <span className="ml-[1px]">small-scale behavior during the </span><br />
                      <span className="ml-[7px]"> first quarter of the 20th</span>
                  </p> 
                  <p className="text-xs hidden md:block ml-[150px] ">
                      <span >The gradual accumulation of</span> 
                      <span >information about atomic and</span><br />
                      <span >small-scale behavior during the </span>
                      <span > first quarter of the 20th</span>
                  </p> 
                  <button className="bg-[#2A7CC7] border-white sm:ml-[150px] border py-3 px-7 mb-16 text-xs">Button</button>
            </div>
            <Image src={pic} alt="pic" className="h-auto w-[250px] sm:h-[490px] sm:w-[400px]"/>     
        </div>
    )
}