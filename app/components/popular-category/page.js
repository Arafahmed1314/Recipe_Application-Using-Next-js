import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import data from '../../../public/data/recipes.json';  // Path to your recipes data
import category from '../../../public/data/categories.json';  // Path to your categories data
import { getPopularCategories } from '@/app/utils/getPopularCategories';

function PopularCategory() {

    const popularCategories = getPopularCategories(category, data);

    return (
        <section className="mb-16">
            <div className="flex justify-between items-top">
                <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
                <Link href="/category" className="text-orange-500">View All</Link>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {popularCategories.map((item, index) => (
                    <Link key={item.id} href={`/Blog/${item.id}`} >
                        <div className="cursor-pointer text-center group">
                            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                                <Image
                                    src={`/assets${item.image}`}  // Use the correct path for category image
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <p className="transition-transform duration-300 group-hover:scale-105">{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default PopularCategory;
