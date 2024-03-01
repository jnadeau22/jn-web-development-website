import { Outlet } from 'react-router-dom';

import classes from './mainLayout.module.scss';
import { Navbar } from '../../components';
import { NavMenuContextProvider } from '../../contexts';

export default function MainLayout() {
    return (
        <NavMenuContextProvider>
            <div className={classes.mainLayout}>
                <div className={classes.mainLayout__content}>
                    <Navbar />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </NavMenuContextProvider>
    );
}
