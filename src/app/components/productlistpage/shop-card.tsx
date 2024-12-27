import Image from "next/image";
import pic1 from "@/app/public/productpage/card-cover-5.jpg";
import pic2 from "@/app/public/productpage/card-cover-6.jpg";
import pic3 from "@/app/public/productpage/card-cover-7.jpg";
import pic4 from "@/app/public/productpage/card-cover-8.jpg";
import pic5 from "@/app/public/productpage/card-cover-9.jpg";

export default function Shopcart() {
  const imageArray = [pic1, pic2, pic3, pic4, pic5];

  return (
    <div className="flex flex-col h-auto w-full sm:flex-row mt-10  ml-[130px] gap-8  sm:gap-3  justify-center sm:ml-[30px]    ">
      {imageArray.map((val, i) => (
        <div
          key={i}
          className="relative w-[313px] sm:w-[200px] sm:h-[190px] h-auto  " // Wrapper for each image
        >
          {/* Image */}
          <Image
            src={val}
            alt={`Product Image ${i + 1}`}
            className="rounded-md"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 text-white rounded-md">
            <p className="text-lg font-bold">Cloths</p>
            <p className="text-sm">5 items</p>
          </div>
        </div>
      ))}
    </div>
  );
}
