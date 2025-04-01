import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Breadcrumbs.module.css';
import { Icon } from '../Icons';

const cx = classNames.bind(styles);

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  iconLeft?: ReactElement;
  disabled?: boolean;
  customClassName?: string;
}

const Breadcrumbs = ({ items, iconLeft, disabled, customClassName }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  return (
    <nav aria-label="breadcrumbs">
      <ul className={cx('breadcrumbs', customClassName)}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className={cx('breadcrumbItem')}>
              <>
                <Link to={item.path} className={cx('link', { disabled }, { active: pathname === item.path })}>
                  {iconLeft && <span className={cx('iconLeft')}>{iconLeft}</span>}
                  {item.label}
                </Link>
                {!isLast && (
                  <div className={cx('separator')}>
                    <Icon name="NavArrowRight" />
                  </div>
                )}
              </>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
