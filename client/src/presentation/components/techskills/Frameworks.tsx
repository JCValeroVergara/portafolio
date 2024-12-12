import { ExpressLogo, NestLogo, NodeLogo, ReactLogo, ReduxLogo, TailwindLogo, ViteLogo } from '../../icons'

interface Framework {
    name: string;
    logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

const frameworks: Framework[] = [
    { name: 'Node.js', logo: NodeLogo },
    { name: 'React', logo: ReactLogo },
    { name: 'Vite', logo: ViteLogo },
    { name: 'Express', logo: ExpressLogo },
    { name: 'Nest.js', logo: NestLogo },
    { name: 'TailwindCss', logo: TailwindLogo },
    { name: 'Redux', logo: ReduxLogo }
];

export const Frameworks = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center my-4 overflow-hidden">
            <div className="grid grid-cols-4 md:grid-cols-7 gap-4 w-full p-2 md:py-4 bg-slate-800 rounded-lg justify-center">
                {frameworks.map((framework, index) => (
                    <div key={index} className="relative w-15 h-15 md:w-40 md:h-40 flex items-center justify-center group">
                        <framework.logo className={`transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse ${framework.logo === ExpressLogo || framework.logo === TailwindLogo ? 'bg-slate-300 p-2 rounded-sm': ''} `} />
                        <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {framework.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
