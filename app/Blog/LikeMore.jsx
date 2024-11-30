import Image from "next/image";
import React from "react";
import data from "../../public/data/recipes.json";
import Link from "next/link";
function LikeMore({ id }) {
  // const getPopularCategory = data.map((data) => data.category_Id === id);
  const getPopularCategory = data.sort(
    (a, b) => (b.rating?.average_rating || 0) - (a.rating?.average_rating || 0)
  );
  const firstFour = getPopularCategory.slice(0, 4);
  return (
    <section class="my-12">
      <h2 class="text-3xl font-bold mb-8">You might also like</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        {firstFour.map((data, index) => (
          <Link key={data.id} href={`/Blog/${data.category_id}`}>
            <div>
              <Image
                height={800}
                width={400}
                src={`/assets/thumbs/${data.thumbnail}`}
                alt="Recipe 1"
                class="w-full h-60 object-cover rounded-lg mb-2"
              />
              <h3 class="font-semibold">{data.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LikeMore;
