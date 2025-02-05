import { HTMLAttributes, useMemo, Suspense } from 'react';
import { Icons } from './Icons';

export type IconName = keyof typeof Icons;

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
}

export const Icon = ({ icon, className, ...rest }: IconProps) => {
  const SvgIcon = useMemo(() => Icons[`${icon}`], [icon]);

  if (!SvgIcon) return null;

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}
    >
      <Suspense fallback={null}>
        <SvgIcon />
      </Suspense>
    </div>
  );
};
