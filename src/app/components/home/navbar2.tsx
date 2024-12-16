"use client"
import { useState } from "react";
import Image from "next/image";
import prof from "@/app/public/homepage/Vector (1).svg";
import a from "@/app/public/homepage/a (2).svg";
import b from "@/app/public/homepage/li (1).svg";
import c from "@/app/public/homepage/btn-32.svg";

export default function Nav2() {
    const [active, setActive] = useState(null);
    const [hovered, setHovered] = useState(null);

    const menuItems  = ["Home", "Shop", "About", "Blog", "Contact", "Pages"];

    return (
        <div className="bg-[#ffff] text-[#737373] h-[58px] w-full flex items-center justify-between px-6">
            <h1 className="text-[#252B42] font-bold text-2xl">Bandage</h1>

            <div className="flex justify-between gap-5 mr-64">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`px-3 py-1 rounded-md ${
                            active === item
                                ? "bg-[#23A6F0] text-white"
                                : "text-[#737373] hover:bg-[#e0f2fe] hover:text-[#23A6F0]"
                        }`}
                        onClick={() => setActive(item)}
                        onMouseEnter={() => setHovered(item)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {item}
                        {hovered === item && (
                            <span className="absolute bg-white shadow-lg text-sm p-1 mt-1 rounded-md border">
                                
                            </span>
                        )}
                    </button>
                ))}
            </div>

            <div className="flex text-[#23A6F0] justify-between gap-5">
                <h5 className="flex items-center gap-2">
                    <Image src={prof} alt="prof" /> Login / Register
                </h5>
                <Image src={b} alt="search"className="transform transition-transform duration-300 hover:scale-125"/>
                <Image src={a} alt="shop" />
                <Image src={c} alt="follow" />
            </div>
        </div>
    );
}
