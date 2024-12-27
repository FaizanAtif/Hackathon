import Image from "next/image";
import pic1 from "@/app/public/homepage/shop-hero-1-product-slide-1.svg";

export default function Caro1() {
    return (
        <div className="bg-[url('https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kc5e-ysBovZGTcX6DAFV8v7K5ekS65hV27N-0g4GDcKxOS0Z0YogIcIZLlSzKqY9qB9qdzNA3szeLjvtDTaix1styMF4tWp38Ao~8fxkp7jUhQFZbKz5DaSnxwI3SEf1kQgwjv7bGMxuj2~Syh6JqDYzVUYzHM7IOXeyCe3afTfgZAKG7JqX1QOSkp4Rn5YFQ2eTGBQ1bflxxL2lzdRK9vZ9XVXeabv9XJ4~TEiOYfyLdblFHy0YE3wMgcpPgqWW-dIo1emGgqL9f-vspoOoCMvBXSLm1oZAV1JUHR~kipMzk7CuIMjQp5ZktkZ34yPdtwOL3k3NMKCWB5GLXZ~zPA__')] bg-cover bg-center ml-[200px] sm:ml-0 w-[220px]   mt-10 sm:mt-0 sm:w-[1140px] h-[400px] sm:h-[676px] flex">
            <div className="bg-[#1cb9d400] pt-16 sm:py-28 w-[1044px] h-[651px] sm:ml-24 flex">
                <div className="text-white flex flex-col items-start gap-4 sm:gap-10">
                    <h6 className="sm:pt-11 text-white ml-[65px] sm:ml-0 font-bold text-[10px] sm:text-2xl">SUMMER 2024</h6>
                    <h1 className=" block md:hidden text-2xl font-bold ml-[20px]"><span className="ml-[50px]">NEW</span> <br />COLLECTION</h1>
                    <h1 className="hidden md:block text-5xl  font-bold">NEW COLLECTION</h1>
                    <p className="block md:hidden text-[10px] ml-[37px] ">
                        We know how large objects <br /> 
                        <span className="ml-[10px]">will act,but things on a <br /></span> 
                        <span className="ml-[40px]">small scale.</span>
                    </p>
                    <p className="hidden md:block text-xl ">
                        We know how large objects will act, <br />
                        but things on a small scale.
                    </p>
                    <button className="bg-[#2DC071] sm:py-4 sm:px-10 py-2 sm:ml-0 ml-[45px] px-4 sm:text-2xl font-bold transform transition-transform duration-300 hover:scale-110">
                        SHOP NOW
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    );
}
