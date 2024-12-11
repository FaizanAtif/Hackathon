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
      <div className="h-[1250px] w-full bg-[#FAFAFA] text-black">
        <div className="w-[1050px] h-[770px] ml-28 p-20 ">
        <div className="text-center mb-20 ml-36 ">
            <h4  className="text-xl text-[#737373]">Featured Products</h4>
            <h3 className="font-bold text-2xl mb-2 mt-2">BESTSELLER PRODUCTS</h3>
            <p className="text-sm font-normal text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex flex-col items-start gap-20">
        <header className="flex justify-between gap-9 ml-32">
        <div className="flex flex-col items-start  gap-5">
        <Image src={pic1} alt="pic1" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-6 ">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5 ">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full"></h5>
        </div>
        </div>
       </div>
       {/* 2nd */}
        <div className="flex flex-col items-start  gap-5">
        <Image src={pic2} alt="pic2" className="w-[280px]" />
        <div className="ml-6 flex flex-col items-start gap-5">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full"></h5>
        </div>
        </div>
       </div>
       {/* 3rd */}
        <div className="flex flex-col items-start  gap-5">
        <Image src={pic3} alt="pic3" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-6">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full"></h5>
        </div>
        </div>
       </div>
       {/* 4th */}
        <div className="flex flex-col items-start  gap-5">
        <Image src={pic4} alt="pic4" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-6">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full"></h5>
        </div>
        </div>
       </div>
        </header>
        <section className="flex justify-between gap-9 ml-32">
        <div className="flex flex-col items-start  gap-5">
        <Image src={pic5} alt="pic5" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-6">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full"></h5>
        </div>
        </div>
       </div>
       {/* 2nd */}
        <div className="flex flex-col items-start  gap-5">
        <Image src={pic6} alt="pic6" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-6">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full"></h5>
        </div>
        </div>
       </div>
       {/* 3rd */}
        <div className="flex flex-col items-start  gap-5">
        <Image src={pic7} alt="pic7" className="w-[280px]"/>
        <div className="flex flex-col items-start gap-5 ml-6">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full"></h5>
        </div>
        </div>
       </div>
       {/* 4th */}
        <div className="flex flex-col items-start  gap-5">
        <Image src={pic8} alt="pic8" className="w-[280px]" />
        <div className="flex flex-col items-start gap-5 ml-6">
        <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
        <Link href={''} className="font-bold text-sm text-[#737373]">English Department</Link>
        <div className="flex gap-2">
        <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
        <h5 className="font-bold text-[#23856D]">$6.48</h5>
        </div>
        <div className="flex gap-1.5 ">
        <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#23856D] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#E77C40] h-4 w-4 rounded-full"></h5>
        <h5 className="bg-[#252B42] h-4 w-4 rounded-full"></h5>
        </div>
        </div>
       </div>
        </section>
        </div>
      </div>
    </div>
    );
  }