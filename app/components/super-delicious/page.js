'use client'
import React from "react";
import StarIcon from "../svgIcon/StarIcon";
import Image from "next/image";
import data from '../../../public/data/recipes.json'
import Link from "next/link";
function SuperDelicious() {
  const sortedData = data.sort((a, b) =>
    (b.rating?.average_rating || 0) - (a.rating?.average_rating || 0)
  );
  const firstThree = sortedData.slice(0, 3);


  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {firstThree.map(data => (
          <Link key={data.id} href={`/Blog/${data.category_id}`} >
            <div key={data.id}>
              <Image
                src={`/assets/thumbs/${data.thumbnail}`}
                alt="Chicken Meatball with Creamy Cheese"
                height={800}
                width={400}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {data.title}
              </h3>
              <div className="flex items-center text-yellow-500 mb-2">
                {Array.from({ length: Math.round(data.rating?.average_rating) }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className="text-gray-600">{data.cooking_time}</p>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}

export default SuperDelicious;
