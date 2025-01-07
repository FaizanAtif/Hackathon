import React from 'react';
import hero from '@/app/public/homepage/hero.jpg'


const Caro1 = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto">
      <div 
        className="bg-cover bg-center min-h-[400px] sm:h-[676px] w-full sm:w-auto relative"
        style={{
          backgroundImage: `url(${hero.src})`
        }}>


        <div className="container mx-auto px-4 sm:px-6 h-full">
          <div className="flex flex-col justify-center h-full max-w-xl py-16 sm:py-28">
            {/* Summer 2024 heading */}
            <h6 className="text-white font-bold text-xs sm:text-2xl mb-4 sm:mb-8">
              SUMMER 2024
            </h6>

            {/* Mobile Collection heading */}
            <h1 className="block md:hidden text-white text-2xl font-bold mb-4">
              <span className="inline-block">NEW</span>
              <br />
              <span className="inline-block">COLLECTION</span>
            </h1>

            {/* Desktop Collection heading */}
            <h1 className="hidden md:block text-white text-5xl font-bold mb-6">
              NEW COLLECTION
            </h1>

            {/* Mobile description */}
            <p className="block md:hidden text-white text-xs mb-6 leading-relaxed">
              We know how large objects
              <br />
              will act, but things on a
              <br />
              small scale.
            </p>

            {/* Desktop description */}
            <p className="hidden md:block text-white text-xl mb-8">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </p>

            {/* CTA Button */}
            <button className="bg-[#2DC071] text-white font-bold 
              px-6 py-3 sm:px-10 sm:py-4
              text-sm sm:text-2xl
              transform transition-all duration-300 
              hover:scale-110 hover:shadow-lg
              inline-block w-fit">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caro1;
