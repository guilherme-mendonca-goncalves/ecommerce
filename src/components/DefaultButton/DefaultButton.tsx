import { DefaultButtonProps } from './DefaultButton.types';
import * as Style from './DefaultButton.style';

const DefaultButton = ({ label, onClick }: DefaultButtonProps) => {
  return (
    <Style.Wrapper
      type="button"
      onClick={onClick}
      data-testid="default-button"
    >
      {label}
    </Style.Wrapper>
  );
};

export default DefaultButton;
