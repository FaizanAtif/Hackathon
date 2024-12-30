import Image from "next/image";
import contactlogo from '@/app/public/homepage/Vector@2x.svg'
import facebook from '@/app/public/homepage/Vector.svg'
import utube from '@/app/public/homepage/a (1).svg'
import insta from '@/app/public/homepage/a.svg'
import twitter from '@/app/public/homepage/icn settings icn-xs.svg'

export default function Nav1() {
    return (
        <div className="bg-[#252B42] h-[46px] w-full hidden sm:block">
            <div className="text-white text-sm flex flex-row items-center mx-6 justify-between lg:justify-start gap-4 h-full pr-14">
                <h6 className="flex items-center">
                    <Image src={contactlogo} alt="contactlogo" className="mr-2"/>
                    (225) 555-0118
                </h6>
                <p className="hidden md:block">michelle.rivera@example.com</p>
                <p className="flex items-center">Follow Us and get a chance to win 80% off</p>
                <p className="flex items-center">
                    Follow Us:
                    <Image src={insta} alt="insta" className="mx-1"/>
                    <Image src={utube} alt="utube" className="mx-1"/>
                    <Image src={facebook} alt="fb" className="mx-1"/>
                    <Image src={twitter} alt="twitter" className="mx-1"/>
                </p>
            </div>
        </div>
    );
}
