import { Product } from '@src/store/modules/products/products.types';
import { AppState } from '@src/store/store.types';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import * as Style from './ProductsHandler.style';
import { currency } from '@src/utils';

const ProductsHandler = () => {
  const products: Array<Product> = useSelector(({ products }: AppState) => products);

  const map = products.map((product: Product) => {
    return (
      <Style.Product key={product.id}>
        <Style.Thumb image={product.thumbnail} />
        <Style.Details>
          <Style.Price>{currency({ value: product.price })}</Style.Price>
          <Link passHref href={{
            pathname: '/product',
            query: {
              id: product.id
            },
          }}>
            <Style.Title>
              {product.title}
            </Style.Title>
          </Link>
        </Style.Details>

      </Style.Product>
    );
  });

  return (
    <Style.Wrapper>
      {map}
    </Style.Wrapper>
  );
};

export default ProductsHandler;
