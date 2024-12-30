import React from 'react';

const Caro1 = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto">
      <div 
        className="bg-cover bg-center min-h-[400px] sm:h-[676px] w-full sm:w-auto relative"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kc5e-ysBovZGTcX6DAFV8v7K5ekS65hV27N-0g4GDcKxOS0Z0YogIcIZLlSzKqY9qB9qdzNA3szeLjvtDTaix1styMF4tWp38Ao~8fxkp7jUhQFZbKz5DaSnxwI3SEf1kQgwjv7bGMxuj2~Syh6JqDYzVUYzHM7IOXeyCe3afTfgZAKG7JqX1QOSkp4Rn5YFQ2eTGBQ1bflxxL2lzdRK9vZ9XVXeabv9XJ4~TEiOYfyLdblFHy0YE3wMgcpPgqWW-dIo1emGgqL9f-vspoOoCMvBXSLm1oZAV1JUHR~kipMzk7CuIMjQp5ZktkZ34yPdtwOL3k3NMKCWB5GLXZ~zPA__')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full">
          <div className="flex flex-col justify-center h-full max-w-xl py-16 sm:py-28">
            {/* Summer 2024 heading */}
            <h6 className="text-white font-bold text-xs sm:text-2xl mb-4 sm:mb-8">
              SUMMER 2024
            </h6>

            {/* Mobile Collection heading */}
            <h1 className="block md:hidden text-white text-2xl font-bold mb-4">
              <span className="inline-block">NEW</span>
              <br />
              <span className="inline-block">COLLECTION</span>
            </h1>

            {/* Desktop Collection heading */}
            <h1 className="hidden md:block text-white text-5xl font-bold mb-6">
              NEW COLLECTION
            </h1>

            {/* Mobile description */}
            <p className="block md:hidden text-white text-xs mb-6 leading-relaxed">
              We know how large objects
              <br />
              will act, but things on a
              <br />
              small scale.
            </p>

            {/* Desktop description */}
            <p className="hidden md:block text-white text-xl mb-8">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </p>

            {/* CTA Button */}
            <button className="bg-[#2DC071] text-white font-bold 
              px-6 py-3 sm:px-10 sm:py-4
              text-sm sm:text-2xl
              transform transition-all duration-300 
              hover:scale-110 hover:shadow-lg
              inline-block w-fit">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caro1;
