import { ReactElement } from 'react';
import classNames from 'classnames/bind';
import iconWithProps from '../Icons/IconWrapper';
import styles from './Badge.module.css';

const cn = classNames.bind(styles);

interface BadgeProps {
  size?: MSTSize;
  variant?: BadgeAndChipVariant;
  badgeState?: DefaultState;
  icon: ReactElement;
  customClassName?: string;
}

const Badge = ({
  size = 'small',
  variant = 'contained',
  badgeState = 'default',
  icon,
  customClassName,
  ...rest
}: BadgeProps) => {
  const isTinySize = size === 'tiny';
  return (
    <div className={cn('badge', size, variant, badgeState, customClassName)} {...rest}>
      {isTinySize && icon ? iconWithProps(icon) : icon}
    </div>
  );
};

export default Badge;
