import Image from "next/image";
import pic1 from "@/app/public/productpage/card-cover-5.jpg";
import pic2 from "@/app/public/productpage/card-cover-6.jpg";
import pic3 from "@/app/public/productpage/card-cover-7.jpg";
import pic4 from "@/app/public/productpage/card-cover-8.jpg";
import pic5 from "@/app/public/productpage/card-cover-9.jpg";

export default function Shopcart() {
  const imageArray = [pic1, pic2, pic3, pic4, pic5];

  return (
    <div className="flex flex-col sm:flex-row h-auto w-full mt-10 gap-8 sm:gap-3 justify-center sm:ml-[30px] ml-[130px]">
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
            <p className="text-sm">5 items</p>
          </div>
        </div>
      ))}
    </div>
  );
}
