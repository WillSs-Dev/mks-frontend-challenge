import { useDispatch, useSelector } from 'react-redux';

import { selectCartSidebarState, closeCart } from '../../store/slices/view.slice';


import { Container } from './style';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(selectCartSidebarState)
  
  const closeCartView = () => {
    dispatch(closeCart());
  };

  return (
    <Container show={showCart} data-testid='cart-sidebar'>
      <div>
        <h2>
          Carrinho
          <br />
          de compras
        </h2>
        <button onClick={closeCartView} data-testid='close-button'>X</button>
      </div>
      <div>
        <div>
        <span>Total</span>
        <span>{`R$`}</span>
        </div>
        <button>Finalizar Compra</button>
      </div>
    </Container>
  );
};

export default CartSidebar;
