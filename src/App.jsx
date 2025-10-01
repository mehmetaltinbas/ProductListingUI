import { useState, useEffect } from 'react';
import { ProductCarousel } from 'src/features/product/components/ProductCarousel';
import { FilterForm } from 'src/features/product/components/FilterForm';
import { LoadingPage } from 'src/features/product/components/LoadingPage';

function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFilterFormHidden, setIsFilterFormHidden] = useState(true);

    async function fetchData() {
        const response = await productService.readAll();
        if (!response.isSuccess) {
            alert(response.message);
        }
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
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function toggleFilterForm() {
        setIsFilterFormHidden(prev => !prev);
    }

    return isLoading ?  <LoadingPage /> : (
        <div className="relative h-full w-full 
            flex flex-col items-center gap-2"
        >
            <p className="pt-20 pb-12 font-[AvenirBook] text-[45px]">Product List</p>
            <ProductCarousel products={products} />
            <button 
                onClick={toggleFilterForm}
                className='absolute left-4 top-4 sm:left-6 sm:top-6'
            >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                </svg>
            </button>
            <FilterForm
                isHidden={isFilterFormHidden}
                setProducts={setProducts}
                setIsLoading={setIsLoading}
                toggle={toggleFilterForm}
            />
        </div>
    );
}
import { productService } from 'src/features/product/services/product.service.js';

export default App;
