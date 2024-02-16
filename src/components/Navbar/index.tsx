import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.scss';
import { HamburgerMenu } from '..';
import { logo, logoMini } from '../../assets';
import { WindowWidths } from '../../types';

export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (windowWidth > WindowWidths.MD) {
                setIsMenuOpen(false);
                setNavLinksClass(classes.navbar__navLinks);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

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
                <li className={classes.navbar__navLink}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={classes.navbar__navLink}>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
