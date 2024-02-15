import { RouteObject } from 'react-router-dom';

import { MainLayout } from '../layouts';

export default [
    {
        path: '/',
        element: <MainLayout />,
    },
] as RouteObject[];
