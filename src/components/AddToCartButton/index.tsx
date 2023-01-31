import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import shoppingBag from '../../images/shopping-bag.svg';
import IProduct from '../../interfaces/product';
import { IAddToCartButtonProps } from '../../interfaces/props';
import { addToCart, selectCartItems } from '../../store/slices/cart.slice';
import { convertCurrencyToNumber } from '../../utils/convertCurrency';

import { Container } from './style';

const AddToCartButton = ({ product }: IAddToCartButtonProps) => {
  const [productIsInCart, setProductIsInCart] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    const productAlreadyInCart = cartItems.find(
      (item) => item.id === product.id
    );
    if (productAlreadyInCart) {
      setProductIsInCart(true);
    }
  }, [cartItems, product.id])

  const addProductToCart = (product: IProduct) => {
    const newProduct = {
      ...product,
      price: convertCurrencyToNumber(product.price as string),
      quantity: 1,
    };
    dispatch(addToCart(newProduct));
  };

  return (
    <Container
      data-testid='add-to-cart'
      disabled={productIsInCart}
      onClick={() => addProductToCart(product)}>
      {!productIsInCart ? (
        <>
          <img
            src={shoppingBag}
            alt={`Adicionar ${product.name} ao carrinho`}
          />
          COMPRAR
        </>
      ) : <span>Produto já adicionado ao carrinho!</span>}
    </Container>
  );
};

export default AddToCartButton;
