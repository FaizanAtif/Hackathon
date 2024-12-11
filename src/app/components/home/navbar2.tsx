import Image from "next/image"
import prof from "@/app/public/homepage/Vector (1).svg"
import a from "@/app/public/homepage/a (2).svg"
import b from "@/app/public/homepage/li (1).svg"
import c from "@/app/public/homepage/btn-32.svg"
export default function Nav2 () {
    return(
         <div className="bg-[#ffff] text-[#737373] h-[58px] w-[1440px]  flex items-center justify-between  px-6">
        
        
        <h1 className=" text-[#252B42] font-bold text-2xl ">Bandage</h1>
        <div className="flex justify-between gap-5 mr-64">
        <h6>Home</h6>
        <h6>Shop</h6>
        <h6>About</h6>
        <h6>Blog</h6>
        <h6>Contact</h6>
        <h6>Pages</h6></div>
        <div className="flex text-[#23A6F0] justify-between gap-5">
        
        <h5 className="flex  items-center justify-between gap-2">
        <Image src={prof} alt="prof" />Login / Register</h5>
        <Image src={b} alt="search" />
        <Image src={a} alt="shop" />
        <Image src={c} alt="follow" />

        </div>
        </div>
        
    )
}