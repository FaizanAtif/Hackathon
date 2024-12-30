import Aboutstrt from "@/app/components/about/aboutstrt";
import Card1 from "@/app/components/about/card";
import DesktopClient3 from "@/app/components/about/dkp-client3";
import NavAbt2 from "@/app/components/about/navbar2abt";
import Problem from "@/app/components/about/problem";
import Stats from "@/app/components/about/stats";
import Team from "@/app/components/about/team";
import Testimonial from "@/app/components/about/testimonial";
import Desktop6 from "@/app/components/home/desktop6";
import Logos from "@/app/components/productlistpage/logos";

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