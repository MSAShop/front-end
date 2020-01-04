import { CustomButton } from './button.style';

const Button = ({ borderRadius, ...props }) => {

  return <CustomButton borderRadius={borderRadius || 'default'} {...props} />;
}

export default Button;