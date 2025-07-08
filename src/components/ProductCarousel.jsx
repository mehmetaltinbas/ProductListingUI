import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from './productCard';

export default function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const scrollContainer = useRef(null);

    async function fetchData() {
        const response = (await axios.get(`${import.meta.env.VITE_BASE_API_URL}product`)).data;
        if (!response.isSuccess) {
            alert(response.message);
        } else {
            for (const product of response.products) {
                product.starValues = [];
                const score = product.popularityScore * 5;
                const floorOfScore = Math.floor(score);
                const remainder = score - floorOfScore;
                for (let i = 1; i <= floorOfScore; i++) {
                    product.starValues.push(1);
                }
                product.starValues.push(remainder);
                const remaining = 5 - product.starValues.length;
                if (remaining >= 1) {
                    for (let i = 1; i <= remaining; i++) {
                        product.starValues.push(0);
                    }
                }
            }
            setProducts(response.products);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    function scrollByClick(e) {
        if (!scrollContainer.current) {
            return;
        }
        const direction = e.target.dataset.direction;
        const offset = 300;
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
