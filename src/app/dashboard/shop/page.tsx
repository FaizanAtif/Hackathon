import Desktop6 from "@/app/components/home/footer";
import Nav2 from "@/app/components/home/navbar2";
import Logos from "@/app/components/shop/logos";
import Nav1 from "@/app/components/shop/navbar1";
import Desktop10 from "@/app/components/shop/products";
import Shopcart from "@/app/components/shop/shopHero";


export default function ProductList () {
    return(
        <div className="h-auto w-full">
            <Nav1  />
            <Nav2  />
            <Shopcart  />
            <Desktop10  />
            <Logos  />
            <Desktop6  />
        </div>
    )
}