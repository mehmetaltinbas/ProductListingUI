import { useState } from 'react';
import ProductCarousel from './components/ProductCarousel';

function App() {
    return (
        <div className="h-full flex flex-col items-center gap-10">
            <p className="pt-20 pb-12 bg-red-200 text-2xl">Product List</p>
            <ProductCarousel />
        </div>
    );
}

export default App;
