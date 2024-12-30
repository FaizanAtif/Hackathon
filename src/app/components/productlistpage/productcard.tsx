import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: StaticImageData;
  title: string;
  department: string;
  oldPrice: string;
  newPrice: string;
  colors: string[];
}

const ProductCard = ({
  image,
  title,
  department,
  oldPrice,
  newPrice,
  colors,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 transform transition-transform duration-300 hover:scale-105">
      <Image src={image} alt={title} className="w-[200px] h-auto" />  {/* Further reduced size */}
      <div className="flex flex-col items-center gap-3 ml-6">
        <h5 className="font-bold text-sm text-[#252B42]">{title}</h5> {/* Smaller text size */}
        <Link href={''} className="font-bold text-xs text-[#737373]">{department}</Link> {/* Smaller department text */}
        <div className="flex gap-1">
          <h5 className="font-bold text-[#BDBDBD] text-xs">{oldPrice}</h5>
          <h5 className="font-bold text-[#23856D] text-xs">{newPrice}</h5>
        </div>
        <div className="flex gap-1">
          {colors.map((color, index) => (
            <h5
              key={index}
              className={`bg-[${color}] h-3 w-3 rounded-full transform transition-transform duration-300 hover:scale-125`}
            ></h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
