import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <nav className="fixed z-10 text-center py-4 px-6 bg-white bg-opacity-50 backdrop-blur-lg  drop-shadow-lg w-full">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-16">
          <div className="mb-2 sm:mb-0 hover:text-blue-500 text-2xl font-semibold tracking-tight">
            <Link href="#hero">Home</Link>
          </div>
          <div className="mb-2 sm:mb-0 hover:text-blue-500 text-2xl font-semibold tracking-tight">
            <Link href="#skills">Skills</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
