import IProduct from "./product";

export interface IProductsListProps {
  products: IProduct[];
}

export interface ICartSidebarProps {
  show: boolean;
  dataTestId: string;
};

export interface ICartButtonProps {
  dataTestId: string;
}

export interface IAddToCartButtonProps {
  dataTestId: string;
}