import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import pic1 from "@/app/public/homepage/fixed-height.svg";
import pic2 from "@/app/public/homepage/fixed-height (1).svg";
import pic3 from "@/app/public/homepage/fixed-height (2).svg";
import pic4 from "@/app/public/homepage/fixed-height (3).svg";
import pic5 from "@/app/public/homepage/fixed-height (4).svg";
import pic6 from "@/app/public/homepage/fixed-height (5).svg";
import pic7 from "@/app/public/homepage/fixed-height (6).svg";
import pic8 from "@/app/public/homepage/fixed-height (7).svg";

// Define interfaces for our props
interface ProductCardProps {
    image: StaticImageData;
    alt: string;
}

interface Product {
    image: StaticImageData;
    alt: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, alt }: ProductCardProps) => (
    <div className="flex flex-col items-center lg:items-start gap-5 transform transition-transform duration-300 hover:scale-105 w-full max-w-sm">
        <Image 
            src={image} 
            alt={alt} 
            className="w-full max-w-[280px]" 
        />
        <div className="flex flex-col items-center lg:items-start gap-5 w-full px-4 lg:px-0">
            <h5 className="font-bold text-sm text-[#252B42]">Graphic Design</h5>
            <Link href="" className="font-bold text-sm text-[#737373]">English Department</Link>
            <div className="flex gap-2">
                <h5 className="font-bold text-[#BDBDBD]">$16.48</h5>
                <h5 className="font-bold text-[#23856D]">$6.48</h5>
            </div>
            <div className="flex gap-1.5">
                <h5 className="bg-[#23A6F0] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
                <h5 className="bg-[#23856D] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
                <h5 className="bg-[#E77C40] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
                <h5 className="bg-[#252B42] h-4 w-4 rounded-full transform transition-transform duration-300 hover:scale-150"></h5>
            </div>
        </div>
    </div>
);

const Desktop3: React.FC = () => {
    const products: Product[] = [
        { image: pic1, alt: "pic1" },
        { image: pic2, alt: "pic2" },
        { image: pic3, alt: "pic3" },
        { image: pic4, alt: "pic4" },
        { image: pic5, alt: "pic5" },
        { image: pic6, alt: "pic6" },
        { image: pic7, alt: "pic7" },
        { image: pic8, alt: "pic8" },
    ];

    return (
        <div className="w-full bg-[#FAFAFA] text-[#252b42] px-4 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h4 className="text-xl text-[#737373] mb-3">Featured Products</h4>
                    <h3 className="font-bold text-2xl mb-4">
                        BESTSELLER PRODUCTS
                    </h3>
                    <p className="text-sm font-normal text-[#737373] max-w-md mx-auto">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            alt={product.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Desktop3;
