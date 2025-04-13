import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.css';
import { Icon, IconName } from '../Icons';
import { NavLink } from '../../types/Navlink';

const cn = classNames.bind(styles);

interface NavbarProps {
  links: NavLink[];
  fullWidth?: boolean;
  linkPosition?: 'start' | 'center' | 'end';
}

const Navbar = ({ links, fullWidth, linkPosition = 'center' }: NavbarProps) => {
  const renderIcon = (name: IconName) => {
    return <Icon name={name} parentClassName={cn('icon')} />;
  };

  return (
    <nav className={cn('navbar')} role="navigation" aria-label="Main navigation">
      <ul className={cn('navLinks')}>
        {links.map(({ content, href, active }) => {
          const { icon, label, subTitle } = content;
          const isSubTitlePresent = subTitle ?? false;

          return (
            <li key={href} className={cn('navLink', { active, isSubTitlePresent, fullWidth })}>
              <Link to={href} className={cn('link', { [linkPosition]: linkPosition })}>
                {icon && !icon.side && renderIcon(icon.name)}
                {icon && icon.side === 'left' && renderIcon(icon.name)}
                {isSubTitlePresent && (
                  <div className={cn('subTitleWrapper')}>
                    <span className={cn('label')}>{label}</span>
                    <span className={cn('subTitle')}>{subTitle}</span>
                  </div>
                )}
                {!isSubTitlePresent && label && <span className={cn('label')}>{label}</span>}
                {icon && icon.side === 'right' && renderIcon(icon.name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
