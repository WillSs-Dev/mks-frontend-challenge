import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';

import IProduct from '../../interfaces/product';
import { IProductsListProps } from '../../interfaces/props';
import { addToCart, selectCartItems } from '../../store/slices/cart.slice';
import { convertCurrencyToNumber } from '../../utils/convertCurrency';
import 'react-loading-skeleton/dist/skeleton.css';
import AddToCartButton from '../AddToCartButton';

import { Container, Card } from './style';

const ProductsList = (props: IProductsListProps) => {
  const { products } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = (product: IProduct) => {
    const productAlreadyInCart = cartItems.find(
      (item) => item.id === product.id
    );
    if (productAlreadyInCart) {
      return;
    }
    const newProduct = {
      ...product,
      price: convertCurrencyToNumber(product.price as string),
      quantity: 1,
    };
    dispatch(addToCart(newProduct));
  };

  return (
    <Container>
      {products.map((product, i) => (
        <Card key={product.id || i} data-testid='product-card'>
          {product.photo ? (
            <img
              src={product.photo}
              alt={product.name}
              onClick={() => addProductToCart(product)}
            />
          ) : (
            <Skeleton height={138} width={195} baseColor='#2c2c2c' />
          )}
          {product.name ? (
            <>
              <div>
                <span>{product.name || <Skeleton />}</span>
                <div>
                  <span>{`R$${product.price}`}</span>
                </div>
              </div>
              <p>{`${product.description.substring(0, 100)}...`}</p>
            </>
          ) : (
            <Skeleton count={3} height={15} width={195} />
          )}
          <AddToCartButton product={product} />
        </Card>
      ))}
    </Container>
  );
};

export default ProductsList;
