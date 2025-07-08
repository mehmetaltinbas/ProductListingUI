export default function Star({ id, value }) {
    const clampedValue = Math.min(Math.max(value, 0), 1);
    const totalWidth = 24;

    const leftClipId = `leftClip-${id}`;
    const rightClipId = `rightClip-${id}`;

    return (
        <div>
            <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <clipPath id={leftClipId}>
                        <rect x="0" y="0" width={clampedValue * totalWidth} height="24" />
                    </clipPath>
                    <clipPath id={rightClipId}>
                        <rect
                            x={clampedValue * totalWidth}
                            y="0"
                            width={(1 - clampedValue) * totalWidth}
                            height="24"
                        />
                    </clipPath>
                </defs>

                <path
                    clipPath={`url(#${leftClipId})`}
                    fill="#fbe584"
                    d="M12 2.5l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2.5z"
                />

                <path
                    clipPath={`url(#${rightClipId})`}
                    fill="#D9D9D9"
                    d="M12 2.5l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2.5z"
                />
            </svg>
        </div>
    );
}
