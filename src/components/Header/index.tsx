import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import cartIcon from '../../images/shopping-cart.svg';
import { selectCartItems } from '../../store/slices/cart.slice';
import { openCart } from '../../store/slices/view.slice';

import { Container, HomeIcon, CartButton } from './style';


const Header = () => {
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const openCartView = () => {
    dispatch(openCart());
  };

  useEffect(() => {
    setTotalItemsInCart(cartItems.length);
  }, [cartItems]);

  return (
    <Container>
      <HomeIcon>
        <span>MKS</span>
        <span>Sistemas</span>
      </HomeIcon>
      <CartButton data-testid='cart-button' onClick={openCartView}>
        <img src={cartIcon}/>
        <span>{totalItemsInCart}</span>
      </CartButton>  
    </Container>
  );
};

export default Header;
