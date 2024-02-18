import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';
import { HamburgerMenu } from '..';
import { logo, logoMini } from '../../assets';
import { useWindowWidth } from '../../hooks';
import { Pages, WindowWidths } from '../../types';

export default function Navbar() {
    const NAV_LINKS = [
        { to: Pages.HOME, label: 'Home' },
        { to: Pages.CONTACT, label: 'Contact' },
    ];
    const navLinkIsActive = (to: string) => to === window.location.pathname;

    const windowWidth = useWindowWidth();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [navLinksClass, setNavLinksClass] = useState<string>(() => {
        if (windowWidth > WindowWidths.MD) {
            return classes.navbar__navLinks;
        }

        return classes.navbar__navLinksMenuClose;
    });
    useEffect(() => {
        if (windowWidth > WindowWidths.MD) {
            setNavLinksClass(classes.navbar__navLinks);
        } else if (isMenuOpen) {
            setNavLinksClass(classes.navbar__navLinksMenuOpen);
        } else {
            setNavLinksClass(classes.navbar__navLinksMenuClosed);
        }
    }, [windowWidth, isMenuOpen]);

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
