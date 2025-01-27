import IProduct from "./product";

export interface IProductsListProps {
  products: IProduct[];
}

export interface ICartSidebarProps {
  show: boolean;
  'data-testid': string;
};

export interface ICartButtonProps {
  'data-testid': string;
}

export interface IAddToCartButtonProps {
  product: IProduct;
}

export interface ICardProps {
  'data-testid': string;
}