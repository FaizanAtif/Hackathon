export default function Pricing3 () {
    return(
        <div className="h-auto w-[1000px] mt-14 font-bold ml-[150px]">
           <div className="flex flex-col items-start gap-5">
            <h1 className="text-3xl text-[#252B42] font-extrabold ml-[70px] sm:ml-[370px]">Pricing</h1>
            <p className="text-[#737373] block md:hidden">
            <span className="ml-[28px]">Problems trying to resolve</span> <br />
            <span>the conflict between the two major</span> <br />
            <span className="ml-[28px]">realms of Classical physics:</span> <br />
            <span className="ml-[50px]">Newtonian mechanics</span> 
            </p>
            <p className="text-[#737373] text-xs ml-[250px] hidden md:block">
            <span className="ml-[63px]">Problems trying to resolve 
            the conflict between</span> <br /> 
            the two major realms of Classical physics:
            Newtonian mechanics 
            </p>
            </div>
            <div>
                <div className="flex justify-start sm:ml-[300px] items-center gap-3 mt-16">
                <h1 className="text-[#252B42] font-bold">Monthly</h1>
                <h1 className="border border-[#23A6F0] h-6 w-12 rounded-full"></h1>
                <h1 className="text-[#252B42] font-bold">Yearly</h1>
                <h1 className="border bg-[#B2E3FF] text-[#23A6F0] h-10 w-24 flex items-center justify-center  text-sm rounded-full">Save 25 %</h1>
                </div>
            </div>
        </div>
    )
}