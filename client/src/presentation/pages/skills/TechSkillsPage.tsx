import { CssLogo, HtmlLogo, JavascriptLogo, TypescriptLogo } from '../../icons';

export const TechSkillsPage = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="fade-in text-3xl font-bold underline">
                Habilidades técnicas
            </div>
            <div className='w-full flex flex-col justify-center items-center my-4'>
            <div className="fade-in text-2xl font-bold my-4 text-center">
                Lenguajes de programación
            </div>
                <div className="grid grid-cols-4 gap-4 w-3/4 pl-8">
                    <div className="w-40 h-40 flex items-center justify-center">
                        <JavascriptLogo />
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center">
                        <TypescriptLogo />
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center">
                        <HtmlLogo />
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center">
                        <CssLogo />
                    </div>
                </div>
            </div>
        </div>
    );
}