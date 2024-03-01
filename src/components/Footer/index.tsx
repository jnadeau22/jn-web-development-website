import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import classes from './footer.module.scss';
import { logo_mini } from '../../assets';
import Badge from '../Badge';
import Card from '../Card';

const CONTACT_LINKS = [
    {
        href: 'mailto:jonathannadeau.jn@gmail.com',
        label: 'jonathannadeau.jn@gmail.com',
        icon: faEnvelope,
    },
    {
        href: 'tel:514-969-8924',
        label: '514-969-8924',
        icon: faMobile,
    },
    {
        href: 'https://github.com/jonathan-nadeau',
        label: 'GitHub',
        icon: faGithub,
    },
    {
        href: 'https://www.linkedin.com/in/jonathannadeau91/',
        label: 'LinkedIn',
        icon: faLinkedin,
    },
];

const NAV_LINKS = [
    {
        to: '/',
        label: 'home',
    },
    {
        to: '/contact',
        label: 'contact',
    },
];

const Footer = () => {
    const { t } = useTranslation('footer');
    return (
        <footer className={classes.footer}>
            <Card>
                <div className={classes.footer__content}>
                    <img
                        src={logo_mini}
                        alt='Logo of JN, Développement web'
                        className={classes.footer__logo}
                    />
                    <ul className={classes.footer__contactLinks}>
                        {CONTACT_LINKS.map(({ href, label, icon }) => (
                            <li
                                key={label}
                                className={classes.footer__contactLink}>
                                <a
                                    href={href}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.footer__link}>
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className={classes.footer__icon}
                                    />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className={classes.footer__navLinks}>
                        {NAV_LINKS.map(({ to, label }) => (
                            <li
                                key={to}
                                className={classes.footer__navLink}>
                                <Link
                                    to={to}
                                    className={classes.footer__link}>
                                    {t(label, { ns: 'navbar' })}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={classes.footer__badge}>
                        <Badge text={t('availableToWork', { ns: 'common' })} />
                    </div>
                </div>
            </Card>
        </footer>
    );
};

export default Footer;
