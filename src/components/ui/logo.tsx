export function Logo({ className = "w-8 h-8", fill = "white" }: { className?: string; fill?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect width="32" height="32" rx="8" className="fill-brand" />
            <path
                d="M16 8L24 22H8L16 8Z"
                fill={fill}
                stroke={fill}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
