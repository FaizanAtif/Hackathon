import Image from "next/image";
import fb from "@/app/public/homepage/ant-design_facebook-filled.svg"
import insta from "@/app/public/homepage/ant-design_instagram-outlined.svg"
import twitter from "@/app/public/homepage/twitter.svg"
import Link from "next/link";


export default function Desktop6() {
    return (
      <div className="h-auto w-full bg-[#ffff] text-black ">
        <div className="w-[1044px] h-[651px] py-10 ml-[195px]">
            <header className="flex justify-between">
                <h3 className="font-bold text-2xl text-[#252B42] ml-14">Bandage</h3>
             <div className="flex flex-row justify-between gap-5 ">   
                <Image  src={fb} alt="facebook"/>
                <Image  src={insta} alt="instagram"/>
                <Image  src={twitter} alt="twitter" className="mr-24"/>
             </div>
            </header>
            <footer className="w-[1057px] mt-[80px]  border border-red-500">
                <div className="w-[1050px] h-[270px] p-14 flex justify-between">
                    <div className="flex flex-col place-items-start gap-5">
                        <h5 className="text-[#252B42] font-bold">Company Info</h5>
                        <Link href={''} className="font-bold text-sm text-[#737373]">About Us</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Carrier</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">We are hiring</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Blog</Link>
                    </div>
                    <div className="flex flex-col place-items-start gap-5">
                        <h5 className="text-[#252B42] font-bold">Legal</h5>
                        <Link href={''} className="font-bold text-sm text-[#737373]">About Us</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Carrier</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">We are hiring</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Blog</Link>
                    </div>                    
                    <div className="flex flex-col place-items-start gap-5">
                        <h5 className="text-[#252B42] font-bold">Features</h5>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Business Marketing</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">User Analytic</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Live Chat</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Unlimited Support</Link>
                    </div>                    
                    <div className="flex flex-col place-items-start gap-5">
                        <h5 className="text-[#252B42] font-bold">Resources</h5>
                        <Link href={''} className="font-bold text-sm text-[#737373]">IOS & Android</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Watch a Demo</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">Customers</Link>
                        <Link href={''} className="font-bold text-sm text-[#737373]">API</Link>
                    </div>                    
                    <div className="flex flex-col place-items-start gap-5">
                        <h5 className="text-[#252B42] font-bold">Get In Touch</h5>
                        <div className="flex">
                        <input type="email"
                        placeholder="Your Email"
                        className="text-[#737373] border border-[#F9F9F9] py-3" /> <button className="text-[#ffff] bg-[#23A6F0] py-3 px-4 ">Subscribe</button> 
                        </div>
                        <h6 className=" text-xs text-[#737373]">Lore imp sum dolor Amit</h6>
                    </div>                    
                </div>
            </footer>
        </div>
      </div>
    );
  }
  