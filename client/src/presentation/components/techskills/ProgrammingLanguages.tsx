import { JavascriptLogo, TypescriptLogo, HtmlLogo, CssLogo } from '../../icons'

interface Language {
    name: string;
    logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

const languages: Language[] = [
    { name: 'JavaScript', logo: JavascriptLogo },
    { name: 'TypeScript', logo: TypescriptLogo },
    { name: 'HTML', logo: HtmlLogo },
    { name: 'CSS', logo: CssLogo }
];


export const ProgrammingLanguages = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center my-4 overflow-hidden'>
            <div className="grid grid-cols-4 gap-4 w-full md:w-3/4 pl-2 md:pl-8 py-4 bg-slate-800 rounded-lg">
                {languages.map((language, index) => (
                    <div key={index} className="relative w-15 h-15 md:w-40 md:h-40 flex items-center justify-center group">
                        <language.logo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                        <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {language.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
