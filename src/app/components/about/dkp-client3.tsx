export default function DesktopClient3() {
  return (
    <div className="p-10 flex flex-col items-center w-full mt-20 px-4 sm:px-0 font-bold">
      {/* Mobile View */}
      <div className="block md:hidden text-center">
        <h1 className="text-[#252B42] text-3xl">
          <span>Big</span> <br />
          <span>Companies</span> <br />
          <span>Are Here</span>
        </h1>
        <h2 className="text-[#737373] text-xs mt-5">
          <span>Problems trying to resolve the conflict</span> <br />
          <span>between the two major realms of Classical</span> <br />
          <span>physics: Newtonian mechanics</span>
        </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block text-center">
        <h1 className="text-3xl text-[#252B42] font-extrabold">
          Big Companies Are Here
        </h1>
        <h2 className="text-[#737373] text-xs mt-5 mx-auto max-w-[600px]">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </h2>
      </div>
    </div>
  );
}
