import { Product } from '@src/store/modules/products/products.types';
import { AppState } from '@src/store/store.types';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import * as Style from './ProductsHandler.style';
import { currency } from '@src/utils';
import DefaultButton from '../DefaultButton';
import { cartActions } from '@src/store/modules/cart';
import { useEffect, useState } from 'react';

const ProductsHandler = () => {
  const dispatch = useDispatch();

  const search: string | null = useSelector(({ common }: AppState) => common.search);

  const products: Array<Product> = useSelector(({ products }: AppState) => products);

  const [filtered, setFiltered] = useState<Array<Product>>(products);

  useEffect(() => {
    if (!search) {
      setFiltered(products);
      return;
    }

    const result = products.filter((product) => {
      const parsedTitle = product.title.toLowerCase();
      const parsedTerm = search.toLowerCase();
      return parsedTitle.includes(parsedTerm);
    });

    setFiltered(result);
  }, [search, products]);

  const handleAddProduct = (product: Product) => {
    dispatch(cartActions.addProduct(product));
  };

  const map = filtered.map((product: Product) => {
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
          <DefaultButton label="Adicionar ao carrinho" onClick={() => handleAddProduct(product)} />
        </Style.Details>

      </Style.Product>
    );
  });

  return (
    <Style.Wrapper>
       {search && (
        <Style.Results>
          <h2>{ filtered.length > 0 ? `${filtered.length} resultado(s) encontrados.` : 'Nenhum resultado encontrado.' }</h2>
        </Style.Results>
      )}
      <Style.List>
        {map}
      </Style.List>
    </Style.Wrapper>
  );
};

export default ProductsHandler;
