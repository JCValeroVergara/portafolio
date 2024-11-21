import { SqlLogo, PostgresqlLogo, MongodbLogo } from '../../icons'


export const DataBases = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center my-4 overflow-hidden'>
            {/* <div className="fade-in text-2xl font-bold my-4 text-center">
                Bases de datos
            </div> */}
            <div className="grid grid-cols-3 gap-4 w-1/2 pl-4 py-4 bg-slate-800 rounded-lg">
                <div className="relative w-40 h-40 flex items-center justify-center group">
                    <SqlLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    SQL
                    </span>
                </div>
                <div className="relative w-40 h-40  flex items-center justify-center group">
                    <PostgresqlLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    PostgreSQL
                    </span>
                </div>
                <div className="relative w-40 h-40  flex items-center justify-center group">
                    <MongodbLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    <span className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    MongoDB
                    </span>
                </div>
            </div>
        </div>
    )
}
