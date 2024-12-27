import Image from "next/image";
import contactlogo from '@/app/public/homepage/Vector@2x.svg'
import facebook from '@/app/public/homepage/Vector.svg'
import utube from '@/app/public/homepage/a (1).svg'
import insta from '@/app/public/homepage/a.svg'
import twitter from '@/app/public/homepage/icn settings icn-xs.svg'

export default function Nav1() {
    return (
            <div className="bg-[#252B42]  h-[46px] w-[1140px] hidden sm:block">
        <div className="text-white text-sm flex flex-row items-center mx-6 justify-start gap-[110px]  h-[47px] w-full pr-14 ">
        <h6 className="flex">
            <Image src={contactlogo} alt="contactlogo"/> 
            (225) 555-0118</h6>
         <p>   michelle.rivera@example.com </p>
        <p>Follow Us  and get a chance to win 80% off</p>
        <p className="flex items-center">Follow Us  :
        
        <Image src={insta} alt="insta" className="mr-0"/> 
        <Image src={utube} alt="utube"className="mr-2"/> 
        <Image src={facebook} alt="fb "className="mr-2"/> 
        <Image src={twitter} alt="twitr"className="mr-2"/> </p>

        </div>
        
      </div>
    );
  }