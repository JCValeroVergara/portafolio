import { ExpressLogo, NestLogo, NodeLogo, ReactLogo, ReduxLogo, TailwindLogo, ViteLogo } from '../../icons'


export const Frameworks = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center my-4 overflow-hidden">
        {/* <div className="fade-in text-2xl font-bold my-4 text-center">
                    Frameworks y librerías
                </div> */}
            <div className="grid grid-cols-7 gap-4 w-full py-4 bg-slate-800 rounded-lg">
                <div className="relative w-40 h-40 flex items-center justify-center rounded-full group">
                    <NodeLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Node.js
                    </span>
                </div>
                <div className="relative w-40 h-40  flex items-center justify-center group">
                    <ReactLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    React
                    </span>
                </div>
                <div className="relative w-40 h-40  flex items-center justify-center group">
                    <ViteLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Vite
                    </span>
                </div>
                <div className="relative w-40 h-40 flex items-center justify-center group">
                    <ExpressLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse bg-slate-300 p-2 rounded-md" />
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Express
                    </span>
                </div>
                <div className="relative w-40 h-40  flex items-center justify-center group">
                    <NestLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Nest.js
                    </span>
                </div>
                <div className="relative w-40 h-40  flex items-center justify-center group">
                    <TailwindLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse bg-slate-300 p-2 rounded-sm" />
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    TailwindCss
                    </span>
                </div>
                <div className="relative w-40 h-40  flex items-center justify-center group">
                    <ReduxLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Redux
                    </span>
                </div>
            </div>
        </div>
    );
}
