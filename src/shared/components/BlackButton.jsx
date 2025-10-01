export function BlackButton({
    children,
    onClick,
    className,
    ...rest
}) {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer px-2 pt-[2px] pb-[1px] border-[2px] border-black rounded-[10px]
                bg-black text-white text-xs
                hover:bg-white hover:text-black
                ${className ?? ''}
            `}
            {...rest}
        >
            {children}
        </button>
    );
}