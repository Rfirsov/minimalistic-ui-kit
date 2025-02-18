import { ReactElement } from 'react';
import styles from './Button.module.css';

// Base interface with common props
interface ButtonPropsBase {
  onClick?: () => void;
  size?: Size;
  variant?: ButtonVariant;
  disabled?: boolean;
}

// Conditional interface: If labelText is absent, iconLeft is required
interface ButtonPropsWithLabel extends ButtonPropsBase {
  labelText: string;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
}

interface ButtonPropsWithoutLabel extends ButtonPropsBase {
  labelText?: undefined;
  iconLeft: ReactElement;
  iconRight?: undefined;
}

const Button = ({
  labelText,
  onClick,
  size = 'medium',
  variant = 'contained',
  iconLeft,
  iconRight,
  disabled,
  ...rest
}: ButtonPropsWithLabel | ButtonPropsWithoutLabel) => {
  labelText = labelText?.trim();
  const sizeClass = styles[`${size}`];
  const variantClass = variant === 'contained' ? '' : styles[`${variant}`];

  return (
    <button
      className={`${styles.button} ${sizeClass} ${variantClass} ${labelText ? '' : styles.noLabelText}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {iconLeft}
      {labelText && <span className={styles.label}>{labelText}</span>}
      {iconRight}
    </button>
  );
};

export default Button;
