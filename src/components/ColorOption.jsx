export default function ColorOption({ selectedProductColor, setSelectedProductColor, color}) {

    let backGroundColor = '';
    if (color === 'yellow') {
        backGroundColor = '#E6CA97';
    } else if (color === 'white') {
        backGroundColor = '#D9D9D9';
    } else if (color === 'rose') {
        backGroundColor = '#E1A4A9';
    }

    function changeColor(e) {
        setSelectedProductColor(e.target.dataset.color);
    }

    return (
        <div className='relative flex flex-col justify-center items-center'>
            <div className={`${selectedProductColor === `${color}` ? '' : 'invisible'}
                absolute pointer-events-none w-[26px] h-[26px] rounded-full border border-1 border-black p-[10px]`}
            ></div>
            <button onClick={(e) => changeColor(e)} data-color={color} className={`w-[20px] h-[20px] bg-[${backGroundColor}] rounded-full`}></button>
        </div>
    );
}