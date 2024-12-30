import Image from "next/image";

import pic3 from "@/app/public/homepage/unsplash_dEGu-oCuB1Y.svg"

import pic2 from "@/app/public/homepage/unsplash_tVEqStC2uz8.svg"

import pic1 from "@/app/public/homepage/unsplash_hHdHCfAifHU.svg"

import watch from "@/app/public/homepage/icon cool-icon-1.svg"

import bar from "@/app/public/homepage/icon ant-design-area-chart-outlined.svg"

import arr from "@/app/public/homepage/@none.svg"

export default function Desktop4() {
    return (
        <div className="h-auto min-h-[1100px] w-full bg-white text-black mx-auto p-5 sm:p-0">  
            <div className="text-center mt-16">
                <h6 className="text-xs sm:text-sm font-bold text-[#23A6F0] mb-3">Practice Advice</h6>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#252B42] mb-3">Featured Posts</h2>
                <p className="hidden md:block text-sm font-normal text-[#737373] mb-12">
                    Problems trying to resolve the conflict between 
                    <br /> the two major realms of Classical physics: Newtonian mechanics 
                </p>
                <p className="block md:hidden text-xs font-normal text-[#737373] mb-12">
                    <span className="ml-[2px]">Problems trying to resolve the</span> 
                    <br /> conflict between the two major 
                </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-start sm:gap-4 gap-6">
                {/* First Post Section */}
                <header className="flex-1 w-full max-w-sm">
                    <div className="bg-[url('https://image-url.com')] h-[220px] w-full sm:h-[450px] bg-cover bg-center">
                        <h1 className="w-[70px] ml-5 p-1 text-center text-sm bg-red-600 text-white">New</h1>
                        <div className="flex justify-between items-center mt-5">
                            <h6 className="text-[#8EC2F2] text-xs">Google</h6>
                            <h6 className="text-[#737373] text-xs">Trending</h6>
                            <h6 className="text-[#737373] text-xs">New</h6>
                        </div>
                        <p className="text-lg sm:text-xl text-[#252B42] mx-5 mb-5">Loudest à la Madison #1 <br />(L'integral)</p>
                        <div className="flex flex-row justify-between mx-5 mb-5">
                            <div className="flex items-center">
                                <Image src={watch} alt="clock" className="mr-2" />
                                <h3 className="text-xs">22 April 2024</h3>
                            </div>
                            <div className="flex items-center">
                                <Image src={bar} alt="bar" className="mr-2" />
                                <h3 className="text-xs">10 comments</h3>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Second Post Section */}
                <main className="flex-1 w-full max-w-sm">
                    <div className="bg-[url('https://image-url.com')] h-[220px] w-full sm:h-[450px] bg-cover bg-center">
                        <h1 className="w-[70px] ml-5 p-1 text-center text-sm bg-red-600 text-white">New</h1>
                        <div className="flex justify-between items-center mt-5">
                            <h6 className="text-[#8EC2F2] text-xs">Google</h6>
                            <h6 className="text-[#737373] text-xs">Trending</h6>
                            <h6 className="text-[#737373] text-xs">New</h6>
                        </div>
                        <p className="text-lg sm:text-xl text-[#252B42] mx-5 mb-5">Loudest à la Madison #1 <br />(L'integral)</p>
                        <div className="flex flex-row justify-between mx-5 mb-5">
                            <div className="flex items-center">
                                <Image src={watch} alt="clock" className="mr-2" />
                                <h3 className="text-xs">22 April 2024</h3>
                            </div>
                            <div className="flex items-center">
                                <Image src={bar} alt="bar" className="mr-2" />
                                <h3 className="text-xs">10 comments</h3>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Third Post Section */}
                <footer className="flex-1 w-full max-w-sm">
                    <div className="bg-[url('https://image-url.com')] h-[220px] w-full sm:h-[450px] bg-cover bg-center">
                        <h1 className="w-[70px] ml-5 p-1 text-center text-sm bg-red-600 text-white">New</h1>
                        <div className="flex justify-between items-center mt-5">
                            <h6 className="text-[#8EC2F2] text-xs">Google</h6>
                            <h6 className="text-[#737373] text-xs">Trending</h6>
                            <h6 className="text-[#737373] text-xs">New</h6>
                        </div>
                        <p className="text-lg sm:text-xl text-[#252B42] mx-5 mb-5">Loudest à la Madison #1 <br />(L'integral)</p>
                        <div className="flex flex-row justify-between mx-5 mb-5">
                            <div className="flex items-center">
                                <Image src={watch} alt="clock" className="mr-2" />
                                <h3 className="text-xs">22 April 2024</h3>
                            </div>
                            <div className="flex items-center">
                                <Image src={bar} alt="bar" className="mr-2" />
                                <h3 className="text-xs">10 comments</h3>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
