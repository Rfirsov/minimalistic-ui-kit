import { useId, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Toggle.module.css';

const cn = classNames.bind(styles);

interface ToggleProps {
  initial: boolean;
  label?: string;
  onToggle?: () => void;
  isRightSideButton?: boolean;
  disabled?: boolean;
  customClassName?: string;
}

const Toggle = ({ initial, onToggle, label, isRightSideButton, disabled, customClassName, ...rest }: ToggleProps) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(initial);
  const [isFocused, setIsFocused] = useState(false);

  const handleToggle = () => {
    if (onToggle) onToggle();
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <div
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled}
      className={cn('switch', { rideSideButton: isRightSideButton, checked: isChecked, disabled }, customClassName)}
      {...rest}
    >
      <label aria-label="Toggle" htmlFor={`toggle-${id}`} className={cn('slider', { focused: isFocused })} />
      <input
        id={`toggle-${id}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn('switchInput')}
        type="checkbox"
        onChange={handleToggle}
        checked={isChecked}
        disabled={disabled}
      />
      {label && <span className={cn('labelText')}>{label}</span>}
    </div>
  );
};

export default Toggle;
