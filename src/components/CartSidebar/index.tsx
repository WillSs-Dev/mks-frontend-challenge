import { Container } from "./style";

const CartSidebar = () => {
  return (
    <Container show={false} data-testid='cart-sidebar'>
      <div>
        <h2>Carrinho<br/>de compras</h2>
        <button>X</button>
      </div>
      <button>
        Finalizar Compra
      </button>
    </Container>
  )
}

export default CartSidebar;