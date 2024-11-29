import Link from "next/link";
import React from "react";

function CustomLink({ path }) {
  return (
    <Link
      href={path}
      className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
    >
      View Recipe
    </Link>
  );
}

export default CustomLink;
