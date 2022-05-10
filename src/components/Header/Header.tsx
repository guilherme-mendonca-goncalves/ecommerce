import { commonActions } from '@src/store/modules/common';
import { AppState } from '@src/store/store.types';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../Search';
import * as Style from './Header.style';

const Header = () => {
  const dispatch = useDispatch();

  const cart = useSelector(({ cart }: AppState) => cart);

  const handleSearchChange = (term: string | null) => {
    dispatch(commonActions.setSearch(term));
  };

  return (
    <Style.Wrapper>
      <Style.Container>
        <Style.Brand>ECOMMERCE</Style.Brand>
        <Search onChange={handleSearchChange} />
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
