import IProduct from "./product";

export interface ICartSliceState {
  checkoutValue: number;
  cartItems: IProduct[];
}
