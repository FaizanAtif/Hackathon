import Image from "next/image"
import pic1 from "@/app/public/productpage1/c49b63d0071c5ef94c3d4dde5f05172f.jpg"
import pic2 from "@/app/public/productpage1/9a7979dac6cbd7699a260c7deacd7b13.jpg"
import pic3 from "@/app/public/productpage1/3cabc3250d9fd223e5b93cebd2761439.jpg"
import pic4 from "@/app/public/productpage1/47938d7b09087b31f361063fb40f9a11.jpg"
import pic5 from "@/app/public/productpage1/5669af4e049e20ceb30aa6408b6a79f3.jpg"
import pic6 from "@/app/public/productpage1/2e460896a15fe5f82a56836939f30577.jpg"
import pic7 from "@/app/public/productpage1/c49b63d0071c5ef94c3d4dde5f05172f.jpg"
import pic8 from "@/app/public/productpage1/9a7979dac6cbd7699a260c7deacd7b13.jpg"

export default function Product15 () {
    return (
        <div className="font-bold ml-[150px] h-auto w-1500 mt-14 sm:ml-[70px] ">
            <h1 className="text-[#252B42] font-extrabold w-[250px] sm:text-lg sm:mb-10">BESTSELLER PRODUCTS</h1>
            
            {/* 1st div for row */}
            <div className="flex flex-col items-start gap-10 sm:flex-row sm:gap-5 sm:justify-start" >
                {/* 1st div */}
                <div className="text-xs flex flex-col items-start gap-4 w-[400px] sm:text-sm sm:mb-10">
                    <Image  src={pic1} alt="pic1" className="h-[280px] w-[230px] rounded-lg" />
                    <h1 className="text-[#252B42] font-extrabold ml-[20px]">Graphic Design</h1>
                    <h6 className="text-[#737373] ml-[20px]">English Department</h6>
                    <div className="flex"><h6  className="text-[#737373] ml-[20px]">$16.48 <span  className="text-[#23856D]">$6.48</span></h6></div>
                </div>
                {/* 2nd div */}
                <div className="text-xs flex flex-col items-start gap-4 w-[400px] sm:text-sm sm:mb-10">
                    <Image  src={pic2} alt="pic1" className="h-[280px] w-[230px] rounded-lg" />
                    <h1 className="text-[#252B42] font-extrabold ml-[20px]">Graphic Design</h1>
                    <h6 className="text-[#737373] ml-[20px]">English Department</h6>
                    <div className="flex"><h6  className="text-[#737373] ml-[20px]">$16.48 <span  className="text-[#23856D]">$6.48</span></h6></div>
                </div>
                {/* 3rd div */}
                <div className="text-xs flex flex-col items-start gap-4 w-[400px] sm:text-sm sm:mb-10">
                    <Image  src={pic3} alt="pic1" className="h-[280px] w-[230px] rounded-lg" />
                    <h1 className="text-[#252B42] font-extrabold ml-[20px]">Graphic Design</h1>
                    <h6 className="text-[#737373] ml-[20px]">English Department</h6>
                    <div className="flex"><h6  className="text-[#737373] ml-[20px]">$16.48 <span  className="text-[#23856D]">$6.48</span></h6></div>
                </div>
                {/* 4th div */}
                <div className="text-xs flex flex-col items-start gap-4 w-[400px] sm:text-sm sm:mb-10">
                    <Image  src={pic4} alt="pic1" className="h-[280px] w-[230px] rounded-lg" />
                    <h1 className="text-[#252B42] font-extrabold ml-[20px]">Graphic Design</h1>
                    <h6 className="text-[#737373] ml-[20px]">English Department</h6>
                    <div className="flex"><h6  className="text-[#737373] ml-[20px]">$16.48 <span  className="text-[#23856D]">$6.48</span></h6></div>
                </div>
                
            </div>
            {/* 2nd div row */}
            <div className="flex flex-col items-start gap-10 sm:flex-row sm:gap-5  sm:justify-start">
                {/* 5th div */}
                <div className="text-xs flex flex-col items-start gap-4 w-[400px] sm:text-sm sm:mb-10 ">
                    <Image  src={pic5} alt="pic1" className="h-[280px] w-[230px] rounded-lg" />
                    <h1 className="text-[#252B42] font-extrabold ml-[20px]">Graphic Design</h1>
                    <h6 className="text-[#737373] ml-[20px]">English Department</h6>
                    <div className="flex"><h6  className="text-[#737373] ml-[20px]">$16.48 <span  className="text-[#23856D]">$6.48</span></h6></div>
                </div>
                {/* 6th div */}
                <div className="text-xs flex flex-col items-start gap-4 w-[400px] sm:text-sm sm:mb-10">
                    <Image  src={pic6} alt="pic1" className="h-[280px] w-[230px] rounded-lg" />
                    <h1 className="text-[#252B42] font-extrabold ml-[20px]">Graphic Design</h1>
                    <h6 className="text-[#737373] ml-[20px]">English Department</h6>
                    <div className="flex"><h6  className="text-[#737373] ml-[20px]">$16.48 <span  className="text-[#23856D]">$6.48</span></h6></div>
                </div>
                {/* 7th div */}
                <div className="text-xs flex flex-col items-start gap-4 w-[400px] sm:text-sm sm:mb-10">
                    <Image  src={pic7} alt="pic1" className="h-[280px] w-[230px] rounded-lg" />
                    <h1 className="text-[#252B42] font-extrabold ml-[20px]">Graphic Design</h1>
                    <h6 className="text-[#737373] ml-[20px]">English Department</h6>
                    <div className="flex"><h6  className="text-[#737373] ml-[20px]">$16.48 <span  className="text-[#23856D]">$6.48</span></h6></div>
                </div>
                {/* 8th div */}
                <div className="text-xs flex flex-col items-start gap-4 w-[400px] sm:text-sm sm:mb-10">
                    <Image  src={pic8} alt="pic1" className="h-[280px] w-[230px] rounded-lg" />
                    <h1 className="text-[#252B42] font-extrabold ml-[20px]">Graphic Design</h1>
                    <h6 className="text-[#737373] ml-[20px]">English Department</h6>
                    <div className="flex"><h6  className="text-[#737373] ml-[20px]">$16.48 <span  className="text-[#23856D]">$6.48</span></h6></div>
                </div>
            </div>
            
        </div>
    )
}