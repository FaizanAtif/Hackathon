import Image from "next/image";
import contactlogo from '@/app/public/homepage/Vector@2x.svg';
import facebook from '@/app/public/homepage/Vector.svg';
import utube from '@/app/public/homepage/a (1).svg';
import insta from '@/app/public/homepage/a.svg';
import twitter from '@/app/public/homepage/icn settings icn-xs.svg';

export default function Nav1() {
  return (
    <div className="bg-[#252B42] h-[46px] w-full">
      <div className="text-white text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between px-6 py-2 sm:px-8 sm:py-3 gap-4 sm:gap-8">
        
        {/* Contact Information */}
        <div className="flex items-center gap-2 sm:gap-4 tracking-widest">
          <Image src={contactlogo} alt="contactlogo" className="w-5 sm:w-6" />
          <h6>(225) 555-0118</h6>
        </div>
        
        <p className="text-center sm:text-left sm:flex-1">michelle.rivera@example.com</p>

        {/* Follow Us Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="">Follow Us & Get a Chance to Win 80% Off</p>
          <div className="flex items-center gap-3">
            <p className="mr-2">Follow Us:</p>
            <Image src={insta} alt="Instagram" className="w-6 scale-150"/>
            <Image src={utube} alt="YouTube" className="w-6 scale-150" />
            <Image src={facebook} alt="Facebook" className="w-6" />
            <Image src={twitter} alt="Twitter" className="w-6" />
          </div>
        </div>

      </div>
    </div>
  );
}