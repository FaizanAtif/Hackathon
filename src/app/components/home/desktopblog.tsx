import Image from "next/image";
import pic3 from "@/app/public/homepage/unsplash_dEGu-oCuB1Y.svg"
import pic2 from "@/app/public/homepage/unsplash_tVEqStC2uz8.svg"
import pic1 from "@/app/public/homepage/unsplash_hHdHCfAifHU.svg"
import watch from "@/app/public/homepage/icon cool-icon-1.svg"
import bar from "@/app/public/homepage/icon ant-design-area-chart-outlined.svg"
import arr from "@/app/public/homepage/@none.svg"

export default function Desktop4() {
    return (
      <div className="sm:h-[1100px] h-[1750px] w-full bg-[#ffff] text-black sm:ml-0 ml-[120px] ">
        <div className="text-center mt-16 sm:ml-0 ml-[60px]">
            <h6 className=" text-xs sm:text-sm font-bold text-[#23A6F0] mb-3">Practice Advice</h6>
            <h2 className="sm:text-4xl text-2xl font-bold text-[#252B42] mb-3">Featured Posts</h2>
            <p className="hidden md:block text-sm font-normal text-[#737373] mb-12">Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics </p>
            <p className="block md:hidden text-xs font-normal text-[#737373] mb-12"><span className="ml-[2px]">Problems trying to resolve the</span> <br />
            conflict between the two major  </p>
        </div>
        <div className="flex flex-col items-start  sm:flex-row sm:justify-start sm:gap-4 ml-[70px]">
        <header className="w-[328px] h-[500px] sm:h-[606px]">
          <div className="bg-[url('https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWHI9m034m0iopAiiyDQGDYeAQOmB-qO2D3ouP61svnKlvaq8IQx88J1g3wuspqXHxx~rq1qaicaQ9mP~cvUW0nec32oHDtqpy9XlqJL8wh~aFC6dt-pdWWvSe9KpnqpMumbrgHD4YJZYE6aVlzP1g7jHamshVDPs1F9kRMee1mqEE8OH~Gou62fYYLHAILUGMjhA1WitvID61hxR2P71tUJ8D7t5f279pAtY4R7rkaeyoBk6BvgwEvaUEU3jAwm9NJmNnvSQutxSGmE~do0hC9MLqXbA2muLqntm-WhM-Ut4MHxApbY0pVv5DEzKVimyzAVCMpkCL~QHcHRle8QTA__')] h-[220px] w-[250px] sm:h-[450px] sm:w-[320px]">
                <h1 className="w-[70px] ml-5  p-1 text-center sm:text-base text-sm bg-red-600 text-white">New</h1>
         {/* <Image src={pic1} alt="pic1" /> */}
         <div className="flex  sm:justify-evenly gap-5 sm:gap-0 items-start pt-5 mr-36 mt-[190px] sm:mt-[130%]">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-lg sm:text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1  <br />
         (L'integral)</p>
         <p className="text-xs sm:text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. It's only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs  sm:mr-10">22 April 2024</h3>
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
            <main className="w-[328px] h-[500px] sm:h-[606px]">
              <div className="bg-[url('https://s3-alpha-sig.figma.com/img/412d/5bc5/d51defa7e9522a5eb5f534d0442131b2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ww4kYbd03QThabLQkB-20O79IJzc5WPeSwGwli92OYUKFIDKmV5CDWC0iSSrNq~9wCYdTKJLN4ooq5hXCw2-BmlwDZx--Agw8Ha9eU6GlmFdLFN~3BWgJvTZTOuHeHOTQTIxv7OeourB1s8buDB2bwG3ExYXRHr6TLLv8qCk8i7fT8M0qYMGviB4YDrT~VlCEyI-Jk8cvChLHlDX82-53CCoOOHYFLH2rL2NPNZObZw9rnMQNGQpYMLOckreB0yrSfbVUweR1cvZjzfqUvIvLddG0cgyx5kVDrcuXIAxIaq59JuE9GPYea22lF3ANNQ4Xv3dNSnZk1GwPsEMYYotRQ__')] h-[220px] w-[250px] sm:h-[450px] sm:w-[320px]">
                <h1 className="w-[70px] ml-5  p-1 text-center sm:text-base text-sm bg-red-600 text-white">New</h1>
         {/* <Image src={pic2} alt="pic1" /> */}
         <div className="flex sm:justify-evenly gap-5 sm:gap-0 items-start pt-5 mr-36  mt-[190px] sm:mt-[130%] ">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-lg sm:text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1 <br />
         (L'integral)</p>
         <p className="text-xs sm:text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. It's only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs sm:mr-10">22 April 2024</h3>
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
            <footer className="w-[328px] h-[500px] sm:h-[606px]">
            <div className=" bg-[url('https://s3-alpha-sig.figma.com/img/af91/645f/60a447510f7b4e8aa158f122b0d1fe29?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aatIwQ6XOU0mz9bZGqACa~X0vAE1~HoxZfv~51e20AB9hGvxp2CD3B~lKG-ptf19yTx78Dn7IfMHMRSw~Jj0Ac~wqVXKrDqK6HyoREcC~OrcqxLB8CALp~PWwb~pnJkh1dj0T9FqWs9N6L7ZTHqjtd~IfsNLzcG8WJ3kl0GvrYpT4VhHyODkd02WXdb1V9E7~LhPpzJ1uQx9vtCmapf6J7AuQXKw~r6gVho3BdNfvryk2lR~l3t6RSg0O5rOBXpfP~5iUdbTUBW6l~vtHggC3f1FI5tJJ8ASHb2Hy4R0-fUF2nQSeziTkQbgVmX~L5WQHIKz7l9iZE3i22sRtVkHwA__')] h-[220px] w-[250px] sm:h-[450px] sm:w-[320px]">
                <h1 className="w-[70px] ml-5  p-1 text-center sm:text-base text-sm  bg-red-600 text-white">New</h1>
         {/* <Image src={pic3} alt="pic1" /> */}
         <div className="flex sm:justify-evenly gap-5 sm:gap-0 items-start pt-5 mr-36  mt-[190px] sm:mt-[130%]">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-lg sm:text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1  <br />
         (L'integral)</p>
         <p className="text-xs sm:text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. It's only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs sm:mr-10">22 April 2024</h3>
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