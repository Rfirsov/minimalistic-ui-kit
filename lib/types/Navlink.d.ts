import { IconName } from '../../lib/components/Icons';

declare interface IconProps {
  name: IconName;
  side?: 'left' | 'right';
}

declare interface ContentBase {
  label?: string;
  icon?: IconProps;
}

declare interface ContentWithSubTitle extends ContentBase {
  label: string;
  subTitle?: string;
}

declare interface ContentWithIcon extends ContentBase {
  label?: never;
  subTitle?: never;
  icon: IconProps;
}

declare type Content = ContentWithSubTitle | ContentWithIcon;

declare interface NavLink {
  content: Content;
  href: string;
  active?: boolean;
}
