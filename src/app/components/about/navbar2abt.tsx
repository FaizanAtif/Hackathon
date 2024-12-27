"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import search from "@/app/public/about/vector.svg";
import basket from "@/app/public/about/Vector (1).svg";
import bar from "@/app/public/about/icn menu .icn-xs.svg";
import arrow from "@/app/public/about/Vector (2).svg";

export default function NavAbt2() {
    const [active, setActive] = useState(null);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/dashboard/product" },
        { name: "Product", path: "/dashboard/listpage" },
        { name: "About", path: "/dashboard/about" },
        { name: "Pricing", path: "/dashboard/pricing" },
        { name: "Contact", path: "/dashboard/contact" },
    ];

    return (
        <div className="bg-[#ffffff] font-bold text-[#737373] h-auto w-[414px] sm:w-[1100px] flex flex-col sm:flex-row sm:items-center items-center justify-start gap-10 sm:gap-5 px-2 sm:px-6">
            {/* Logo and Icons */}
            <div className="flex flex-row items-end justify-start gap-16">
                <h1 className="text-[#252B42] font-bold mt-[50px] sm:mt-0 ml-[150px] sm:ml-2 sm:text-2xl">Bandage</h1>
                <div className="flex items-center justify-start gap-4">
                    <Image src={search} alt="search" className="block md:hidden" />
                    <Image src={basket} alt="basket" className="block md:hidden" />
                    <Image src={bar} alt="bar" className="block md:hidden" />
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row sm:justify-between text-center ml-28 sm:ml-0 gap-5">
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

            {/* Login and Membership Buttons */}
            <div className="flex justify-start gap-5">
                <button className="text-[#23A6F0] hidden md:block">Login</button>
                <button className="bg-[#23A6F0] flex items-center">
                    <span className="hidden md:block rounded-lg gap-4 py-3 px-5 w-full text-[#ffff]">Become a member</span>
                    <Image src={arrow} alt="arrow" className="hidden md:block mr-5" />
                </button>
            </div>
        </div>
    );
}
