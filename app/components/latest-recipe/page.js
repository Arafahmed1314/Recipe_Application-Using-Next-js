import Image from 'next/image'
import React from 'react'
import data from '../../../public/data/recipes.json'
import category from '../../../public/data/categories.json'
import { getTopCategories } from '@/app/utils/getTopCategoies';
import Link from 'next/link';

function LatestRecipe() {
    const topCategories = getTopCategories(data, category);
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Recipes Categories</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {topCategories.map((item, index) => (
                    <Link key={index} href={`/Blog/${item.id}`}>
                        <div >
                            <Image
                                src={`/assets${item.image}`}  // Corrected image path
                                height={800}
                                width={400}
                                alt={item.name}  // Use category name as alt text
                                className="w-full h-[300px] object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default LatestRecipe;
