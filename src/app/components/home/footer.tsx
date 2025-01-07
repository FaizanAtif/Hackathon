import Image from "next/image";
import Link from "next/link";

// Import SVG files with proper type definitions
import fbIcon from "@/app/public/homepage/ant-design_facebook-filled.svg";
import instaIcon from "@/app/public/homepage/ant-design_instagram-outlined.svg";
import twitterIcon from "@/app/public/homepage/twitter.svg";

// Adding type declaration for StaticImageData
import type { StaticImageData } from "next/image";

interface SocialIcon {
    src: StaticImageData;
    alt: string;
}

const socialIcons: SocialIcon[] = [
    { src: fbIcon, alt: "facebook" },
    { src: instaIcon, alt: "instagram" },
    { src: twitterIcon, alt: "twitter" },
];

export default function Footer(): JSX.Element {
    return (
        <div className="w-full bg-white">
            <div className="max-w-[1200px] mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#252B42] mb-4 md:mb-0">
                        Bandage
                    </h3>
                    <div className="flex items-center space-x-4">
                        {socialIcons.map((icon, index) => (
                            <Image 
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                                className="w-6 h-6 md:w-8 md:h-8 transform transition-transform hover:scale-110 cursor-pointer"
                                width={32}
                                height={32}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer Content */}
                <div className="border-t border-gray-200">
                    <div className="py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {/* Company Info */}
                            <div className="space-y-4">
                                <h5 className="font-bold text-lg text-[#252B42]">Company Info</h5>
                                <nav className="flex flex-col space-y-2">
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        About Us
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Carrier
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        We are hiring
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Blog
                                    </Link>
                                </nav>
                            </div>

                            {/* Legal */}
                            <div className="space-y-4">
                                <h5 className="font-bold text-lg text-[#252B42]">Legal</h5>
                                <nav className="flex flex-col space-y-2">
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        About Us
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Carrier
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        We are hiring
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Blog
                                    </Link>
                                </nav>
                            </div>

                            {/* Features */}
                            <div className="space-y-4">
                                <h5 className="font-bold text-lg text-[#252B42]">Features</h5>
                                <nav className="flex flex-col space-y-2">
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Business Marketing
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        User Analytic
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Live Chat
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Unlimited Support
                                    </Link>
                                </nav>
                            </div>

                            {/* Resources */}
                            <div className="space-y-4">
                                <h5 className="font-bold text-lg text-[#252B42]">Resources</h5>
                                <nav className="flex flex-col space-y-2">
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        IOS & Android
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Watch a Demo
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        Customers
                                    </Link>
                                    <Link href="/" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                                        API
                                    </Link>
                                </nav>
                            </div>

                            {/* Get In Touch */}
                            <div className="space-y-4">
                                <h5 className="font-bold text-lg text-[#252B42]">Get In Touch</h5>
                                <div className="flex flex-col space-y-2">
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <input 
                                            type="email"
                                            placeholder="Your Email"
                                            className="px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#23A6F0]"
                                        />
                                        <button 
                                            type="button"
                                            className="px-6 py-2 bg-[#23A6F0] text-white rounded hover:bg-white hover:text-[#23A6F0] border border-transparent hover:border-[#23A6F0] transition-colors whitespace-nowrap"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className="text-sm text-[#737373]">
                                        Lorem ipsum dolor amit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
