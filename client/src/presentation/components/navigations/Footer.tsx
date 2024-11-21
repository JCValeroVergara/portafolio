import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-slate-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="text-sm">
                    <p>juankvalerov@gmail.com</p>
                    <p>(57) 313-712-7520</p>
                    <p>Medellín - Colombia</p>
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
        </footer>
    );
};