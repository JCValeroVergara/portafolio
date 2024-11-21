import { JavascriptLogo, TypescriptLogo, HtmlLogo, CssLogo } from '../../icons'


export const ProgrammingLanguages = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center my-4 overflow-hidden'>
                {/* <div className="fade-in text-2xl font-bold my-4 text-center">
                    Lenguajes de programación
                </div> */}
                <div className="grid grid-cols-4 gap-4 w-3/4 pl-8 py-4 bg-slate-800 rounded-lg">
                    <div className="relative w-40 h-40 flex items-center justify-center group">
                        <JavascriptLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    JavaScript
                    </span>
                    </div>
                    <div className="relative w-40 h-40  flex items-center justify-center group">
                        <TypescriptLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    TypeScript
                    </span>
                    </div>
                    <div className="relative w-40 h-40  flex items-center justify-center group">
                        <HtmlLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    HTML
                    </span>
                    </div>
                    <div className="relative w-40 h-40  flex items-center justify-center group">
                        <CssLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Css
                    </span>
                    </div>
                </div>
            </div>
    )
}
