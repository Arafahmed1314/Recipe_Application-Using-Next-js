import Image from "next/image";
import React from "react";

function Recipe({ recipe }) {
  return (
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
      <Image
        src={`/assets/thumbs/${recipe.thumbnail}`}
        height={800}
        width={400}
        alt="Decadent Raspberry and Cream Cake"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h2 class="font-semibold text-lg mb-2">{recipe.title}</h2>
      </div>
    </div>
  );
}

export default Recipe;
