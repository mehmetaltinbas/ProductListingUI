import { useEffect, useState } from 'react';
import { productService } from 'src/features/product/services/product.service.js';
import { BlackButton } from 'src/shared/components/BlackButton.jsx';


export function FilterForm({ isHidden, setProducts, setIsLoading, toggle }) {
    const [readAllProductsByFilterDto, setReadAllProductsByFilterDto] = useState({
        price: {
            min: undefined,
            max: undefined,
        },
        popularityScore: {
            min: undefined,
            max: undefined,
        }
    });

    async function handleOnSubmit() {
        setIsLoading(true);
        const dto = {
            price: {
                min: Number(readAllProductsByFilterDto.price.min),
                max: Number(readAllProductsByFilterDto.price.max)
            },
            popularityScore: {
                min: Number(readAllProductsByFilterDto.popularityScore.min),
                max: Number(readAllProductsByFilterDto.popularityScore.max)
            }
        };
        const response = await productService.readAllByFilter(dto);
        setProducts(response.products);
        setIsLoading(false);
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
                <p className='font-[AvenirBook]'>Price:</p>
                <input
                    value={readAllProductsByFilterDto.price.min}
                    type="number"
                    onChange={(event) => setReadAllProductsByFilterDto(prev => ({
                        ...prev,
                        price: { min: event.target.value, max: prev.price.max }
                    }))}
                    placeholder='min...'
                    className="w-[75px] h-[30px] p-2 border rounded-[5px]"
                />
                <input
                    value={readAllProductsByFilterDto.price.max}
                    type="number"
                    onChange={(event) => setReadAllProductsByFilterDto(prev => ({
                        ...prev,
                        price: { min: prev.price.min, max: event.target.value }
                    }))}
                    placeholder='max...'
                    className="w-[75px] h-[30px] p-2 border rounded-[5px]"
                />
            </div>

            <div className="flex justify-center items-center gap-4">
                <p className='font-[AvenirBook]'>Popularity Score:</p>
                <input
                    value={readAllProductsByFilterDto.popularityScore.min}
                    type="number"
                    onChange={(event) => setReadAllProductsByFilterDto(prev => ({
                        ...prev,
                        popularityScore: { min: event.target.value, max: prev.popularityScore.max }
                    }))}
                    placeholder='min...'
                    className="w-[75px] h-[30px] p-2 border rounded-[5px]"
                    step="0.1"
                />
                <input
                    value={readAllProductsByFilterDto.popularityScore.max}
                    type="number"
                    onChange={(event) => setReadAllProductsByFilterDto(prev => ({
                        ...prev,
                        popularityScore: { min: prev.popularityScore.min, max: event.target.value }
                    }))}
                    placeholder='max...'
                    className="w-[75px] h-[30px] p-2 border rounded-[5px]"
                    step="0.1"
                />
            </div>

            <BlackButton
                data-filter-by='popularityscore'
                onClick={async () => {
                    toggle();
                    await handleOnSubmit();
                }}
                className="cursor-pointer px-2 pt-[2px] pb-[1px] border-[2px] border-black rounded-[10px]
                bg-black text-white text-xs
                hover:bg-white hover:text-black"
            >
                Filter
            </BlackButton>
        </div>
    );
}
