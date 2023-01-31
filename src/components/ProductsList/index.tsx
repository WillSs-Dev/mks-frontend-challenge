import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';

import IProduct from '../../interfaces/product';
import { IProductsListProps } from '../../interfaces/props';
import { addToCart, selectCartItems } from '../../store/slices/cart.slice';
import {
  convertCurrencyToNumber,
  convertStringToCurrency,
} from '../../utils/convertCurrency';
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

  const iterSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Container>
      {!products.length
        ? iterSkeletons.map((i) => (
            <Card key={i} data-testid='product-card'>
              <Skeleton height={138} width={195} baseColor='#bdbcbc' />
              <Skeleton count={3} height={15} width={195} />
              <Skeleton baseColor='#1a4688' height='31.91px' width='217.56px' borderRadius='0px 0px 8px 8px'></Skeleton>
            </Card>
          ))
        : products.map((product, i) => (
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
                    <span>{product.name}</span>
                    <div>
                      <span>
                        {convertStringToCurrency(product.price as string)}
                      </span>
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
