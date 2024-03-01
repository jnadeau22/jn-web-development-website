import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import NavMenuContextProvider from './contexts/NavMenuContext.tsx';
import router from './routes';

import './configs/i18n.ts';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NavMenuContextProvider>
            <RouterProvider router={router} />
        </NavMenuContextProvider>
    </React.StrictMode>,
);
