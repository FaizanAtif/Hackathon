import Image from "next/image";
import pic1 from "@/app/public/productpage/card-cover-5.jpg";
import pic2 from "@/app/public/productpage/card-cover-6.jpg";
import pic3 from "@/app/public/productpage/card-cover-7.jpg";
import pic4 from "@/app/public/productpage/card-cover-8.jpg";
import pic5 from "@/app/public/productpage/card-cover-9.jpg";

export default function Shopcart() {
  const imageArray = [pic1, pic2, pic3, pic4, pic5];

  return (
<div><div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-start text-black h-auto w-full pt-10 sm:pt-12 px-4 sm:px-8">
        {/* Main Title */}
        <h1 className="font-bold text-xl sm:text-3xl text-[#252B42] sm:ml-0 ml-0">
          Shop
        </h1>
  
        {/* Breadcrumbs Section */}
        <div className="flex flex-row justify-center sm:justify-start gap-2 sm:gap-4 mt-4 sm:mt-0">
          <h6 className="text-[#252B42]">Home</h6>
          <h6 className="text-xl text-[#737373]">&#62;</h6>
          <h6 className="text-[#737373]">Shop</h6>
        </div>
      </div>
    <div className="flex flex-col sm:flex-row h-auto w-full mt-10 gap-8 sm:gap-3 justify-center sm:ml-[30px] ml-[130px] md:mb-28">
      {imageArray.map((val, i) => (
        <div
          key={i}
          className="relative w-[313px] sm:w-[200px] sm:h-[190px] h-auto transform transition-transform duration-300 hover:scale-105" // Wrapper for each image
        >
          {/* Image */}
          <Image
            src={val}
            alt={`Product Image ${i + 1}`}
            className="rounded-md object-cover w-full h-full"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white rounded-md transition-all duration-300 opacity-0 hover:opacity-100">
            <p className="text-lg font-semibold">Cloths</p>
            <p className="text-sm ">5 items</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
