import NavAbt2 from "@/app/components/about/navbar2abt";
import Desktop6 from "@/app/components/home/footer";
import Cta from "@/app/components/pricing/freeTrial";
import Faqs from "@/app/components/pricing/faqs";
import Heading from "@/app/components/pricing/pricingHero";
import Logos2 from "@/app/components/pricing/logos";
import Pricing4 from "@/app/components/pricing/cards";

export default function Pricing () {
    return(
        <div>
            < NavAbt2/>
            < Heading/>
            < Pricing4/>
            < Logos2/>
            < Faqs/>
            < Cta/>
            < Desktop6/>
            
        </div>
    )
}