import pic1 from "@/app/public/homepage/card-item.svg"
import pic2 from "@/app/public/homepage/col-md-3.svg"
import pic3 from "@/app/public/homepage/card-item (1).svg"
import pic4 from "@/app/public/homepage/card-item (2).svg"
import Image from "next/image";

export default function Desktop2() {
    return (
      <div className="h-[1300px] sm:h-[700px] w-[1140px] font-bold ml-[150px] sm:ml-0 bg-[#FAFAFA] text-[#252b42]">
        <div className="w-[1050px] h-auto  pt-10 ">
        <div className="sm:text-center sm:mb-20 sm:ml-32">
            <h3 className="font-extrabold sm:text-2xl text-lg sm:ml-0 ml-[75px]">EDITOR'S PICKS</h3>
            <p className="block md:hidden text-[10px] ml-[96px] font-normal mt-5 text-[#737373]">Problems trying to resolve <br />
             <span className="ml-[13px]">the conflict between</span> </p>
            <p className="hidden md:block text-sm font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-start h-[500px] w-[1050px] sm:gap-4 sm:ml-[40px] mt-10 sm:mt-0 ">
            
        <Image src={pic1} alt=" pics1" height={500} width={510} className="sm:h-[500px] sm:mt-10 h-[410px] ml-[20px] sm:ml-0 w-[250px] sm:w-[550px] transform transition-transform duration-300 hover:scale-110"/>
        <Image src={pic2} alt="pics2" height={500} width={240} className="sm:h-[510px] h-[400px] ml-[10px] sm:ml-0 w-[300px] mt-7 sm:w-[250px] transform transition-transform duration-300 hover:scale-110" />
        
        <div className="flex-col  h-[500px] w-[240px]  ">
        <Image src={pic3} alt="pics3" height={242} width={240} className="sm:h-[260px] h-[200px] mt-10 sm:mt-10 ml-[45px] sm:ml-0 w-[300px] sm:w-[350px] transform transition-transform duration-300 hover:scale-110" />
        <Image src={pic4} alt=" pics4" height={242} width={240} className="sm:h-[260px] h-[200px] ml-[45px] mt-10 sm:mt-0 sm:ml-0 w-[300px] sm:w-[350px] transform transition-transform duration-300 hover:scale-110"  />
        </div>
        </div>
      </div>
    </div>
    );
  }