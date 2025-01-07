"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import search from "@/app/public/about/vector.svg";
import basket from "@/app/public/about/Vector (1).svg";
import bar from "@/app/public/about/icn menu .icn-xs.svg";
import arrow from "@/app/public/about/Vector (2).svg";

export default function NavAbt2() {
  const [active, setActive] = useState<string | null>(null); // Explicitly type as string | null

  const menuItems = [
    { name: "Home", path: "/" },
    //{ name: "Shop", path: "/dashboard/product" },
    { name: "Shop", path: "/dashboard/shop" },
    { name: "About", path: "/dashboard/about" },
    { name: "Pricing", path: "/dashboard/pricing" },
    { name: "Contact", path: "/dashboard/contact" },
  ];

  return (
    <div className="bg-[#ffffff] font-bold text-[#737373] w-full flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-8 py-4">
      {/* Logo and Icons */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <h1 className="text-[#252B42] font-bold text-xl sm:text-2xl block sm:hidden">Bandage</h1>
        <div className="flex items-center gap-4 ">
          <Image src={search} alt="search" className="w-5 h-5 block sm:hidden" />
          <Image src={basket} alt="basket" className="w-5 h-5 block sm:hidden" />
          <Image src={bar} alt="menu" className="w-5 h-5 block sm:hidden" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex flex-row gap-6 mt-4 sm:mt-0">
        {menuItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <button
              className={`px-4 py-2 rounded-md ${
                active === item.name
                  ? "bg-[#23A6F0] text-white"
                  : "text-[#737373] hover:bg-[#e0f2fe] hover:text-[#23A6F0]"
              }`}
              onClick={() => setActive(item.name)} // Assign string value
            >
              {item.name}
            </button>
          </Link>
        ))}
      </div>

      {/* Login and Membership Buttons */}
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <button className="text-[#23A6F0] hidden sm:block">Login</button>
        <button className="bg-[#23A6F0] flex items-center px-4 py-2 rounded-md text-white">
          <span className="hidden sm:block">Become a member</span>
          <Image src={arrow} alt="arrow" className="w-4 h-4 ml-2 hidden sm:block" />
        </button>
      </div>
    </div>
  );
}
