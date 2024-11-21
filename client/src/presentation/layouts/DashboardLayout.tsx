import { Outlet } from 'react-router-dom'
import { menuRoutes } from '../router/router';
import { SidebarMenuItems } from '../components';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export const DashboardLayout = () => {
    return (
        <main className="flex flex-row mt-7">
        <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
            Juan Carlos Valero<span className="text-indigo-500">.</span>
                </h1>
                <div className='flex flex-row items-center'>
                    <span className="text-xl">Bienvenido</span>
                    <img className="w-16 h-16 rounded-full ml-auto" src="/FullStack.png" alt="Rounded avatar"></img>
                </div>

            <div className="border-gray-700 border my-3" />

            {/* Opciones del menú */}
            {menuRoutes.map((options) => (
            <SidebarMenuItems key={options.to} {...options} />
            ))}
            <div className="fixed bottom-8 mx-auto flex flex-col justify-center items-center px-6">
                <div className="text-sm space-y-2">
                    <div className="flex flex-row items-center space-x-2">
                        <FaEnvelope className="text-blue-600 text-lg transform -translate-y-2" />
                        <p className='leading-none'>juankvalerov@gmail.com</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <FaPhoneAlt className="text-blue-600 text-lg transform -translate-y-2" />
                        <p className='leading-none'>(57) 313-712-7520</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <FaMapMarkerAlt className="text-blue-600 text-lg transform -translate-y-2" />
                        <p className='leading-none'>Medellín - Colombia</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <a 
                        href="https://www.linkedin.com/in/juankvalero/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a 
                        href="https://github.com/JCValeroVergara" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-500 transition"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
            </nav>

        <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
            <div className="flex flex-row h-full">
                <div className="flex flex-col flex-auto h-full p-1">
                    <Outlet />
                </div>
            </div>
            </section>
        </main>
    );
}