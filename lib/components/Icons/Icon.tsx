import { HTMLAttributes, useMemo, Suspense } from 'react';
import { Icons } from './Icons';
import styles from './../Button/Button.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export type IconName = keyof typeof Icons;

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: IconName;
}

export const Icon = ({ name, ...rest }: IconProps) => {
  const SvgIcon = useMemo(() => Icons[`${name}`], [name]);

  if (!SvgIcon) return null;

  return (
    <div className={cn('icon')} aria-label={name} role="img" {...rest}>
      <Suspense fallback={null}>
        <SvgIcon width="100%" height="100%" />
      </Suspense>
    </div>
  );
};
