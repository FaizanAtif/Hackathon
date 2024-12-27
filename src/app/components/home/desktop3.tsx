import pic1 from "@/app/public/homepage/fixed-height.svg"
import pic2 from "@/app/public/homepage/fixed-height (1).svg"
import pic3 from "@/app/public/homepage/fixed-height (2).svg"
import pic4 from "@/app/public/homepage/fixed-height (3).svg"
import pic5 from "@/app/public/homepage/fixed-height (4).svg"
import pic6 from "@/app/public/homepage/fixed-height (5).svg"
import pic7 from "@/app/public/homepage/fixed-height (6).svg"
import pic8 from "@/app/public/homepage/fixed-height (7).svg"

import Image from "next/image";
import Link from "next/link"

export default function Desktop3() {
    return (
      <div className="sm:h-[1350px] h-[6000px] w-full ml-[150px] sm:ml-0 bg-[#FAFAFA] text-[#252b42]">
        <div className="w-[1050px] h-[770px]  pt-10 ">
        <div className="sm:text-center mb-20 sm:ml-[100px] ">
            <h4  className="text-xl text-[#737373] sm:ml-0 ml-[75px] mt-5">Featured Products</h4>
            <h3 className="block md:hidden font-bold text-2xl mb-2  ml-[77px] mt-5">BESTSELLER <br /> <span className="ml-[10px]">PRODUCTS</span></h3>
            <h3 className="hidden md:block font-bold text-2xl mb-2 mt-2">BESTSELLER PRODUCTS</h3>
            <p className="block md:hidden text-xs font-normal text-[#737373] ml-[76px] m-5">Problems trying to resolve the <br /><span className="ml-[35px]"> conflict between</span> </p>
            <p className="hidden md:block text-sm font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex flex-col items-start gap-20 sm:ml-[15px] ml-[50px]">
        <header className="flex flex-col items-start gap-10 sm:flex-row sm:justify-between sm:gap-9 sm:ml-[100px]">
        <div className="flex flex-col items-start  gap-5 transform transition-transform duration-300 hover:scale-105">
        <Image src={pic1} alt="pic1" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-[60px] ">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5 ">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        </div>
        </div>
       </div>
       {/* 2nd */}
        <div className="flex flex-col items-start  gap-5 transform transition-transform duration-300 hover:scale-105">
        <Image src={pic2} alt="pic2" className="sm:w-[280px] w-[]" />
        <div className=" flex flex-col items-start gap-5 ml-[60px]">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        </div>
        </div>
       </div>
       {/* 3rd */}
        <div className="flex flex-col items-start  gap-5 transform transition-transform duration-300 hover:scale-105">
        <Image src={pic3} alt="pic3" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-[60px]">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        </div>
        </div>
       </div>
       {/* 4th */}
        <div className="flex flex-col items-start  gap-5 transform transition-transform duration-300 hover:scale-105">
        <Image src={pic4} alt="pic4" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-[60px]">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        </div>
        </div>
       </div>
        </header>
        <section className="flex flex-col items-start gap-10 sm:flex-row sm:justify-between sm:gap-9 sm:ml-[100px]">
        <div className="flex flex-col items-start  gap-5 transform transition-transform duration-300 hover:scale-105">
        <Image src={pic5} alt="pic5" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-[60px]">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        </div>
        </div>
       </div>
       {/* 2nd */}
        <div className="flex flex-col items-start  gap-5 transform transition-transform duration-300 hover:scale-105">
        <Image src={pic6} alt="pic6" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-[60px]">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        </div>
        </div>
       </div>
       {/* 3rd */}
        <div className="flex flex-col items-start  gap-5 transform transition-transform duration-300 hover:scale-105">
        <Image src={pic7} alt="pic7" className="w-[280px]"/>
        <div className="flex flex-col items-start gap-5 ml-[60px]">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        </div>
        </div>
       </div>
       {/* 4th */}
        <div className="flex flex-col items-start  gap-5 transform transition-transform duration-300 hover:scale-105">
        <Image src={pic8} alt="pic8" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-[60px]">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5 ">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150 "></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
        </div>
        </div>
       </div>
        </section>
        </div>
      </div>
    </div>
    );
  }