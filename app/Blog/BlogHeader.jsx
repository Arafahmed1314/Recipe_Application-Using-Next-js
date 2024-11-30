import Image from "next/image";
import ActionButton from "./ActionButton";
import data from "../../public/data/recipes.json";
function BlogHeader({ id }) {
  const recipe = data.find((recipe) => recipe.category_id === id);
  return (
    <>
      <h1 class="text-4xl md:text-5xl font-bold mb-6">{recipe.title}</h1>
      <div class="flex items-center space-x-4 mb-6">
        <Image
          src={`/assets/thumbs/${recipe.thumbnail}`}
          alt="Author"
          height={800}
          width={400}
          class="w-8 h-8 rounded-full"
        />
        <span class="text-gray-600">{recipe.author}</span>
        <span class="text-gray-400">|</span>
        <span class="text-gray-600">{recipe.cooking_time}</span>
        <span class="text-gray-400">|</span>
        <span class="text-gray-600">{recipe.published_date}</span>
      </div>
      <ActionButton />
      <Image
        src={`/assets/thumbs/${recipe.thumbnail}`}
        height={800}
        width={400}
        alt="Cooking Image"
        class="w-full h-auto mb-8 rounded-lg"
      />
      <p class="text-gray-600 mb-8">
        One thing I learned living in the Catskills section of Brooklyn, NY was
        how to cook a good Italian meal. Here is a recipe I created after having
        this dish in a restaurant. Enjoy!
      </p>
    </>
  );
}

export default BlogHeader;
