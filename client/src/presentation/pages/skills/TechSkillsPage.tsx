import { useRef, useState } from 'react';
import { DataBases, Frameworks, ProgrammingLanguages, ORMs, DevOpsTools } from '../../components';


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
            <div ref={categoriesRef} className="w-full flex flex-col items-center space-y-4 z-10">
                <div
                    className={`cursor-pointer text-2xl font-bold py-2 px-4 rounded-lg overflow-hidden ${
                            activeCategory === 'programmingLanguages' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                        }`}
                        onClick={() => toggleCategory('programmingLanguages')}
                    >
                        Lenguajes de Programación
                    </div>
                    {activeCategory === 'programmingLanguages' && (
                        <div className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in overflow-hidden w-full">
                            <ProgrammingLanguages />
                        </div>
                    )}
                <div
                    className={`cursor-pointer text-2xl font-bold py-2 px-4 rounded-lg ${
                            activeCategory === 'frameworks' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                        }`}
                        onClick={() => toggleCategory('frameworks')}
                    >
                        Frameworks y Librerías
                    </div>
                    {activeCategory === 'frameworks' && (
                        <div className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in overflow-hidden w-full">
                            <Frameworks />
                        </div>
                )}
                <div
                    className={`cursor-pointer text-2xl font-bold py-2 px-4 rounded-lg ${
                            activeCategory === 'dataBases' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                        }`}
                        onClick={() => toggleCategory('dataBases')}
                    >
                        Bases de Datos
                    </div>
                    {activeCategory === 'dataBases' && (
                        <div className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in overflow-hidden w-full">
                            <DataBases />
                        </div>
                    )}
                <div
                    className={`cursor-pointer text-2xl font-bold py-2 px-4 rounded-lg ${
                            activeCategory === 'orms' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                        }`}
                        onClick={() => toggleCategory('orms')}
                    >
                        ORMs
                    </div>
                    {activeCategory === 'orms' && (
                        <div className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in overflow-hidden w-full">
                            <ORMs />
                        </div>
                    )}
                <div
                    className={`cursor-pointer text-2xl font-bold py-2 px-4 rounded-lg ${
                            activeCategory === 'devOpsTools' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                        }`}
                        onClick={() => toggleCategory('devOpsTools')}
                    >
                        Herramientas DevOps
                    </div>
                    {activeCategory === 'devOpsTools' && (
                        <div className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in overflow-hidden w-full">
                            <DevOpsTools />
                        </div>
                    )}
            </div>
        </div>
    );
}
