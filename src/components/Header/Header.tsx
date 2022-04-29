import { AppState } from '@src/store/store.types';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import * as Style from './Header.style';

const Header = () => {
  const cart = useSelector(({ cart }: AppState) => cart);
  const productsAmount = cart.length;

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Brand>ECOMMERCE</Style.Brand>
        <Style.Search>Buscar...</Style.Search>
        <Style.Cart>
          <Link href="/cart">
            {cart.length > 1 ? `${cart.length} produtos` : `${cart.length} produto`}
          </Link>
        </Style.Cart>
      </Style.Container>
    </Style.Wrapper>
  );
};

export default Header;
