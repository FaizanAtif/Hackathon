import React from 'react';



const Caro2 = () => {
  const imagePath ="/homepage/asian-woman-man-with-winter-clothes%201%20(1).svg";


  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-5 sm:gap-32 py-8 sm:py-16">
          {/* Desktop Image - Left Side */}
        
{/* Image - Left Side */}           
<div className="block"> {/* Remove the hidden/md:block classes */}
  <img
    src={imagePath}
    alt="Neural Universe"
    className="w-[700px] h-[674px] object-cover"
  />
</div>

          {/* Content Section */}
          <div className="flex flex-col items-start gap-5 sm:gap-10 w-full sm:w-auto">
            {/* Summer 2024 heading */}
            <h6 className="text-[#BDBDBD] font-bold text-xs sm:text-base mt-12 sm:mt-28">
              SUMMER 2024
            </h6>

            {/* Desktop Title */}
            <h1 className="hidden md:block text-4xl font-extrabold text-[#252B42]">
              Part of the Neural
              <br />
              Universe
            </h1>

            {/* Mobile Title */}
            <h1 className="block md:hidden text-2xl font-extrabold text-[#252B42]">
              Part of the
              <br />
              <span className="ml-6">Neural</span>
              <br />
              <span className="ml-3">Universe</span>
            </h1>

            {/* Desktop Description */}
            <p className="hidden md:block text-xl font-normal text-[#737373]">
              We know how large objects will act,
              <br />
              but things on a small scale.We know how large
            </p>

            {/* Mobile Description */}
            <p className="block md:hidden text-sm font-normal text-[#737373]">
              <span className="ml-2">We know how large</span>
              <br />
              <span className="ml-2">objects will act, but</span>
              <br />
              things on a small scale.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-4 w-full sm:w-auto">
              <button className="bg-[#23A6F0] sm:bg-[#2DC071] py-3 px-5 sm:py-5 sm:px-8 
                text-xs sm:text-sm font-bold text-white
                border border-[#23A6F0] sm:border-[#2DC071]
                transition-colors duration-300
                hover:bg-white hover:text-[#23A6F0] sm:hover:text-[#2DC071]">
                BUY NOW
              </button>
              <button className="py-3 px-5 sm:py-5 sm:px-8 
                text-xs sm:text-sm font-bold
                border border-[#23A6F0] sm:border-[#2DC071]
                text-[#23A6F0] sm:text-[#2DC071]
                transition-colors duration-300
                hover:bg-black hover:bg-opacity-80 hover:border-black hover:text-white">
                READ MORE
              </button>
            </div>
          </div>

          {/* Mobile Image - Bottom */}
          <div className="block md:hidden w-full">
            <img
              src={imagePath}
              alt="Neural Universe"
              className="w-[250px] h-[400px] object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caro2;