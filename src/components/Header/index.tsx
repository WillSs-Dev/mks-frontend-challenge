import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import cartIcon from '../../images/shopping-cart.svg';
import { selectCheckoutValue } from '../../store/slices/cart.slice';
import { openCart } from '../../store/slices/view.slice';
import { convertNumberToCurrency } from '../../utils/convertCurrency';

import { HeaderContainer, HomeIcon, CartButton } from './style';


const Header = () => {
  const [chechoutValue, setCheckoutValue] = useState('0,0');

  const dispatch = useDispatch();
  const stateCheckoutValue = useSelector(selectCheckoutValue);

  const openCartView = () => {
    dispatch(openCart());
  };

  useEffect(() => {
    setCheckoutValue(convertNumberToCurrency(stateCheckoutValue));
  }, [stateCheckoutValue]);

  return (
    <HeaderContainer>
      <HomeIcon>
        <span>MKS</span>
        <span>Sistemas</span>
      </HomeIcon>
      <CartButton data-testid='cart-button' onClick={openCartView}>
        <img src={cartIcon}/>
        <span>{chechoutValue}</span>
      </CartButton>  
    </HeaderContainer>
  );
};

export default Header;
