import { ReactElement } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';
import iconWithProps from '../Icons/IconWrapper';
const cn = classNames.bind(styles);

// Base interface with common props
interface ButtonPropsBase {
  parentClassName?: 'button';
  customClassName?: string;
  onClick?: () => void;
  size?: DefaultSize;
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

type ButtonProps = ButtonPropsWithLabel | ButtonPropsWithoutLabel;

const Button = ({
  labelText,
  onClick,
  size = 'medium',
  variant = 'contained',
  iconLeft,
  iconRight,
  disabled,
  parentClassName,
  customClassName,
  ...rest
}: ButtonProps) => {
  labelText = labelText?.trim();
  const isTinySize = size === 'tiny';

  return (
    <button
      className={cn('button', size, variant, { noLabelText: !labelText, disabled }, parentClassName, customClassName)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {isTinySize ? iconWithProps(iconLeft as ReactElement) : iconLeft}
      {labelText && <span className={cn('label')}>{labelText}</span>}
      {isTinySize ? iconWithProps(iconRight as ReactElement) : iconRight}
    </button>
  );
};

export default Button;
