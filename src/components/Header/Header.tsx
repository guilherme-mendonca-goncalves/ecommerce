import * as Style from './Header.style';

const Header = () => {

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Brand>ECOMMERCE</Style.Brand>
        <Style.Search>Buscar...</Style.Search>
        <Style.Cart>0 produtos</Style.Cart>
      </Style.Container>
    </Style.Wrapper>
  );
};

export default Header;
