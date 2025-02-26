import { ReactNode, ReactElement, Children, isValidElement, cloneElement } from 'react';
import styles from './ButtonGroup.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface ButtonGroupProps {
  customClassName?: string;
  children: ReactNode;
}

const ButtonGroup = ({ children, customClassName, ...rest }: ButtonGroupProps) => {
  const childrenWithProps = Children.map(children, (child: ReactNode): ReactNode => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, { parentClassName: cn('button') });
    }
    return child;
  });

  return (
    <div className={cn('buttonGroup', { customClassName })} {...rest}>
      {childrenWithProps}
    </div>
  );
};

export default ButtonGroup;
