import Image from "next/image";
import React from "react";

function LikeMore() {
  return (
    <section class="my-12">
      <h2 class="text-3xl font-bold mb-8">You might also like</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <Image
            height={80}
            width={80}
            src="/assets/thumbs/thumb-10.jpg"
            alt="Recipe 1"
            class="w-full h-60 object-cover rounded-lg mb-2"
          />
          <h3 class="font-semibold">Strawberries and Cream Cake</h3>
        </div>
        <div>
          <Image
            height={80}
            width={80}
            src="/assets/thumbs/thumb-11.jpg"
            alt="Recipe 2"
            class="w-full h-60 object-cover rounded-lg mb-2"
          />
          <h3 class="font-semibold">No-Bake Cheesecake</h3>
        </div>
        <div>
          <Image
            height={80}
            width={80}
            src="/assets/thumbs/thumb-12.jpg"
            alt="Recipe 3"
            class="w-full h-60 object-cover rounded-lg mb-2"
          />
          <h3 class="font-semibold">Peanut Butter Banana Cake</h3>
        </div>
        <div>
          <Image
            height={80}
            width={80}
            src="/assets/thumbs/thumb-13.jpg"
            alt="Recipe 4"
            class="w-full h-60 object-cover rounded-lg mb-2"
          />
          <h3 class="font-semibold">Banana Bread Cake</h3>
        </div>
      </div>
    </section>
  );
}

export default LikeMore;
