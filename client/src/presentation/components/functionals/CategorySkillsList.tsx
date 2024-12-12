import { ProgrammingLanguages, Frameworks, DataBases, ORMs, DevOpsTools } from '../techskills';

interface CategorySkillsListProps {
    activeCategory: string | null;
    toggleCategory: (category: string) => void;
    categoriesRef: React.RefObject<HTMLDivElement>;
}

export const CategorySkillsList: React.FC<CategorySkillsListProps> = ({ activeCategory, toggleCategory, categoriesRef }) => {
    return (
        <div ref={categoriesRef} className="w-full flex flex-col items-center space-y-4 z-10">
                <div
                    className={`cursor-pointer text-xl md:text-2xl font-bold py-2 px-4 rounded-lg overflow-hidden ${
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
                    className={`cursor-pointer  text-xl md:text-2xl font-bold py-2 px-4 rounded-lg ${
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
                    className={`cursor-pointer  text-xl md:text-2xl font-bold py-2 px-4 rounded-lg ${
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
                    className={`cursor-pointer  text-xl md:text-2xl font-bold py-2 px-4 rounded-lg ${
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
                    className={`cursor-pointer  text-xl md:text-2xl font-bold py-2 px-4 rounded-lg ${
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
    );
};