import Image from "next/image"
import pic1 from "@/app/public/productpage1/c949a2cffacf01d40c82241e905719cb.jpg"

export default function PrdtDesption () {
    return (
        <div className="h-auto w-[1500px] ml-[150px] sm:ml-[0] mt-10 font-bold">
            <div className="flex justify-start sm:gap-[45px] gap-[10px] sm:ml-[370px] text-[11px] ">
                <h6 className="text-[#737373]">Description</h6>
                <h6 className="text-[#737373]">Additional Information</h6>
                <h6 className="text-[#737373]">Reviews </h6>
                <h6 className="text-[#23856D] mb-10">(0</h6>
            </div>
            <div className="flex flex-col items-start sm:flex-row sm:justify-start sm:gap-24">
            {/* 1st div */}
                <Image src={pic1} alt="pic1" className="ml-1 h-[270px] w-[220px] sm:h-[300px] sm:w-[280px] sm:ml-[40px] rounded-lg"/>
            <div className="flex flex-col  items-start ">
            <h1 className="text-[#252B42] text-lg font-extrabold mb-5 mt-10 sm:mt-0">the quick fox jumps over </h1>
            <p className="text-[#737373] text-xs font-bold">Met minim Mollie non desert Alamo est sit <br />
            cliquey dolor do met sent. RELIT official <br />
            consequent door ENIM RELIT Mollie. <br />
            Excitation venial consequent sent nostrum <br />
            met.
            <br /> <br />

            Met minim Mollie non desert Alamo est sit <br />
            cliquey dolor do met sent. RELIT official <br /> 
            consequent door ENIM RELIT Mollie. <br /> 
            Excitation venial consequent sent nostrum <br /> 
            met.
            <br /> <br />
            Met minim Mollie non desert Alamo est sit <br />
            cliquey dolor do met sent. RELIT official <br /> 
            consequent door ENIM RELIT Mollie. <br /> 
            Excitation venial consequent sent nostrum <br /> 
            met.
            </p>

            </div>
            <div>
            {/* 2nd div */}
            <div className="flex-col items-start gap-1">
            <h1 className="text-[#252B42] text-lg font-extrabold mb-5 mt-10 sm:mt-0">the quick fox jumps over </h1>
            <p className="text-xs text-[#737373] mb-3"><span className="text-sm ">&gt;</span> the quick fox jumps over the lazy dog</p>
            <p className="text-xs text-[#737373] mb-3"><span className="text-sm ">&gt;</span> the quick fox jumps over the lazy dog</p>
            <p className="text-xs text-[#737373] mb-3"><span className="text-sm ">&gt;</span> the quick fox jumps over the lazy dog</p>
            <p className="text-xs text-[#737373] mb-3"><span className="text-sm ">&gt;</span> the quick fox jumps over the lazy dog</p>
            </div>
            {/* 3rd div */}
            <div className="flex-col items-start gap-1">
            <h1 className="text-[#252B42] text-lg font-extrabold mb-5 mt-10 sm:mt-0">the quick fox jumps over </h1>
            <p  className="text-xs text-[#737373] mb-3"><span className="text-sm ">&gt;</span>the quick fox jumps over the lazy dog</p>
            <p  className="text-xs text-[#737373] mb-3"><span className="text-sm ">&gt;</span>the quick fox jumps over the lazy dog</p>
            <p  className="text-xs text-[#737373] mb-3"><span className="text-sm ">&gt;</span>the quick fox jumps over the lazy dog</p>
            </div>
            </div>
            </div>
        </div>
    )
}