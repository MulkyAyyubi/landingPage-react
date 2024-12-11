import { logoKodein } from "../assets";

const Nav = () => {
  return (
    <div className="bg-blue-400 py-4 px-4 sm:px-6 md:px-10 flex justify-between items-center flex-wrap">
      <img className="w-10 sm:w-12 md:w-16" src={logoKodein} alt="" />
      <ul className="list-none m-0 p-0 hidden md:flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-12 text-white text-xs sm:text-sm md:text-base">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Programs</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="flex md:hidden flex-col gap-1 w-6">
        <div className="w-full h-1 bg-white"></div>
        <div className="w-full h-1 bg-white"></div>
        <div className="w-full h-1 bg-white"></div>
      </div>
    </div>
  );
};

export default Nav;
