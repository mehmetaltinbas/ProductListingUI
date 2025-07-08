import { useState } from 'react';
import ProductCarousel from './components/ProductCarousel';

function App() {
    return (
        <div className="h-full w-full flex flex-col items-center gap-2">
            <p className="pt-20 pb-12 text-4xl">Product List</p>
            <ProductCarousel />
        </div>
    );
}

export default App;
