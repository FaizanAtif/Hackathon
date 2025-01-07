import ProductCard from "./productcard";
import pic1 from "@/app/public/productpage/product-cover-5.png";
import pic2 from "@/app/public/productpage/product-cover-5 (1).png";
import pic3 from "@/app/public/productpage/product-cover-5 copy.png";
import pic4 from "@/app/public/productpage/product-cover-5 (2).png";
import pic5 from "@/app/public/productpage/5.png";
import pic6 from "@/app/public/productpage/6.png";
import pic7 from "@/app/public/productpage/7.png";
import pic8 from "@/app/public/productpage/8.png";
import pic9 from "@/app/public/productpage/9.png";
import pic10 from "@/app/public/productpage/10.png";
import pic11 from "@/app/public/productpage/11.png";
import pic12 from "@/app/public/productpage/12.png";
import Image from "next/image"
import square4 from "@/app/public/productpage/Vector.svg"
import list from "@/app/public/productpage/Vector (1).svg"
import V from "@/app/public/productpage/Vector (2).svg"

const productData = [
  { image: pic1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic2, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic3, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic4, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic5, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic6, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic7, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic8, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic9, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic10, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic11, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  { image: pic12, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
];

export default function Desktop10() {
  return (

    <div>
      
      <div className="text-[#737373] h-auto w-full mt-10 text- sm:text-start flex sm:flex-row sm:items-start sm:gap-4 flex-col gap-10">
            <h1 className="ml-[200px] sm:ml-24 text-xl sm:text-base w-full">showing all 12 results</h1>
            <div className="flex items-center justify-between gap-14 sm:gap-14 sm:ml-0 ml-[37px] sm:mr-[60px]">
                <h1 className="ml-[170px] sm:ml-[10px]">Views:</h1>
               <Image src={square4} alt="squar4" />
               <Image src={list} alt="list" />
            </div>
            <div className="flex justify-between items-center gap-5 ml-[170px] w-full sm:mr-[40px]">
            <div className="flex gap-2 ml-[4px] sm:ml-[100px] ">
            <h1>popularity</h1> 
            <Image src={V} alt="V" /> 
            </div>
            <button className="py-3 px-10 bg-[#23A6F0] text-white">Filter</button>
        </div>
        </div>







    <div className="flex justify-center items-center h-full w-full bg-[#FAFAFA] text-black">
      <div className="w-[80%] sm:w-[1050px] p-2">
        <div className="flex flex-col items-center gap-12">
          <header className="flex flex-wrap justify-center gap-5 sm:gap-16">
            {productData.slice(0, 4).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </header>
          <section className="flex flex-wrap justify-center gap-5 sm:gap-16">
            {productData.slice(4, 8).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </section>
          <footer className="flex flex-wrap justify-center gap-5 sm:gap-16">
            {productData.slice(8).map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </footer>
        </div>
      </div>
    </div>
    </div>
  );
}
