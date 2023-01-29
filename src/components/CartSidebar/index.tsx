import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/slices/cart.slice';
import {
  selectCartSidebarState,
  closeCart,
} from '../../store/slices/view.slice';

import { CartItems, Container, ItemQuantity } from './style';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(selectCartSidebarState);
  const cartProducts = useSelector(selectCartItems);

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
        <button onClick={closeCartView} data-testid='close-button'>
          X
        </button>
      </div>
      <CartItems>
        {cartProducts.length ? (
          cartProducts.map((product, i) => (
            <div key={product.id} data-testid='cart-item'>
              <button data-testid={`remove-${i}-item-from-cart`}>X</button>
              <img src={product.photo} alt={product.name} />
              <div>
                <span>{product.name}</span>
                <ItemQuantity>
                  <span>Qtd:</span>
                  <div>
                    <button data-testid={`decrease-${i}-item-quantity`}>-</button>
                      <span data-testid={`${i}-item-quantity`}>{product.quantity}</span>
                    <button data-testid={`increase-${i}-item-quantity`}>+</button>
                  </div>
                </ItemQuantity>
                <span>{`R$ ${product.price}`}</span>
              </div>
            </div>
          ))
        ) : (
          <span data-testid='empty-cart-message'>Nada no carrinho!</span>
        )}
      </CartItems>
      <div>
        <div data-testid='checkout-total-value'>
          <span>Total</span>
          <span>{`R$ 0`}</span>
        </div>
        <button>Finalizar Compra</button>
      </div>
    </Container>
  );
};

export default CartSidebar;
