export default function Stats () {
    return (
        <div className="ml-[150px] sm:ml-[210px] mt-10 font-bold h-auto w-[1500px] flex flex-col items-start sm:flex-row sm:justify-start sm:gap-[50px]">
            {/* 1st div */}
        <div className="flex flex-col items-start ml-[70px] sm:ml-[30px] mb-10">
            <h1 className="text-[#252B42] text-3xl ml-[24px]">15K</h1>
            <p className="text-[#737373] text-xs">Happy Customers</p>
        </div>
            {/* 2nd div */}
        <div className="flex flex-col items-start ml-[70px] sm:ml-[30px] mb-10">
            <h1 className="text-[#252B42] text-3xl ml-[20px]">150K</h1>
            <p className="text-[#737373] text-xs ml-[12px]">Monthly Visitors</p>
        </div>
            {/* 3rd div */}
        <div className="flex flex-col items-start ml-[70px] sm:ml-[30px] mb-10">
            <h1 className="text-[#252B42] text-3xl ml-[35px]">15</h1>
            <p className="text-[#737373] text-xs">Countries  Worldwide</p>
        </div>
            {/* 4th div */}
        <div className="flex flex-col items-start ml-[70px] sm:ml-[30px] mb-10">
            <h1 className="text-[#252B42] text-3xl ml-[24px]">100+</h1>
            <p className="text-[#737373] text-xs ml-[20px]">Top Partners</p>
        </div>
        </div>
    )
}