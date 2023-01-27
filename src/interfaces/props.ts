import IProduct from "./product";

export interface IProductsListProps {
  products: IProduct[];
}

export interface ICartSidebarProps {
  show: boolean;
};

export interface ICartButtonProps {
  dataTestId: string;
}