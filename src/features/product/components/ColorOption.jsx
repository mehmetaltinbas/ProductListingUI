import { useEffect, useState } from "react";

export default function ColorOption({ selectedProductColor, setSelectedProductColor, color }) {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [isSelectedColor, setIsSelectedColor] = useState(false);

    const map = new Map([
        ['yellow', '#E6CA97'],
        ['white', '#D9D9D9'],
        ['rose', '#E1A4A9'],
    ]);

    useEffect(() => {
        setBackgroundColor(map.get(color));
        setIsSelectedColor(selectedProductColor === `${color}` ? true : false);
    }, [color, selectedProductColor]);

    function changeColor(e) {
        setSelectedProductColor(e.target.dataset.color);
    }

    return (
        <div className="relative flex flex-col justify-center items-center">
            <div
                className={`${isSelectedColor ? '' : 'hidden'}
                absolute pointer-events-none w-[26px] h-[26px] rounded-full border border-1 border-black p-[10px]`}
            >
            </div>
            <button
                onClick={(e) => changeColor(e)}
                data-color={color}
                className={`w-[20px] h-[20px] bg-[${backgroundColor}] rounded-full`}
            ></button>
        </div>
    );
}
