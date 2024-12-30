export default function Mainheading() {
    return (
      <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-start text-black h-auto w-full pt-10 sm:pt-12 px-4 sm:px-8">
        {/* Main Title */}
        <h1 className="font-bold text-xl sm:text-3xl text-[#252B42] sm:ml-0 ml-0">
          Shop
        </h1>
  
        {/* Breadcrumbs Section */}
        <div className="flex flex-row justify-center sm:justify-start gap-2 sm:gap-4 mt-4 sm:mt-0">
          <h6 className="text-[#252B42]">Home</h6>
          <h6 className="text-xl text-[#737373]">&#62;</h6>
          <h6 className="text-[#737373]">Shop</h6>
        </div>
      </div>
    );
  }
  