type Props = {
  type: string;
  value: string;
};

const Input = ({ type = 'text', value }: Props) => {
  return <input type={type} value={value} />;
};

export default Input;
