import { HTMLAttributes, useMemo, Suspense } from 'react';
import { Icons } from './Icons';
import styles from './Icon.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export type IconName = keyof typeof Icons;

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  parentClassName?: string;
  name: IconName;
}

export const Icon = ({ name, parentClassName, ...rest }: IconProps) => {
  const SvgIcon = useMemo(() => Icons[`${name}`], [name]);

  if (!SvgIcon) return null;

  return (
    <i className={cn('icon', parentClassName)} aria-label={name} role="img" {...rest}>
      <Suspense fallback={null}>
        <SvgIcon width="100%" height="100%" />
      </Suspense>
    </i>
  );
};
