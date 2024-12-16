import Image from "next/image";
import pic3 from "@/app/public/homepage/unsplash_dEGu-oCuB1Y.svg"
import pic2 from "@/app/public/homepage/unsplash_tVEqStC2uz8.svg"
import pic1 from "@/app/public/homepage/unsplash_hHdHCfAifHU.svg"
import watch from "@/app/public/homepage/icon cool-icon-1.svg"
import bar from "@/app/public/homepage/icon ant-design-area-chart-outlined.svg"
import arr from "@/app/public/homepage/@none.svg"

export default function Desktop4() {
    return (
      <div className="h-[1100px] w-full bg-[#ffff] text-black px-48">
        <div className="text-center ">
            <h6 className="text-sm font-bold text-[#23A6F0] mb-3">Practice Advice</h6>
            <h2 className="text-4xl font-bold text-[#252B42] mb-3">Featured Posts</h2>
            <p className="text-sm font-normal text-[#737373] mb-32">Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="flex justify-between">
        <header className="w-[328px] h-[606px]">
          <div className="bg-[url('https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EbjaIzmSBSESP8SmpOLaF~xZyTiLx-pL3jyu7osnWJaUwWz3CCoUweRoWjgR5n1Sk6RPDWXTIk3Re2n4nerdPxcaz9DHM7scjlmpyD8pGnfBONUbGAA19SM35sy86BGN64enA-o0xIo01p-RY5KPJ0Kkrp3qqup6ZJfcOVrz9y0BgF-uTopEFtMSu22WLobs6x8YrtUN5GCVyORsl-clmiWSF4jzK8tB3994jfYEkwgUWq0ExviCMykV37hm7dEK~LWqR25mYXiMiY5pk-XvAeGpAW96zo9demVbsJu2DjO9Ejv2jttR65iBb1lGE1IehEiwlY0He7R6T1j5rjRTJA__')]  h-[450px] w-[348px]">
                <h1 className="w-[70px] ml-5  p-1 text-center  bg-red-600 text-white">New</h1>
         {/* <Image src={pic1} alt="pic1" /> */}
         <div className="flex justify-evenly items-start pt-5 mr-36 mt-[125%]">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1  <br />
         (L'integral)</p>
         <p className="text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. It's only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs mr-10">22 April 2024</h3>
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
            <main className="w-[328px] h-[606px]">
              <div className="bg-[url('https://s3-alpha-sig.figma.com/img/412d/5bc5/d51defa7e9522a5eb5f534d0442131b2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AynmrREx1RF2rbsDZz~IjtD0-4Q3XrWDnrY0nMdnfdYpUY-KRSG6WHLTGicquA14WgAeSMQWAhgxLRTKkwj6ybmtvZezk5K~JKe389bfzwveW63jTz3Nm9cKiyAuBXiZccyxBjzjEqzW-hZzrLZPcI~mUJgu4SshW9jUsABoi1q4Rn0DjTNfXeWoHV5Fra~8GZg2I8ow6O4N35MgA45wP3g62OZCd89ZaNkog1N7VKWRpQwa25GSi40rGnE~TIroHZMgHQ0Sn6Yc-yf4MoqGq7Z4-P~dmC68WswDNP9tToLxbNUltNfJZyzD5tbotoZduvPD5SOrzW3EerbEzNdkxg__')] h-[450px] w-[348px]">
                <h1 className="w-[70px] ml-5  p-1 text-center  bg-red-600 text-white">New</h1>
         {/* <Image src={pic2} alt="pic1" /> */}
         <div className="flex justify-evenly items-start pt-5 mr-36 mt-[125%] ">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1 <br />
         (L'integral)</p>
         <p className="text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. It's only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs mr-10">22 April 2024</h3>
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
            <footer className="w-[328px] h-[606px]">
            <div className=" bg-[url('https://s3-alpha-sig.figma.com/img/af91/645f/60a447510f7b4e8aa158f122b0d1fe29?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=otfRMHoQt5OR8W7TXDAdCgbvcl2~TVY0a6txpxhlA~JptB3rPdLkXO81KOwfdiqrJrGovAI0IV5xwVZSRZIXKZdpHRqp~o2ClLPlIIEJ7XhentNRKlSsMlYOi1ggKhsOB0d7uHIy2M98oIRnNmdfQyW~z9mRzwTNvFcBdrIrlddLjAcCfvYl0Hs~mPKRbPp5I6t6M5CPSJ6gN8CzhrPTU4i15J3CWdxO8p9K7ZfwNrLf838abAk~5S~6XK4sxGKGS1H0ZCGrsB~NhK7KfAq9ldlDwGEh5mHGwuahoOyc3W1jk1D4xNWRiyM6wj~3UqMd-YG8QxvTKoJcVkhHZS4PEQ__')] h-[450px] w-[348px]">
                <h1 className="w-[70px] ml-5  p-1 text-center  bg-red-600 text-white">New</h1>
         {/* <Image src={pic3} alt="pic1" /> */}
         <div className="flex justify-evenly items-start pt-5 mr-36 mt-[125%]">
         <h6 className="text-[#8EC2F2] text-xs">Google</h6>
         <h6 className="text-[#737373] text-xs">Trending</h6>
         <h6 className="text-[#737373] text-xs mb-5">New</h6>
         </div>  
         <p className="text-xl text-[#252B42] ml-5 mb-5">Loudest à la Madison #1  <br />
         (L'integral)</p>
         <p className="text-sm text-[#737373] ml-5 mb-5">We focus on ergonomics and meeting <br />
    you where you work. It's only a <br />
     away.</p>
     <div className="flex  flex-row justify-around ">
        <div className="flex">
        <Image src={watch} alt="clock" className="mb-5" />
        <h3 className="text-xs mr-10">22 April 2024</h3>
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