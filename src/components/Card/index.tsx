import classes from './card.module.scss';

interface CardProps {
    children: React.ReactNode;
    fullHight?: boolean;
}

const Card = ({ children, fullHight }: CardProps) => {
    return (
        <div
            className={classes.card}
            style={{
                height: fullHight ? '100%' : 'auto',
            }}>
            {children}
        </div>
    );
};

export default Card;
