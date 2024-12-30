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
    <div className="flex justify-center items-center h-full w-full bg-[#FAFAFA] text-black mt-10">
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
  );
}
