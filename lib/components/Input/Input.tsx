import { ChangeEvent, ReactElement } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames/bind';
import iconWithProps from '../Icons/IconWrapper';
const cn = classNames.bind(styles);

interface InputProps {
  label?: string;
  type?: InputType;
  size?: InputSize;
  variant?: InputVariant;
  inputState?: InputState;
  inputMessage?: string;
  iconLeft?: ReactElement;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  customClassName?: string;
}

const Input = ({
  label,
  size = 'medium',
  value,
  required,
  onChange,
  variant = 'filled',
  inputState,
  inputMessage,
  iconLeft,
  placeholder = '',
  type = 'text',
  disabled,
  customClassName,
  ...rest
}: InputProps) => {
  const inputId = label ? label.toLowerCase().replace(/\s+/g, '-') : 'input';

  return (
    <div className={cn('inputWrapper', size, variant, inputState, customClassName)}>
      {label && (
        <label htmlFor={inputId} className={cn('label')}>
          {label}
        </label>
      )}
      <div className={cn('inputContainer', { withIcon: iconLeft })}>
        {iconLeft && iconWithProps(iconLeft as ReactElement, cn('customIcon'))}
        <input
          id={inputId}
          className={cn('input')}
          aria-labelledby={label ? inputId : undefined}
          aria-describedby={inputMessage ? `${inputId}-message` : undefined}
          type={type}
          value={value}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </div>
      {inputMessage && (
        <small id={`${inputId}-message`} className={cn('message')}>
          {inputMessage}
        </small>
      )}
    </div>
  );
};

export default Input;
