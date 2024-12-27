import NavAbt2 from "@/app/components/about/navbar2abt";
import Desktop6 from "@/app/components/home/desktop6";
import Cta from "@/app/components/pricing/cta";
import Faqs from "@/app/components/pricing/faqs";
import Heading from "@/app/components/pricing/heading";
import Logos2 from "@/app/components/pricing/logos";
import Pricing3 from "@/app/components/pricing/pricing3";
import Pricing4 from "@/app/components/pricing/pricing4";

export default function Pricing () {
    return(
        <div>
            < NavAbt2/>
            < Heading/>
            < Pricing3/>
            < Pricing4/>
            < Logos2/>
            < Faqs/>
            < Cta/>
            < Desktop6/>
        </div>
    )
}