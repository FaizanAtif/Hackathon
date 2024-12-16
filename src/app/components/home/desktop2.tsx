import pic1 from "@/app/public/homepage/card-item.svg"
import pic2 from "@/app/public/homepage/col-md-3.svg"
import pic3 from "@/app/public/homepage/card-item (1).svg"
import pic4 from "@/app/public/homepage/card-item (2).svg"
import Image from "next/image";

export default function Desktop2() {
    return (
      <div className="h-auto w-full bg-[#FAFAFA] text-black">
        <div className="w-[1050px] h-[770px] ml-28 p-20 ">
        <div className="text-center mb-20 ml-36">
            <h3 className="font-bold text-2xl">EDITOR'S PICKS</h3>
            <p className="text-sm font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex h-[500px] w-[1050px] gap-4 ">
            
        <Image src={pic1} alt=" pics1" height={500} width={510} className="transform transition-transform duration-300 hover:scale-110"/>
        <Image src={pic2} alt="pics2" height={500} width={240} className="transform transition-transform duration-300 hover:scale-110" />
        
        <div className="flex-col  h-[500px] w-[240px]  ">
        <Image src={pic3} alt="pics3" height={242} width={240} className="transform transition-transform duration-300 hover:scale-110" />
        <Image src={pic4} alt=" pics4" height={242} width={240} className="mt-6 transform transition-transform duration-300 hover:scale-110"  />
        </div>
        </div>
      </div>
    </div>
    );
  }