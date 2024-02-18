import { Outlet } from 'react-router-dom';

import classes from './mainLayout.module.scss';
import { Navbar } from '../../components';

export default function MainLayout() {
    return (
        <div className={classes.mainLayout}>
            <div className={classes.mainLayout__content}>
            <Navbar />
            <main>
                Main
                <Outlet />
            </main>
            </div>
        </div>
    );
}
