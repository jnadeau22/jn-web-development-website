import classes from './card.module.scss';

interface CardProps {
    children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
    return <div className={classes.card}>{children}</div>;
};

export default Card;
