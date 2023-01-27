import cartIcon from '../../images/shopping-cart.svg';

import { HeaderContainer, HomeIcon, CartButton } from './style';


const Header = () => {
  return (
    <HeaderContainer>
      <HomeIcon>
        <span>MKS</span>
        <span>Sistemas</span>
      </HomeIcon>
      <CartButton>
        <img src={cartIcon} width='18px' />
        <span>0</span>
      </CartButton>  
    </HeaderContainer>
  );
};

export default Header;
