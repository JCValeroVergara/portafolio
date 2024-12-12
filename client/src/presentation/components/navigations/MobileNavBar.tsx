import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface MenuRoute {
    to: string;
    icon: string;
    title: string;
}

interface Props {
    menuRoutes: MenuRoute[];
}

export const MobileNavBar = ({ menuRoutes }: Props) => {
    return (
        <nav className='flex sm:hidden fixed bottom-0 left-0 w-full h-12 bg-gray-800 opacity-95 p-2 shadow-md z-40'>
            <div className='flex justify-around w-full'>
                {menuRoutes.map(({ to, icon, title }) => (
                    <NavLink
                        key={to}
                        to={to}
                        title={title}
                        className={({ isActive }) =>
                            isActive
                            ? 'flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors'
                            : 'flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors'
                        }
                        >
                        <i className={`${icon} text-2xl mr-4 text-indigo-500`}></i>
                    </NavLink>
                ))}
                <div className="flex justify-center items-center space-x-4">
                    <a 
                        href="https://www.linkedin.com/in/juankvalero/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:text-indigo-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a 
                        href="https://github.com/JCValeroVergara" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:text-indigo-700 transition"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
}