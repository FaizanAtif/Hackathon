import pic1 from "@/app/public/homepage/card-item.svg";
import pic2 from "@/app/public/homepage/col-md-3.svg";
import pic3 from "@/app/public/homepage/card-item (1).svg";
import pic4 from "@/app/public/homepage/card-item (2).svg";
import Image from "next/image";

export default function Desktop2() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-[#FAFAFA] text-[#252b42]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4">
            EDITOR'S PICKS
          </h3>
          <p className="text-sm text-[#737373] font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Main large image */}
          <div className="lg:col-span-2 h-[300px] md:h-[500px]">
            <Image
              src={pic1}
              alt="Editor's pick 1"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              width={510}
              height={500}
            />
          </div>

          {/* Tall middle image */}
          <div className="h-[300px] md:h-[500px]">
            <Image
              src={pic2}
              alt="Editor's pick 2"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              width={240}
              height={500}
            />
          </div>

          {/* Right column with two images */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="h-[300px] md:h-[242px]">
              <Image
                src={pic3}
                alt="Editor's pick 3"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                width={240}
                height={242}
              />
            </div>
            <div className="h-[300px] md:h-[242px]">
              <Image
                src={pic4}
                alt="Editor's pick 4"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                width={240}
                height={242}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}