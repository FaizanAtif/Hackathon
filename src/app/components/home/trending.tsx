import Image from "next/image";
import watch from "@/app/public/homepage/icon cool-icon-1.svg"
import bar from "@/app/public/homepage/icon ant-design-area-chart-outlined.svg"
import arr from "@/app/public/homepage/@none.svg"
import trending1 from "@/app/public/homepage/trending1.jpg"
import trending2 from "@/app/public/homepage/trending2.jpg"
import trending3 from "@/app/public/homepage/trending3.jpg"

export default function Desktop4() {
    return (
      <div className=" md:h-[1100px] h-[1750px] w-full bg-[#ffff] text-black md:ml-0 ml-[120px] ">
        <div className="text-center mt-16 md:ml-0 ml-[60px]">
            <h6 className=" text-xs md:text-sm font-bold text-[#23A6F0] mb-3">Practice Advice</h6>
            <h2 className="md:text-4xl text-2xl font-bold text-[#252B42] mb-3">Featured Posts</h2>
            <p className="hidden md:block text-sm font-normal text-[#737373] mb-12">Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics </p>
            <p className="block md:hidden text-xs font-normal text-[#737373] mb-12"><span className="ml-[2px]">Problems trying to resolve the</span> <br />
            conflict between the two major  </p>
        </div>
        <div className=" flex flex-col items-start  md:flex-row md:justify-start md:gap-4 ml-[250px]">
        <header className="w-[328px] h-[500px] md:h-[606px]">
          <div className=" h-[220px] w-[250px] md:h-[450px] md:w-[320px]" style={{
          backgroundImage: `url(${trending1.src})`
        }}>
                <h1 className="w-[70px] ml-5  p-1 text-center md:text-base text-sm bg-red-600 text-white">New</h1>
         {/* <Image src={pic1} alt="pic1" /> */}
         <div className="flex  md:justify-evenly gap-5 md:gap-0 items-start pt-5 mr-36 mt-[190px] md:mt-[130%]">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-lg md:text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1  <br />
         (L&aposintegral)</p>
         <p className="text-xs md:text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. Its only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs  md:mr-10">22 April 2024</h3>
        </div>
        <div className="flex">
        <Image src={bar} alt="bar" className="mb-5" />
        <h3 className="text-xs mr-10 mb-5">10 comments </h3>
        </div>
     </div>
     <div className="flex flex-row justify-start gap-3">
     <h5 className="text-[#737373] font-bold text-sm ml-5 mb-5">Learn More </h5><Image src={arr} alt="arrow" className="mb-5"  />
     </div>
     </div>
            </header>
            <main className="w-[328px] h-[500px] md:h-[606px]">
              <div className="h-[220px] w-[250px] md:h-[450px] md:w-[320px]" style={{
          backgroundImage: `url(${trending2.src})`
        }}>
                <h1 className="w-[70px] ml-5  p-1 text-center md:text-base text-sm bg-red-600 text-white">New</h1>
         {/* <Image src={pic2} alt="pic1" /> */}
         <div className="flex md:justify-evenly gap-5 md:gap-0 items-start pt-5 mr-36  mt-[190px] md:mt-[130%] ">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-lg md:text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1 <br />
         (Lintegral)</p>
         <p className="text-xs md:text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. Its only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs md:mr-10">22 April 2024</h3>
        </div>
        <div className="flex">
        <Image src={bar} alt="bar" className="mb-5" />
        <h3 className="text-xs mr-10 mb-5">10 comments </h3>
        </div>
     </div>
     <div className="flex flex-row justify-start gap-3">
     <h5 className="text-[#737373] font-bold text-sm ml-5 mb-5">Learn More </h5><Image src={arr} alt="arrow" className="mb-5"  />
     </div>
        </div>
            </main>
            <footer className="w-[328px] h-[500px] md:h-[606px]">
            <div className="h-[220px] w-[250px] md:h-[450px] md:w-[320px]" style={{
          backgroundImage: `url(${trending3.src})`
        }}>
                <h1 className="w-[70px] ml-5  p-1 text-center md:text-base text-sm  bg-red-600 text-white">New</h1>
         {/* <Image src={pic3} alt="pic1" /> */}
         <div className="flex md:justify-evenly gap-5 md:gap-0 items-start pt-5 mr-36  mt-[190px] md:mt-[130%]">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-lg md:text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1  <br />
         (Lintegral)</p>
         <p className="text-xs md:text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. Its only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs md:mr-10">22 April 2024</h3>
        </div>
        <div className="flex">
        <Image src={bar} alt="bar" className="mb-5" />
        <h3 className="text-xs mr-10 mb-5">10 comments </h3>
        </div>
     </div>
     <div className="flex flex-row justify-start gap-3">
     <h5 className="text-[#737373] font-bold text-sm ml-5 mb-5">Learn More </h5><Image src={arr} alt="arrow" className="mb-5"  />
     </div>
                </div>
            </footer>
        </div>
        
      </div>
    );
  }
