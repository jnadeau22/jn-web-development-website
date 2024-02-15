import { Outlet } from 'react-router-dom';

import classes from './mainLayout.module.scss';

export default function MainLayout() {
    return (
        <div className={classes.mainLayout}>
            <main>
                Main
                <Outlet />
            </main>
        </div>
    );
}
