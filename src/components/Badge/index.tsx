import classes from './badge.module.scss';

interface BadgeProps {
    text: string;
}

const Badge = ({ text }: BadgeProps) => {
    return (
        <span className={classes.badge}>
            <span className={classes.badge__hint}></span>
            {text}
        </span>
    );
};

export default Badge;
