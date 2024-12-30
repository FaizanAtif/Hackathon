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
    </div>
  );
}
