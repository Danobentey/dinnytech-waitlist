import React from 'react';

const Footer = () => {
  return (
    <div className="relative w-full bg-black " aria-hidden="true">
      <div className=" -mt-24 z-50 pb-10 bg-black w-full pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[66px]  sm:text-[120px] md:text-[150px] lg:text-[200px] xl:text-[248px] font-bold leading-none">
        <span className="bg-gradient-to-b from-gray-500 via-gray-900 to-black bg-clip-text text-transparent">DinnyTech</span>
      </div>
      {/* Glow */}
    </div>
  );
};

export default Footer;
