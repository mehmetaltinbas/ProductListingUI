import { useState } from 'react';

export default function FilterList({ fetchData }) {
    const [priceFilter, setPriceFilter] = useState({
        minPrice: 0,
        maxPrice: 0,
    });

    const [scoreFilter, setScoreFilter] = useState({
        minScore: 0,
        maxScore: 0
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
        <div className={`w-[300px] h-[300px] border border-1 border-black rounded-[10px] flex justify-center items-center gap-8`}>
            <div className="flex flex-col justify-center items-center gap-1">
                <p className='underline'>PriceRange</p>
                <p>min: </p>
                <input
                    name="minPrice"
                    value={priceFilter.minPrice}
                    onChange={handlePriceChange}
                    className="w-[50px] h-[30px] border border-1 border-black"
                    type="number"
                />
                <p>max: </p>
                <input
                    name="maxPrice"
                    value={priceFilter.maxPrice}
                    onChange={handlePriceChange}
                    className="w-[50px] h-[30px] border border-1 border-black"
                    type="number"
                />
                <button
                    data-filter-by='pricerange'
                    onClick={Filter}
                    className="px-2 py-1 border border-1 border-black rounded-full"
                >
                    Filter
                </button>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <p className='underline'>PopularityScore</p>
                <p>min: </p>
                <input
                    name="minScore"
                    value={scoreFilter.minScore}
                    onChange={handleScoreChange}
                    className="w-[50px] h-[30px] border border-1 border-black"
                    type="number"
                    step="0.01"
                />
                <p>max: </p>
                <input
                    name="maxScore"
                    value={scoreFilter.maxScore}
                    onChange={handleScoreChange}
                    className="w-[50px] h-[30px] border border-1 border-black"
                    type="number"
                    step="0.01"
                />
                <button
                    data-filter-by='popularityscore'
                    onClick={Filter}
                    className="px-2 py-1 border border-1 border-black rounded-full"
                >
                    Filter
                </button>
            </div>
        </div>
    );
}
