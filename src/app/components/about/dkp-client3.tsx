export default function DesktopClient3 () {
    return(
        <div className="h-auto w-[1500px] ml-[150px] mt-20 font-bold">
            <div className="block md:hidden ">
            <h1 className="text-[#252B42] ml-[25px] text-3xl ">
                <span className="ml-[70px] ">Big</span> <br />
                <span className="ml-[15px]">Companies</span> <br />
                <span className="ml-[35px]">Are Here</span><br />
            </h1>
            <h2 className="text-[#737373] text-xs mt-10">
                <span className="ml-[11px]">Problems trying to resolve the conflict</span> <br />
                <span>between the two major realms of Classical</span><br />
                <span className="ml-[25px]">physics: Newtonian mechanics </span><br />
            </h2>
            </div>
            <div className="hidden md:block">
            <h1 className="text-3xl text-[#252B42] font-extrabold ml-[220px] hidden md:block">Big Companies Are Here</h1>
            <h2 className="text-[#737373] text-xs mt-10 ml-[220px]">
              <span className="ml-[60px]">  Problems trying to resolve the conflict between</span> <br />
            the two major realms of Classical physics: Newtonian mechanics 
            </h2>
            </div>
        </div>
    )
}