"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import prof from "@/app/public/homepage/Vector (1).svg";
import a from "@/app/public/homepage/a (2).svg";
import b from "@/app/public/homepage/li (1).svg";
import c from "@/app/public/homepage/btn-32.svg";

export default function Nav2() {
    const [active, setActive] = useState(null);
    const [hovered, setHovered] = useState(null);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/dashboard/product" },
        { name: "Products", path: "/dashboard/listpage" },
        { name: "About", path: "/dashboard/about" },
        { name: "Pricing", path: "/dashboard/pricing" },
        { name: "Contact", path: "/dashboard/contact" },
    ];

    return (
        <div className="bg-[#ffffff] text-[#737373] h-auto sm:h-[58px] sm:w-[1140px] flex flex-col sm:flex-row sm:items-center items-center ml-[150px] sm:ml-0 justify-between px-4 sm:px-6 py-4">
            {/* Logo */}
            <h1 className="text-[#252B42] font-bold sm:ml-2 sm:text-2xl">Bandage</h1>

            {/* Navigation Menu */}
            <div className="flex flex-col  sm:flex-row text-center ml-[100px] mt-8 sm:mt-0 sm:ml-10 gap-5">
                {menuItems.map((item:any, index) => (
                    <Link href={item.path} key={index}>
                        <button
                            className={`px-3 py-1 rounded-md ${
                                active === item.name
                                    ? "bg-[#23A6F0] text-white"
                                    : "text-[#737373] hover:bg-[#e0f2fe] hover:text-[#23A6F0]"
                            }`}
                            onClick={() => setActive(item.name)}
                        >
                            {item.name}
                        </button>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row text-[#23A6F0] mt-10 sm:mt-0  sm:gap-5 ml-[90px] sm:mr-4 sm:ml-10">
                <h5 className="flex sm:flex-row  items-center  gap-2  ">
                    <Image src={prof} alt="prof" /> Login/Register
                </h5>
                <Image src={b} alt="search"className="transform transition-transform duration-300 hover:scale-125 text-center ml-11 sm:ml-0"/>
                <Image src={a} alt="shop" className="text-center ml-11 sm:ml-0" />
                <Image src={c} alt="follow" className="text-center ml-11 sm:ml-0"/>
            </div>
        </div>
    );
}
