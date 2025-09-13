export const BubbleBackground = () => (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
                </linearGradient>

                <linearGradient id="shapeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient id="shapeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F472B6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.15" />
                </linearGradient>

                <linearGradient id="shapeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.15" />
                </linearGradient>

                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>

                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1" />
                </pattern>
            </defs>

            {/* Background gradient */}
            <rect width="100%" height="100%" fill="url(#mainGradient)" />

            {/* Grid pattern */}
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Abstract shapes - Circles */}
            {[...Array(8)].map((_, i) => {
                const size = 40 + Math.random() * 90;
                const cx = Math.random() * 800;
                const cy = Math.random() * 600;

                return (
                    <circle
                        key={`circle-${i}`}
                        cx={cx}
                        cy={cy}
                        r={size}
                        fill="url(#shapeGradient1)"
                        opacity="0.5"
                        filter="url(#blur)"
                        style={{
                            animation: `pulse ${12 + Math.random() * 10}s ease-in-out infinite`
                        }}
                    />
                );
            })}

            {/* Abstract shapes - Squares */}
            {[...Array(6)].map((_, i) => {
                const size = 30 + Math.random() * 70;
                const x = Math.random() * 700;
                const y = Math.random() * 500;
                const rotation = Math.random() * 45;

                return (
                    <rect
                        key={`square-${i}`}
                        x={x}
                        y={y}
                        width={size}
                        height={size}
                        fill="url(#shapeGradient2)"
                        opacity="0.4"
                        filter="url(#blur)"
                        transform={`rotate(${rotation} ${x + size / 2} ${y + size / 2})`}
                        style={{
                            animation: `rotate ${25 + Math.random() * 15}s linear infinite`
                        }}
                    />
                );
            })}

            {/* Abstract shapes - Triangles */}
            {[...Array(5)].map((_, i) => {
                const size = 40 + Math.random() * 80;
                const x = Math.random() * 700;
                const y = Math.random() * 500;
                const rotation = Math.random() * 360;

                return (
                    <polygon
                        key={`triangle-${i}`}
                        points={`${x},${y} ${x + size},${y} ${x + size / 2},${y - size}`}
                        fill="url(#shapeGradient3)"
                        opacity="0.4"
                        filter="url(#blur)"
                        transform={`rotate(${rotation} ${x + size / 2} ${y - size / 3})`}
                        style={{
                            animation: `float ${20 + Math.random() * 10}s ease-in-out infinite`
                        }}
                    />
                );
            })}

            {/* Connecting lines */}
            {[...Array(15)].map((_, i) => {
                const x1 = Math.random() * 800;
                const y1 = Math.random() * 600;
                const x2 = x1 + (Math.random() * 200 - 100);
                const y2 = y1 + (Math.random() * 200 - 100);

                return (
                    <line
                        key={`line-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                    />
                );
            })}
        </svg>

        {/* CSS for animations */}
        <style jsx>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(5deg);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 0.4;
          r: 40;
        }
        50% {
          opacity: 0.7;
          r: 45;
        }
      }
      
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
    </div>
);