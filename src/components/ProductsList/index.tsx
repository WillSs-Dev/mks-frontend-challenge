import { useDispatch, useSelector } from 'react-redux';

import shoppingBag from '../../images/shopping-bag.svg';
import IProduct from '../../interfaces/product';
import { IProductsListProps } from '../../interfaces/props';
import { addToCart, selectCartItems } from '../../store/slices/cart.slice';
import convertCurrencyToNumber from '../../utils/convertCurrency';

import { Container, Card, AddToCartButton } from './style';

const ProductsList = (props: IProductsListProps) => {
  const { products } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  
  const addProductToCart = (product: IProduct) => {
    const productAlreadyInCart = cartItems.find((item) => item.id === product.id);
    if (productAlreadyInCart) {
      return;
    }
    const newProduct = { ...product, price: convertCurrencyToNumber(product.price as string), quantity: 1};
    dispatch(addToCart(newProduct));
  };

  return (
    <Container>
      {products.length !== 0 &&
        products.map((product) => (
          <Card key={product.id} data-testid='product-card'>
            <img src={product.photo} alt={product.name} onClick={()=> addProductToCart(product)}/>
            <div>
              <span>{product.name}</span>
              <div>
                <span>{`R$${product.price}`}</span>
              </div>
            </div>
            <p>{`${product.description.substring(0, 100)}...`}</p>
            <AddToCartButton data-testid='add-to-cart' onClick={()=> addProductToCart(product)}>
              <img
                src={shoppingBag}
                alt={`Adicionar ${product.name} ao carrinho`}
              />
              COMPRAR
            </AddToCartButton>
          </Card>
        ))}
    </Container>
  );
};

export default ProductsList;
