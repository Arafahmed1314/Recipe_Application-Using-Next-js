
import React from 'react'
import Recipe from '../Recipe'
import data from '../../../public/data/recipes.json'
function Recipes({ params }) {
    let latestRecipe
    if (params.catId === "1") {
        latestRecipe = data.map(data => data)
    } else {
        latestRecipe = data.filter(data => data.category_id === params.catId)
    }
    return (
        <main class="container mx-auto px-4 py-8 mt-[100px]">
            <div class="flex justify-between items-center mb-8">
                <div>
                    {/* <h1>{params.catId}</h1> */}
                    <h1 class="text-4xl font-bold mb-2">
                        Desserts <span class="text-gray-500 text-2xl font-normal">{`(${latestRecipe.length})`} Recipes</span>
                    </h1>
                    <p class="text-gray-600">
                        One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here
                        is a recipe I created after having this dish in a restaurant. Enjoy!
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {latestRecipe.map((recipe, index) => (
                    <Recipe key={index} recipe={recipe} />
                ))}

            </div>
        </main>
    )
}

export default Recipes