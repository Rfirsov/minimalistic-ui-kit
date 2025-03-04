import { ReactElement, useState } from 'react';
import classNames from 'classnames/bind';
import iconWithProps from '../Icons/IconWrapper';
import styles from './Chip.module.css';

const cn = classNames.bind(styles);

interface ChipProps {
  label: string;
  onClose?: () => void;
  size?: ChipSize;
  variant?: ChipVariant;
  chipState?: ChipState;
  iconLeft?: ReactElement;
  customClassName?: string;
}

const Chip = ({
  label,
  size = 'small',
  variant = 'outlined',
  chipState = 'default',
  iconLeft,
  onClose,
  customClassName,
}: ChipProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const isTinySize = size === 'tiny';
  const handleClose = () => {
    setIsHidden(true);
    if (onClose) onClose();
  };

  if (isHidden) return null;
  return (
    <div className={cn('chip', size, variant, chipState, customClassName)}>
      {isTinySize && iconLeft ? iconWithProps(iconLeft) : iconLeft}
      <span className={cn('label')}>{label}</span>
      <button className={cn('closeButton')} onClick={handleClose} aria-label="Remove chip">
        &times;
      </button>
    </div>
  );
};

export default Chip;
