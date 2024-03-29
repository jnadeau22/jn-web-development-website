import classes from './hamburgerMenu.module.scss';

interface HamburgerMenuProps {
    isOpen: boolean;
    handleMenuClick: () => void;
    hidden?: boolean;
}

export default function HamburgerMenu({
    isOpen,
    handleMenuClick,
    hidden = false,
}: HamburgerMenuProps) {
    const upperLineClass = isOpen
        ? classes.hamburgerMenu__upperLine_open
        : classes.hamburgerMenu__upperLine;
    const middleLineClass = isOpen
        ? classes.hamburgerMenu__middleLine_open
        : classes.hamburgerMenu__middleLine;
    const lowerLineClass = isOpen
        ? classes.hamburgerMenu__lowerLine_open
        : classes.hamburgerMenu__lowerLine;

    return (
        <button
            className={hidden ? 'hidden' : classes.hamburgerMenu}
            onClick={handleMenuClick}>
            <div className={upperLineClass}></div>
            <div className={middleLineClass}></div>
            <div className={lowerLineClass}></div>
        </button>
    );
}
