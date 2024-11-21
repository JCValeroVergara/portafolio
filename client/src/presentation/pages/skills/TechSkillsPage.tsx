import { useRef, useState } from 'react';
import { CategorySkillsList } from '../../components';


export const TechSkillsPage = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [bubbles, setBubbles] = useState<{ id: number, x: number, y: number, size: number }[]>([]);
    const categoriesRef = useRef<HTMLDivElement>(null);

    const toggleCategory = (category: string) => {
        setActiveCategory(activeCategory === category ? null : category);
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        if (categoriesRef.current && categoriesRef.current.contains(e.target as Node)) {
            return;
        }

        const sizes = [4, 8, 12, 16, 24];
        const size = sizes[Math.floor(Math.random() * sizes.length)];

        const bubble = {
            id: Date.now(),
            x: e.clientX- rect.left,
            y: e.clientY - rect.top,
            size: size
        };

        setBubbles((prevBubbles) => [...prevBubbles, bubble]);

        setTimeout(() => {
            setBubbles((prevBubbles) => prevBubbles.filter(b => b.id !== bubble.id));
        }, 500);
    }

    return (
        <div
            className="w-full h-full flex flex-col justify-center items-center my-8 space-y-4 relative"
            onMouseMove={handleMouseMove}
        >
            <div className="w-full h-full absolute top-0 left-0 overflow-hidden pointer-events-none">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="absolute bg-blue-500 rounded-full opacity-50 animate-bubble"
                    style={{
                        top: `${bubble.y}px`,
                        left: `${bubble.x}px`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                    }}
                />
            ))}
            </div>
            {/* Contenedor de categorías */}
            <CategorySkillsList activeCategory={activeCategory} toggleCategory={toggleCategory} categoriesRef={categoriesRef} />
        </div>
    );
}
