import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './mainLayout.module.scss';
import { Footer, Navbar } from '../../components';
import { NavMenuContext } from '../../contexts';

export default function MainLayout() {
    const { isMenuOpen } = useContext(NavMenuContext);

    const mainLayoutClassName = isMenuOpen
        ? classes.mainLayout__menuOpen
        : classes.mainLayout;

    return (
        <div className={mainLayoutClassName}>
            <div className={classes.mainLayout__content}>
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}
