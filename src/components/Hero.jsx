const Hero = () => {
  return (
    <div className="flex flex-col h-screen justify-between items-center text-center">
      <div className="grow flex flex-col justify-center px-4 sm:px-6 md:px-10">
        <h1 className="text-[40px] sm:text-[60px] md:text-[100px] text-orange-400 m-0 font-black leading-[50px] sm:leading-[80px] md:leading-[120px]">
          Sekolah Developer <br /> Indonesia
        </h1>
        <p className="mt-[10px] text-sm sm:text-base text-blue-400">
          Lorem Ipsum is simply dummy text of the printing
        </p>
      </div>

      <div className="w-full bg-blue-400 text-white py-3 px-2 sm:px-4 md:px-0 flex justify-center gap-4 sm:gap-10">
        <a href="#" className="text-xs sm:text-sm md:text-base">English Camp</a>
        <a href="#" className="text-xs sm:text-sm md:text-base">Kodein Club</a>
        <a href="#" className="text-xs sm:text-sm md:text-base">Quran Camp</a>
      </div>
    </div>
  );
};

export default Hero;