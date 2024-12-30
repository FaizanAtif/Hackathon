export default function Problem() {
    return (
      <div className="p-11 font-bold mt-10 px-4 sm:px-10 md:px-20 lg:px-40">

  
        {/* Content */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-10 sm:gap-20">
          {/* First Column */}
          <div className="text-[#252B42]">
            {/* Mobile View */}
            <p className="block md:hidden text-sm sm:text-base w-full sm:w-[290px]">
              <span>Met minim Mollie non</span> <br />
              desert Alamo est sit cliquey <br />
              <span>dolor do met sent.</span>
            </p>
            {/* Desktop View */}
            <p className="hidden md:block text-base sm:text-lg w-full sm:w-[290px]">
              Met minim Mollie non <br />
              desert Alamo est sit cliquey <br />
              dolor do met sent.
            </p>
          </div>
  
          {/* Second Column */}
          <div className="text-[#737373]">
            {/* Mobile View */}
            <p className="block md:hidden text-xs w-full sm:w-[400px]">
              Problems trying to resolve the <br />
              conflict between the two major <br />
              realms of Classical physics: <br />
              Newtonian mechanics
            </p>
            {/* Desktop View */}
            <p className="hidden md:block text-xs sm:text-sm w-full sm:w-[400px]">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
    );
  }
  