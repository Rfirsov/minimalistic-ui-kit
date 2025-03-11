import { useId } from 'react';
import classNames from 'classnames/bind';
import styles from './ProgressBar.module.css';
const cn = classNames.bind(styles);

interface ProgressBarProps {
  progress: number;
  isRightSidePercentage?: boolean;
  disabled?: boolean;
  customClassName?: string;
}

const ProgressBar = ({ progress, isRightSidePercentage, disabled, customClassName, ...rest }: ProgressBarProps) => {
  const progressBarId = useId();
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={cn('progressContainer', { rideSidePercentage: isRightSidePercentage, disabled }, customClassName)}>
      <label htmlFor={`progress-bar-${progressBarId}`} className={cn('progressLabel')}>
        {clampedProgress}%
      </label>
      <progress
        id={`progress-bar-${progressBarId}`}
        aria-label="Progress bar"
        className={cn('progress', { completed: clampedProgress === 100 })}
        value={clampedProgress}
        max={100}
        {...rest}
      />
    </div>
  );
};

export default ProgressBar;
