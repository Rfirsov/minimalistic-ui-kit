import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { Icon } from './../../components/Icons';
import iconWithProps from '../Icons/IconWrapper';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.css';

const cn = classNames.bind(styles);

interface CheckboxProps {
  label?: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  isRightSideCheckbox?: boolean;
  disabled?: boolean;
  customClassName?: string;
}

const Checkbox = ({
  checked = false,
  indeterminate = false,
  fullWidth = false,
  isRightSideCheckbox,
  onChange,
  label,
  disabled,
  customClassName,
  ...rest
}: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked);
  const [isIndeterminate, setIsIndeterminate] = useState(indeterminate);

  useEffect(() => {
    if (checkboxRef.current && isChecked === false) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isChecked, isIndeterminate]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    setIsIndeterminate(false);

    if (onChange) onChange(e);
  };

  return (
    <label
      className={cn('checkboxLabel', { fullWidth, rightSideCheckbox: isRightSideCheckbox, disabled }, customClassName)}
    >
      <input
        ref={checkboxRef}
        type="checkbox"
        aria-checked={isIndeterminate ? 'mixed' : isChecked}
        checked={isChecked}
        onChange={handleOnChange}
        disabled={disabled}
        className={cn('checkboxInput')}
        {...rest}
      />
      <div className={cn('customCheckbox', { withLabel: !!label })}>
        {isChecked && iconWithProps(<Icon name="Check" />, cn('medium'))}
        {isIndeterminate && !isChecked && iconWithProps(<Icon name="Minus" />, cn('medium'))}
      </div>
      {label}
    </label>
  );
};

export default Checkbox;
