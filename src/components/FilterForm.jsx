import { useState } from 'react';
import { BlackButton } from './BlackButton';

export default function FilterForm({ isHidden, fetchData, toggle }) {
    const [priceFilter, setPriceFilter] = useState({
        minPrice: null,
        maxPrice: null,
    });

    const [scoreFilter, setScoreFilter] = useState({
        minScore: null,
        maxScore: null
    });

    function handlePriceChange(e) {
        const { name, value } = e.target;
        setPriceFilter(prev => ({
            ...prev,
            [name]: Number(value)
        }));
    }

    function handleScoreChange(e) {
        const { name, value } = e.target;
        setScoreFilter(prev => ({
            ...prev,
            [name]: Number(value)
        }));
    }

    function Filter(e) {
        const filterBy = e.target.dataset.filterBy;

        if (filterBy === 'pricerange') {
            const { minPrice, maxPrice } = priceFilter;
            if ((minPrice < 0 || maxPrice < 0)) {
                alert("price values cannot be less than 0");
                return;
            } else if ((minPrice > maxPrice)) {
                alert ("min price value can't be bigger than max price");
            } else {
                fetchData(filterBy, minPrice, maxPrice );
            }
        }

        if (filterBy === 'popularityscore') {
            let { minScore, maxScore } = scoreFilter;
            if (minScore < 0 || maxScore > 5) {
                alert("Score values must be between 0 and 5");
                return;
            } else {
                minScore = minScore /5;
                maxScore = maxScore/5;
                console.log(filterBy, minScore, maxScore);
                fetchData(filterBy, minScore, maxScore);
            }
        }
    }

    return (
        <div 
            className={`${isHidden ? 'hidden' : ''} absolute w-auto h-auto bg-white left-8 top-10 sm:left-10 sm:top-12 shadow-md rounded-[10px] p-6
            flex flex-col justify-center items-center gap-8`}
        >
            <button 
                onClick={toggle}
                className='absolute top-1 right-1 px-2 pt-[2px] pb-[1px] border-[1px] border-transparent rounded-[10px]
                text-xs
                hover:border-black '
            >X</button>

            <div className="flex justify-center items-center gap-4">
                <p className='font-[AvenirBook]'>PriceRange:</p>
                <input
                    name="minPrice"
                    value={priceFilter.minPrice}
                    type="number"
                    onChange={handlePriceChange}
                    placeholder='min...'
                    className="w-[75px] h-[30px] p-2 border rounded-[5px]"
                />
                <input
                    name="maxPrice"
                    value={priceFilter.maxPrice}
                    type="number"
                    onChange={handlePriceChange}
                    placeholder='max...'
                    className="w-[75px] h-[30px] p-2 border rounded-[5px]"
                />
            </div>

            <div className="flex justify-center items-center gap-4">
                <p className='font-[AvenirBook]'>PopularityScore:</p>
                <input
                    name="minScore"
                    value={scoreFilter.minScore}
                    type="number"
                    onChange={handleScoreChange}
                    placeholder='min...'
                    className="w-[75px] h-[30px] p-2 border rounded-[5px]"
                    step="0.01"
                />
                <input
                    name="maxScore"
                    value={scoreFilter.maxScore}
                    type="number"
                    onChange={handleScoreChange}
                    placeholder='max...'
                    className="w-[75px] h-[30px] p-2 border rounded-[5px]"
                    step="0.01"
                />
            </div>

            <BlackButton
                data-filter-by='popularityscore'
                onClick={Filter}
                className="cursor-pointer px-2 pt-[2px] pb-[1px] border-[2px] border-black rounded-[10px]
                bg-black text-white text-xs
                hover:bg-white hover:text-black"
            >
                Filter
            </BlackButton>
        </div>
    );
}
