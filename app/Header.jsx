import React from "react";
// import SearchIcon from "./svgIcon/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "./components/svgIcon/SearchIcon";
import CustomLink from "./components/customlink/CustomLink";

function Header() {
  return (
    <header className="w-full mx-auto px-6 py-5 shadow-lg fixed top-0 bg-white z-50">
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
            <CustomLink path="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink path="/category">Categories</CustomLink>
            {/* <Link href="/category" className="hover:text-orange-500">
              Categories
            </Link> */}
          </li>
          <li>
            <CustomLink path="/latest-recipe/1">Latest Recipes</CustomLink>
            {/* <Link href="/latest-recipe/1" className="hover:text-orange-500">
              Latest Recipes
            </Link> */}
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
