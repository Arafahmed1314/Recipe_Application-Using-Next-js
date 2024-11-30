
import React from 'react'
import EachCategory from './EachCategory'
import category from '../../public/data/categories.json'
import Link from 'next/link'
function Categories() {

    return (
        <div className="bg-white text-gray-900">
            <main className="container mx-auto px-4 py-8 mt-[100px]">
                <h1 className="text-5xl font-bold mb-12">Categories</h1>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {category.map((cat) => (
                        <Link key={cat.id} href={`/latest-recipe/${cat.id}`} >
                            <EachCategory path={cat.image} name={cat.name} />
                        </Link>
                    ))}

                </div>
            </main>
        </div>
    )
}

export default Categories