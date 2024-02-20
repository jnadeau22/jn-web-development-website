import classes from './index.module.scss';

interface ButtonProps {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    variant?: 'text' | 'outlined' | 'contained';
}

const Button = ({
    onClick,
    text,
    endIcon,
    startIcon,
    variant = 'text',
}: ButtonProps) => {
    const className = `${classes.button} ${classes[variant]}`;

    return (
        <button
            className={className}
            onClick={onClick}>
            {!!startIcon && startIcon}
            {text}
            {!!endIcon && endIcon}
        </button>
    );
};

export default Button;
