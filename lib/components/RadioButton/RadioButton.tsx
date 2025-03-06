import { InputHTMLAttributes, ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './RadioButton.module.css';

const cn = classNames.bind(styles);

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  name: string;
  value: string;
  isRightSideButton?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  customClassName?: string;
}

const RadioButton = ({
  label,
  name,
  value,
  checked,
  disabled,
  isRightSideButton,
  onChange,
  customClassName,
  ...rest
}: RadioButtonProps) => {
  return (
    <label
      aria-label={label}
      htmlFor={label}
      className={cn('radioButton', { disabled }, { rideSideButton: isRightSideButton }, customClassName)}
    >
      <input
        id={label}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={cn('radioInput')}
        {...rest}
      />
      <span className={cn('radioCustom', { rideSideButton: isRightSideButton })} />
      {label}
    </label>
  );
};

export default RadioButton;
