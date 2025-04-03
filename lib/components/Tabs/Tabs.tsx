import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Tabs.module.css';
import { Icon, IconName } from '../Icons/Icon';

const cn = classNames.bind(styles);

interface Tab {
  label: string;
  iconName?: IconName;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
  iconSide?: 'left' | 'right';
  onClickTab?: () => void;
  disabled?: boolean;
  customClassName?: string;
}

const Tabs = ({ tabs, iconSide, onClickTab, disabled, customClassName, ...rest }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onClickTab) onClickTab();
  };

  return (
    <div>
      <div className={cn('tabs', customClassName)}>
        {tabs.map(({ label, iconName }, index) => (
          <button
            key={label}
            aria-label={label}
            type="button"
            className={cn('tabButton', { active: activeTab === index, withIcon: iconName && iconSide, disabled })}
            onClick={() => handleTabClick(index)}
            {...rest}
          >
            {iconSide === 'left' && iconName && <Icon name={iconName} />}
            {label}
            {iconSide === 'right' && iconName && <Icon name={iconName} />}
          </button>
        ))}
      </div>

      <div className={cn('tabContent')}>{tabs[`${activeTab}`].content}</div>
    </div>
  );
};

export default Tabs;
