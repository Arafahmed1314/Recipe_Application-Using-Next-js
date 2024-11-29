import React from "react";
// import SearchIcon from "./svgIcon/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "./components/svgIcon/SearchIcon";

function Header() {
  return (
    <header className="container w-full mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          <Image
            alt="kitchen"
            src="/assets/lws-kitchen.png"
            className="h-10"
            width={100}
            height={100}
          />
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/category" className="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/latest-recipe" className="hover:text-orange-500">
              Latest Recipes
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-orange-500">
            <SearchIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
