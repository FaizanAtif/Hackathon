import Desktop6 from "@/app/components/home/desktop6";
import Nav2 from "@/app/components/home/navbar2";
import Logos from "@/app/components/productlistpage/logos";
import Nav1 from "@/app/components/productlistpage/navbar1p";
import Lastline from "@/app/components/productpage1/lastline";
import Mainheading from "@/app/components/productpage1/mainheading";
import Product42 from "@/app/components/productpage1/product42";
import PrdtDesption from "@/app/components/productpage1/productdescription";
import Product15 from "@/app/components/productpage1/productpage15";

export default function Product () {
    return(
        <div>
            <Nav1 />
            <Nav2 />
            <Mainheading />
            <Product42 />
            <PrdtDesption />
            <Product15 />
            <Logos />
            <Desktop6 />
            <Lastline />

        </div>
    )
}