import Image from "next/image";
import pic1 from "@/app/public/about/0fd1eeff9355b162a7e7c01605dd3c55.jpg";
import pic2 from "@/app/public/about/4ad0f612e9f8f311e9d1c6bbd31a03f3.jpg";
import pic3 from "@/app/public/about/efd1b9c2401fb0702dc41f18a42ed89c.jpg";
import fb from "@/app/public/about/ant-design_facebook-filled.svg";
import insta from "@/app/public/about/instagram.svg";
import twitter from "@/app/public/about/twitter.svg";

export default function Team() {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 mt-10 sm:mt-20">
      {/* Title */}
      <h1 className="text-[#252B42] text-3xl font-extrabold text-center">
        Meet Our <span>Team</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#737373] text-xs text-center mt-4">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      {/* Team Members */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-10 mt-10">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src={pic1}
            alt="Team Member 1"
            className="h-[210px] w-[210px] sm:h-[240px] sm:w-[240px] rounded-full"
          />
          <h1 className="text-[#252B42] text-lg">Username</h1>
          <p className="text-[#737373] text-sm">Profession</p>
          <div className="flex justify-center gap-4">
            <Image src={fb} alt="Facebook" className="w-6 h-6" />
            <Image src={insta} alt="Instagram" className="w-6 h-6" />
            <Image src={twitter} alt="Twitter" className="w-6 h-6" />
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center text-center gap-4 mt-10 sm:mt-0">
          <Image
            src={pic2}
            alt="Team Member 2"
            className="h-[210px] w-[210px] sm:h-[240px] sm:w-[240px] rounded-full"
          />
          <h1 className="text-[#252B42] text-lg">Username</h1>
          <p className="text-[#737373] text-sm">Profession</p>
          <div className="flex justify-center gap-4">
            <Image src={fb} alt="Facebook" className="w-6 h-6" />
            <Image src={insta} alt="Instagram" className="w-6 h-6" />
            <Image src={twitter} alt="Twitter" className="w-6 h-6" />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center text-center gap-4 mt-10 sm:mt-0">
          <Image
            src={pic3}
            alt="Team Member 3"
            className="h-[210px] w-[210px] sm:h-[240px] sm:w-[240px] rounded-full"
          />
          <h1 className="text-[#252B42] text-lg">Username</h1>
          <p className="text-[#737373] text-sm">Profession</p>
          <div className="flex justify-center gap-4">
            <Image src={fb} alt="Facebook" className="w-6 h-6" />
            <Image src={insta} alt="Instagram" className="w-6 h-6" />
            <Image src={twitter} alt="Twitter" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
