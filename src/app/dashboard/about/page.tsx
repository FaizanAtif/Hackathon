import Aboutstrt from "@/app/components/about/aboutHero";
import Card1 from "@/app/components/about/videoCard";
import DesktopClient3 from "@/app/components/about/bigCompaniesLines";
import NavAbt2 from "@/app/components/about/navbar2abt";
import Stats from "@/app/components/about/stats";
import Team from "@/app/components/about/team";
import Testimonial from "@/app/components/about/testimonial";
import Desktop6 from "@/app/components/home/footer";
import Logos from "@/app/components/shop/logos";

export default function Aboutpage () {
    return(
        <div className="">
            <NavAbt2  />
            <Aboutstrt  />
           
            <Stats  />
            <Card1  />
            <Team  />
            <DesktopClient3  />
            <Logos  />
            <Testimonial  />
            <Desktop6  />
        </div>
    )
}