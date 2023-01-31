import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IProduct from '../../interfaces/product';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectCartItems,
  selectCheckoutValue,
} from '../../store/slices/cart.slice';
import {
  selectCartSidebarState,
  closeCart,
  selectPurchaseFinishedState,
  finishPurchase,
} from '../../store/slices/view.slice';
import { convertNumberToCurrency } from '../../utils/convertCurrency';

import { CartItems, Container, ItemQuantity } from './style';

const CartSidebar = () => {
  const [totalValue, setTotalValue] = useState('R$ 0,00');

  const dispatch = useDispatch();
  const showCart = useSelector(selectCartSidebarState);
  const cartProducts = useSelector(selectCartItems);
  const checkoutValue = useSelector(selectCheckoutValue);
  const isPurchaseFinished = useSelector(selectPurchaseFinishedState);

  useEffect(() => {
    setTotalValue(convertNumberToCurrency(checkoutValue));
  }, [cartProducts, checkoutValue]);

  const closeCartView = () => {
    dispatch(closeCart());
  };

  const removeItemFromCart = (item: IProduct) => {
    dispatch(removeFromCart(item));
  };

  const increase = (item: IProduct) => {
    dispatch(increaseItemQuantity(item));
  };

  const decrease = (item: IProduct) => {
    dispatch(decreaseItemQuantity(item));
  };

  return (
    <Container show={showCart} data-testid='cart-sidebar'>
      <div>
        <h2>
          Carrinho
          <br />
          de compras
        </h2>
        <button onClick={closeCartView} data-testid='close-cart-button'>
          X
        </button>
      </div>
      <CartItems>
        {cartProducts.length ? (
          cartProducts.map((product, i) => (
            <div key={product.id} data-testid='cart-item'>
              <button
                data-testid={`remove-${i}-item-from-cart`}
                onClick={() => removeItemFromCart(product)}>
                X
              </button>
              <img src={product.photo} alt={product.name} />
              <div>
                <span>{product.name}</span>
                <ItemQuantity>
                  <span>Qtd:</span>
                  <div>
                    <button
                      data-testid={`decrease-${i}-item-quantity`}
                      disabled={product.quantity === 1}
                      onClick={() => {
                        decrease(product);
                      }}>
                      -
                    </button>
                    <span data-testid={`${i}-item-quantity`}>
                      {product.quantity}
                    </span>
                    <button
                      data-testid={`increase-${i}-item-quantity`}
                      onClick={() => {
                        increase(product);
                      }}>
                      +
                    </button>
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
          <span>Total:</span>
          <span>{totalValue}</span>
        </div>
        <button
          data-testid='finish-purchase-button'
          disabled={isPurchaseFinished}
          onClick={() => dispatch(finishPurchase())}>
          {isPurchaseFinished ? 'Compra finalizada!' : 'Finalizar Compra'}
        </button>
      </div>
    </Container>
  );
};

export default CartSidebar;
