import Image from "next/image";
import tickmark1 from "@/app/public/pricing/icn-circle circle-xs secondary-color-1.svg";
import tickmark2 from "@/app/public/pricing/icn-circle circle-xs mute.svg";

export default function Pricing4() {
  return (
    <div className="w-full max-w-screen-xl mx-auto mt-16 px-4">
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-6">
        {/* 1st Plan: FREE */}
        <div className="flex flex-col items-start gap-8 border-2 w-full sm:w-[320px] border-[#23A6F0] sm:rounded-2xl p-8 bg-slate-50 shadow-lg">
          <h1 className="text-2xl font-extrabold text-[#252B42] text-center sm:text-left mt-8">
            FREE
          </h1>
          <p className="text-[#737373] text-center sm:text-left">
            <span>Organize across all</span> <br />
            <span>apps by hand</span>
          </p>
          <div className="text-[#23A6F0] flex items-center justify-center sm:justify-start gap-3 mt-4">
            <h1 className="font-extrabold text-4xl">0</h1>
            <div>
              <h1 className="text-sm">$</h1>
              <h1 className="text-[#8EC2F2] text-sm">per month</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-6">
            {/* Features */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-5">
                <Image src={tickmark1} alt="tickgreen" />
                <p className="text-[#252b42]">Unlimited product updates</p>
              </div>
            ))}
            {[4, 5].map((_, index) => (
              <div key={index} className="flex items-center gap-5">
                <Image src={tickmark2} alt="tickgrey" />
                <p className="text-[#252b42]">1GB Cloud storage</p>
              </div>
            ))}
          </div>
          <button className="w-full py-4 px-6 mt-8 bg-[#23A6F0] text-white text-lg rounded-lg hover:bg-[#1a87c1] transition duration-300">
            Try for free
          </button>
        </div>

        {/* 2nd Plan: STANDARD */}
        <div className="flex flex-col items-start gap-8 border-2 w-full sm:w-[335px] bg-[#252B42] border-[#23A6F0] sm:rounded-2xl p-8 shadow-lg">
          <h1 className="text-2xl font-extrabold text-white text-center sm:text-left mt-8">
            STANDARD
          </h1>
          <p className="text-white text-center sm:text-left">
            <span>Organize across all</span> <br />
            <span>apps by hand</span>
          </p>
          <div className="text-[#23A6F0] flex items-center justify-center sm:justify-start gap-3 mt-4">
            <h1 className="font-extrabold text-4xl">9.99</h1>
            <div>
              <h1 className="text-sm">$</h1>
              <h1 className="text-[#8EC2F2] text-sm">per month</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-6 text-white">
            {/* Features */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-5">
                <Image src={tickmark1} alt="tickgreen" />
                <p>Unlimited product updates</p>
              </div>
            ))}
            {[4, 5].map((_, index) => (
              <div key={index} className="flex items-center gap-5">
                <Image src={tickmark2} alt="tickgrey" />
                <p>1GB Cloud storage</p>
              </div>
            ))}
          </div>
          <button className="w-full py-4 px-6 mt-8 bg-[#23A6F0] text-white text-lg rounded-lg hover:bg-[#1a87c1] transition duration-300">
            Try for free
          </button>
        </div>

        {/* 3rd Plan: PREMIUM */}
        <div className="flex flex-col items-start gap-8 border-2 w-full sm:w-[320px] border-[#23A6F0] sm:rounded-2xl p-8 bg-slate-50 shadow-lg">
          <h1 className="text-2xl font-extrabold text-[#252B42] text-center sm:text-left mt-8">
            PREMIUM
          </h1>
          <p className="text-[#737373] text-center sm:text-left">
            <span>Organize across all</span> <br />
            <span>apps by hand</span>
          </p>
          <div className="text-[#23A6F0] flex items-center justify-center sm:justify-start gap-3 mt-4">
            <h1 className="font-extrabold text-4xl">19.99</h1>
            <div>
              <h1 className="text-sm">$</h1>
              <h1 className="text-[#8EC2F2] text-sm">per month</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-6">
            {/* Features */}
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-5">
                <Image src={tickmark1} alt="tickgreen" />
                <p className="text-[#252b42]">Unlimited product updates</p>
              </div>
            ))}
            {[4, 5].map((_, index) => (
              <div key={index} className="flex items-center gap-5">
                <Image src={tickmark2} alt="tickgrey" />
                <p className="text-[#252b42]">1GB Cloud storage</p>
              </div>
            ))}
          </div>
          <button className="w-full py-4 px-6 mt-8 bg-[#23A6F0] text-white text-lg rounded-lg hover:bg-[#1a87c1] transition duration-300">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
}
