import classNames from 'classnames/bind';
import styles from './Toggle.module.css';
import { useState } from 'react';

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
  const [isChecked, setIsChecked] = useState(initial);
  const handleToggle = () => {
    if (onToggle) onToggle();
    setIsChecked((prevChecked) => !prevChecked);
  };
  return (
    <div
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled}
      className={cn(
        'switch',
        { rideSideButton: isRightSideButton },
        { checked: isChecked },
        { disabled },
        customClassName
      )}
      {...rest}
    >
      <label aria-label="Toggle" htmlFor="toggle" className={cn('slider')}>
        <input id="toggle" type="checkbox" onChange={handleToggle} checked={isChecked} disabled={disabled} />
      </label>
      {label && <span className={cn('labelText')}>{label}</span>}
    </div>
  );
};

export default Toggle;
