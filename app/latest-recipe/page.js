
import React from 'react'
import Recipe from './Recipe'

function Recipes() {

    return (
        <main class="container mx-auto px-4 py-8 mt-[100px]">
            <div class="flex justify-between items-center mb-8">
                <div>
                    <h1 class="text-4xl font-bold mb-2">
                        Desserts <span class="text-gray-500 text-2xl font-normal">(98 Recipes)</span>
                    </h1>
                    <p class="text-gray-600">
                        One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here
                        is a recipe I created after having this dish in a restaurant. Enjoy!
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Recipe />

                {/* <!-- Repeat the above div structure for the remaining dessert items --> */}
            </div>
        </main>
    )
}

export default Recipes