import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  labelText: string;
  size?: Size;
  variant?: 'contained' | 'outlined' | 'text';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ labelText, size = 'medium', variant = 'contained', iconLeft, iconRight, disabled }: ButtonProps) => {
  const sizeClasses = classes[`${size}`];
  const variantClasses = classes[`${variant}`];

  return (
    <button className={`${classes.button} ${sizeClasses} ${variantClasses}`} disabled={disabled}>
      {iconLeft}
      <span>{labelText}</span>
      {iconRight}
    </button>
  );
};

export default Button;
