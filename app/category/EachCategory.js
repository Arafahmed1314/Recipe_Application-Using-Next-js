import React from 'react'
import Image from 'next/image'
function EachCategory() {
    return (
        <div className="text-center">
            <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
                <Image src="/assets/category/Seafood.jpg" alt="Seafood"
                    height={80}
                    width={80}
                    className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110" />
            </div>
            <h2 className="text-xl font-semibold">Seafood</h2>
        </div>
    )
}

export default EachCategory