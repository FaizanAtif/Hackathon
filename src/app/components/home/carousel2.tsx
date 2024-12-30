import React from 'react';

const Caro2 = () => {
  return (
    <div className="max-w-[1140px] mx-auto bg-[#23856D] min-h-[400px] sm:h-[640px] w-full text-[#252b42]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-full pt-8 sm:pt-12">
          {/* Left Content Section */}
          <div className="text-white flex flex-col gap-5 sm:gap-16 sm:max-w-xl">
            {/* Summer 2024 heading */}
            <h6 className="text-xs sm:text-sm font-bold pt-6 sm:pt-11">
              SUMMER 2024
            </h6>

            {/* Product Title */}
            <h1 className="text-2xl sm:text-5xl font-bold">
              Vita Classic
              <br />
              Product
            </h1>

            {/* Mobile Description */}
            <p className="block md:hidden text-xs font-normal">
              We know how large objects
              <br />
              will act, but things on a
              <br />
              small scale
            </p>

            {/* Desktop Description */}
            <p className="hidden md:block text-xs font-normal">
              We know how large objects will act, We know
              <br />
              how large objects will act
            </p>

            {/* Price and CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
              <h4 className="font-bold text-lg sm:text-2xl">$16.48</h4>
              <button className="bg-[#2DC071] text-white font-bold 
                px-3 py-2 sm:px-10 sm:py-3
                text-sm sm:text-xl
                transform transition-all duration-300 
                hover:scale-110 hover:shadow-lg">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="mt-8 sm:mt-0">
            <img
              src="/api/placeholder/220/330"
              alt="Vita Classic Product"
              className="w-[220px] h-[330px] sm:w-auto sm:h-[520px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caro2;