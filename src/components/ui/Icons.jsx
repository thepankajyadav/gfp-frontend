import React from 'react';

const Sheep = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        {/* The fluffy body */}
        <path d="M7 14c-1.5 0-3-1-3-2.5S5.5 9 7 9s1.5-1 3-1 3.5 1.5 3.5 3" />
        <path d="M13.5 11c0-1.5 1.5-3 3.5-3s3.5 1.5 3.5 3-1.5 3-3.5 3h-3.5" />
        <path d="M17 14c1.5 0 3 1 3 2.5S18.5 19 17 19s-2.5-1-4-1h-2c-1.5 0-3 1-4.5 1S4 18 4 16.5 5.5 14 7 14" />
        {/* The face */}
        <circle cx="10" cy="11.5" r="2.5" />
        {/* The legs */}
        <path d="M8 19v2" />
        <path d="M12 18v3" />
        <path d="M16 14v2" />
    </svg>
);

export default Sheep;