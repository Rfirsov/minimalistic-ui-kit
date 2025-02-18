import { HTMLAttributes, useMemo, Suspense } from 'react';
import { Icons } from './Icons';

export type IconName = keyof typeof Icons;

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: IconName;
}

export const Icon = ({ name, ...rest }: IconProps) => {
  const SvgIcon = useMemo(() => Icons[`${name}`], [name]);

  if (!SvgIcon) return null;

  return (
    <div className="icon" aria-label={name} role="img" {...rest}>
      <Suspense fallback={null}>
        <SvgIcon width="100%" height="100%" />
      </Suspense>
    </div>
  );
};
