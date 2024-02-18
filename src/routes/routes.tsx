import { RouteObject } from 'react-router-dom';

import { MainLayout } from '../layouts';
import { ContactView, HomeView } from '../views';

export default [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <HomeView /> },
            { path: '/contact', element: ContactView },
        ],
    },
] as RouteObject[];
