import { useState } from 'react';
import Star from './Star';
import ColorOption from './ColorOption';

export default function ProductCard({ product }) {
    const [popularityScore, setPopularityScore] = useState(0);
    const [selectedProductColor, setSelectedProductColor] = useState('yellow');

    useState(() => {
        const score = product.popularityScore * 5;
        const stringifiedScore = score.toString();
        let simplifiedScore = '';
        for (let i = 0; i < stringifiedScore.length; i++) {
            simplifiedScore += stringifiedScore[i];
            if (stringifiedScore[i] === '.') {
                simplifiedScore += stringifiedScore[i + 1];
                break;
            }
        }
        setPopularityScore(simplifiedScore);
    }, []);

    return (
        <div className="flex flex-col justify-center gap-4">
            <img src={product.images[selectedProductColor]} className="w-[190px] h-[190px] rounded-[16px]" />
            <div className="flex flex-col justify-center gap-[2px]">
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
            <div className="flex items-center gap-6">
                <ColorOption selectedProductColor={selectedProductColor} setSelectedProductColor={setSelectedProductColor} color={'yellow'}/>
                <ColorOption selectedProductColor={selectedProductColor} setSelectedProductColor={setSelectedProductColor} color={'white'}/>
                <ColorOption selectedProductColor={selectedProductColor} setSelectedProductColor={setSelectedProductColor} color={'rose'}/>
            </div>
            <div className="flex items-center gap-[1px]">
                {product.starValues?.map((starValue, index) => (
                    <Star key={index} id={`${product.id}${index}`} value={starValue} />
                ))}
                <p className='pl-2'>{popularityScore}/5</p>
            </div>
        </div>
    );
}
