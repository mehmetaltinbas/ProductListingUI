import { useState } from 'react';

function ProductCard() {
    return (
        <div className="flex flex-col justify-center gap-4">
            <img className="w-[190px] h-[190px] bg-red-200 rounded-[16px]" />
            <div className="flex flex-col justify-center gap-[2px]">
                <p>Product Title</p>
                <p>100$</p>
            </div>
            <div className="flex items-center gap-2">
                <button className="w-[22px] h-[22px] bg-gray-200 rounded-full"></button>
                <button className="w-[22px] h-[22px] bg-gray-200 rounded-full"></button>
                <button className="w-[22px] h-[22px] bg-gray-200 rounded-full"></button>
            </div>
        </div>
    );
}

export default ProductCard;
