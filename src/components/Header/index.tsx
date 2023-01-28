import { useDispatch } from 'react-redux';

import cartIcon from '../../images/shopping-cart.svg';
import { openCart } from '../../store/slices/view.slice';

import { HeaderContainer, HomeIcon, CartButton } from './style';


const Header = () => {
  const dispatch = useDispatch();
  const openCartView = () => {
    dispatch(openCart());
  };

  return (
    <HeaderContainer>
      <HomeIcon>
        <span>MKS</span>
        <span>Sistemas</span>
      </HomeIcon>
      <CartButton data-testid='cart-button' onClick={openCartView}>
        <img src={cartIcon}/>
        <span>0</span>
      </CartButton>  
    </HeaderContainer>
  );
};

export default Header;
