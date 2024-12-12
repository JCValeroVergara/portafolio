import { GitLogo, DockerLogo } from '../../icons'

interface DevOpsTool {
    name: string;
    logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

const devOpsTools: DevOpsTool[] = [
    { name: 'Git', logo: GitLogo },
    { name: 'Docker', logo: DockerLogo }
];


export const DevOpsTools = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center my-4 overflow-hidden'>
            <div className="grid grid-cols-2 gap-4 w-4/5 md:w-1/3 px-4 md:pl-8 py-4 bg-slate-800 rounded-lg">
                {devOpsTools.map((devOpsTool, index) => (
                    <div key={index} className="relative w-15 h-15 md:w-40 md:h-40 flex items-center justify-center group">
                        <devOpsTool.logo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                        <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {devOpsTool.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
