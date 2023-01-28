import IProduct from "./product";

export interface ICartSliceState {
  checkoutValue: number;
  cartItems: IProduct[];
}

export interface IViewSliceState {
  isCartOpen: boolean;
}
