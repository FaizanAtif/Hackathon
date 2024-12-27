export default function Mainheading () {
    return(
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10 text-center sm:text-start text-black h-auto w-full pt-10 sm-pt-2">
            <h1 className="font-bold text-xl  ml-64 sm:ml-24 sm:2xl">Shop</h1>
            <div className="flex flex-row gap-5 ml-56 sm:ml-0 sm:mr-10 ">
                <h6>Home</h6>
                <h6 className="text-xl text-[#737373]" >&#62;</h6>
                <h6 className=" text-[#737373]">Shop</h6>
            </div>
        </div>
    )
}