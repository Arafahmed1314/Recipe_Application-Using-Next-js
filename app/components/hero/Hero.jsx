/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import data from "../../../public/data/recipes.json";
import Link from "next/link";
function Hero() {
  let randomIndex = Math.floor(Math.random() * data.length);
  let randomRecipe = data[randomIndex];
  const { title, description } = randomRecipe;
  const snippet =
    description.split(" ").length > 50
      ? description.split(" ").slice(0, 50).join(" ") + "..."
      : description;
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/assets/thumbs/${randomRecipe.thumbnail}`}
            alt="Mighty Super Cheesecake"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{snippet}</p>
          <Link
            href={`/Blog/${randomRecipe.category_id}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
