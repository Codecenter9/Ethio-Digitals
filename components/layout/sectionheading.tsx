// components/SectionHeading.tsx
interface SectionHeadingProps {
    subtitle?: string;
    title?: string;
    description?: string;
    center?: boolean;
}

export function SectionHeading({ subtitle, title, description, center = false }: SectionHeadingProps) {
    return (
        <div className={`max-w-3xl ${center ? 'mx-auto text-center' : 'text-left'} mb-16 relative`}>
            {subtitle && (
                <div className="relative inline-block mb-4"
                    data-aos="fade-down"
                >
                    <div className="inline-flex items-center mb-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20">
                        <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            {subtitle}
                        </span>
                    </div>
                    {/* Animated decorative elements */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                </div>
            )}

            {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-white relative mb-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 relative z-10">
                        {title}
                    </span>
                    {/* Subtle text shadow for better readability */}
                    <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-30 blur-sm">
                        {title}
                    </span>
                </h2>
            )}

            {description && (
                <p
                    data-aos="fade-up"
                    data-aos-delay={150}
                    className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                    {description}
                </p>
            )}

        </div>
    );
}