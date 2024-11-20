import { SqlLogo, PostgresqlLogo, MongodbLogo } from '../../icons'


export const DataBases = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center my-4'>
                {/* <div className="fade-in text-2xl font-bold my-4 text-center">
                    Bases de datos
                </div> */}
                <div className="grid grid-cols-3 gap-4 w-3/4 pl-8 py-4 bg-slate-800 rounded-lg">
                    <div className="w-40 h-40 flex items-center justify-center group">
                        <SqlLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center group">
                        <PostgresqlLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                    <div className="w-40 h-40  flex items-center justify-center group">
                        <MongodbLogo className="transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"/>
                    </div>
                </div>
            </div>
    )
}
