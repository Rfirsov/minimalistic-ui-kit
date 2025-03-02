import { cloneElement, ReactElement } from 'react';
import classNames from 'classnames/bind';
import iconStyles from '../Icons/Icon.module.css';
const cnIcon = classNames.bind(iconStyles);

const iconWithProps = (icon: ReactElement, customStyles: string = cnIcon('small')) =>
  icon ? cloneElement(icon, { parentClassName: customStyles }) : null;

export default iconWithProps;
