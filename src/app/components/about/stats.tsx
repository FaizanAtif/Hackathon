export default function Stats() {
    return (
      <div className="px-16 sm:px-10 md:px-20 lg:px-40 mt-10 font-bold">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-10">
          {/* 1st Stat */}
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <h1 className="text-[#252B42] text-3xl">15K</h1>
            <p className="text-[#737373] text-sm">Happy Customers</p>
          </div>
  
          {/* 2nd Stat */}
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <h1 className="text-[#252B42] text-3xl">150K</h1>
            <p className="text-[#737373] text-sm">Monthly Visitors</p>
          </div>
  
          {/* 3rd Stat */}
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <h1 className="text-[#252B42] text-3xl">15</h1>
            <p className="text-[#737373] text-sm">Countries Worldwide</p>
          </div>
  
          {/* 4th Stat */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-[#252B42] text-3xl">100+</h1>
            <p className="text-[#737373] text-sm">Top Partners</p>
          </div>
        </div>
      </div>
    );
  }
  