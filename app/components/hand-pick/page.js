import Image from 'next/image'
import React from 'react'
import data from '../../../public/data/recipes.json'
function HandPicked() {
    let index = Math.random() * data.length - 2
    const randomData = data.slice(index, index + 2);


    return (
        <section class="mb-16">
            <h2 class="text-3xl font-bold mb-8 animate-fade-in-down">Hand-Picked Collections</h2>
            <div class="grid md:grid-cols-2 gap-8">
                {randomData.map((recipe, index) => (
                    <div key={index}
                        class="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
                        <Image
                            src={`/assets/thumbs/${recipe.thumbnail}`}
                            alt="Sushi Combos"
                            height={800}
                            width={400}
                            class="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
                        <div
                            class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                            <h3 class="text-xl font-semibold mb-2">{recipe.title}</h3>
                            <a href="./recipes.html" class="text-orange-300 hover:underline">View Collection</a>
                        </div>
                    </div>
                ))}


            </div>
        </section>
    )
}

export default HandPicked