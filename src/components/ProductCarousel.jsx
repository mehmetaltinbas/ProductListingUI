import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';

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
        <div className='w-full h-[350px] sm:h-[400px] px-4 sm:px-14 
            flex justify-center items-center gap-2 sm:gap-6'
        >
            <div className='h-full'>
                <div className='h-[150px] sm:h-[190px] flex'>
                    <button 
                        data-direction='left' 
                        onClick={(e) => scrollByClick(e)} 
                        className='text-4xl'
                    >
                        <img src={leftArrow} className='pointer-events-none' />
                    </button>
                </div>
            </div>
            <div 
                id='scrollContainer' 
                ref={scrollContainer} 
                className="w-full h-[350px] sm:h-[400px] flex gap-32 overflow-x-auto shadow-l-md"
            >
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <div className='h-full'>
                <div className='h-[150px] sm:h-[190px] flex'>
                    <button 
                        data-direction='right' 
                        onClick={(e) => scrollByClick(e)} 
                        className='text-4xl'
                    >
                        <img src={rightArrow} className='pointer-events-none' />
                    </button>
                </div>
            </div>
        </div>
    );
}
