import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AboutMePage, TechSkillsPage, ProfessionalExperiencePage, EducationPage, ProjectsPage } from '../pages';
import { DashboardLayout } from '../layouts';

export const menuRoutes = [
    {
        to: '/about-me',
        icon: 'fa-solid fa-address-card',
        title: 'Acerca de mí',
        description: 'Mi historia',
        component: <AboutMePage />,
    },
    {
        to: '/tech-skills',
        icon: 'fa-solid fa-lightbulb',
        title: 'Habilidades técnicas',
        description: 'mis habilidades técnicas',
        component: <TechSkillsPage />,
    },
    {
        to: '/professional-experience',
        icon: 'fa-solid fa-briefcase',
        title: 'Experiencia profesional',
        description: 'mi experiencia profesional',
        component: <ProfessionalExperiencePage />,
    },
    {
        to: '/education',
        icon: 'fa-solid fa-graduation-cap',
        title: 'Educación',
        description: 'mi formación académica',
        component: <EducationPage />,
    },
    {
        to: '/proyects',
        icon: 'fa-solid fa-project-diagram',
        title: 'Proyectos',
        description: 'mis proyectos',
        component: <ProjectsPage />,
    },
    
];

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
        ...menuRoutes.map((route) => ({
            path: route.to,
            element: route.component,
        })),
        {
            path: '',
            element: <Navigate to={menuRoutes[0].to} />,
        }
        ],
    }
]);