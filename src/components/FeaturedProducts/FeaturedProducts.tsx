import { Product } from '../../store/modules/products/products.types';
import { AppState } from '../../store/store.types';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const FeaturedProducts = () => {
  const products: Array<Product> = useSelector(({ products }: AppState) => products);
  const filtered: Array<Product> = products.filter((product: Product) => product.featured);

  const map = filtered.map((product: Product) => {
    return (
      <li key={product.id}>
        <Link href={{
          pathname: '/product',
          query: {
            id: product.id
          },
        }}>
          {product.name}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {map}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
