import { ChangeEvent } from 'react';
import styles from './TextArea.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface TextAreaProps {
  label?: string;
  size?: InputSize;
  variant?: InputVariant;
  textAreaState?: InputState;
  textAreaMessage?: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  customClassName?: string;
  rows?: number;
}

const TextArea = ({
  label,
  size = 'medium',
  value,
  required,
  onChange,
  variant = 'filled',
  textAreaState,
  textAreaMessage,
  placeholder,
  disabled,
  customClassName,
  rows = 4,
  ...rest
}: TextAreaProps) => {
  const textAreaId = label ? label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'textarea';

  return (
    <div className={cn('textAreaWrapper', size, variant, textAreaState, customClassName)}>
      {label && (
        <label htmlFor={textAreaId} className={cn('label')}>
          {label}
        </label>
      )}
      <textarea
        id={textAreaId}
        className={cn('textArea')}
        aria-labelledby={label ? textAreaId : undefined}
        aria-describedby={textAreaMessage ? `${textAreaId}-message` : undefined}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        {...rest}
      />
      {textAreaMessage && (
        <small id={`${textAreaId}-message`} className={cn('message')}>
          {textAreaMessage}
        </small>
      )}
    </div>
  );
};

export default TextArea;
