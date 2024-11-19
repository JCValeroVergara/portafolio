

import { ProgrammingLanguages } from '../../components';

export const TechSkillsPage = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="fade-in text-3xl font-bold underline">
                Habilidades técnicas
            </div>
            <div className='w-full flex flex-col justify-center items-center my-4'>
                <ProgrammingLanguages />
            </div>
        </div>
    );
}