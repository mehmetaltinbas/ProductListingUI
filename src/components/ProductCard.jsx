import { useState } from 'react';
import Star from './Star';
import ColorOption from './ColorOption';

export default function ProductCard({ product }) {
    const [selectedProductColor, setSelectedProductColor] = useState('yellow');

    return (
        <div className="w-[178px] h-[320px] sm:w-[200px] sm:h-[360px]
            flex flex-shrink-0 flex-col justify-center gap-4" 
        >
            <img
                src={product.images[selectedProductColor]}
                className="w-full h-full rounded-[16px] object-cover"
            />
            <div className="flex flex-col justify-center gap-[2px]">
                <p className='font-[MontserratMedium] text-[15px]'>{product.name}</p>
                <p className='font-[MontserratRegular] text-[15px]'>${product.price} USD</p>
            </div>
            <div className="flex items-center gap-3 pl-1">
                <ColorOption
                    selectedProductColor={selectedProductColor}
                    setSelectedProductColor={setSelectedProductColor}
                    color={'yellow'}
                />
                <ColorOption
                    selectedProductColor={selectedProductColor}
                    setSelectedProductColor={setSelectedProductColor}
                    color={'white'}
                />
                <ColorOption
                    selectedProductColor={selectedProductColor}
                    setSelectedProductColor={setSelectedProductColor}
                    color={'rose'}
                />
            </div>
            <p className='font-[AvenirBook] text-[12px]'>{selectedProductColor.charAt(0).toUpperCase() + selectedProductColor.slice(1)} Gold</p>
            <div className="flex items-center gap-[1px]">
                {product.starValues?.map((starValue, index) => (
                    <Star key={index} id={`${product.id}${index}`} value={starValue} />
                ))}
                <p className="pl-2 font-[AvenirBook] text-[14px]">{(product.popularityScore * 5).toFixed(1)}/5</p>
            </div>
        </div>
    );
}
