import Image from "next/image";
import card from "@/app/public/about/08dd0c5a04f10121bc68f6cb9ff0d63d.jpg";
import pause from "@/app/public/about/Vector copy.svg";

export default function Card1() {
  return (
    <div className="p-16 flex justify-center items-center w-full mt-10">
      {/* Card Image */}
      <div className="relative">
        <Image
          src={card}
          alt="card"
          className="h-[210px] w-[210px] sm:h-[400px] sm:w-[700px] rounded-xl object-cover"
        />

        {/* Pause Button */}
        <div className="absolute top-[75%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] flex items-center justify-center rounded-full bg-[#23A6F0]">
          <Image src={pause} alt="pause icon" className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" />
        </div>
      </div>
    </div>
  );
}
