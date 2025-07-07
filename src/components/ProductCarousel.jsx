import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './productCard';

export default function ProductCarousel() {
    const [products, setProducts] = useState([]);

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

    return (
        <div className="flex justify-center items-center gap-10">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}
