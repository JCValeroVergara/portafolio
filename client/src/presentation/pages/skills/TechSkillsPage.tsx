import { useState } from 'react';
import { Frameworks, ProgrammingLanguages } from '../../components';


export const TechSkillsPage = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setActiveCategory(activeCategory === category ? null : category);
    }

    return (
        <div className="w-full h-full flex flex-col items-center my-8 space-y-4">
            <div
                className={`cursor-pointer text-2xl font-bold py-2 px-4 rounded-lg ${
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
        </div>
    );
}
