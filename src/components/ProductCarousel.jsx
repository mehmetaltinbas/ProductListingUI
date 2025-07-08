import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function ProductCarousel({ products }) {
    const scrollContainer = useRef(null);

    function scrollByClick(e) {
        if (!scrollContainer.current) {
            return;
        }
        const direction = e.target.dataset.direction;
        const offset = 500;
        if (direction === 'left') {
            scrollContainer.current.scrollBy({ left: -offset, behavior: 'smooth' });
        } else if (direction === 'right') {
            scrollContainer.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    }

    return (
        <div className='w-full h-[450px] px-48 flex justify-center items-center gap-16'>
            <button data-direction='left' onClick={(e) => scrollByClick(e)} className='text-4xl'>&lt;</button>
            <div id='scrollContainer' ref={scrollContainer} className="w-full h-[450px] flex gap-32 px-20 overflow-x-auto">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <button data-direction='right' onClick={(e) => scrollByClick(e)} className='text-4xl'>&gt;</button>
        </div>
    );
}
