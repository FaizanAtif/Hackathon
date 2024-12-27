import Desktop6 from "@/app/components/home/desktop6";
import Nav2 from "@/app/components/home/navbar2";
import Mainheading from "@/app/components/productlistpage/container";
import Filter from "@/app/components/productlistpage/filter-row";
import Logos from "@/app/components/productlistpage/logos";
import Nav1 from "@/app/components/productlistpage/navbar1p";
import Desktop10 from "@/app/components/productlistpage/product10";
import Shopcart from "@/app/components/productlistpage/shop-card";


export default function ProductList () {
    return(
        <div className="h-auto w-full">
            <Nav1  />
            <Nav2  />
            <Mainheading  />
            <Shopcart  />
            <Filter  />
            <Desktop10  />
            <Logos  />
            <Desktop6  />

        </div>
    )
}