import { PdfIcon } from '../../icons';

export const AboutMePage = () => {
    return (
        <div className="fade-in w-full h-full flex justify-center items-center px-8">
            <div className="text-gray-900 bg-slate-200 p-8 rounded-md shadow-lg space-y-6">
                <h1 className="text-4xl font-extrabold text-center mb-4 text-blue-600">
                    Sobre mí
                </h1>
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">👋 ¡Hola! Soy Juan Valero</h2>
                    <p className="text-lg">
                    Soy{' '}
                    <span className="font-semibold text-blue-500">
                        Tecnólogo en Análisis y Desarrollo de Sistemas de Información{' '}
                    </span>
                    y{' '}
                    <span className="font-semibold text-blue-500">
                        Full Stack Web Developer
                    </span>
                    . Me apasiona transformar ideas complejas en
                    <span className="text-blue-500">
                        {' '}
                        soluciones técnicas simples
                    </span>
                    , conectando las necesidades de los clientes con la tecnología más
                    avanzada.
                    </p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">🎯 ¿Qué me distingue?</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>
                        Actúo como un{' '}
                        <span className="font-semibold">puente efectivo</span> entre
                        equipos técnicos y usuarios finales, asegurando que cada
                        proyecto cumpla con las expectativas del cliente.
                    </li>
                    <li>
                        Domino el desarrollo{' '}
                        <span className="font-semibold">full stack</span>, desde el
                        diseño de interfaces hasta la arquitectura del servidor.
                    </li>
                    <li>
                        Mi enfoque integral y adaptabilidad a nuevas tecnologías me
                        permiten implementar soluciones{' '}
                        <span className="font-semibold">escalables y efectivas</span>.
                    </li>
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">🚀 Lo que me motiva</h2>
                    <p className="text-lg">
                    Creo en el poder de la tecnología para transformar vidas y
                    negocios. Mi objetivo es diseñar sistemas que no solo cumplan
                    requisitos técnicos, sino que también{' '}
                    <span className="text-blue-500 font-semibold">
                        impulsen el éxito de las personas
                    </span>
                    .
                    </p>
                </section>
                <div className="text-center mt-6 relative group">
                    <a
                        href="/CV JUANVALERO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-16 flex items-center justify-center text-white rounded-full shadow-lg transition outline-none focus:outline-none focus:ring-0"
                    >
                        <PdfIcon />
                    </a>
                    <span className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Curriculum
                    </span>
                </div>
            </div>
        </div>
    );
}