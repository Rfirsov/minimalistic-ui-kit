import classNames from 'classnames/bind';
import styles from './Loader.module.css';

const cn = classNames.bind(styles);

interface LoaderProps {
  size?: DefaultSize;
}

const Loader = ({ size = 'medium' }: LoaderProps) => {
  return <div className={cn('loader', size)} />;
};

export default Loader;
