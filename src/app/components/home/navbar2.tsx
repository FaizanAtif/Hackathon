"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import prof from "@/app/public/homepage/Vector (1).svg";
import a from "@/app/public/homepage/a (2).svg";
import b from "@/app/public/homepage/li (1).svg";
import c from "@/app/public/homepage/btn-32.svg";

export default function Nav2() {
    // Fixing the type issue by setting the state to be string or null
    const [active, setActive] = useState<string | null>(null);

    const menuItems = [
        { name: "Home", path: "/" },
        //{ name: "Shop", path: "/dashboard/product" },
        { name: "Shop", path: "/dashboard/shop" },
        { name: "About", path: "/dashboard/about" },
        { name: "Pricing", path: "/dashboard/pricing" },
        { name: "Contact", path: "/dashboard/contact" },
    ];

    return (
        <div className="bg-white text-[#737373] h-auto flex flex-col sm:flex-row sm:items-center justify-between px-4 py-4 mx-auto sm:max-w-screen-lg">
            {/* Logo */}
            <h1 className="text-[#252B42] font-bold text-xl sm:text-2xl">Bandage</h1>
            
            {/* Navigation Menu */}
            <div className="flex flex-col sm:flex-row text-center mt-4 sm:mt-0 gap-4">
                {menuItems.map((item, index) => (
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

            {/* User Actions */}
            <div className="flex flex-col sm:flex-row text-[#23A6F0] sm:gap-4 mt-4 sm:mt-0">
                <h5 className="flex items-center gap-2">
                    <Image src={prof} alt="prof" /> Login/Register
                </h5>
                <Image src={b} alt="search" className="transform transition-transform duration-300 hover:scale-125" />
                <Image src={a} alt="shop" className="ml-4" />
                <Image src={c} alt="follow" className="ml-4" />
            </div>
        </div>
    );
}
