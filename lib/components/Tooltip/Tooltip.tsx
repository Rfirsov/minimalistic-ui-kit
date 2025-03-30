import { ReactNode, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Tooltip.module.css';

const cn = classNames.bind(styles);

interface TooltipProps {
  children: ReactNode;
  tooltipLabel: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  customClassName?: string;
}

const Tooltip = ({ children, tooltipLabel, position = 'top', customClassName, ...rest }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={cn('tooltipWrapper', customClassName)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...rest}
    >
      {children}
      {isVisible && <div className={cn('tooltip', position)}>{tooltipLabel}</div>}
    </div>
  );
};

export default Tooltip;
