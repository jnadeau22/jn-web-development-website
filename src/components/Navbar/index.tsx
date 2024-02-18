import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';
import { HamburgerMenu } from '..';
import { logo, logoMini } from '../../assets';
import { useWindowWidth } from '../../hooks';
import { Pages, WindowWidths } from '../../types';

export default function Navbar() {
    // Hooks
    const { t } = useTranslation('navbar');
    const windowWidth = useWindowWidth();

    // State
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [navLinksClass, setNavLinksClass] = useState<string>(() => {
        if (windowWidth > WindowWidths.MD) {
            return classes.navbar__navLinks;
        }

        return classes.navbar__navLinksMenuClose;
    });

    // Functions
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navLinkIsActive = (to: string) => to === window.location.pathname;

    // Lifecycle hooks
    useEffect(() => {
        if (windowWidth > WindowWidths.MD) {
            setNavLinksClass(classes.navbar__navLinks);
        } else if (isMenuOpen) {
            setNavLinksClass(classes.navbar__navLinksMenuOpen);
        } else {
            setNavLinksClass(classes.navbar__navLinksMenuClosed);
        }
    }, [windowWidth, isMenuOpen]);

    // Constants
    const NAV_LINKS = [
        { to: Pages.HOME, label: t('home') },
        { to: Pages.CONTACT, label: t('contact') },
    ];

    return (
        <nav className={classes.navbar}>
            <Link
                to='/'
                className={classes.navbar__logoContainer}>
                <img
                    src={logo}
                    alt='logo'
                    className={classes.navbar__logo}
                />
                <img
                    src={logoMini}
                    alt='logo'
                    className={classes.navbar__logoMini}
                />
                <h1 className={classes.navbar__title}>JN Web Development</h1>
            </Link>
            <HamburgerMenu
                isOpen={isMenuOpen}
                handleMenuClick={handleMenuClick}
                hidden={windowWidth > WindowWidths.MD}
            />
            <ul className={navLinksClass}>
                {NAV_LINKS.map(({ to, label }) => (
                    <li
                        className={classes.navbar__navLink}
                        key={to}>
                        <Link
                            to={to}
                            className={
                                navLinkIsActive(to)
                                    ? classes.navbar__active
                                    : undefined
                            }>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
