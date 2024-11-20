import { ExpressLogo, NestLogo, NodeLogo, ReactLogo, ReduxLogo, TailwindLogo, ViteLogo } from '../../icons'


export const Frameworks = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center my-4'>
                {/* <div className="fade-in text-2xl font-bold my-4 text-center">
                    Frameworks y librerías
                </div> */}
                <div className="grid grid-cols-7 gap-4 w-4/5 py-4 bg-slate-800 rounded-lg">
                    <div className="w-40 h-40 flex items-center justify-center rounded-full group">
                        <NodeLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center group">
                        <ReactLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center group">
                        <ViteLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                    <div className="w-40 h-40 flex items-center justify-center group">
                        <ExpressLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse bg-slate-300 p-2 rounded-md"/>
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center group">
                        <NestLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center group">
                        <TailwindLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center group">
                        <ReduxLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                </div>
            </div>
    )
}
