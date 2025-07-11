import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCarousel from './components/ProductCarousel';
import Filter from './components/Filter';

function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(`the api_url env variable: ${import.meta.env.VITE_BASE_API_URL}`);

    async function fetchData(filterBy, min, max) {
        setIsLoading(true);
        let response;
        if (filterBy) {
            console.log(`sending request to: ${import.meta.env.VITE_BASE_API_URL}product/filter/${filterBy}?min=${min}&max=${max}`);
            response = (await axios.get(`${import.meta.env.VITE_BASE_API_URL}product/filter/${filterBy}?min=${min}&max=${max}`)).data;
        } else {
            response = (await axios.get(`${import.meta.env.VITE_BASE_API_URL}product`)).data;
        }
        if (!response.isSuccess) {
            alert(response.message);
        } else {
            console.log(response.products);
            alert(response.message);
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
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="mb-4 text-gray-600 text-center">
                    it may take a while due to the low deployment cpu capacity
                </p>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
            </div>
        );
    }

    return (
        <div className="relative h-full w-full flex flex-col items-center gap-2">
            <p className="pt-20 pb-12 text-4xl font-[AvenirBook] text-[45px]">Product List</p>
            <ProductCarousel products={products} />
            <Filter fetchData={fetchData}/>
        </div>
    );
}

export default App;
