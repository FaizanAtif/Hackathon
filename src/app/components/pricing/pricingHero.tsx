export default function Heading() {
  return (
    <div className="bg-slate-100 rounded-lg mx-auto w-full max-w-[950px] px-6 sm:px-8 py-12 flex justify-center items-center flex-col">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-[#737373] text-xs sm:text-sm font-bold mb-3 sm:mb-2">
          PRICING
        </h1>
        <h1 className="text-[#252B42] text-3xl sm:text-5xl font-extrabold mb-5">
          Simple Pricing
        </h1>
      </div>

      {/* Breadcrumbs */}
      <div className="flex justify-center items-center gap-4 mb-5 sm:gap-8 sm:mb-4">
        <h1 className="text-[#252B42] text-sm sm:text-base font-medium hover:text-[#1D74F3] transition-all duration-200 cursor-pointer">
          Home
        </h1>
        <h1 className="text-sm sm:text-base font-medium text-[#737373]">/</h1>
        <h1 className="text-[#252B42] text-sm sm:text-base font-medium hover:text-[#1D74F3] transition-all duration-200 cursor-pointer">
          Pricing
        </h1>
      </div>
<div className="h-auto w-full max-w-screen-xl mx-auto mt-16 font-bold px-4 sm:px-8 flex flex-col items-center">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl text-[#252B42] font-extrabold text-center sm:text-left">
            Pricing
          </h1>
          <p className="text-[#737373] block md:hidden text-sm mt-4 text-center sm:text-left">
            <span className="ml-[10px]">Problems trying to resolve</span> <br />
            <span>the conflict between the two major</span> <br />
            <span className="ml-[28px]">realms of Classical physics:</span> <br />
            <span className="ml-[50px]">Newtonian mechanics</span>
          </p>
          <p className="text-[#737373] text-xs sm:text-base hidden md:block mt-4 text-center sm:text-left">
            <span className="ml-[63px]">Problems trying to resolve</span> <br />
            the conflict between the two major realms of Classical physics:
            <br />
            Newtonian mechanics
          </p>
        </div>
  
        {/* Toggle between Monthly/Yearly */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <h1 className="text-[#252B42] font-semibold text-lg">Monthly</h1>
          <div className="h-[1px] w-12 bg-[#23A6F0] rounded-full"></div>
          <h1 className="text-[#252B42] font-semibold text-lg">Yearly</h1>
          <div className="flex items-center justify-center text-sm h-10 w-24 bg-[#B2E3FF] rounded-full text-[#23A6F0] font-semibold">
            Save 25%
          </div>
        </div>
      </div>
    </div>
  );
}
